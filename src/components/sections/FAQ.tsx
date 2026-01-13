"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/constants";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic mb-4 uppercase">
            Common <span className="text-primary">Questions</span>
          </h2>
          <p className="text-zinc-500 uppercase tracking-widest text-xs">
            Everything you need to know before you start.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="border-b border-white/10 last:border-0"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={cn(
                  "text-lg md:text-xl font-display uppercase tracking-tight transition-colors",
                  activeIndex === idx ? "text-primary" : "text-white group-hover:text-zinc-400"
                )}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className={cn(
                    "p-2 rounded-full",
                    activeIndex === idx ? "bg-primary text-black" : "bg-surface text-white"
                  )}
                >
                  <Plus className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-zinc-400 leading-relaxed text-sm md:text-base max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}