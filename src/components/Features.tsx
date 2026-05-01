"use client";

import { useState } from "react";
import { useModal } from "@/context/ModalContext";

const services = [
  {
    id: "hm-move",
    name: "HM MOVE",
    title: "Diagnostics & Preventive Testing",
    description: "The primary entry service for comprehensive diagnostic testing and preventive healthcare. Book tests for yourself, family members, or parents.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    color: "bg-primary/10 text-primary",
    accent: "border-primary/20 hover:border-primary/50",
    badge: "bg-primary text-white",
    features: [
      "Browse 500+ diagnostic categories",
      "Book for self, family, or parents",
      "Home Collection or Lab Visit",
      "Auto-upload to Health Records",
    ],
    href: "/products/hm-move",
    span: "md:col-span-2",
  },
  {
    id: "hm-easy",
    name: "HM EASY",
    title: "Home Sample Collection",
    description: "Get samples collected from your home by certified professionals. No travel, no waiting rooms.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    color: "bg-secondary/10 text-secondary",
    accent: "border-secondary/20 hover:border-secondary/50",
    badge: "bg-secondary text-white",
    features: [
      "Convenient time slots",
      "Certified phlebotomists",
      "Strict hygiene protocols",
      "Direct lab integration",
    ],
    href: "/products/hm-easy",
    span: "md:col-span-1",
  },
  {
    id: "hm-trust",
    name: "HM TRUST",
    title: "Doctor Consultation",
    description: "Consult top specialists online or book a Doctor-at-Home visit. Get prescriptions and test recommendations digitally.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    color: "bg-primary/10 text-primary",
    accent: "border-primary/20 hover:border-primary/50",
    badge: "bg-primary text-white",
    features: [
      "Verified specialist doctors",
      "Online or Doctor-at-Home",
      "Digital prescriptions",
      "Follow-up on reports",
    ],
    href: "/products/hm-trust",
    span: "md:col-span-1",
  },
  {
    id: "hm-rely",
    name: "HM RELY",
    title: "NRI Parent Care",
    description: "Dedicated healthcare management for NRIs managing health for parents in India. Real-time notifications, records access, and full service booking — from anywhere in the world.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    color: "bg-secondary/10 text-secondary",
    accent: "border-secondary/20 hover:border-secondary/50",
    badge: "bg-secondary text-white",
    features: [
      "Manage parents from abroad",
      "Book any service for them",
      "Real-time health notifications",
      "Instant records access",
    ],
    href: "/products/hm-rely",
    span: "md:col-span-2",
  },
  {
    id: "hm-ohr",
    name: "HM OHR",
    title: "Digital Health Records",
    description: "All your family's reports and medical history — secure, centralised, always accessible.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    color: "bg-primary/10 text-primary",
    accent: "border-primary/20 hover:border-primary/50",
    badge: "bg-primary text-white",
    features: [
      "Auto-upload after every test",
      "View, download & share",
      "All family members in one place",
      "Complete health history",
    ],
    href: "/products/hm-ohr",
    span: "md:col-span-1",
  },
  {
    id: "hm-clin",
    name: "HM CLIN",
    title: "Clinical Research",
    description: "Discover and participate in global clinical studies. Contribute to medical advances safely.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5m4 0h4m2 0v4a2 2 0 0 1-2 2H9m4-6h4m0 0V9m0 4v4a2 2 0 0 1-2 2h-2" />
      </svg>
    ),
    color: "bg-secondary/10 text-secondary",
    accent: "border-secondary/20 hover:border-secondary/50",
    badge: "bg-secondary text-white",
    features: [
      "Browse live studies",
      "Read full study details",
      "Simple application process",
      "Contribute to research safely",
    ],
    href: "/products/hm-clin",
    span: "md:col-span-1",
  },
];

export default function Features() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { openModal } = useModal();

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Everything You Need, <span className="text-primary">In One Place</span>
          </h2>
          <p className="text-lg text-foreground opacity-60 max-w-2xl mx-auto">
            Six integrated services — from diagnostics to doctor consultations — built to make healthcare simple for every Indian family.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`
                group relative bg-surface rounded-3xl border p-8 transition-all duration-300
                cursor-pointer overflow-hidden
                ${service.accent} ${service.span}
                ${activeId === service.id ? "shadow-xl scale-[1.01]" : "shadow-sm hover:shadow-lg hover:scale-[1.005]"}
              `}
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl ${service.color.replace('text-', 'bg-').split(' ')[0]} opacity-30`} />
              </div>

              {/* Badge + Icon row */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${service.badge}`}>
                  {service.name}
                </span>
                <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>

              {/* Title + Description */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-foreground opacity-60 leading-relaxed text-sm md:text-base mb-6">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground opacity-70">
                    <span className={`flex-shrink-0 w-4 h-4 rounded-full ${service.badge} flex items-center justify-center`}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => openModal("product", service.id)}
                className={`inline-flex items-center gap-2 text-sm font-bold transition-all ${service.color.split(" ")[1]} hover:gap-3`}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => openModal("contact")}
            className="inline-flex items-center gap-3 px-8 py-5 bg-secondary text-white rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/20"
          >
            Book an Appointment
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
