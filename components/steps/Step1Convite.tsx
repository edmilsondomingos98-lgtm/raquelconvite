import { HibiscusBloom } from "../Botanicals";
import { PARTY } from "@/lib/party";

export default function Step1Convite() {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <p className="uppercase tracking-[0.3em] text-xs text-palm/70 font-semibold">
        Está convidado(a) para os
      </p>

      <HibiscusBloom className="w-12 h-12 animate-bloom my-1" />

      <div className="flex flex-col items-center gap-0.5">
        <h1 className="font-display text-6xl sm:text-7xl font-black text-ink leading-none">
          {PARTY.idade}
        </h1>
        <p className="font-script text-3xl text-coral -mt-1">anos da</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
          {PARTY.nome}
        </h2>
      </div>

      <p className="text-ink/70 max-w-[28ch] mt-2 leading-relaxed">
        Vem fazer parte desta nova fase da Raquel e ajuda a tornar este dia
        inesquecível. Percorre as próximas etapas e, no fim, confirma a tua
        presença. 🌺
      </p>
    </div>
  );
}
