// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility for merging tailwind classes efficiently.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
