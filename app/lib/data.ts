import { sql } from "@vercel/postgres";

export async function getUserByEmail(email: string) {
  const { rows } = await sql`
    SELECT id, email, password_hash AS "passwordHash"
    FROM users
    WHERE email = ${email}
  `;
  return rows[0] ?? null;
}
