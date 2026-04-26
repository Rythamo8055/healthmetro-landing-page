import RotatingText from "./RotatingText";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-primary/10 text-primary text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>Trusted by 5,000+ Healthcare Providers</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 text-primary">
          Connecting Health <br className="md:hidden" />
          <span className="inline-block md:inline">
            <RotatingText
              texts={['Globally', 'Reliably', 'Everywhere', 'Seamlessly']}
              mainClassName="text-secondary overflow-hidden py-1 md:py-2 px-2"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
              splitBy="characters"
              auto
              loop
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-foreground opacity-90 leading-relaxed mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Experience ultra-reliable healthcare connectivity designed for everyone, 
          everywhere. Stable, energetic, and world-class.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <button 
            id="hero-cta-primary"
            className="px-8 py-5 bg-secondary text-white rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/20"
          >
            Get Started Today
          </button>
          <button 
            id="hero-cta-secondary"
            className="px-8 py-5 bg-white text-foreground border border-border rounded-2xl font-bold text-lg hover:bg-surface transition-all"
          >
            How it works
          </button>
        </div>

        {/* Scalable Network Stats - Inspired by Cloudflare */}
        <div className="mt-20 pt-10 border-t border-border w-full flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">330+</div>
            <div className="text-xs uppercase tracking-widest font-bold">Cities Connected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">99.9%</div>
            <div className="text-xs uppercase tracking-widest font-bold">Uptime Reliable</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">24/7</div>
            <div className="text-xs uppercase tracking-widest font-bold">Support Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
}
