import { Starfish } from "./Botanicals";

export default function ProgressDots({
  total,
  current,
}: {
  total: number;
  current: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2.5" role="list" aria-label="Progresso do convite">
      {Array.from({ length: total }).map((_, i) => {
        const done = i <= current;
        return (
          <Starfish
            key={i}
            className={`w-3.5 h-3.5 transition-all duration-300 ${
              done ? "text-magenta scale-110" : "text-ink/15"
            }`}
          />
        );
      })}
    </div>
  );
}
