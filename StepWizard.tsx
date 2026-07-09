"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProgressDots from "./ProgressDots";
import FloatingPetals from "./FloatingPetals";
import { HibiscusBloom, PalmFrond, Starfish, WaveDivider } from "./Botanicals";
import Step1Convite from "./steps/Step1Convite";
import Step2Data from "./steps/Step2Data";
import Step3DressCode from "./steps/Step3DressCode";
import Step4Localizacao from "./steps/Step4Localizacao";
import Step5Confirmacao from "./steps/Step5Confirmacao";
import { PARTY } from "@/lib/party";

const STEPS = [
  { label: "O convite", Component: Step1Convite },
  { label: "Data & hora", Component: Step2Data },
  { label: "Dress code", Component: Step3DressCode },
  { label: "Localização", Component: Step4Localizacao },
  { label: "Confirmar presença", Component: Step5Confirmacao },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function StepWizard() {
  const [[step, dir], setStep] = useState<[number, number]>([0, 0]);

  const isFirst = step === 0;
  const isLast = step === STEPS.length - 1;
  const { Component } = STEPS[step];

  function go(nextStep: number) {
    if (nextStep < 0 || nextStep >= STEPS.length) return;
    setStep([nextStep, nextStep > step ? 1 : -1]);
  }

  return (
    <main className="relative min-h-[100dvh] bg-dusk flex flex-col items-center justify-center px-5 py-10 overflow-hidden">
      <FloatingPetals />

      {/* Corner botanicals, echoing a tropical doorway without copying any reference art */}
      <HibiscusBloom className="hidden sm:block absolute -top-6 -left-8 w-40 h-40 opacity-90 drop-shadow-lg" />
      <HibiscusBloom className="hidden sm:block absolute -top-10 -right-10 w-48 h-48 opacity-90 drop-shadow-lg rotate-12" />
      <PalmFrond className="hidden md:block absolute bottom-0 -left-4 w-36 opacity-80" />
      <PalmFrond className="hidden md:block absolute bottom-0 -right-4 w-36 opacity-80 -scale-x-100" />
      <Starfish className="hidden sm:block absolute top-1/3 left-6 w-6 h-6 text-shell/80 animate-drift" />
      <Starfish className="hidden sm:block absolute bottom-24 right-8 w-5 h-5 text-cream/70 animate-drift" />

      <div className="relative z-10 w-full max-w-md">
        {/* eyebrow */}
        <p className="text-center text-cream/90 text-xs font-semibold tracking-[0.35em] uppercase mb-4">
          Etapa {step + 1} de {STEPS.length} · {STEPS[step].label}
        </p>

        <div
          className="relative bg-cream shadow-card px-7 pt-14 pb-8 sm:px-9"
          style={{
            borderRadius:
              "50% 50% 22px 22px / 84px 84px 22px 22px",
          }}
        >
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-magenta/40">
            <WaveDivider className="w-16 h-4 rotate-180" />
          </div>

          <div className="min-h-[320px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={step}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <Component />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-col items-center gap-5">
            <ProgressDots total={STEPS.length} current={step} />

            <div className="flex items-center gap-3 w-full">
              {!isFirst && (
                <button
                  onClick={() => go(step - 1)}
                  className="flex items-center justify-center gap-1 rounded-full border border-ink/15 text-ink/70 font-medium px-4 py-2.5 hover:bg-ink/5 transition focus-ring"
                  aria-label="Etapa anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </button>
              )}

              {!isLast && (
                <button
                  onClick={() => go(step + 1)}
                  className="flex-1 flex items-center justify-center gap-1 rounded-full bg-magenta hover:bg-magenta/90 transition text-white font-semibold px-4 py-2.5 focus-ring"
                >
                  Continuar
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-cream/70 text-xs mt-6">
          Com carinho, {PARTY.nome} 🌺
        </p>
      </div>
    </main>
  );
}
