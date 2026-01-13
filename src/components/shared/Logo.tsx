import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <Link href="/">
    <div className={cn("flex items-center gap-2 select-none group", className)}>
      {/* <div className="w-8 h-8 bg-primary rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" /> */}
      <img src="/logo.png" alt="Logo" className="w-40 h-40 rounded-sm group-hover:rotate-90 transition-transform duration-500" />
      {/* <span className="font-display text-2xl italic font-black tracking-tighter text-white">
        TITAN <span className="text-primary">BUILD</span>
      </span> */}
    </div>
  </Link>
);