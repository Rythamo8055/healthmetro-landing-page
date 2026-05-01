"use client";

import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openModal } = useModal();
  return (
    <footer className="bg-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Pre-Footer CTA */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to prioritize your health?</h3>
            <p className="text-white/60">Book an appointment or a home collection today.</p>
          </div>
          <button
            onClick={() => openModal("contact")}
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/20 whitespace-nowrap"
          >
            Book an Appointment
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Health Metro Logo" width={120} height={40} className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Affordable, accessible diagnostics and healthcare services — delivered at
              home, at our centres, or through a trusted doctor referral.
            </p>
          </div>

          {/* Company nav */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-secondary">Company</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><button onClick={() => openModal("contact")} className="hover:text-secondary transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services nav */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-secondary">Services</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><button onClick={() => openModal("product", "hm-move")} className="hover:text-secondary transition-colors">HM Move – Diagnostics</button></li>
              <li><button onClick={() => openModal("product", "hm-easy")} className="hover:text-secondary transition-colors">HM Easy – Home Collection</button></li>
              <li><button onClick={() => openModal("product", "hm-trust")} className="hover:text-secondary transition-colors">HM Trust – Consultation</button></li>
              <li><button onClick={() => openModal("product", "hm-rely")} className="hover:text-secondary transition-colors">HM Rely – NRI Care</button></li>
              <li><button onClick={() => openModal("product", "hm-ohr")} className="hover:text-secondary transition-colors">HM OHR – Health Records</button></li>
              <li><button onClick={() => openModal("product", "hm-clin")} className="hover:text-secondary transition-colors">HM Clin – Clinical Research</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-sm font-medium text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="text-sm text-white/20 font-bold">
            © 2026 Health Metro. Connecting Health Globally.
          </div>
        </div>
      </div>
    </footer>
  );
}
