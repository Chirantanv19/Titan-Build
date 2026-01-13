"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/constants";
import { Quote } from "lucide-react";

export default function Testimonials() {
  // We double the array to create a seamless loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden border-y border-white/5">
      <div className="container px-6 mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black italic mb-4">
          TITAN <span className="text-primary">RESULTS</span>
        </h2>
      </div>

      <div className="flex relative">
        {/* Infinite Loop Container */}
        <motion.div
          className="flex whitespace-nowrap gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[450px] p-8 bg-surface border border-white/5 rounded-3xl flex-shrink-0"
            >
              <Quote className="text-primary w-8 h-8 mb-6 opacity-50" />
              <p className="text-lg md:text-xl text-white font-medium italic leading-relaxed whitespace-normal mb-8">
                "{item.quote}"
              </p>
              <div>
                <p className="text-white font-display text-xl tracking-tight uppercase">
                  {item.author}
                </p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for a Premium Look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}