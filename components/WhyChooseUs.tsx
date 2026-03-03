"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";

const iconColors = [
  { border: "rgba(0,245,255,0.5)", bg: "rgba(0,245,255,0.1)", shadow: "0 0 20px rgba(0,245,255,0.45)" },
  { border: "rgba(255,0,144,0.5)", bg: "rgba(255,0,144,0.1)", shadow: "0 0 20px rgba(255,0,144,0.45)" },
  { border: "rgba(57,255,20,0.45)", bg: "rgba(57,255,20,0.08)", shadow: "0 0 20px rgba(57,255,20,0.4)" },
  { border: "rgba(91,141,238,0.55)", bg: "rgba(91,141,238,0.12)", shadow: "0 0 20px rgba(91,141,238,0.5)" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-wrapper">
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(91,141,238,0.8), transparent 70%)",
          filter: "blur(70px)",
          opacity: 0.35,
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,0,144,0.75), transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.3,
        }}
      />
      <div className="container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="section-eyebrow justify-center">Why Choose Us</p>
          <h2 className="section-title">
            The easiest way to{" "}
            <span className="text-gradient-glow">wow your guests</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            We take care of everything so you can focus on enjoying your event.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const color = iconColors[index % iconColors.length];
            return (
              <motion.div
                key={feature.id}
                className="group rounded-2xl bg-[var(--bg-alt)] p-6 transition-all duration-300 hover:-translate-y-2"
                style={{
                  border: `1px solid ${color.border}`,
                  boxShadow: `0 0 0 0 transparent`,
                }}
                whileHover={{
                  boxShadow: `0 18px 50px rgba(0,0,0,0.7), ${color.shadow}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl"
                  style={{
                    background: color.bg,
                    border: `1px solid ${color.border}`,
                    boxShadow: color.shadow,
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="mb-2 text-[1rem] font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
