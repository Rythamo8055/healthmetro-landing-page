"use client";

import { Activity, Home, Stethoscope, HeartHandshake, ClipboardList, Microscope, Phone } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const DOCK_ITEM_CLS =
  "group relative flex flex-col items-center flex-shrink-0";

const ICON_BASE =
  "p-2.5 sm:p-3 md:p-3.5 bg-primary/5 text-primary rounded-xl sm:rounded-2xl transition-all duration-300 " +
  "active:scale-95 md:group-hover:scale-[1.3] md:group-hover:-translate-y-4 " +
  "md:group-hover:bg-primary md:group-hover:text-white md:group-hover:shadow-[0_12px_24px_rgba(2,116,115,0.4)]";

const TOOLTIP_CLS =
  "absolute -top-12 opacity-0 hidden md:group-hover:block bg-primary text-white text-[10px] uppercase " +
  "tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-xl border border-white/20";

const ICON_SIZE = "w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6";

export default function Header() {
  const { openModal } = useModal();

  return (
    <header className="fixed bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 z-50 w-auto px-3 flex justify-center pointer-events-none">
      <div className="relative pointer-events-auto">
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 bg-white/85 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] border border-primary/20 shadow-[0_20px_50px_rgba(2,116,115,0.18)] ring-1 ring-white/50"
        >
          {/* HM MOVE */}
          <button onClick={() => openModal("product", "hm-move")} className={DOCK_ITEM_CLS} aria-label="HM MOVE – Diagnostics">
            <div className={ICON_BASE}>
              <Activity className={ICON_SIZE} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={TOOLTIP_CLS}>HM MOVE</span>
          </button>

          {/* HM EASY */}
          <button onClick={() => openModal("product", "hm-easy")} className={DOCK_ITEM_CLS} aria-label="HM EASY – Home Collection">
            <div className={ICON_BASE}>
              <Home className={ICON_SIZE} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={TOOLTIP_CLS}>HM EASY</span>
          </button>

          {/* HM TRUST */}
          <button onClick={() => openModal("product", "hm-trust")} className={DOCK_ITEM_CLS} aria-label="HM TRUST – Consultation">
            <div className={ICON_BASE}>
              <Stethoscope className={ICON_SIZE} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={TOOLTIP_CLS}>HM TRUST</span>
          </button>

          {/* Divider */}
          <div className="w-px h-8 md:h-10 bg-primary/15 mx-0.5 sm:mx-1 self-center flex-shrink-0" aria-hidden="true" />

          {/* CTA – Book Now (centre) */}
          <button
            onClick={() => openModal("contact")}
            className={DOCK_ITEM_CLS}
            aria-label="Book Appointment"
          >
            <div className="p-2.5 sm:p-3 md:p-3.5 bg-secondary text-white rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg active:scale-95 md:group-hover:scale-[1.3] md:group-hover:-translate-y-4 md:group-hover:shadow-[0_12px_24px_rgba(217,114,52,0.5)]">
              <Phone className={ICON_SIZE} strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="absolute -top-12 opacity-0 hidden md:group-hover:block bg-secondary text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-xl border border-white/20">
              Book Now
            </span>
          </button>

          {/* Divider */}
          <div className="w-px h-8 md:h-10 bg-primary/15 mx-0.5 sm:mx-1 self-center flex-shrink-0" aria-hidden="true" />

          {/* HM RELY */}
          <button onClick={() => openModal("product", "hm-rely")} className={DOCK_ITEM_CLS} aria-label="HM RELY – NRI Care">
            <div className={ICON_BASE}>
              <HeartHandshake className={ICON_SIZE} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={TOOLTIP_CLS}>HM RELY</span>
          </button>

          {/* HM OHR */}
          <button onClick={() => openModal("product", "hm-ohr")} className={DOCK_ITEM_CLS} aria-label="HM OHR – Health Records">
            <div className={ICON_BASE}>
              <ClipboardList className={ICON_SIZE} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={TOOLTIP_CLS}>HM OHR</span>
          </button>

          {/* HM CLIN */}
          <button onClick={() => openModal("product", "hm-clin")} className={DOCK_ITEM_CLS} aria-label="HM CLIN – Clinical Research">
            <div className={ICON_BASE}>
              <Microscope className={ICON_SIZE} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={TOOLTIP_CLS}>HM CLIN</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
