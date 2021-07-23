import { Provider } from "@supabase/supabase-js";
import supabase from "./supabase";
import storage from "../store/storage"
import store from "../store"

export default function () {
    let current: any;

    const u = supabase.auth.user();
    if (u) {
        find(u.id).then(({ data }) => {
            current = ({ ...u, ...data })
        })
    }

    async function find(id: string) {
        const { data: user, error } = await supabase
            .from('users')
            .select(`*`)
            .eq('id', id)
            .single()

        if (user) {
            const { data: org } = await supabase
                .from('orgs')
                .select(`*`)
                .eq('id', user['org_id'])
                .single()

            return {
                data: ({ ...user, ...{ org: org } })
            }
        }

        return { error: error }
    }

    async function fetch( {page = 1} ) {
        const { data: users, error } = await supabase
            .from('users')
            .select('*')
            .range(page * 10 - 10, page * 10 - 1)

        if (users) {
            return {
                data: users,
                page: page
            }
        }

        return error
    }

    async function create(payload: any) {
        const { data: user, error } = await supabase
            .from('users')
            .insert([
                payload
            ])

        if (user) {
            return user
        }

        return error
    }

    async function patch(payload: any) {
        return await supabase
            .from('users')
            .update(payload)
            .eq('id', payload.id)
    }

    async function destroy(id: string) {
        return await supabase
            .from('users')
            .delete()
            .eq('id', id)
    }

    async function register(payload: any) {
        const { user, error } = await supabase.auth.signUp(payload)
        const token = null

        if (user) {
            delete payload.username
            delete payload.password

            const { data, error } = await supabase.from('orgs').insert({
                name: `${payload.first_name}'s Company`,
                email: payload.email,
                phone: payload.phone,
                user_id: user.id
            })
            payload.id = user.id

            if (data) {
                payload.org_id = (data as any)['id']
            }

            patch(payload)

            return ({ user, token })
        } else {
            return ({ error, token })
        }
    }

    async function login(payload: any) {
        const { session, user, error } = await supabase.auth.signIn({ email: payload.username, password: payload.password })

        if (session && user) {
            storage().setItem('token', session?.access_token)
            find(user.id).then(({ data }) => {
                if (data) {
                    storage().setObject('user', { ...data, ...{ name: `${data.first_name} ${data.last_name}` } })
                }
            })

            return ({ user })
        }

        if (error) {
            return ({ error })
        }
    }

    async function oauth(provider: Provider) {
        const { session, user, error } = await supabase.auth.signIn({ provider })

        if (session && user) {
            storage().setItem('token', session?.access_token)
            find(user.id).then(({ data }) => {
                if (data) {
                    storage().setObject('user', { ...data, ...{ name: `${data.first_name} ${data.last_name}` } })
                }
            })

            return ({ user })
        }

        if (error) {
            return ({ error })
        }
    }

    async function update(payload: any) {
        const { user, error } = await supabase.auth.update(payload)

        if (user) {
            find(user.id).then(({ data }) => {
                if (data) {
                    storage().setObject('user', { ...data, ...{ name: `${data.first_name} ${data.last_name}` } })
                }
            })
            return ({ user })
        } else {
            return ({ error })
        }
    }

    async function recover(email: string) {
        return await supabase.auth.api.resetPasswordForEmail(email)
    }

    async function logout(redirect = true) {
        return supabase.auth.signOut().then(({ error }) => {
            store.commit("LOGOUT");
            storage().remove("user");
            storage().remove("token");

            if (redirect) {
                location.replace('/auth')
            }

            if (error) {
                return ({ error })
            }
        })
    }

    async function invite(email: string) {
        return await supabase.auth.api.inviteUserByEmail(
            email
        )
    }

    return { login, oauth, register, update, recover, current, logout, invite, find, fetch, create, patch, destroy }
}