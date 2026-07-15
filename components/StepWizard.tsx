"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProgressDots from "./ProgressDots";
import FloatingPetals from "./FloatingPetals";
import { HibiscusBloom, Starfish, WaveDivider } from "./Botanicals";
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

      {/* Jardim de flores, em grupos orgânicos, não uma por canto 🌺 */}
      {/* grupo superior esquerdo */}
      <HibiscusBloom className="absolute -top-3 -left-3 w-16 h-16 sm:-top-6 sm:-left-8 sm:w-40 sm:h-40 opacity-90 drop-shadow-lg rotate-[-10deg]" />
      <HibiscusBloom className="absolute top-6 left-[6%] w-8 h-8 sm:top-10 sm:left-[8%] sm:w-20 sm:h-20 opacity-75 rotate-[22deg]" />
      <HibiscusBloom className="absolute top-16 left-[2%] w-5 h-5 sm:top-28 sm:left-[3%] sm:w-12 sm:h-12 opacity-55 rotate-[-18deg]" />

      {/* grupo superior direito */}
      <HibiscusBloom className="absolute -top-4 -right-4 w-20 h-20 sm:-top-10 sm:-right-10 sm:w-48 sm:h-48 opacity-90 drop-shadow-lg rotate-[14deg]" />
      <HibiscusBloom className="absolute top-10 right-[7%] w-7 h-7 sm:top-16 sm:right-[9%] sm:w-16 sm:h-16 opacity-70 rotate-[-26deg]" />

      {/* canteiro inferior esquerdo */}
      <HibiscusBloom className="absolute -bottom-1 left-0 w-10 h-10 sm:w-20 sm:h-20 opacity-90 rotate-[10deg]" />
      <HibiscusBloom className="absolute bottom-3 left-[9%] w-7 h-7 sm:w-14 sm:h-14 opacity-75 rotate-[-14deg]" />
      <HibiscusBloom className="absolute -bottom-2 left-[19%] w-8 h-8 sm:w-16 sm:h-16 opacity-80 rotate-[4deg]" />
      <HibiscusBloom className="absolute bottom-8 left-[4%] w-5 h-5 sm:w-9 sm:h-9 opacity-55 rotate-[30deg]" />
      <HibiscusBloom className="absolute bottom-14 left-[13%] w-4 h-4 sm:w-8 sm:h-8 opacity-45 rotate-[-25deg]" />

      {/* canteiro inferior direito */}
      <HibiscusBloom className="absolute -bottom-1 right-0 w-11 h-11 sm:w-20 sm:h-20 opacity-90 rotate-[-8deg]" />
      <HibiscusBloom className="absolute bottom-4 right-[10%] w-7 h-7 sm:w-14 sm:h-14 opacity-75 rotate-[16deg]" />
      <HibiscusBloom className="absolute -bottom-2 right-[20%] w-8 h-8 sm:w-16 sm:h-16 opacity-80 rotate-[-5deg]" />
      <HibiscusBloom className="absolute bottom-9 right-[5%] w-5 h-5 sm:w-9 sm:h-9 opacity-55 rotate-[-32deg]" />
      <HibiscusBloom className="absolute bottom-16 right-[14%] w-4 h-4 sm:w-8 sm:h-8 opacity-45 rotate-[20deg]" />

      <Starfish className="absolute top-16 left-2 w-3.5 h-3.5 sm:top-1/3 sm:left-6 sm:w-6 sm:h-6 text-shell/80 animate-drift" />
      <Starfish className="absolute bottom-14 right-2 w-3 h-3 sm:bottom-24 sm:right-8 sm:w-5 sm:h-5 text-cream/70 animate-drift" />

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
          Com carinho, {PARTY.primeiroNome} 🌺
        </p>
        <p className="text-center text-cream/45 text-[11px] mt-1 tracking-wide">
          Convite criado por 26setenta
        </p>
      </div>
    </main>
  );
}
