import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dwklxmytvveavzrimcvu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3a2x4bXl0dnZlYXZ6cmltY3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTA3NDAsImV4cCI6MjA3NTQ4Njc0MH0.4mg5isuTCLeLHL5AU1-t_YlRncvlPpcZtXOirbRh0yo';

export const supabase = createClient(supabaseUrl, supabaseKey);
