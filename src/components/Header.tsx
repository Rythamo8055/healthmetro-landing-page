"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Health<span className="text-primary">Metro</span>
          </span>
        </Link>

        {/* Mobile Menu Button - Large for accessibility */}
        <button 
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
          <Link 
            href="#join" 
            className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Join Now
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link onClick={() => setIsOpen(false)} href="#services" className="text-lg font-medium text-foreground">Services</Link>
          <Link onClick={() => setIsOpen(false)} href="#testimonials" className="text-lg font-medium text-foreground">Testimonials</Link>
          <Link onClick={() => setIsOpen(false)} href="#faq" className="text-lg font-medium text-foreground">FAQ</Link>
          <Link 
            onClick={() => setIsOpen(false)} 
            href="#join" 
            className="w-full py-4 bg-primary text-white rounded-xl text-center font-bold"
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}
