"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MoveRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [
        number,
        number,
        number,
        number
      ],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video + Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] mb-6"
        >
          Established MMXXVI
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-6xl
           md:text-9xl font-black italic tracking-tighter leading-[0.85] mb-8"
        >

          UNLEASH YOUR

          <br />
          <span
            className="
      bg-gradient-to-r
     from-orange-200 via-orange-300  to-orange-400 group
      bg-clip-text text-transparent
      drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]
      italic
    "
          >
            INNER TITAN
          </span>
        </motion.h1>


        <motion.p
          variants={itemVariants}
          className="max-w-xl text-zinc-400 text-sm md:text-lg leading-relaxed mb-10 font-medium"
        >
          The most exclusive strength and conditioning facility in the city.
          Professional coaching, elite equipment, and a community of winners.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button className="bg-gradient-to-r
      from-orange-400 via-orange-500  to-orange-600 group flex items-center justify-center gap-2 px-10">
            Start Your Journey
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button variant="outline">View Programs</Button>
        </motion.div>
      </motion.div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-0 w-full hidden lg:block"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end border-l border-white/10 ml-6">
          <div className="pl-6">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-[10px] uppercase text-zinc-500 tracking-widest">
              Active Members
            </p>
          </div>

          <div className="pl-6 border-l border-white/10">
            <p className="text-3xl font-bold text-white">12+</p>
            <p className="text-[10px] uppercase text-zinc-500 tracking-widest">
              Elite Coaches
            </p>
          </div>

          <div className="pl-6 border-l border-white/10">
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="text-[10px] uppercase text-zinc-500 tracking-widest">
              Facility Access
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
