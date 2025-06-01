import { createClient } from '@supabase/supabase-js'

console.log('Attempting to read VITE_SUPABASE_URL (import.meta.env):', import.meta.env.VITE_SUPABASE_URL);
console.log('Attempting to read VITE_SUPABASE_URL (process.env):', process.env.VITE_SUPABASE_URL);
console.log('Attempting to read VITE_SUPABASE_ANON_KEY (import.meta.env):', import.meta.env.VITE_SUPABASE_ANON_KEY);
console.log('Attempting to read VITE_SUPABASE_ANON_KEY (process.env):', process.env.VITE_SUPABASE_ANON_KEY);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Failed to find Supabase URL or Anon Key from environment variables.');
  throw new Error("Supabase URL and Anon Key are required. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in Vercel.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 