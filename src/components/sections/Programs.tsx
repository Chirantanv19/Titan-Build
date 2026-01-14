import { PROGRAMS } from "@/constants";
import { ProgramCard } from "../ui/ProgramCard";

export default function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-background">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black italic mb-6 leading-none">
              PUSH YOUR <span className=" bg-gradient-to-r
     from-orange-300 via-orange-400  to-orange-500 group">LIMITS</span>
            </h2>
            <p className="text-zinc-400 uppercase tracking-widest text-sm">
              Tailored training regimes for elite results.
            </p>
          </div>

          <div className="hidden md:block h-[1px] flex-grow bg-white/10 mx-12 mb-4" />

          <p className="text-zinc-500 text-sm max-w-[200px] leading-relaxed italic">
            "The only bad workout is the one that didn't happen."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMS.map((program, idx) => (
            <ProgramCard
              key={program.id}
              index={idx}
              {...program}
            />
          ))}
        </div>
      </div>
    </section>
  );
}