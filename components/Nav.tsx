"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_NAME, NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Injected keyframes for gradient border animation */}
      <style>{`
        @keyframes borderFlow {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }
        @keyframes ctaGlowPulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(0,245,255,0.45),
                        0 0 22px rgba(255,0,144,0.25);
          }
          50% {
            box-shadow: 0 0 22px rgba(0,245,255,0.8),
                        0 0 40px rgba(255,0,144,0.5),
                        0 0 60px rgba(57,255,20,0.25);
          }
        }
        .nav-cta-wrap {
          background: linear-gradient(90deg, #00f5ff, #ff0090, #39ff14, #00f5ff);
          background-size: 300% 100%;
          animation: borderFlow 4s linear infinite, ctaGlowPulse 2.5s ease-in-out infinite;
          border-radius: 999px;
          padding: 1.5px;
          display: inline-flex;
        }
        .nav-cta-inner {
          background: #07090f;
          border-radius: 999px;
          padding: 0.52rem 1.35rem;
          color: #fff;
          font-family: var(--font-orbitron), sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.07em;
          white-space: nowrap;
          transition: background 0.25s ease, color 0.25s ease;
          display: block;
        }
        .nav-cta-wrap:hover .nav-cta-inner {
          background: linear-gradient(90deg, rgba(0,245,255,0.18), rgba(255,0,144,0.18));
        }
        .nav-link-item {
          position: relative;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s ease, text-shadow 0.2s ease;
          padding-bottom: 2px;
        }
        .nav-link-item::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, #00f5ff, #ff0090);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
          box-shadow: 0 0 6px rgba(0,245,255,0.9);
        }
        .nav-link-item:hover {
          color: #00f5ff;
          text-shadow: 0 0 12px rgba(0,245,255,0.75);
        }
        .nav-link-item:hover::after {
          transform: scaleX(1);
        }
        .mobile-link {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.2s ease, text-shadow 0.2s ease;
          letter-spacing: 0.02em;
        }
        .mobile-link:hover {
          color: #00f5ff;
          text-shadow: 0 0 20px rgba(0,245,255,0.8), 0 0 40px rgba(0,245,255,0.4);
        }
      `}</style>

      <motion.header
        className="fixed left-0 right-0 top-0 z-50"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {/* Main nav bar */}
        <motion.div
          animate={{
            background: scrolled
              ? "rgba(5, 7, 14, 0.88)"
              : "rgba(0, 0, 0, 0)",
            backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "blur(0px)",
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{ WebkitBackdropFilter: scrolled ? "blur(18px) saturate(160%)" : "blur(0px)" }}
        >
          <div
            className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
            style={{
              boxShadow: scrolled
                ? "0 8px 32px rgba(0,0,0,0.6), 0 0 60px rgba(91,141,238,0.06)"
                : "none",
            }}
          >
            {/* Logo */}
            <a href="#" className="no-underline">
              <span
                style={{
                  fontFamily: "var(--font-orbitron), sans-serif",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  letterSpacing: "0.06em",
                  background: "linear-gradient(90deg, #00f5ff 0%, #ff0090 60%, #39ff14 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 10px rgba(0,245,255,0.5)) drop-shadow(0 0 20px rgba(255,0,144,0.3))",
                  display: "inline-block",
                }}
              >
                {COMPANY_NAME}
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link-item"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
                className="nav-cta-wrap border-0 bg-transparent p-0 cursor-pointer"
              >
                <span className="nav-cta-inner">Get a Quote</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="relative z-[110] flex flex-col gap-[5px] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block h-[2px] w-6 rounded-full"
                style={{ background: menuOpen ? "#00f5ff" : "rgba(255,255,255,0.8)" }}
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                transition={{ duration: 0.22 }}
              />
              <motion.span
                className="block h-[2px] w-6 rounded-full"
                style={{ background: menuOpen ? "#ff0090" : "rgba(255,255,255,0.8)" }}
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.18 }}
              />
              <motion.span
                className="block h-[2px] w-6 rounded-full"
                style={{ background: menuOpen ? "#39ff14" : "rgba(255,255,255,0.8)" }}
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                transition={{ duration: 0.22 }}
              />
            </button>
          </div>
        </motion.div>

        {/* Neon accent line — always visible under the nav */}
        <div
          style={{
            height: "1px",
            background: scrolled
              ? "linear-gradient(90deg, transparent, #00f5ff 25%, #ff0090 65%, #39ff14 85%, transparent)"
              : "linear-gradient(90deg, transparent, rgba(0,245,255,0.35) 25%, rgba(255,0,144,0.35) 65%, rgba(57,255,20,0.35) 85%, transparent)",
            boxShadow: scrolled
              ? "0 0 10px rgba(0,245,255,0.5), 0 0 20px rgba(255,0,144,0.25)"
              : "none",
            transition: "all 0.35s ease",
          }}
        />
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center md:hidden"
            style={{ background: "rgba(3, 5, 12, 0.97)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Background neon orbs inside overlay */}
            <div
              className="pointer-events-none absolute left-[10%] top-[15%] h-64 w-64 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0,245,255,0.25), transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="pointer-events-none absolute bottom-[15%] right-[10%] h-64 w-64 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,0,144,0.2), transparent 70%)",
                filter: "blur(60px)",
              }}
            />

            {/* Logo in overlay */}
            <div className="mb-12">
              <span
                style={{
                  fontFamily: "var(--font-orbitron), sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  letterSpacing: "0.06em",
                  background: "linear-gradient(90deg, #00f5ff, #ff0090)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 14px rgba(0,245,255,0.6))",
                  display: "inline-block",
                }}
              >
                {COMPANY_NAME}
              </span>
            </div>

            {/* Nav links */}
            <nav className="relative z-10 flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 + 0.05, duration: 0.3 }}
                className="mt-4"
              >
                  <button
                  className="nav-cta-wrap border-0 bg-transparent p-0 cursor-pointer"
                  onClick={() => { setMenuOpen(false); window.dispatchEvent(new CustomEvent("openQuoteModal")); }}
                >
                  <span
                    className="nav-cta-inner"
                    style={{ fontSize: "0.88rem", padding: "0.65rem 2rem" }}
                  >
                    Get a Quote
                  </span>
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
