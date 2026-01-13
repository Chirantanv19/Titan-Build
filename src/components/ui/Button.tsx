"use client";

import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonVariants = "primary" | "secondary" | "outline" | "ghost";
type ButtonSizes = "sm" | "md" | "lg";

type ButtonProps = PropsWithChildren<
  {
    variant?: ButtonVariants;
    size?: ButtonSizes;
    isLoading?: boolean;
  } & Omit<HTMLMotionProps<"button">, "children">
>;

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  isLoading,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-bold uppercase tracking-widest overflow-hidden active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 ease-out";

  const variants: Record<ButtonVariants, string> = {
    primary:
      "bg-primary text-black hover:shadow-[0_0_25px_rgba(226,255,59,0.4)] border border-primary",
    secondary:
      "bg-white text-black hover:bg-zinc-200 border border-white",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-primary hover:text-primary",
    ghost:
      "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
  };

  const sizes: Record<ButtonSizes, string> = {
    sm: "px-4 py-2 text-[10px] rounded-lg",
    md: "px-8 py-4 text-xs rounded-xl",
    lg: "px-10 py-5 text-sm rounded-2xl",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group",
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Shine effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

      <span className="relative z-10 flex items-center gap-2">
        {isLoading && (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </span>
    </motion.button>
  );
};
