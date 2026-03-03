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

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
        .modal-card-wrap {
          background: linear-gradient(135deg, #00f5ff, #ff0090, #39ff14, #00f5ff);
          background-size: 300% 300%;
          animation: modalBorderFlow 5s linear infinite;
          border-radius: 1.5rem;
          padding: 1.5px;
        }
        .modal-card {
          background: #06080f;
          border-radius: calc(1.5rem - 1.5px);
          overflow: hidden;
        }
        .neon-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.6rem;
          padding: 0.65rem 0.9rem;
          color: #fff;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          font-family: var(--font-dm-sans), var(--font-body), sans-serif;
        }
        .neon-input::placeholder { color: rgba(255,255,255,0.28); }
        .neon-input:focus {
          border-color: #00f5ff;
          box-shadow: 0 0 0 2px rgba(0,245,255,0.18), 0 0 16px rgba(0,245,255,0.25);
        }
        .neon-input option { background: #06080f; color: #fff; }
        .neon-label {
          display: block;
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.35rem;
          text-transform: uppercase;
          font-family: var(--font-dm-sans), sans-serif;
        }
        .submit-wrap {
          background: linear-gradient(90deg, #00f5ff, #ff0090, #39ff14, #00f5ff);
          background-size: 300% 100%;
          animation: modalBorderFlow 4s linear infinite;
          border-radius: 999px;
          padding: 1.5px;
          display: block;
          width: 100%;
          margin-top: 0.5rem;
        }
        .submit-inner {
          display: block;
          width: 100%;
          background: linear-gradient(90deg, rgba(91,141,238,0.25), rgba(255,0,144,0.2));
          border-radius: 999px;
          padding: 0.78rem 1rem;
          color: #fff;
          font-family: var(--font-orbitron), sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-align: center;
          cursor: pointer;
          transition: background 0.25s ease;
          border: none;
        }
        .submit-inner:hover {
          background: linear-gradient(90deg, rgba(0,245,255,0.25), rgba(255,0,144,0.3));
        }
        .success-icon { animation: successPop 0.5s cubic-bezier(0.22,0.61,0.36,1) forwards; }
        .close-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.5);
          font-size: 1rem;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .close-btn:hover {
          background: rgba(255,0,144,0.15);
          border-color: rgba(255,0,144,0.5);
          color: #ff0090;
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          /* Backdrop */
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: "rgba(2,4,10,0.88)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          >
            {/* Ambient orbs behind the card */}
            <div className="pointer-events-none absolute left-[15%] top-[10%] h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(0,245,255,0.3), transparent 70%)", filter: "blur(60px)", opacity: 0.5 }} />
            <div className="pointer-events-none absolute bottom-[10%] right-[15%] h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,0,144,0.3), transparent 70%)", filter: "blur(60px)", opacity: 0.45 }} />

            {/* Modal card */}
            <motion.div
              className="modal-card-wrap relative z-10 w-full max-w-lg"
              initial={{ scale: 0.88, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="modal-card">
                {submitted ? (
                  /* ---- Success state ---- */
                  <div className="flex flex-col items-center gap-5 px-10 py-14 text-center">
                    <div
                      className="success-icon flex h-20 w-20 items-center justify-center rounded-full text-4xl"
                      style={{
                        background: "radial-gradient(circle, rgba(57,255,20,0.2), transparent 70%)",
                        border: "2px solid rgba(57,255,20,0.6)",
                        boxShadow: "0 0 30px rgba(57,255,20,0.4), 0 0 60px rgba(57,255,20,0.2)",
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
                    <button
                      onClick={close}
                      className="submit-wrap mt-2"
                      style={{ display: "block", width: "auto", padding: "0" }}
                    >
                      <span className="submit-inner" style={{ padding: "0.65rem 2.5rem" }}>
                        Close
                      </span>
                    </button>
                  </div>
                ) : (
                  /* ---- Form ---- */
                  <div className="px-7 py-8 sm:px-9">
                    {/* Header */}
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <div>
                        <h2
                          className="text-[1.5rem] font-extrabold leading-tight"
                          style={{
                            fontFamily: "var(--font-orbitron), sans-serif",
                            background: "linear-gradient(90deg, #00f5ff, #ff0090)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            filter: "drop-shadow(0 0 12px rgba(0,245,255,0.4))",
                          }}
                        >
                          Get a Quote
                        </h2>
                        <p className="mt-1 text-[0.85rem] text-[rgba(255,255,255,0.45)]"
                          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                          Tell us about your event — we&apos;ll handle the rest.
                        </p>
                      </div>
                      <button onClick={close} className="close-btn" aria-label="Close">✕</button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      {/* Row 1 — Name + Email */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="neon-label">Name *</label>
                          <input
                            type="text" required placeholder="Jane Smith"
                            className="neon-input" value={form.name} onChange={set("name")}
                          />
                        </div>
                        <div>
                          <label className="neon-label">Email *</label>
                          <input
                            type="email" required placeholder="jane@email.com"
                            className="neon-input" value={form.email} onChange={set("email")}
                          />
                        </div>
                      </div>

                      {/* Row 2 — Phone + Event Type */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="neon-label">Phone</label>
                          <input
                            type="tel" placeholder="(312) 555-0000"
                            className="neon-input" value={form.phone} onChange={set("phone")}
                          />
                        </div>
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
                      </div>

                      {/* Row 3 — Date + Guests */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="neon-label">Event Date</label>
                          <input
                            type="date" className="neon-input"
                            value={form.eventDate} onChange={set("eventDate")}
                            style={{ colorScheme: "dark" }}
                          />
                        </div>
                        <div>
                          <label className="neon-label">Guest Count</label>
                          <select
                            className="neon-input"
                            value={form.guestCount} onChange={set("guestCount")}
                          >
                            <option value="" disabled>Select range…</option>
                            {GUEST_COUNTS.map((g) => (
                              <option key={g} value={g}>{g} guests</option>
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

                      <p className="text-center text-[0.73rem] text-[rgba(255,255,255,0.28)]">
                        No spam · Fast response · No obligation
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
