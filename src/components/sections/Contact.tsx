"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <div>
            <h2 className="text-5xl md:text-7xl font-black italic mb-8 uppercase">
              Ready to <span className="text-primary">Ascend?</span>
            </h2>
            <p className="text-zinc-400 mb-12 max-w-md">
              Visit our facility for a tour or drop us a message to start your elite training journey today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background border border-white/5 rounded-xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-display text-xl uppercase">Location</p>
                  <p className="text-zinc-500 text-sm">123 Iron Street, Forge District, NY</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-background border border-white/5 rounded-xl text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-display text-xl uppercase">Hours</p>
                  <p className="text-zinc-500 text-sm">Mon-Fri: 5am - 12pm | Sat-Sun: 7am - 10pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-surface border border-white/5 rounded-xl px-4 py-4 text-white focus:border-primary/50 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-surface border border-white/5 rounded-xl px-4 py-4 text-white focus:border-primary/50 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Interest</label>
                <select className="w-full bg-surface border border-white/5 rounded-xl px-4 py-4 text-white focus:border-primary/50 outline-none transition-all appearance-none">
                  <option>Strength Training</option>
                  <option>Cardio Conditioning</option>
                  <option>Personal Coaching</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Message</label>
                <textarea rows={4} placeholder="Tell us your goals..." className="w-full bg-surface border border-white/5 rounded-xl px-4 py-4 text-white focus:border-primary/50 outline-none transition-all resize-none"></textarea>
              </div>
              <Button className="w-full py-5">Send Enquiry</Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}