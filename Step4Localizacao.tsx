import { MapPin, ExternalLink, Phone } from "lucide-react";
import { PARTY } from "@/lib/party";

export default function Step4Localizacao() {
  return (
    <div className="flex flex-col items-center text-center gap-4 w-full">
      <p className="uppercase tracking-[0.3em] text-xs text-palm/70 font-semibold">
        Onde é a festa
      </p>

      <MapPin className="w-8 h-8 text-magenta" strokeWidth={1.75} />

      <h2 className="font-display text-3xl font-bold text-ink">
        {PARTY.local}
      </h2>

      <p className="text-ink/70 max-w-[32ch] leading-relaxed -mt-1">
        {PARTY.localDetalhe}
      </p>

      <div className="w-full rounded-2xl overflow-hidden border border-ink/10 shadow-sm mt-1">
        <iframe
          title={`Mapa de ${PARTY.local}`}
          src={`https://www.google.com/maps?q=${PARTY.mapsEmbedQuery}&output=embed`}
          width="100%"
          height="220"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a
        href={PARTY.mapsLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-palm hover:bg-palm/90 transition rounded-full px-5 py-2.5 mt-1 focus-ring"
      >
        Abrir no Google Maps
        <ExternalLink className="w-4 h-4" />
      </a>

      <div className="w-16 h-px bg-ink/15 mt-2" />

      <div className="w-full">
        <p className="text-xs font-semibold text-ink/50 uppercase tracking-wide mb-2">
          Mais informações
        </p>
        <div className="flex flex-col gap-2">
          {PARTY.contactos.map((c) => (
            <a
              key={c.telefone}
              href={`https://wa.me/244${c.telefone.replace(/\s/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/60 px-4 py-2.5 text-left hover:bg-white transition"
            >
              <Phone className="w-4 h-4 text-magenta shrink-0" strokeWidth={1.75} />
              <span className="flex-1">
                <span className="font-medium text-ink">{c.nome}</span>
                <span className="text-ink/50 text-sm"> · {c.papel}</span>
              </span>
              <span className="text-ink/60 text-sm whitespace-nowrap">
                {c.telefone}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
