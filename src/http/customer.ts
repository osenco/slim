import supabase from "./supabase";

export default function () {

    async function find(id: string) {
        const { data: customer, error } = await supabase
            .from('customers')
            .select(`*`)
            .eq('id', id)
            .single()

        return { error: error }
    }

    async function fetch({page = 1}) {
        const { data: customers, error } = await supabase
            .from('customers')
            .select('*')
            .range(page * 10 - 10, page * 10 - 1)

        if (customers) {
            return {
                data: customers,
                page: page
            }
        }

        return error
    }

    async function create(payload: any) {
        const { data: customer, error } = await supabase
            .from('customers')
            .insert([
                payload
            ])

        if (customer) {
            return customer
        }

        return error
    }

    async function patch(payload: any) {
        return await supabase
            .from('customers')
            .update(payload)
            .eq('id', payload.id)
    }

    async function destroy(id: string) {
        return await supabase
            .from('customers')
            .delete()
            .eq('id', id)
    }

    async function filter(filters: any) {
        return await supabase
            .from('customers')
            .select('*')
            .eq(filters[0], filters[1])
    }

    async function search(filters: any) {
        return await supabase
            .from('customers')
            .select('*')
            .ilike(filters[0], filters[1])
    }

    async function filterByName(name: string) {
        return await supabase
            .from('customers')
            .select('*')
            .ilike('first_name', name)
            .ilike('last_name', name)
    }

    return { find, fetch, create, patch, destroy, filter, search, filterByName }
}