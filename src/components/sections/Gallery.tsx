"use client";

import { ScrollReveal } from "../ui/ScrollReveal";

export default function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
          
          <div className="md:col-span-2 md:row-span-2 bg-zinc-900 rounded-3xl overflow-hidden relative group">
             <div className="absolute inset-0 bg-[url('/gym-1.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
             <p className="absolute bottom-8 left-8 font-display text-3xl italic">Main Floor</p>
          </div>

          <div className="md:col-span-2 bg-zinc-800 rounded-3xl overflow-hidden relative group">
             <div className="absolute inset-0 bg-[url('/gym-2.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
             <p className="absolute bottom-6 left-6 font-display text-2xl italic">Recovery Zone</p>
          </div>

          <div className="bg-primary rounded-3xl flex items-center justify-center p-8 text-black group overflow-hidden relative">
             <span className="font-display text-6xl rotate-12 group-hover:rotate-0 transition-transform duration-500">TITAN</span>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden relative group">
             <div className="absolute inset-0 bg-[url('/gym-3.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
          </div>

        </div>
      </div>
    </section>
  );
}