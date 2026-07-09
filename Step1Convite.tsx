import { HibiscusBloom } from "../Botanicals";
import { PARTY } from "@/lib/party";

export default function Step1Convite() {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <HibiscusBloom className="w-20 h-20 animate-bloom" />

      <p className="font-body uppercase tracking-[0.3em] text-xs text-palm/70 font-semibold mt-1">
        Está convidado(a) para os
      </p>

      <h1 className="font-display italic text-6xl sm:text-7xl leading-none text-magenta drop-shadow-sm">
        {PARTY.idade}
      </h1>

      <p className="font-script text-4xl sm:text-5xl text-coral -mt-2">
        anos da
      </p>

      <h2 className="font-display text-4xl sm:text-5xl text-ink font-bold">
        {PARTY.nome}
      </h2>

      <p className="text-ink/70 max-w-[26ch] mt-2 leading-relaxed">
        Um domingo à tarde em tons tropicais, boa música e muita festa.
        Percorre as próximas etapas para descobrires tudo — e não te esqueças
        de confirmar presença no fim. 🌺
      </p>
    </div>
  );
}
