"use client";

import { motion } from "framer-motion";
import { PRICING } from "@/constants";
import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export default function Membership() {
  return (
    <section id="membership" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/[0.02] leading-none pointer-events-none select-none italic">
        TITAN
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-black italic mb-6">
            CHOOSE YOUR <span className="text-primary">LEVEL</span>
          </h2>
          <p className="text-zinc-400">
            No long-term contracts. No hidden fees. Just world-class training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={cn(
                "relative p-8 md:p-12 rounded-3xl border transition-premium",
                plan.isFeatured
                  ? "bg-primary border-primary shadow-[0_0_40px_rgba(226,255,59,0.15)]"
                  : "bg-background border-white/10 hover:border-white/20"
              )}
            >
              {plan.isFeatured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-xl">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className={cn(
                  "text-2xl font-display mb-2",
                  plan.isFeatured ? "text-black" : "text-white"
                )}>
                  {plan.name} Membership
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "text-6xl font-black italic",
                    plan.isFeatured ? "text-black" : "text-white"
                  )}>${plan.price}</span>
                  <span className={plan.isFeatured ? "text-black/60" : "text-zinc-500"}>/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={cn(
                      "w-5 h-5",
                      plan.isFeatured ? "text-black" : "text-primary"
                    )} />
                    <span className={cn(
                      "text-sm",
                      plan.isFeatured ? "text-black/80 font-medium" : "text-zinc-400"
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isFeatured ? "secondary" : "primary"}
                className="w-full py-6 text-sm"
              >
                Join Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}