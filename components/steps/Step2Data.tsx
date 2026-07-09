import { CalendarHeart, Clock } from "lucide-react";
import { PARTY } from "@/lib/party";

export default function Step2Data() {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <p className="uppercase tracking-[0.3em] text-xs text-palm/70 font-semibold">
        Guarda a data
      </p>

      <div className="flex flex-col items-center gap-1">
        <CalendarHeart className="w-8 h-8 text-magenta mb-1" strokeWidth={1.75} />
        <p className="font-script text-3xl text-coral">{PARTY.diaSemana}</p>
        <h2 className="font-display text-5xl sm:text-6xl font-bold text-ink">
          {PARTY.data}
        </h2>
      </div>

      <div className="w-16 h-px bg-ink/15" />

      <div className="flex flex-col items-center gap-1">
        <Clock className="w-7 h-7 text-magenta mb-1" strokeWidth={1.75} />
        <p className="text-ink/60 text-sm">Início às</p>
        <p className="font-display text-3xl font-semibold text-ink">
          {PARTY.horario}h
        </p>
      </div>

      <p className="text-ink/70 max-w-[28ch] leading-relaxed">
        Chega um pouquinho antes para não perderes a abertura da festa da
        Raquel!
      </p>
    </div>
  );
}
