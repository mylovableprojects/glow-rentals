"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/constants";

const stepStyles = [
  {
    bg: "linear-gradient(135deg, #5b8dee, #3a9ee8)",
    shadow: "0 4px 20px rgba(91,141,238,0.7), 0 0 30px rgba(0,245,255,0.35)",
    ring: "rgba(91,141,238,0.3)",
    hoverBorder: "rgba(0,245,255,0.4)",
    hoverGlow: "0 12px 40px rgba(0,0,0,0.6), 0 0 30px rgba(0,245,255,0.2)",
  },
  {
    bg: "linear-gradient(135deg, #ff0090, #ff6ec7)",
    shadow: "0 4px 20px rgba(255,0,144,0.7), 0 0 30px rgba(255,0,144,0.35)",
    ring: "rgba(255,0,144,0.3)",
    hoverBorder: "rgba(255,0,144,0.5)",
    hoverGlow: "0 12px 40px rgba(0,0,0,0.6), 0 0 30px rgba(255,0,144,0.25)",
  },
  {
    bg: "linear-gradient(135deg, #18a832, #39ff14)",
    shadow: "0 4px 20px rgba(57,255,20,0.6), 0 0 30px rgba(57,255,20,0.3)",
    ring: "rgba(57,255,20,0.25)",
    hoverBorder: "rgba(57,255,20,0.45)",
    hoverGlow: "0 12px 40px rgba(0,0,0,0.6), 0 0 30px rgba(57,255,20,0.2)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-wrapper-alt">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(91,141,238,0.85), transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.25,
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,0,144,0.75), transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.25,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.6), transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.2,
        }}
      />

      <div className="container">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="section-eyebrow justify-center">The Process</p>
          <h2 className="section-title">
            Simple from start to{" "}
            <span className="text-gradient-glow">showtime</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            We have rented to hundreds of events. Here is exactly how it works.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical connector line — tri-color neon */}
          <div
            className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-0.5 sm:block"
            style={{
              background: "linear-gradient(to bottom, #00f5ff, #ff0090, #39ff14, transparent)",
              boxShadow: "0 0 10px rgba(0,245,255,0.5)",
            }}
          />

          <div className="flex flex-col gap-10">
            {STEPS.map((step, index) => {
              const ss = stepStyles[index] ?? stepStyles[0];
              return (
                <motion.div
                  key={step.id}
                  className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.12, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  {/* Step number circle */}
                  <div
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[0.95rem] font-bold text-white"
                    style={{
                      background: ss.bg,
                      boxShadow: ss.shadow,
                      outline: `3px solid ${ss.ring}`,
                      outlineOffset: "2px",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {step.id}
                  </div>

                  {/* Step card */}
                  <motion.div
                    className="flex-1 rounded-2xl bg-[var(--bg-primary)] p-6 transition-all duration-300"
                    style={{ border: `1px solid rgba(255,255,255,0.08)` }}
                    whileHover={{
                      borderColor: ss.hoverBorder,
                      boxShadow: ss.hoverGlow,
                    }}
                  >
                    <h3
                      className="mb-2 text-[1.05rem] font-semibold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[0.9rem] leading-relaxed text-[var(--text-muted)]">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
