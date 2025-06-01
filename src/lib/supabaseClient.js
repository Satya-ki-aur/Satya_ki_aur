import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qcxzvvbawohehclvfvmp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjeHp2dmJhd29oZWhjbHZmdm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3Njk4MTksImV4cCI6MjA2NDM0NTgxOX0.pgiC8UNrMz3UYoLN1iaRKJuUHSkangrEy1zNBcerGIQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 