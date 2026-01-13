import { Logo } from "./Logo";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-6" />
            <p className="text-zinc-500 max-w-sm mb-8">
              The premier destination for elite athletes and those serious about their physical transformation. Built for the strong.
            </p>
            <div className="flex gap-6">
              <Instagram className="w-5 h-5 text-zinc-500 hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-zinc-500 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-zinc-500 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-zinc-500 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-display text-white text-xl mb-6 uppercase tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="hover:text-primary cursor-pointer transition-colors">Programs</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Membership</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Trainers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white text-xl mb-6 uppercase tracking-tight">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>+1 (555) 000-TITAN</li>
              <li>hello@titanbuild.com</li>
              <li>123 Iron St, NY</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
            © 2026 TITAN BUILD. Designed for Elite Performance.
          </p>
        </div>
      </div>
    </footer>
  );
}