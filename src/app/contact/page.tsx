"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-background pt-32 pb-24">
      <div className="container px-6 mx-auto">
        
        {/* 1. HEADER SECTION */}
        <section className="mb-20">
          <ScrollReveal>
            <h1 className="text-7xl md:text-9xl font-black italic text-white uppercase leading-none mb-8">
              JOIN THE <span className="text-primary">TITANS</span>
            </h1>
            <p className="max-w-2xl text-zinc-500 text-lg uppercase tracking-[0.2em] leading-relaxed">
              Experience the facility. Meet the coaches. Start your transformation.
            </p>
          </ScrollReveal>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 2. LEFT: CONTACT INFO & MAP PLACEHOLDER */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-white/5 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-display text-xl uppercase italic mb-2">Location</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{SITE_CONFIG.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-white/5 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-display text-xl uppercase italic mb-2">Operating Hours</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{SITE_CONFIG.contact.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface border border-white/5 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-display text-xl uppercase italic mb-2">Direct Contact</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{SITE_CONFIG.contact.phone}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{SITE_CONFIG.contact.email}</p>
                </div>
              </div>
            </div>

            {/* MAP PLACEHOLDER (The "Senior" Design touch) */}
            <div className="aspect-square w-full rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair">
              <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/basic-v2/static/0/0/0.png')] bg-cover bg-center opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="p-4 bg-primary text-black rounded-full animate-pulse">
                    <MapPin size={32} />
                 </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/10">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest text-center">Interactive Map coming soon</p>
              </div>
            </div>
          </div>

          {/* 3. RIGHT: THE PREMIUM ENQUIRY FORM */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px]" />

              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">First Name</label>
                    <input type="text" className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-zinc-700" placeholder="Titan" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Last Name</label>
                    <input type="text" className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-zinc-700" placeholder="User" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Email Address</label>
                  <input type="email" className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-zinc-700" placeholder="strength@titanbuild.com" />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Service Interest</label>
                  <select className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                    <option>Strength & Conditioning</option>
                    <option>Personal Coaching</option>
                    <option>Recovery Lab Access</option>
                    <option>Facility Tour</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Message</label>
                  <textarea rows={5} className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all resize-none placeholder:text-zinc-700" placeholder="Tell us about your goals..."></textarea>
                </div>

                <Button className="w-full py-6 group">
                  Send Message
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}