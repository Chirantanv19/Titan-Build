"use client";

import { motion } from "framer-motion";
import { TRAINERS } from "@/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Instagram, Award, CheckCircle2 } from "lucide-react";

// export const metadata = {
//   title: "Elite Coaches | TITAN BUILD",
//   description: "Meet the world-class trainers at Titan Build who specialize in strength, speed, and recovery.",
// };

export default function CoachingPage() {
  return (
    <main className="bg-background pt-32 pb-24">
      {/* Page Header */}
      <section className="container px-6 mx-auto mb-24">
        <h1 className="text-7xl md:text-9xl font-black italic text-white uppercase leading-none mb-6">
          ELITE <span className="text-primary">COACHING</span>
        </h1>
        <p className="max-w-2xl text-zinc-500 text-lg uppercase tracking-widest">
          Science-backed training led by world-class athletes.
        </p>
      </section>

      {/* Trainer Showcase - Alternating Layout */}
      <section className="container px-6 mx-auto space-y-40">
        {TRAINERS.map((trainer, idx) => (
          <ScrollReveal key={trainer.name} width="100%">
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Trainer Image: High-Grit Portrait */}
              <div className="w-full lg:w-1/2 aspect-[4/5] relative overflow-hidden rounded-3xl group bg-zinc-900">
                {/* Placeholder for /public/trainers/trainer-name.jpg */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60" />
                <div className="w-full h-full bg-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              </div>

              {/* Trainer Details */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 text-primary mb-4">
                  <Award size={20} />
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">{trainer.role}</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black italic text-white mb-6 uppercase tracking-tighter">
                  {trainer.name}
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  With over 10 years of experience in {trainer.specialty}, {trainer.name.split(' ')[0]} 
                  has transformed hundreds of athletes using a data-driven approach to human performance.
                </p>

                {/* Technical Specs / Certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {["NASM Certified", "Nutrition Specialist", "Powerlifting Coach"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <CheckCircle2 className="text-primary w-4 h-4" />
                      {cert}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <button className="bg-primary text-black px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:shadow-glow transition-premium">
                    Book a Consult
                  </button>
                  <Instagram className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </section>
    </main>
  );
}