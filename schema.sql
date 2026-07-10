-- A aplicação cria e migra esta tabela automaticamente (ver lib/db.ts ->
-- ensureSchema). Este ficheiro fica aqui apenas como referência.

CREATE TABLE IF NOT EXISTS rsvps (
  id SERIAL PRIMARY KEY,
  nome_convidado TEXT NOT NULL,
  telefone TEXT NOT NULL,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Se já tinhas o site publicado antes desta atualização, a coluna chamava-se
-- nome_encarregado. A app migra isto sozinha na primeira visita depois do
-- deploy (tenta renomear a coluna e ignora o erro se já não existir). Não
-- precisas de correr nada manualmente, mas se preferires fazê-lo à mão no
-- SQL Editor da Neon, o comando é:
-- ALTER TABLE rsvps RENAME COLUMN nome_encarregado TO nome_convidado;
