"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

const empty: FormState = {
  name: "", email: "", phone: "",
  eventType: "", eventDate: "", guestCount: "", message: "",
};

const EVENT_TYPES = [
  "Wedding", "Corporate Event", "Birthday Party",
  "Holiday Party", "Nightlife / Bar Event", "Brand Activation", "Other",
];

const GUEST_COUNTS = ["1–25", "26–50", "51–100", "101–200", "200+"];

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("openQuoteModal", open);
    return () => window.removeEventListener("openQuoteModal", open);
  }, []);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => { setSubmitted(false); setForm(empty); }, 400);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @keyframes modalBorderFlow {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }
        @keyframes successPop {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.15); }
          100% { transform: scale(1);   opacity: 1; }
        }

        /* ---- Gradient border wrapper ---- */
        .modal-card-wrap {
          background: linear-gradient(135deg, #00f5ff, #ff0090, #39ff14, #00f5ff);
          background-size: 300% 300%;
          animation: modalBorderFlow 5s linear infinite;
          /* Mobile: sheet with rounded top only, no bottom border */
          border-radius: 1.5rem 1.5rem 0 0;
          padding: 1.5px 1.5px 0 1.5px;
          width: 100%;
        }
        @media (min-width: 640px) {
          .modal-card-wrap {
            border-radius: 1.5rem;
            padding: 1.5px;
            width: 100%;
            max-width: 32rem;
          }
        }

        /* ---- Inner card ---- */
        .modal-card {
          background: #06080f;
          /* Mobile: fills to top of sheet, no bottom radius */
          border-radius: calc(1.5rem - 1.5px) calc(1.5rem - 1.5px) 0 0;
          display: flex;
          flex-direction: column;
          /* Use dvh so keyboard doesn't push content off screen on iOS */
          max-height: 88dvh;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .modal-card {
            border-radius: calc(1.5rem - 1.5px);
            max-height: 92vh;
          }
        }

        /* ---- Scrollable form body ---- */
        .modal-body {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
          flex: 1;
          padding: 0 1.5rem 1.75rem;
        }
        @media (min-width: 640px) {
          .modal-body { padding: 0 2.25rem 2rem; }
        }

        /* ---- Sticky header inside modal ---- */
        .modal-header {
          position: sticky;
          top: 0;
          z-index: 10;
          background: #06080f;
          padding: 1.5rem 1.5rem 1rem;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .modal-header { padding: 2rem 2.25rem 1.25rem; }
        }

        /* ---- Inputs ---- */
        .neon-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 0.65rem;
          padding: 0.72rem 0.9rem;
          color: #fff;
          font-size: 1rem; /* 16px prevents iOS zoom on focus */
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          font-family: var(--font-dm-sans), var(--font-body), sans-serif;
          -webkit-appearance: none;
          appearance: none;
        }
        .neon-input::placeholder { color: rgba(255,255,255,0.28); }
        .neon-input:focus {
          border-color: #00f5ff;
          box-shadow: 0 0 0 2px rgba(0,245,255,0.18), 0 0 16px rgba(0,245,255,0.22);
        }
        .neon-input option { background: #06080f; color: #fff; }

        .neon-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.35rem;
          text-transform: uppercase;
          font-family: var(--font-dm-sans), sans-serif;
        }

        /* ---- Submit button ---- */
        .submit-wrap {
          background: linear-gradient(90deg, #00f5ff, #ff0090, #39ff14, #00f5ff);
          background-size: 300% 100%;
          animation: modalBorderFlow 4s linear infinite;
          border-radius: 999px;
          padding: 1.5px;
          display: block;
          width: 100%;
        }
        .submit-inner {
          display: block;
          width: 100%;
          background: linear-gradient(90deg, rgba(91,141,238,0.3), rgba(255,0,144,0.25));
          border-radius: 999px;
          padding: 0.85rem 1rem;
          color: #fff;
          font-family: var(--font-orbitron), sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-align: center;
          cursor: pointer;
          border: none;
          transition: background 0.25s ease;
        }
        .submit-inner:hover {
          background: linear-gradient(90deg, rgba(0,245,255,0.28), rgba(255,0,144,0.32));
        }
        .submit-inner:active {
          transform: scale(0.98);
        }

        .success-icon { animation: successPop 0.5s cubic-bezier(0.22,0.61,0.36,1) forwards; }

        .close-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          width: 2.1rem;
          height: 2.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.5);
          font-size: 0.95rem;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .close-btn:hover {
          background: rgba(255,0,144,0.15);
          border-color: rgba(255,0,144,0.5);
          color: #ff0090;
        }

        /* Drag handle on mobile */
        .drag-handle {
          width: 2.5rem;
          height: 4px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          margin: 0.75rem auto 0;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .drag-handle { display: none; }
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          /* Backdrop — items-end on mobile (sheet), items-center on sm+ (modal) */
          <motion.div
            className="fixed inset-0 z-[200] flex items-end sm:items-center sm:p-4"
            style={{ background: "rgba(2,4,10,0.88)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          >
            {/* Ambient orbs — desktop only decoration */}
            <div className="pointer-events-none absolute left-[15%] top-[10%] hidden h-72 w-72 rounded-full sm:block"
              style={{ background: "radial-gradient(circle, rgba(0,245,255,0.25), transparent 70%)", filter: "blur(60px)", opacity: 0.5 }} />
            <div className="pointer-events-none absolute bottom-[10%] right-[15%] hidden h-72 w-72 rounded-full sm:block"
              style={{ background: "radial-gradient(circle, rgba(255,0,144,0.25), transparent 70%)", filter: "blur(60px)", opacity: 0.45 }} />

            {/* Modal card — slides up on mobile, scales in on desktop */}
            <motion.div
              className="modal-card-wrap relative z-10 sm:mx-auto"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="modal-card">
                {submitted ? (
                  /* ---- Success state ---- */
                  <div className="flex flex-col items-center gap-5 px-8 py-14 text-center">
                    <div
                      className="success-icon flex h-20 w-20 items-center justify-center rounded-full text-4xl"
                      style={{
                        background: "radial-gradient(circle, rgba(57,255,20,0.2), transparent 70%)",
                        border: "2px solid rgba(57,255,20,0.6)",
                        boxShadow: "0 0 30px rgba(57,255,20,0.4), 0 0 60px rgba(57,255,20,0.2)",
                        color: "#39ff14",
                      }}
                    >
                      ✓
                    </div>
                    <h3
                      className="text-2xl font-extrabold text-white"
                      style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                      Request Sent!
                    </h3>
                    <p className="max-w-xs text-[0.95rem] leading-relaxed text-[rgba(255,255,255,0.6)]">
                      We&apos;ll review your event details and get back to you within a few hours.
                    </p>
                    <button onClick={close} className="submit-wrap mt-2">
                      <span className="submit-inner" style={{ padding: "0.75rem 2.5rem", width: "auto", display: "inline-block" }}>
                        Close
                      </span>
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Drag handle (mobile only) */}
                    <div className="drag-handle" />

                    {/* Sticky header — always visible even when scrolling */}
                    <div className="modal-header">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2
                            className="text-[1.4rem] font-extrabold leading-tight"
                            style={{
                              fontFamily: "var(--font-orbitron), sans-serif",
                              background: "linear-gradient(90deg, #00f5ff, #ff0090)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              filter: "drop-shadow(0 0 10px rgba(0,245,255,0.4))",
                            }}
                          >
                            Get a Quote
                          </h2>
                          <p
                            className="mt-0.5 text-[0.83rem] text-[rgba(255,255,255,0.42)]"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                          >
                            Tell us about your event — we&apos;ll handle the rest.
                          </p>
                        </div>
                        <button onClick={close} className="close-btn mt-0.5" aria-label="Close">✕</button>
                      </div>
                    </div>

                    {/* Scrollable form body */}
                    <div className="modal-body">
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Name */}
                        <div>
                          <label className="neon-label">Name *</label>
                          <input
                            type="text" required placeholder="Jane Smith"
                            className="neon-input" value={form.name} onChange={set("name")}
                            autoComplete="name"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="neon-label">Email *</label>
                          <input
                            type="email" required placeholder="jane@email.com"
                            className="neon-input" value={form.email} onChange={set("email")}
                            autoComplete="email"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="neon-label">Phone</label>
                          <input
                            type="tel" placeholder="(312) 555-0000"
                            className="neon-input" value={form.phone} onChange={set("phone")}
                            autoComplete="tel"
                          />
                        </div>

                        {/* Event Type */}
                        <div>
                          <label className="neon-label">Event Type *</label>
                          <select
                            required className="neon-input"
                            value={form.eventType} onChange={set("eventType")}
                          >
                            <option value="" disabled>Select type…</option>
                            {EVENT_TYPES.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>

                        {/* Date + Guests side by side (even on mobile — short fields) */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="neon-label">Event Date</label>
                            <input
                              type="date" className="neon-input"
                              value={form.eventDate} onChange={set("eventDate")}
                              style={{ colorScheme: "dark" }}
                            />
                          </div>
                          <div>
                            <label className="neon-label">Guests</label>
                            <select
                              className="neon-input"
                              value={form.guestCount} onChange={set("guestCount")}
                            >
                              <option value="" disabled>Range…</option>
                              {GUEST_COUNTS.map((g) => (
                                <option key={g} value={g}>{g}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="neon-label">Tell us more</label>
                          <textarea
                            rows={3}
                            placeholder="Venue, vibe, games you're interested in…"
                            className="neon-input resize-none"
                            value={form.message} onChange={set("message")}
                          />
                        </div>

                        {/* Submit */}
                        <button type="submit" className="submit-wrap">
                          <span className="submit-inner">Send My Request →</span>
                        </button>

                        <p className="pb-1 text-center text-[0.72rem] text-[rgba(255,255,255,0.25)]">
                          No spam · Fast response · No obligation
                        </p>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
