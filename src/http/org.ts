import supabase from "./supabase";

export default function () {

    async function find(id: string) {
        const { data: org, error } = await supabase
            .from('orgs')
            .select(`*`)
            .eq('id', id)
            .single()

        if (org) {
            const { data: user } = await supabase
                .from('users')
                .select(`*`)
                .eq('id', org['user_id'])
                .single()

            return {
                data: ({ ...org, ...{ user: user } })
            }
        }

        return { error: error }
    }

    async function fetch({page = 1}) {
        const { data: orgs, error } = await supabase
            .from('orgs')
            .select('*')
            .range(page * 10 - 10, page * 10 - 1)

        if (orgs) {
            return {
                data: orgs,
                page: page
            }
        }

        return error
    }

    async function create(payload: any) {
        const { data: org, error } = await supabase
            .from('orgs')
            .insert([
                payload
            ])

        if (org) {
            return org
        }

        return error
    }

    async function patch(payload: any) {
        return await supabase
            .from('orgs')
            .update(payload)
            .eq('id', payload.id)
    }

    async function destroy(id: string) {
        return await supabase
            .from('orgs')
            .delete()
            .eq('id', id)
    }

    async function filter(filters: any) {
        return await supabase
            .from('orgs')
            .select('*')
            .eq(filters[0], filters[1])
    }

    async function search(filters: any) {
        return await supabase
            .from('orgs')
            .select('*')
            .ilike(filters[0], filters[1])
    }

    async function filterByName(name: string) {
        return await supabase
            .from('orgs')
            .select('*')
            .ilike('first_name', name)
            .ilike('last_name', name)
    }

    return { find, fetch, create, patch, destroy, filter, search, filterByName }
}