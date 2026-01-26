"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProgramProps {
  title: string;
  description: string;
  tag: string;
  index: number;
}

export const ProgramCard = ({ title, description, tag, index }: ProgramProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-8 bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-500"
    >
      {/* Background Glow Effect */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-colors" />
      
      <div className="relative z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
          {tag}
        </span>
        <h3 className="text-3xl font-display text-white mt-4 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors cursor-pointer">
          Learn More <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};