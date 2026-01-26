"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  isLoading,
  ...props
}: ButtonProps) => {
  
  // Base styles for all buttons
  const baseStyles = "relative inline-flex items-center justify-center font-bold uppercase tracking-widest transition-premium overflow-hidden active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  // Variant definitions
  const variants = {
    primary: "bg-primary text-black hover:shadow-[0_0_25px_rgba(226,255,59,0.4)] border border-primary",
    secondary: "bg-white text-black hover:bg-zinc-200 border border-white",
    outline: "bg-transparent text-white border border-white/20 hover:border-primary hover:text-primary",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
  };

  // Size definitions
  const sizes = {
    sm: "px-4 py-2 text-[10px] rounded-lg",
    md: "px-8 py-4 text-xs rounded-xl",
    lg: "px-10 py-5 text-sm rounded-2xl",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {/* Subtle Shine Effect on Hover (Premium Touch) */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
      
      <span className="relative z-10 flex items-center gap-2">
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : null}
        {children}
      </span>
    </motion.button>
  );
};