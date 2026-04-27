"use client";

import OrbitImages from "./OrbitImages";

export default function Testimonials() {
  const images = [
    "https://picsum.photos/300/300?random=11",
    "https://picsum.photos/300/300?random=12",
    "https://picsum.photos/300/300?random=13",
    "https://picsum.photos/300/300?random=14",
    "https://picsum.photos/300/300?random=15",
    "https://picsum.photos/300/300?random=16",
    "https://picsum.photos/300/300?random=17",
    "https://picsum.photos/300/300?random=18",
    "https://picsum.photos/300/300?random=19",
    "https://picsum.photos/300/300?random=20",
  ];

  return (
    <section id="testimonials" className="py-48 px-6 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-primary tracking-tighter">Trusted by Thousands</h2>
          <p className="text-xl text-foreground opacity-70 max-w-2xl mx-auto font-medium">
            Experience the global standard in healthcare connectivity.
          </p>
        </div>

        <div className="relative h-[700px] w-full flex items-center justify-center">
          <OrbitImages
            images={images}
            shape="ellipse"
            radiusX={650}
            radiusY={180}
            rotation={-5}
            duration={40}
            itemSize={130}
            responsive={true}
            radius={280}
            direction="normal"
            fill
            showPath={true}
            pathColor="rgba(2, 116, 115, 0.08)"
            paused={false}
          />
          
          {/* Central content inside the orbit - Elevated Design */}
          <div className="absolute flex flex-col items-center text-center pointer-events-none z-20">
            <div className="relative">
              <div className="text-6xl md:text-7xl font-black text-primary leading-none mb-1">99.9%</div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-secondary">
              Reliability Rate
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-xl shadow-primary/5">
            <p className="text-lg italic text-foreground opacity-90 leading-relaxed mb-6">
              "Health Metro saved me during my trip to Tokyo. Instant access to my records and a quick consultation made all the difference."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">RC</div>
              <div>
                <div className="font-bold text-foreground">Robert Chen</div>
                <div className="text-sm opacity-60 font-medium">Global Traveler</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-xl shadow-primary/5">
            <p className="text-lg italic text-foreground opacity-90 leading-relaxed mb-6">
              "As a busy parent, having my children's health data and a doctor just one click away gives me immense peace of mind."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">SM</div>
              <div>
                <div className="font-bold text-foreground">Sarah Miller</div>
                <div className="text-sm opacity-60 font-medium">Parent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
