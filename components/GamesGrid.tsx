"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GAMES } from "@/lib/constants";

const tagColors = [
  { color: "#00f5ff", shadow: "0 0 10px rgba(0,245,255,0.7)", border: "rgba(0,245,255,0.45)", bg: "rgba(0,245,255,0.08)" },
  { color: "#ff0090", shadow: "0 0 10px rgba(255,0,144,0.7)", border: "rgba(255,0,144,0.45)", bg: "rgba(255,0,144,0.08)" },
  { color: "#39ff14", shadow: "0 0 10px rgba(57,255,20,0.7)", border: "rgba(57,255,20,0.4)", bg: "rgba(57,255,20,0.06)" },
  { color: "#00f5ff", shadow: "0 0 10px rgba(0,245,255,0.7)", border: "rgba(0,245,255,0.45)", bg: "rgba(0,245,255,0.08)" },
  { color: "#ff0090", shadow: "0 0 10px rgba(255,0,144,0.7)", border: "rgba(255,0,144,0.45)", bg: "rgba(255,0,144,0.08)" },
  { color: "#39ff14", shadow: "0 0 10px rgba(57,255,20,0.7)", border: "rgba(57,255,20,0.4)", bg: "rgba(57,255,20,0.06)" },
];

export default function GamesGrid() {
  return (
    <section id="games" className="section-wrapper-alt">
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(91,141,238,0.8), transparent 65%)",
          filter: "blur(75px)",
          opacity: 0.3,
          transform: "translateY(-50%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,245,255,0.75), transparent 65%)",
          filter: "blur(70px)",
          opacity: 0.28,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,0,144,0.7), transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.25,
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
          <p className="section-eyebrow justify-center">LED Game Lineup</p>
          <h2 className="section-title">
            Games that{" "}
            <span className="text-gradient-glow">light up the room</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Every game includes delivery, professional setup, and pickup. Just
            show up and have fun.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((game, index) => {
            const tc = tagColors[index % tagColors.length];
            return (
              <motion.article
                key={game.id}
                className="card group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag badge — each card gets a different neon color */}
                  <span
                    className="absolute left-3 top-3 rounded-full px-3 py-1 text-[0.72rem] font-semibold backdrop-blur-sm"
                    style={{
                      color: tc.color,
                      textShadow: tc.shadow,
                      border: `1px solid ${tc.border}`,
                      background: tc.bg,
                    }}
                  >
                    {game.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className="text-[1rem] font-semibold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {game.name}
                    </h3>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-0.5 text-[0.7rem]"
                      style={{
                        border: `1px solid ${tc.border}`,
                        color: tc.color,
                        textShadow: tc.shadow,
                        background: tc.bg,
                      }}
                    >
                      {game.capacity}
                    </span>
                  </div>
                  <p className="text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
                    {game.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <a
                      href="#contact"
                      className="text-[0.82rem] font-semibold transition-all"
                      style={{
                        color: tc.color,
                        textShadow: tc.shadow,
                      }}
                    >
                      Check availability →
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
