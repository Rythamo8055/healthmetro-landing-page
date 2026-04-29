"use client";

import Link from "next/link";
import { Activity, Home, Stethoscope, HeartHandshake, ClipboardList, Microscope, MessageSquare } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center pointer-events-none">
      <nav className="flex items-center gap-1.5 md:gap-2 px-3 py-2.5 md:px-4 md:py-3 bg-white/70 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] border border-primary/20 shadow-[0_20px_50px_rgba(2,116,115,0.15)] ring-1 ring-white/50 pointer-events-auto max-w-full overflow-x-auto no-scrollbar">
        
        {/* HM MOVE */}
        <Link href="/products/hm-move" className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM MOVE - Diagnostics">
          <div className="p-2 md:p-3 bg-primary/5 text-primary rounded-xl md:rounded-2xl transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <Activity className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 hidden md:group-hover:block transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            HM MOVE
          </span>
        </Link>

        {/* HM EASY */}
        <Link href="/products/hm-easy" className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM EASY - Home Collection">
          <div className="p-2 md:p-3 bg-primary/5 text-primary rounded-xl md:rounded-2xl transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <Home className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 hidden md:group-hover:block transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            HM EASY
          </span>
        </Link>

        {/* HM TRUST */}
        <Link href="/products/hm-trust" className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM TRUST - Consultation">
          <div className="p-2 md:p-3 bg-primary/5 text-primary rounded-xl md:rounded-2xl transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <Stethoscope className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 hidden md:group-hover:block transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            HM TRUST
          </span>
        </Link>

        {/* HM RELY */}
        <Link href="/products/hm-rely" className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM RELY - NRI Care">
          <div className="p-2 md:p-3 bg-primary/5 text-primary rounded-xl md:rounded-2xl transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <HeartHandshake className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 hidden md:group-hover:block transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            HM RELY
          </span>
        </Link>

        {/* HM OHR */}
        <Link href="/products/hm-ohr" className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM OHR - Health Records">
          <div className="p-2 md:p-3 bg-primary/5 text-primary rounded-xl md:rounded-2xl transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <ClipboardList className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 hidden md:group-hover:block transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            HM OHR
          </span>
        </Link>

        {/* HM CLIN */}
        <Link href="/products/hm-clin" className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM CLIN - Clinical Research">
          <div className="p-2 md:p-3 bg-primary/5 text-primary rounded-xl md:rounded-2xl transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <Microscope className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 hidden md:group-hover:block transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            HM CLIN
          </span>
        </Link>

        <div className="w-[1px] h-8 md:h-10 bg-primary/10 mx-0.5 md:mx-1 self-center flex-shrink-0" />

        {/* CTA */}
        <Link href="#contact" className="group relative flex flex-col items-center flex-shrink-0" aria-label="Book Services">
          <div className="p-2 md:p-3 bg-secondary text-white rounded-xl md:rounded-2xl transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-secondary group-hover:shadow-[0_10px_20px_rgba(217,114,52,0.3)] shadow-lg">
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 hidden md:group-hover:block transition-opacity bg-secondary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            Book Now
          </span>
        </Link>

      </nav>
    </header>
  );
}
