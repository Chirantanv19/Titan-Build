"use client";

import { motion } from "framer-motion";
import { TRAINERS } from "@/constants";
import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 md:py-32 bg-background">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic mb-4">
            ELITE <span className=" bg-gradient-to-r
     from-orange-300 via-orange-400  to-orange-500 group">COACHES</span>
          </h2>
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm font-medium">
            Learn from the best to become your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900"
            >
              {/* Trainer Image - Use object-cover for high-quality framing */}
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100">
                {/* Note: Using a placeholder div here. 
                  In production, use <Image /> with a real source. 
                */}
                <div className="w-full h-full bg-zinc-800" />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-[10px] uppercase tracking-widest font-bold mb-2">
                  {trainer.role}
                </p>
                <h3 className="text-3xl font-display text-white mb-2 italic">
                  {trainer.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {trainer.specialty}
                </p>

                {/* Social Micro-links */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <Instagram className="w-5 h-5 text-white hover:text-primary cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 text-white hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}