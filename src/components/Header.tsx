"use client";

import Link from "next/link";
import Image from "next/image";
import { Stethoscope, MessageSquare, HeartPulse, Activity } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-end gap-3 px-6 py-4 bg-white/70 backdrop-blur-2xl rounded-[2.5rem] border border-primary/20 shadow-[0_20px_50px_rgba(2,116,115,0.15)] ring-1 ring-white/50">
        
        <Link href="/" className="group relative flex flex-col items-center" aria-label="Go to Homepage">
          <div className="p-3 bg-primary/10 rounded-2xl transition-all duration-300 group-hover:scale-[1.3] group-hover:-translate-y-4 group-hover:bg-primary group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <Image 
              src="/logo.png" 
              alt="Health Metro Logo" 
              width={28}
              height={28}
              className="w-7 h-7 object-contain transition-all group-hover:brightness-0 group-hover:invert"
              priority
            />
          </div>
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            Home
          </span>
        </Link>

        <div className="w-[1px] h-10 bg-primary/10 mx-1 self-center" />

        <Link href="#features" className="group relative flex flex-col items-center" aria-label="View Features">
          <div className="p-3 bg-primary/5 text-primary rounded-2xl transition-all duration-300 group-hover:scale-[1.3] group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <HeartPulse className="w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            Features
          </span>
        </Link>

        <Link href="#solutions" className="group relative flex flex-col items-center" aria-label="View Solutions">
          <div className="p-3 bg-primary/5 text-primary rounded-2xl transition-all duration-300 group-hover:scale-[1.3] group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <Activity className="w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            Solutions
          </span>
        </Link>

        <Link href="#faq" className="group relative flex flex-col items-center" aria-label="Frequently Asked Questions">
          <div className="p-3 bg-primary/5 text-primary rounded-2xl transition-all duration-300 group-hover:scale-[1.3] group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(2,116,115,0.3)]">
            <MessageSquare className="w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            FAQ
          </span>
        </Link>

        <div className="w-[1px] h-10 bg-primary/10 mx-1 self-center" />

        <Link href="#contact" className="group relative flex flex-col items-center" aria-label="Get Started">
          <div className="p-3 bg-secondary text-white rounded-2xl transition-all duration-300 group-hover:scale-[1.3] group-hover:-translate-y-4 group-hover:bg-secondary group-hover:shadow-[0_10px_20px_rgba(217,114,52,0.3)] shadow-lg">
            <Stethoscope className="w-7 h-7" strokeWidth={2} aria-hidden="true" />
          </div>
          <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg">
            Get Started
          </span>
        </Link>

      </nav>
    </header>
  );
}
