"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FACILITY_ZONES } from "@/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MoveDown, ShieldCheck } from "lucide-react";

export default function FacilityPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="bg-background">
      {/* 1. ARCHITECTURAL HERO */}
      {/* Image: Wide-angle shot of the main gym floor with equipment, dramatic lighting */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="w-full h-full bg-[url('/facility/hero-wide.jpg')] bg-cover bg-center grayscale" />
        </div>

        <div className="container relative z-20 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[15vw] font-black italic text-white/10 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
          >
            PRECISION
          </motion.h1>
          <h1 className="text-6xl md:text-9xl font-black italic text-white uppercase tracking-tighter">
            THE <span className="text-primary text-glow">ARSENAL</span>
          </h1>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs">Scroll to Explore</p>
            <MoveDown className="text-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. EQUIPMENT ZONES (The "Big" Content) */}
      {/* Zone Images: 
        - Zone 0: Strength training equipment (barbells, racks, platforms)
        - Zone 1: Cardio area (treadmills, rowing machines, bikes)
        - Zone 2: Functional training space (kettlebells, cables, rigs)
        - Zone 3: Recovery zone (stretching, mobility, rest area)
      */}
      <section className="py-32 container mx-auto px-6">
        {FACILITY_ZONES.map((zone, idx) => (
          <div key={zone.id} className="mb-40 last:mb-0">
            <div className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              {/* IMAGE CONTAINER WITH TEXTURE OVERLAY */}
              <div className="w-full lg:w-3/5 aspect-video relative group overflow-hidden rounded-3xl bg-zinc-900">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img
                  src={idx === 0 ? "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&h=450&fit=crop" :
                    idx === 1 ? "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=450&fit=crop" :
                      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop"}
                  alt={zone.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute bottom-6 right-6 z-20">
                  <span className="text-white/20 font-display text-8xl italic select-none">0{idx + 1}</span>
                </div>
              </div>

              {/* TECHNICAL SPECS */}
              <div className="w-full lg:w-2/5">
                <ScrollReveal>
                  <h2 className="text-4xl md:text-6xl font-black italic text-white mb-6 uppercase leading-none">
                    {zone.title}
                  </h2>
                  <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    {zone.description}
                  </p>
                  <ul className="space-y-4">
                    {zone.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-3 border-b border-white/5 pb-4">
                        <ShieldCheck className="text-primary w-5 h-5 shrink-0" />
                        <span className="text-zinc-300 font-medium uppercase text-xs tracking-widest">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. BENTO BRANDING GRID (Final Polish) */}
      {/* Championship image: Professional athlete or competitive training moment */}
      <section className="pb-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
          <div className="md:col-span-2 bg-zinc-900 rounded-3xl flex flex-col justify-end p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/facility/details-1.jpg')] bg-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700" />
            <h3 className="relative z-10 text-4xl font-display italic text-white">CHAMPIONSHIP STANDARDS</h3>
          </div>
          <div className="bg-primary rounded-3xl p-10 flex flex-col justify-between text-black">
            <ShieldCheck size={40} />
            <p className="font-bold text-xl leading-tight">CERTIFIED BY WORLD FEDERATION OF ATHLETES</p>
          </div>
          <div className="bg-surface rounded-3xl p-10 border border-white/10 flex items-center justify-center">
            <p className="text-center text-zinc-500 italic">"The equipment is the tool; the discipline is the weapon."</p>
          </div>
        </div>
      </section>
    </main>
  );
}