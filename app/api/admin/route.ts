import { NextRequest, NextResponse } from "next/server";
import { ensureSchema, getSql } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Pedido inválido." },
      { status: 400 }
    );
  }

  const { senha } = (body ?? {}) as { senha?: string };
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "ADMIN_PASSWORD não está configurada no projeto. Define-a nas variáveis de ambiente do Vercel.",
      },
      { status: 500 }
    );
  }

  if (senha !== adminPassword) {
    return NextResponse.json(
      { ok: false, error: "Senha incorreta." },
      { status: 401 }
    );
  }

  try {
    await ensureSchema();
    const sql = getSql();
    const rows = await sql`
      SELECT id, nome_convidado, telefone, criado_em
      FROM rsvps
      ORDER BY criado_em DESC
    `;
    return NextResponse.json({ ok: true, rsvps: rows });
  } catch (err) {
    console.error("Erro ao ler confirmações:", err);
    return NextResponse.json(
      { ok: false, error: "Não foi possível carregar a lista agora." },
      { status: 500 }
    );
  }
}
