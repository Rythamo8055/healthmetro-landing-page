"use client";

import Link from "next/link";
import { Activity, Home, Stethoscope, HeartHandshake, ClipboardList, Microscope, MessageSquare, Info, Phone } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Header() {
  const { openModal } = useModal();
  return (
    <header className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center pointer-events-none">
      <div className="relative pointer-events-auto max-w-full">
        <nav className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-6 md:py-4 bg-white/80 backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3rem] border border-primary/20 shadow-[0_25px_60px_rgba(2,116,115,0.2)] ring-1 ring-white/50 overflow-x-auto no-scrollbar scroll-smooth">
          
          {/* HM MOVE */}
          <button onClick={() => openModal("product", "hm-move")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM MOVE - Diagnostics">
            <div className="p-3.5 md:p-4 bg-primary/5 text-primary rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(2,116,115,0.4)]">
              <Activity className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="absolute -top-14 opacity-0 hidden md:group-hover:block transition-all bg-primary text-white text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
              HM MOVE
            </span>
          </button>

          {/* HM EASY */}
          <button onClick={() => openModal("product", "hm-easy")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM EASY - Home Collection">
            <div className="p-3.5 md:p-4 bg-primary/5 text-primary rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(2,116,115,0.4)]">
              <Home className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="absolute -top-14 opacity-0 hidden md:group-hover:block transition-all bg-primary text-white text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
              HM EASY
            </span>
          </button>

          {/* HM TRUST */}
          <button onClick={() => openModal("product", "hm-trust")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM TRUST - Consultation">
            <div className="p-3.5 md:p-4 bg-primary/5 text-primary rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(2,116,115,0.4)]">
              <Stethoscope className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="absolute -top-14 opacity-0 hidden md:group-hover:block transition-all bg-primary text-white text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
              HM TRUST
            </span>
          </button>

          <div className="w-[1.5px] h-10 md:h-12 bg-primary/10 mx-1 md:mx-2 self-center flex-shrink-0" />

          {/* CTA - Book */}
          <button onClick={() => openModal("contact")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="Book Appointment">
            <div className="p-3.5 md:p-4 bg-secondary text-white rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-secondary group-hover:shadow-[0_12px_24px_rgba(217,114,52,0.5)] shadow-xl">
              <Phone className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="absolute -top-14 opacity-0 hidden md:group-hover:block transition-all bg-secondary text-white text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
              Book Now
            </span>
          </button>

          <div className="w-[1.5px] h-10 md:h-12 bg-primary/10 mx-1 md:mx-2 self-center flex-shrink-0" />

          {/* HM RELY */}
          <button onClick={() => openModal("product", "hm-rely")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM RELY - NRI Care">
            <div className="p-3.5 md:p-4 bg-primary/5 text-primary rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(2,116,115,0.4)]">
              <HeartHandshake className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="absolute -top-14 opacity-0 hidden md:group-hover:block transition-all bg-primary text-white text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
              HM RELY
            </span>
          </button>

          {/* HM OHR */}
          <button onClick={() => openModal("product", "hm-ohr")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM OHR - Health Records">
            <div className="p-3.5 md:p-4 bg-primary/5 text-primary rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(2,116,115,0.4)]">
              <ClipboardList className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="absolute -top-14 opacity-0 hidden md:group-hover:block transition-all bg-primary text-white text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
              HM OHR
            </span>
          </button>

          {/* HM CLIN */}
          <button onClick={() => openModal("product", "hm-clin")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM CLIN - Clinical Research">
            <div className="p-3.5 md:p-4 bg-primary/5 text-primary rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(2,116,115,0.4)]">
              <Microscope className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="absolute -top-14 opacity-0 hidden md:group-hover:block transition-all bg-primary text-white text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
              HM CLIN
            </span>
          </button>

          {/* About */}
          <Link href="#about" className="group relative flex flex-col items-center flex-shrink-0" aria-label="About Health Metro">
            <div className="p-3.5 md:p-4 bg-primary/5 text-primary rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(2,116,115,0.4)]">
              <Info className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="absolute -top-14 opacity-0 hidden md:group-hover:block transition-all bg-primary text-white text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
              About Us
            </span>
          </Link>
        </nav>
        {/* Mobile Scroll Indicator (Fade) */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent pointer-events-none md:hidden rounded-r-[2.5rem]" />
      </div>
    </header>
  );
}
