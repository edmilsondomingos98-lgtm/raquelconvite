-- A aplicação cria esta tabela automaticamente na primeira confirmação
-- recebida (ver lib/db.ts -> ensureSchema). Este ficheiro fica aqui apenas
-- como referência, caso prefiras criar a tabela manualmente no separador
-- "SQL Editor" da Neon (acessível a partir de Storage no teu projeto Vercel).

CREATE TABLE IF NOT EXISTS rsvps (
  id SERIAL PRIMARY KEY,
  nome_encarregado TEXT NOT NULL,
  telefone TEXT NOT NULL,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT now()
);
