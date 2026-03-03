"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="section-wrapper-alt">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14 sm:py-16"
          style={{
            background: "linear-gradient(135deg, rgba(91,141,238,0.2) 0%, rgba(255,0,144,0.12) 50%, rgba(0,245,255,0.12) 100%)",
            border: "1px solid rgba(91,141,238,0.4)",
            boxShadow: "0 0 0 1px rgba(0,245,255,0.1), 0 0 80px rgba(91,141,238,0.15), 0 0 50px rgba(255,0,144,0.08)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* Background glow orbs */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(91,141,238,0.9), transparent 70%)",
              filter: "blur(45px)",
              opacity: 0.5,
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0,245,255,0.9), transparent 70%)",
              filter: "blur(45px)",
              opacity: 0.45,
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 left-[20%] h-64 w-64 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,0,144,0.8), transparent 70%)",
              filter: "blur(55px)",
              opacity: 0.35,
            }}
          />
          <div
            className="pointer-events-none absolute right-[25%] top-0 h-48 w-48 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(57,255,20,0.7), transparent 70%)",
              filter: "blur(60px)",
              opacity: 0.28,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="section-eyebrow justify-center">Ready to Glow?</p>
            <h2
              className="max-w-2xl text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your event deserves something{" "}
              <span
                style={{
                  background: "linear-gradient(110deg, #ff0090, #ff6ec7, #00f5ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(255,0,144,0.65))",
                }}
              >
                extraordinary.
              </span>
            </h2>
            <p className="max-w-lg text-[1rem] leading-relaxed text-[rgba(255,255,255,0.7)]">
              Tell us about your event and we&apos;ll put together a custom
              package with pricing. No obligation, fast response.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@yourcompany.com"
                className="btn btn-primary btn-pulse px-9 py-3 text-base"
              >
                Request a Quote
              </a>
              <a
                href="tel:+10000000000"
                className="btn btn-outline px-8 py-3 text-base"
              >
                Call Us
              </a>
            </div>
            <p className="text-[0.8rem] text-[rgba(255,255,255,0.4)]">
              Usually respond within a few hours · No pressure, no spam
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
