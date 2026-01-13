"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-7 w-full z-50 transition-all duration-300 px-6 py-2",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-xs uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <Button className="py-2 px-6 rounded-full text-[10px]">Enquire</Button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={cn("w-6 h-0.5 bg-white transition-all", mobileMenuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("w-6 h-0.5 bg-white transition-all", mobileMenuOpen && "opacity-0")} />
          <span className={cn("w-6 h-0.5 bg-white transition-all", mobileMenuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/5 py-4 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-4 py-2 rounded-full text-[10px]">Enquire</Button>
        </div>
      )}
    </nav>
  );
}