import { createClient } from '@supabase/supabase-js'

// Use environment variables that will be set in Vercel
const supabaseUrl = import.meta.env.ASTRO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.ASTRO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 