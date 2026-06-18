import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl = "https://atgntcbuikxndtnbelvp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0Z250Y2J1aWt4bmR0bmJlbHZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MDYyNTUsImV4cCI6MjA5NzI4MjI1NX0.4EflPOuZxkjw9ovNzqdRT1eB9ky533heCr_Pkat7Xis";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type ContactSubmission =
  Database["public"]["Tables"]["contact_submissions"]["Insert"];

export async function submitContactForm(data: ContactSubmission) {
  const { error } = await supabase.from("contact_submissions").insert([data]);

  if (error) throw error;
}