"use client";

import { useState } from "react";
import { PartyPopper, PhoneCall } from "lucide-react";
import { ShellBadge } from "../Botanicals";
import { PARTY } from "@/lib/party";

type Estado = "form" | "enviando" | "sucesso" | "erro";

export default function Step5Confirmacao() {
  const [nomeConvidado, setNomeConvidado] = useState("");
  const [telefone, setTelefone] = useState("");
  const [estado, setEstado] = useState<Estado>("form");
  const [mensagemErro, setMensagemErro] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEstado("enviando");
    setMensagemErro("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nomeConvidado, telefone }),
      });
      const data = await res.json();

      if (!data.ok) {
        setMensagemErro(data.error ?? "Algo correu mal. Tenta novamente.");
        setEstado("erro");
        return;
      }
      setEstado("sucesso");
    } catch {
      setMensagemErro("Sem ligação à internet neste momento.");
      setEstado("erro");
    }
  }

  if (estado === "sucesso") {
    return (
      <div className="flex flex-col items-center text-center gap-3">
        <PartyPopper className="w-10 h-10 text-magenta animate-drift" strokeWidth={1.75} />
        <h2 className="font-display text-3xl font-bold text-ink">
          Presença confirmada!
        </h2>
        <p className="text-ink/70 max-w-[32ch] leading-relaxed">
          Obrigada por confirmares, {nomeConvidado.split(" ")[0]}. Um
          encarregado da {PARTY.primeiroNome} pode entrar em contacto pelo
          número que deixaste para combinar os detalhes. Até{" "}
          {PARTY.diaSemana.toLowerCase()}! 🌺
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center gap-4 w-full">
      <p className="uppercase tracking-[0.3em] text-xs text-palm/70 font-semibold">
        Última etapa
      </p>

      <ShellBadge className="w-14 h-12" />

      <h2 className="font-display text-3xl font-bold text-ink">
        Confirma a tua presença
      </h2>

      <p className="text-ink/70 max-w-[32ch] leading-relaxed -mt-1">
        Como é uma festa de menores de idade, pedimos o nome do(a) convidado(a)
        e o contacto do encarregado, para que os adultos combinem tudo entre
        si.
      </p>

      <form onSubmit={onSubmit} className="w-full flex flex-col gap-3 mt-1 text-left">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-ink/60 uppercase tracking-wide">
            Nome do(a) convidado(a)
          </span>
          <input
            required
            minLength={2}
            value={nomeConvidado}
            onChange={(e) => setNomeConvidado(e.target.value)}
            placeholder="Quem vai à festa da Raquel"
            className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/30 focus-ring outline-none"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-ink/60 uppercase tracking-wide">
            Telefone do encarregado (WhatsApp)
          </span>
          <div className="relative">
            <PhoneCall className="w-4 h-4 text-ink/30 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              required
              type="tel"
              inputMode="tel"
              minLength={9}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="9XX XXX XXX"
              className="w-full rounded-xl border border-ink/15 bg-white pl-11 pr-4 py-3 text-ink placeholder:text-ink/30 focus-ring outline-none"
            />
          </div>
        </label>

        {estado === "erro" && (
          <p className="text-sm text-magenta bg-magenta/10 border border-magenta/20 rounded-xl px-3 py-2">
            {mensagemErro}
          </p>
        )}

        <button
          type="submit"
          disabled={estado === "enviando"}
          className="mt-2 rounded-full bg-magenta hover:bg-magenta/90 transition text-white font-semibold py-3 disabled:opacity-60 focus-ring"
        >
          {estado === "enviando" ? "A confirmar..." : "Confirmar presença"}
        </button>
      </form>
    </div>
  );
}
