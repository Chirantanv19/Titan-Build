"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-xs uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <Button className="py-2 px-6 rounded-full text-[10px]">Enquire</Button>
        </div>
      </div>
    </nav>
  );
}