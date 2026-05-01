"use client";

import { Activity, Home, Stethoscope, HeartHandshake, ClipboardList, Microscope, Phone } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const SERVICES = [
  { id: "hm-move",  Icon: Activity,      label: "HM MOVE" },
  { id: "hm-easy",  Icon: Home,          label: "HM EASY" },
  { id: "hm-trust", Icon: Stethoscope,   label: "HM TRUST" },
  { id: "hm-rely",  Icon: HeartHandshake,label: "HM RELY" },
  { id: "hm-ohr",   Icon: ClipboardList, label: "HM OHR" },
  { id: "hm-clin",  Icon: Microscope,    label: "HM CLIN" },
] as const;

export default function Header() {
  const { openModal } = useModal();

  return (
    <header className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-16px)] max-w-lg flex justify-center pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto w-full flex items-center justify-around px-3 py-2.5 bg-white/90 backdrop-blur-xl rounded-[2rem] border border-primary/15 shadow-[0_8px_32px_rgba(2,116,115,0.18)] ring-1 ring-white/60"
      >
        {/* Left 3 services */}
        {SERVICES.slice(0, 3).map(({ id, Icon, label }) => (
          <button
            key={id}
            onClick={() => openModal("product", id)}
            aria-label={label}
            className="flex flex-col items-center gap-1 p-2 rounded-xl text-primary active:bg-primary/10 transition-colors duration-150"
          >
            <Icon className="w-[22px] h-[22px]" strokeWidth={1.75} />
            <span className="text-[9px] font-bold tracking-wide uppercase leading-none opacity-70">{label.replace("HM ", "")}</span>
          </button>
        ))}

        {/* Divider */}
        <div className="w-px h-9 bg-primary/10 flex-shrink-0" />

        {/* Centre CTA */}
        <button
          onClick={() => openModal("contact")}
          aria-label="Book Appointment"
          className="flex flex-col items-center gap-1 p-2 rounded-xl active:opacity-80 transition-opacity duration-150"
        >
          <div className="bg-secondary rounded-xl p-2 shadow-md">
            <Phone className="w-[22px] h-[22px] text-white" strokeWidth={2} />
          </div>
          <span className="text-[9px] font-bold tracking-wide uppercase leading-none text-secondary">Book</span>
        </button>

        {/* Divider */}
        <div className="w-px h-9 bg-primary/10 flex-shrink-0" />

        {/* Right 3 services */}
        {SERVICES.slice(3).map(({ id, Icon, label }) => (
          <button
            key={id}
            onClick={() => openModal("product", id)}
            aria-label={label}
            className="flex flex-col items-center gap-1 p-2 rounded-xl text-primary active:bg-primary/10 transition-colors duration-150"
          >
            <Icon className="w-[22px] h-[22px]" strokeWidth={1.75} />
            <span className="text-[9px] font-bold tracking-wide uppercase leading-none opacity-70">{label.replace("HM ", "")}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
