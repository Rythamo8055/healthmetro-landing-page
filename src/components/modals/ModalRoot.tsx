"use client";

import { useModal } from "@/context/ModalContext";
import { AnimatePresence, motion } from "framer-motion";
import ContactModal from "./ContactModal";
import ProductModal from "./ProductModal";
import { useEffect } from "react";

export default function ModalRoot() {
  const { isOpen, type, closeModal } = useModal();

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center pointer-events-none">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm pointer-events-auto"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ y: "100%", opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "100%", opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full md:w-auto max-w-lg w-full bg-white md:rounded-3xl rounded-t-3xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh] md:max-h-[85vh]"
          >
            {/* Mobile drag handle indicator */}
            <div className="w-full flex justify-center pt-3 pb-1 md:hidden">
              <div className="w-12 h-1.5 bg-primary/20 rounded-full" />
            </div>

            {type === "contact" && <ContactModal />}
            {type === "product" && <ProductModal />}
          </motion.div>
          
        </div>
      )}
    </AnimatePresence>
  );
}
