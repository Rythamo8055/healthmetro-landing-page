"use client";

import CircularGallery from "./CircularGallery";

// Healthcare-relevant images for the gallery
const galleryItems = [
  { image: "https://picsum.photos/seed/hm-home/800/600", text: "Home Collection" },
  { image: "https://picsum.photos/seed/hm-lab/800/600", text: "Lab Reports" },
  { image: "https://picsum.photos/seed/hm-doctor/800/600", text: "Doctor Consult" },
  { image: "https://picsum.photos/seed/hm-records/800/600", text: "Health Records" },
  { image: "https://picsum.photos/seed/hm-nri/800/600", text: "NRI Care" },
  { image: "https://picsum.photos/seed/hm-diag/800/600", text: "Diagnostics" },
  { image: "https://picsum.photos/seed/hm-path/800/600", text: "Pathology" },
  { image: "https://picsum.photos/seed/hm-well/800/600", text: "Wellness" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-0 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-primary tracking-tighter">
          Trusted by Thousands
        </h2>
        <p className="text-xl text-foreground opacity-70 max-w-2xl mx-auto font-medium">
          Scroll through our services — drag or swipe to explore.
        </p>
      </div>

      {/* CircularGallery — full-width, no horizontal padding */}
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          items={galleryItems}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  );
}
