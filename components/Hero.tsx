"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="scanlines relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80"
        alt="Glowing party event"
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.62)]" />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07090f] to-transparent" />

      {/* Ambient glow orbs — all use inline opacity to avoid Tailwind class issues */}
      <div
        className="pointer-events-none absolute left-[10%] top-[18%] h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(91,141,238,0.9), transparent 70%)",
          filter: "blur(55px)",
          opacity: 0.35,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[18%] right-[10%] h-80 w-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,245,255,0.9), transparent 70%)",
          filter: "blur(50px)",
          opacity: 0.3,
        }}
      />
      <div
        className="pointer-events-none absolute right-[28%] top-[12%] h-64 w-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,0,144,0.85), transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.28,
        }}
      />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* Eyebrow label */}
          <span className="glow-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.78rem] font-semibold">
            ✦ Chicago&apos;s LED Party Game Rentals
          </span>

          {/* Headline */}
          <h1
            className="max-w-3xl text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.08] tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Make Your Event{" "}
            <span
              style={{
                background: "linear-gradient(110deg, #ff0090, #ff6ec7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(255,0,144,0.7))",
              }}
            >
              Unforgettable
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-[rgba(255,255,255,0.78)]">
            Premium LED ping pong, mini-golf, cornhole &amp; more — delivered,
            set up, and ready to glow.
          </p>

          {/* CTAs */}
          <motion.div
            className="mt-2 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <a href="#games" className="btn btn-primary btn-pulse px-8 py-3 text-base">
              Browse Games
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
              className="btn btn-outline px-8 py-3 text-base"
            >
              Get a Quote
            </button>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[0.8rem] text-[rgba(255,255,255,0.6)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#00f5ff", textShadow: "0 0 12px rgba(0,245,255,0.9)" }}>✓</span>
              Delivery &amp; Setup Included
            </span>
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#39ff14", textShadow: "0 0 12px rgba(57,255,20,0.9)" }}>✓</span>
              Weddings, Corporate, Birthdays &amp; More
            </span>
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#ff0090", textShadow: "0 0 12px rgba(255,0,144,0.9)" }}>✓</span>
              Chicago, IL &amp; Suburbs
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>
          <span className="text-[0.7rem] uppercase tracking-widest">Scroll</span>
          <motion.div
            className="h-5 w-px"
            style={{ background: "rgba(255,255,255,0.3)" }}
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
