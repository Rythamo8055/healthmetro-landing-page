"use client";

import { Activity, Home, Stethoscope, HeartHandshake, ClipboardList, Microscope, Phone } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Header() {
  const { openModal } = useModal();

  const dockItemClasses = "p-2.5 sm:p-3 md:p-4 bg-primary/5 text-primary rounded-xl sm:rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(2,116,115,0.4)]";
  const dockIconClasses = "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7";
  const dockTooltipClasses = "absolute -top-12 md:-top-14 opacity-0 hidden md:group-hover:block transition-all bg-primary text-white text-[11px] uppercase tracking-widest font-black px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-xl border border-white/20";

  return (
    <header className="fixed bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 w-full px-2 flex justify-center pointer-events-none">
      <div className="relative pointer-events-auto max-w-full">
        <nav className="flex items-center justify-between gap-1 sm:gap-2 md:gap-4 px-2 sm:px-4 py-2 sm:py-3 md:px-6 md:py-4 bg-white/80 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] border border-primary/20 shadow-[0_25px_60px_rgba(2,116,115,0.2)] ring-1 ring-white/50">
          
          {/* HM MOVE */}
          <button onClick={() => openModal("product", "hm-move")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM MOVE - Diagnostics">
            <div className={dockItemClasses}>
              <Activity className={dockIconClasses} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={dockTooltipClasses}>HM MOVE</span>
          </button>

          {/* HM EASY */}
          <button onClick={() => openModal("product", "hm-easy")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM EASY - Home Collection">
            <div className={dockItemClasses}>
              <Home className={dockIconClasses} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={dockTooltipClasses}>HM EASY</span>
          </button>

          {/* HM TRUST */}
          <button onClick={() => openModal("product", "hm-trust")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM TRUST - Consultation">
            <div className={dockItemClasses}>
              <Stethoscope className={dockIconClasses} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={dockTooltipClasses}>HM TRUST</span>
          </button>

          <div className="w-[1.5px] h-8 sm:h-10 md:h-12 bg-primary/10 mx-0.5 sm:mx-1 md:mx-2 self-center flex-shrink-0" />

          {/* CTA - Book */}
          <button onClick={() => openModal("contact")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="Book Appointment">
            <div className={`p-2.5 sm:p-3 md:p-4 bg-secondary text-white rounded-xl sm:rounded-2xl md:rounded-[1.5rem] transition-all duration-300 group-hover:scale-[1.2] md:group-hover:scale-[1.3] group-hover:-translate-y-2 md:group-hover:-translate-y-4 group-hover:bg-secondary group-hover:shadow-[0_12px_24px_rgba(217,114,52,0.5)] shadow-xl`}>
              <Phone className={dockIconClasses} strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className={`${dockTooltipClasses} !bg-secondary`}>Book Now</span>
          </button>

          <div className="w-[1.5px] h-8 sm:h-10 md:h-12 bg-primary/10 mx-0.5 sm:mx-1 md:mx-2 self-center flex-shrink-0" />

          {/* HM RELY */}
          <button onClick={() => openModal("product", "hm-rely")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM RELY - NRI Care">
            <div className={dockItemClasses}>
              <HeartHandshake className={dockIconClasses} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={dockTooltipClasses}>HM RELY</span>
          </button>

          {/* HM OHR */}
          <button onClick={() => openModal("product", "hm-ohr")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM OHR - Health Records">
            <div className={dockItemClasses}>
              <ClipboardList className={dockIconClasses} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={dockTooltipClasses}>HM OHR</span>
          </button>

          {/* HM CLIN */}
          <button onClick={() => openModal("product", "hm-clin")} className="group relative flex flex-col items-center flex-shrink-0" aria-label="HM CLIN - Clinical Research">
            <div className={dockItemClasses}>
              <Microscope className={dockIconClasses} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className={dockTooltipClasses}>HM CLIN</span>
          </button>

        </nav>
      </div>
    </header>
  );
}
