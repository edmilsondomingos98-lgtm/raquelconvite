"use client";

import { useState } from "react";

type Rsvp = {
  id: number;
  nome_encarregado: string;
  telefone: string;
  criado_em: string;
};

export default function AdminPage() {
  const [senha, setSenha] = useState("");
  const [rsvps, setRsvps] = useState<Rsvp[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function carregar(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senha }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.error ?? "Erro ao carregar.");
        setRsvps(null);
      } else {
        setRsvps(data.rsvps);
      }
    } catch {
      setError("Erro de ligação. Tenta novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-palmDeep text-cream font-body px-6 py-12">
      <div className="mx-auto max-w-xl">
        <h1 className="font-display text-3xl font-semibold mb-1">
          Confirmações — Festa da Raquel
        </h1>
        <p className="text-cream/70 mb-8 text-sm">
          Área privada dos organizadores. Introduz a senha para ver quem já
          confirmou presença.
        </p>

        <form onSubmit={carregar} className="flex gap-2 mb-8">
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha de administrador"
            className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-cream placeholder:text-cream/40 focus-ring outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-mango text-ink font-semibold px-5 py-3 disabled:opacity-60 focus-ring"
          >
            {loading ? "..." : "Ver"}
          </button>
        </form>

        {error && (
          <p className="text-coral bg-coral/10 border border-coral/30 rounded-xl px-4 py-3 mb-6 text-sm">
            {error}
          </p>
        )}

        {rsvps && (
          <div className="rounded-2xl overflow-hidden border border-white/15">
            <div className="bg-white/5 px-4 py-3 text-sm text-cream/70">
              {rsvps.length}{" "}
              {rsvps.length === 1
                ? "confirmação recebida"
                : "confirmações recebidas"}
            </div>
            <ul className="divide-y divide-white/10">
              {rsvps.map((r) => (
                <li
                  key={r.id}
                  className="px-4 py-3 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-medium">{r.nome_encarregado}</p>
                    <p className="text-cream/60 text-sm">{r.telefone}</p>
                  </div>
                  <a
                    href={`https://wa.me/${r.telefone.replace("+", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs rounded-full bg-palm px-3 py-1.5 whitespace-nowrap hover:bg-palm/80 transition"
                  >
                    WhatsApp
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
