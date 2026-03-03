"use client";

import { motion } from "framer-motion";
import { EVENT_TYPES } from "@/lib/constants";

const neonColors = [
  { color: "#ff0090", shadow: "0 0 16px rgba(255,0,144,0.8)", border: "rgba(255,0,144,0.45)", bg: "rgba(255,0,144,0.1)" },
  { color: "#00f5ff", shadow: "0 0 16px rgba(0,245,255,0.8)", border: "rgba(0,245,255,0.45)", bg: "rgba(0,245,255,0.08)" },
  { color: "#39ff14", shadow: "0 0 16px rgba(57,255,20,0.75)", border: "rgba(57,255,20,0.4)", bg: "rgba(57,255,20,0.07)" },
  { color: "#ff0090", shadow: "0 0 16px rgba(255,0,144,0.8)", border: "rgba(255,0,144,0.45)", bg: "rgba(255,0,144,0.1)" },
  { color: "#00f5ff", shadow: "0 0 16px rgba(0,245,255,0.8)", border: "rgba(0,245,255,0.45)", bg: "rgba(0,245,255,0.08)" },
  { color: "#39ff14", shadow: "0 0 16px rgba(57,255,20,0.75)", border: "rgba(57,255,20,0.4)", bg: "rgba(57,255,20,0.07)" },
];

export default function EventTypes() {
  return (
    <section id="events" className="section-wrapper">
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,0,144,0.7), transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.25,
        }}
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-0 h-72 w-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.6), transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.22,
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
          <p className="section-eyebrow justify-center">Event Types</p>
          <h2 className="section-title">
            Perfect for{" "}
            <span
              style={{
                background: "linear-gradient(110deg, #39ff14, #00f5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 16px rgba(57,255,20,0.5))",
              }}
            >
              every occasion
            </span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            From intimate birthday dinners to large corporate galas, our LED
            games add energy to any event.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EVENT_TYPES.map((event, index) => {
            const nc = neonColors[index % neonColors.length];
            return (
              <motion.div
                key={event.id}
                className="flex items-center gap-4 rounded-2xl bg-[var(--bg-alt)] p-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: `1px solid ${nc.border}`,
                }}
                whileHover={{
                  boxShadow: `0 14px 40px rgba(0,0,0,0.6), ${nc.shadow}`,
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.07, duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
                  style={{
                    background: nc.bg,
                    border: `1px solid ${nc.border}`,
                    boxShadow: nc.shadow,
                  }}
                >
                  {event.icon}
                </div>
                <div>
                  <h3
                    className="text-[0.95rem] font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: nc.color,
                      textShadow: nc.shadow,
                    }}
                  >
                    {event.label}
                  </h3>
                  <p className="text-[0.82rem] text-[var(--text-muted)]">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
