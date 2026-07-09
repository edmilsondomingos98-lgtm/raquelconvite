import { neon } from "@neondatabase/serverless";

/**
 * Returns a tagged-template SQL client. Reads the connection string lazily
 * (inside the function, not at module load time) so the app can still be
 * built and deployed even before DATABASE_URL is configured in Vercel.
 */
export function getSql() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL não está configurada. Adiciona uma base de dados Postgres (Neon) no separador Storage do teu projeto Vercel, ou define DATABASE_URL no .env local."
    );
  }

  return neon(connectionString);
}

export async function ensureSchema() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS rsvps (
      id SERIAL PRIMARY KEY,
      nome_encarregado TEXT NOT NULL,
      telefone TEXT NOT NULL,
      criado_em TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
}
