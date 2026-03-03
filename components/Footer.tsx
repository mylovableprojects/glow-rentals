"use client";

import {
  COMPANY_NAME,
  COMPANY_CITY,
  COMPANY_STATE,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  NAV_LINKS,
  SERVICE_AREAS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#04060c]">
      <div className="container py-12">

        {/* Main footer grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand + tagline */}
          <div className="flex flex-col gap-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span
                style={{
                  fontFamily: "var(--font-orbitron), sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                  background: "linear-gradient(90deg, #00f5ff, #ff0090)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-[0.83rem] leading-relaxed text-[var(--text-muted)]">
              {COMPANY_CITY}&apos;s premier LED party game rental company.
              We deliver, set up, and pick up everything — you just show up and glow.
            </p>
            <address className="mt-1 not-italic text-[0.8rem] leading-relaxed text-[var(--text-muted)]">
              <span style={{ color: "#00f5ff" }}>📍</span>{" "}
              {COMPANY_CITY}, {COMPANY_STATE} &amp; surrounding suburbs
            </address>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-[0.72rem] font-semibold uppercase tracking-widest"
              style={{ color: "#00f5ff", textShadow: "0 0 10px rgba(0,245,255,0.5)" }}
            >
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.85rem] text-[var(--text-muted)] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
                className="w-fit cursor-pointer border-0 bg-transparent p-0 text-left text-[0.85rem] text-[var(--text-muted)] transition-colors hover:text-white"
              >
                Get a Quote
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-[0.72rem] font-semibold uppercase tracking-widest"
              style={{ color: "#ff0090", textShadow: "0 0 10px rgba(255,0,144,0.5)" }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-[0.85rem]">
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="text-[var(--text-muted)] transition-colors hover:text-white"
              >
                {COMPANY_PHONE}
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-[var(--text-muted)] transition-colors hover:text-white"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
            <div className="mt-1 flex gap-4 text-[0.85rem]">
              <a href="#" className="text-[var(--text-muted)] transition-colors hover:text-[#ff0090]">
                Instagram
              </a>
              <a href="#" className="text-[var(--text-muted)] transition-colors hover:text-[#00f5ff]">
                TikTok
              </a>
            </div>
          </div>

          {/* Service areas — keyword-rich for local SEO */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-[0.72rem] font-semibold uppercase tracking-widest"
              style={{ color: "#39ff14", textShadow: "0 0 10px rgba(57,255,20,0.5)" }}
            >
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="text-[0.78rem] text-[var(--text-muted)]"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-1 text-[0.73rem] text-[rgba(255,255,255,0.25)]">
              Chicago, IL &amp; all surrounding suburbs
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-[var(--border)] pt-6 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.76rem] text-[var(--text-muted)]">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. · {COMPANY_CITY}, {COMPANY_STATE}
          </p>
          <p className="text-[0.74rem] text-[rgba(255,255,255,0.2)]">
            LED Party Game Rentals · {COMPANY_CITY} &amp; Suburbs
          </p>
        </div>
      </div>
    </footer>
  );
}
