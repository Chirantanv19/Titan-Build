"use client";

import { motion } from "framer-motion";
import { PRICING, FAQS } from "@/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Check, X, ShieldCheck, Zap, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MembershipPage() {
  return (
    <main className="bg-background pt-32 pb-24">
      {/* 1. HERO & HOOK */}
      <section className="container px-6 mx-auto mb-24 text-center">
        <ScrollReveal>
          <h1 className="text-7xl md:text-9xl font-black italic text-white uppercase leading-none mb-6">
            CHOOSE YOUR <span className="text-primary text-glow">RANK</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-500 text-lg uppercase tracking-widest leading-relaxed">
            Transparent pricing. Zero hidden fees. Elite performance.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. PRICING CARDS */}
      <section className="container px-6 mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -10 }}
              className={cn(
                "p-10 rounded-3xl border flex flex-col transition-premium relative overflow-hidden",
                plan.isFeatured 
                  ? "bg-primary border-primary shadow-[0_0_50px_rgba(226,255,59,0.1)]" 
                  : "bg-surface border-white/5"
              )}
            >
              {plan.isFeatured && (
                <div className="absolute top-6 right-6 bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Best Value
                </div>
              )}

              <div className="mb-8">
                <h3 className={cn("text-3xl font-display mb-2 uppercase italic", plan.isFeatured ? "text-black" : "text-white")}>
                  {plan.name} Plan
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-7xl font-black italic", plan.isFeatured ? "text-black" : "text-white")}>
                    ${plan.price}
                  </span>
                  <span className={cn("text-sm uppercase font-bold", plan.isFeatured ? "text-black/60" : "text-zinc-500")}>
                    / Month
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={cn("w-5 h-5 shrink-0 mt-0.5", plan.isFeatured ? "text-black" : "text-primary")} />
                    <span className={cn("text-sm font-medium", plan.isFeatured ? "text-black/80" : "text-zinc-300")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isFeatured ? "secondary" : "primary"} 
                className="w-full py-6 text-sm"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE COMPARISON MATRIX (The "Big Project" Touch) */}
      <section className="container px-6 mx-auto mb-32 overflow-x-auto">
        <div className="min-w-[600px] bg-surface rounded-3xl border border-white/5 p-8 md:p-12">
          <h2 className="text-4xl font-display italic text-white mb-10 uppercase">Benefit Comparison</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 text-zinc-500 text-[10px] uppercase tracking-[0.2em]">
                <th className="pb-6">Service Area</th>
                <th className="pb-6">Base Plan</th>
                <th className="pb-6">Elite Plan</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              {[
                { label: "24/7 Facility Access", base: false, elite: true },
                { label: "Guest Passes (1/mo)", base: false, elite: true },
                { label: "Towel Service", base: true, elite: true },
                { label: "Locker Room Access", base: true, elite: true },
                { label: "Cold Plunge & Sauna", base: false, elite: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-6 text-sm font-medium">{row.label}</td>
                  <td className="py-6">{row.base ? <Check className="text-primary w-5 h-5" /> : <X className="text-zinc-800 w-5 h-5" />}</td>
                  <td className="py-6">{row.elite ? <Check className="text-primary w-5 h-5" /> : <X className="text-zinc-800 w-5 h-5" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. THE GUARANTEE */}
      <section className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Secure Billing", desc: "PCI compliant payment processing." },
            { icon: Zap, title: "Instant Access", desc: "Get your digital key immediately." },
            { icon: Info, title: "30-Day Freeze", desc: "Pause membership for travel easily." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <item.icon className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="text-white font-display text-lg uppercase tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}