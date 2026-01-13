import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <Link href="/">
    <div
      className={cn(
        "flex items-center select-none group overflow-hidden",
        className
      )}
      style={{ position: 'relative' }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        className="
          w-[250px] h-[250px]  " 
     
      />
    </div>
  </Link>
);
