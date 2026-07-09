import { NextRequest, NextResponse } from "next/server";
import { ensureSchema, getSql } from "@/lib/db";

export const runtime = "nodejs";

function normalizePhone(raw: string) {
  return raw.replace(/[^\d+]/g, "");
}

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

  const { nome, telefone } = (body ?? {}) as {
    nome?: string;
    telefone?: string;
  };

  const nomeTrim = nome?.trim() ?? "";
  const telefoneTrim = telefone?.trim() ?? "";

  if (nomeTrim.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Indica o nome do encarregado." },
      { status: 400 }
    );
  }

  const phoneDigits = normalizePhone(telefoneTrim).replace("+", "");
  if (phoneDigits.length < 9) {
    return NextResponse.json(
      { ok: false, error: "Indica um número de telefone válido." },
      { status: 400 }
    );
  }

  try {
    await ensureSchema();
    const sql = getSql();
    await sql`
      INSERT INTO rsvps (nome_encarregado, telefone)
      VALUES (${nomeTrim}, ${normalizePhone(telefoneTrim)})
    `;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro ao gravar confirmação:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Não foi possível gravar a confirmação agora. Tenta novamente em instantes.",
      },
      { status: 500 }
    );
  }
}
