"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

const cardAccents = [
  { border: "rgba(0,245,255,0.35)", starColor: "#00f5ff", starShadow: "0 0 10px rgba(0,245,255,0.8)" },
  { border: "rgba(255,0,144,0.35)", starColor: "#ff0090", starShadow: "0 0 10px rgba(255,0,144,0.8)" },
  { border: "rgba(57,255,20,0.3)", starColor: "#39ff14", starShadow: "0 0 10px rgba(57,255,20,0.7)" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-wrapper">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,245,255,0.75), transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.22,
          transform: "translateY(-50%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,0,144,0.7), transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.2,
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
          <p className="section-eyebrow justify-center">Reviews</p>
          <h2 className="section-title">
            Guests love it.{" "}
            <span
              style={{
                background: "linear-gradient(110deg, #ff0090, #ff6ec7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 18px rgba(255,0,144,0.6))",
              }}
            >
              Hosts love it more.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => {
            const ac = cardAccents[index % cardAccents.length];
            return (
              <motion.figure
                key={t.id}
                className="flex flex-col gap-5 rounded-2xl bg-[var(--bg-alt)] p-6 transition-all duration-300 hover:-translate-y-2"
                style={{ border: `1px solid ${ac.border}` }}
                whileHover={{
                  boxShadow: `0 18px 50px rgba(0,0,0,0.7), 0 0 25px ${ac.border}`,
                }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              >
                {/* Stars — each card gets its own neon color */}
                <div className="flex gap-0.5 text-[1rem]">
                  {"★★★★★".split("").map((star, i) => (
                    <span
                      key={i}
                      style={{ color: ac.starColor, textShadow: ac.starShadow }}
                    >
                      {star}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-[0.93rem] leading-relaxed text-[rgba(255,255,255,0.85)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{ background: ac.border }}
                />

                {/* Attribution */}
                <figcaption className="flex flex-col gap-0.5">
                  <span
                    className="text-[0.88rem] font-semibold"
                    style={{ color: ac.starColor, textShadow: ac.starShadow }}
                  >
                    {t.name}
                  </span>
                  <span className="text-[0.78rem] text-[var(--text-muted)]">
                    {t.role}
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
