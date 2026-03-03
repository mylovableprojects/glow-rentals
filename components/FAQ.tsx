"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <motion.div
      className="section-shell space-y-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="section-label">FAQ</p>
          <h2 className="heading-glow text-xl text-gradient-neon sm:text-2xl">
            Glow game questions
          </h2>
        </div>
        <p className="max-w-md text-sm text-[var(--text-muted)]">
          If you don&apos;t see your question here, include it in your quote
          request — our team will respond with specifics for your venue and
          event.
        </p>
      </div>

      <div className="neon-divider" />

      <div className="neon-card-soft divide-y divide-[rgba(255,255,255,0.04)]">
        {FAQS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="group">
              <button
                type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[rgba(9,13,26,0.9)]"
              >
                <div>
                  <p className="text-[0.84rem] font-medium text-[var(--text-primary)]">
                    {item.question}
                  </p>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(5,8,18,0.96)] text-[0.7rem] text-[var(--accent-cyan)] shadow-[0_0_12px_rgba(79,142,247,0.85)]">
                  {isOpen ? "–" : "+"}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  >
                    <div className="px-5 pb-4 pt-0 text-sm text-[var(--text-muted)]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

