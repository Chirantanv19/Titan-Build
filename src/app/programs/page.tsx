"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROGRAMS } from "@/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Activity, Zap, ShieldAlert } from "lucide-react";

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState(PROGRAMS[0]);

  return (
    <main className="bg-background pt-32 pb-24">
      <div className="container px-6 mx-auto">
        {/* Header Section */}
        <section className="mb-20">
          <ScrollReveal>
            <h1 className="text-7xl md:text-9xl font-black italic text-white uppercase leading-none mb-8">
              THE <span className="text-primary">METHOD</span>
            </h1>
            <p className="max-w-2xl text-zinc-500 text-lg uppercase tracking-[0.2em] leading-relaxed">
              We don't guess. We measure. Our programs are engineered for human evolution.
            </p>
          </ScrollReveal>
        </section>

        {/* Interactive Selector */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Program Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {PROGRAMS.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveTab(program)}
                className={`w-full text-left p-8 rounded-2xl border transition-all duration-500 group ${
                  activeTab.id === program.id 
                  ? "bg-primary border-primary text-black" 
                  : "bg-surface border-white/5 text-white hover:border-white/20"
                }`}
              >
                <p className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${activeTab.id === program.id ? "text-black/60" : "text-primary"}`}>
                  {program.focus}
                </p>
                <h3 className="text-2xl font-black italic uppercase italic">{program.title}</h3>
              </button>
            ))}
          </div>

          {/* Right: Program Details Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-surface border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                  <div>
                    <h2 className="text-4xl font-black italic text-white uppercase mb-6 italic">Overview</h2>
                    <p className="text-zinc-400 leading-relaxed mb-8">{activeTab.description}</p>
                    
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-4">Core Benefits</h4>
                    <ul className="space-y-3">
                      {activeTab.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-zinc-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Program Data Visualization */}
                  <div className="space-y-8 bg-black/40 p-8 rounded-2xl border border-white/5">
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6 text-center">Program Intensity Map</h4>
                    
                    {Object.entries(activeTab.metrics).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between text-[10px] uppercase font-bold tracking-tighter text-zinc-500">
                          <span>{key}</span>
                          <span className="text-primary">{value}%</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Background Decor */}
                <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                  <Activity size={300} className="text-white" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </main>
  );
}