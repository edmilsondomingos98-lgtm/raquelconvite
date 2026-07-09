import { Shirt } from "lucide-react";
import { PARTY } from "@/lib/party";

const paleta = [
  { cor: "#FFFFFF", nome: "Branco" },
  { cor: "#F3E4C8", nome: "Creme" },
  { cor: "#F5A524", nome: "Mango" },
  { cor: "#FF8FA3", nome: "Coral suave" },
];

export default function Step3DressCode() {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <p className="uppercase tracking-[0.3em] text-xs text-palm/70 font-semibold">
        Traje da festa
      </p>

      <Shirt className="w-9 h-9 text-magenta" strokeWidth={1.75} />

      <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight max-w-[16ch]">
        {PARTY.dressCode}
      </h2>

      <div className="flex items-center gap-3 mt-1">
        {paleta.map((p) => (
          <span key={p.nome} className="flex flex-col items-center gap-1.5">
            <span
              className="w-8 h-8 rounded-full border border-ink/10 shadow-sm"
              style={{ backgroundColor: p.cor }}
            />
            <span className="text-[11px] text-ink/50">{p.nome}</span>
          </span>
        ))}
      </div>

      <p className="text-ink/70 max-w-[30ch] leading-relaxed mt-1">
        Aposta em tecidos leves e tons claros — flores, linho e uma pitada de
        brilho tropical são super bem-vindos. 🌸
      </p>
    </div>
  );
}
