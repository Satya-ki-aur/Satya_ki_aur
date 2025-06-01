import { createClient } from '@supabase/supabase-js'

// Try import.meta.env first (standard for Vite/Astro client-side)
// Fallback to process.env (available in Node.js build environment)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key are required. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in Vercel.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 