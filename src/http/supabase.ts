import { createClient } from '@supabase/supabase-js'

const supabaseUrl = String(import.meta.env.VITE_SUPABASE_URL)
const supabaseKey = String(import.meta.env.VITE_SUPABASE_KEY)

export default createClient(supabaseUrl, supabaseKey);