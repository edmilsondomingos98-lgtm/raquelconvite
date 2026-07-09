"use client";

const PETALS = [
  { left: "6%", delay: "0s", duration: "13s", size: 14, color: "#FFB199" },
  { left: "18%", delay: "3s", duration: "17s", size: 10, color: "#F5A524" },
  { left: "32%", delay: "1.5s", duration: "15s", size: 12, color: "#FF8FA3" },
  { left: "52%", delay: "5s", duration: "19s", size: 9, color: "#FFD9C7" },
  { left: "68%", delay: "2s", duration: "14s", size: 13, color: "#E63A73" },
  { left: "82%", delay: "4.5s", duration: "18s", size: 11, color: "#F5A524" },
  { left: "92%", delay: "0.8s", duration: "16s", size: 10, color: "#FF8FA3" },
];

export default function FloatingPetals() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 rounded-[60%_40%_60%_40%] animate-petalFall"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.8,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: 0.55,
          }}
        />
      ))}
    </div>
  );
}
