// Original, hand-authored decorative illustrations in a tropical / coastal
// spirit for Raquel's 16th birthday invite. Nothing here reproduces any
// reference photo or artwork — shapes are simple geometric petals, fronds
// and shell forms built from scratch in SVG.

export function HibiscusBloom({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g>
        {[0, 72, 144, 216, 288].map((rot) => (
          <ellipse
            key={rot}
            cx="100"
            cy="58"
            rx="34"
            ry="50"
            fill="url(#petalGrad)"
            opacity="0.95"
            transform={`rotate(${rot} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="14" fill="#F5A524" />
        <circle cx="100" cy="100" r="14" fill="url(#coreGrad)" />
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx={100 + 20 * Math.cos((i * Math.PI) / 3)}
            cy={100 + 20 * Math.sin((i * Math.PI) / 3)}
            r="2.6"
            fill="#7A1230"
          />
        ))}
      </g>
      <defs>
        <linearGradient id="petalGrad" x1="100" y1="8" x2="100" y2="108" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8FA3" />
          <stop offset="1" stopColor="#E63A73" />
        </linearGradient>
        <radialGradient id="coreGrad" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#FFD166" />
          <stop offset="1" stopColor="#F5A524" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function PalmFrond({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 260"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 250 C 40 170, 70 90, 120 20"
        stroke="#0E3E30"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {[...Array(7)].map((_, i) => {
        const t = i / 6;
        const x = 20 + t * 100;
        const y = 250 - t * 230;
        const len = 46 - t * 18;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${-40 + t * 55})`}>
            <path
              d={`M0 0 Q ${len / 2} -6 ${len} 2 Q ${len / 2} 8 0 0 Z`}
              fill="#155843"
              opacity={0.9 - t * 0.15}
            />
          </g>
        );
      })}
    </svg>
  );
}

export function Starfish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M30 2 L36 22 L57 22 L40 34 L46 55 L30 42 L14 55 L20 34 L3 22 L24 22 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ShellBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 70"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M40 6 C18 6 6 30 6 48 C6 58 20 62 40 62 C60 62 74 58 74 48 C74 30 62 6 40 6 Z"
        fill="url(#shellGrad)"
      />
      {[...Array(6)].map((_, i) => (
        <line
          key={i}
          x1="40"
          y1="14"
          x2={16 + i * 9.6}
          y2="58"
          stroke="#FFF3E6"
          strokeWidth="1.6"
          opacity="0.7"
        />
      ))}
      <defs>
        <linearGradient id="shellGrad" x1="40" y1="6" x2="40" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB199" />
          <stop offset="1" stopColor="#E63A73" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 40"
      className={className}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 20 Q 25 0 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20 V40 H0 Z"
        fill="currentColor"
      />
    </svg>
  );
}
