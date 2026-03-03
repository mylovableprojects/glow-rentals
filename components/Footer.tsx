"use client";

import { COMPANY_NAME, NAV_LINKS, COMPANY_CITY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#04060c]">
      <div className="container py-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--accent-blue)] text-xs font-bold text-white">
                G
              </span>
              <span
                className="text-[0.92rem] font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {COMPANY_NAME}
              </span>
            </div>
            <p className="max-w-xs text-[0.82rem] leading-relaxed text-[var(--text-muted)]">
              Premium LED party game rentals serving {COMPANY_CITY} and
              surrounding areas.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.85rem] text-[var(--text-muted)] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-1.5 text-[0.85rem]">
            <a
              href="mailto:hello@yourcompany.com"
              className="text-[var(--text-muted)] transition-colors hover:text-white"
            >
              hello@yourcompany.com
            </a>
            <a
              href="tel:+10000000000"
              className="text-[var(--text-muted)] transition-colors hover:text-white"
            >
              (+1) 000-000-0000
            </a>
            <div className="mt-1 flex gap-3">
              <a
                href="#"
                className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent-blue)]"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent-blue)]"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-[var(--border)] pt-6 text-[0.78rem] text-[var(--text-muted)]">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
