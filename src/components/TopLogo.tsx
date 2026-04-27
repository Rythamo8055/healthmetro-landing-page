import Image from "next/image";
import Link from "next/link";

export default function TopLogo() {
  return (
    <div className="fixed top-0 left-0 w-full z-40 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center md:justify-start">
        <Link href="/" className="pointer-events-auto group flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white/40 backdrop-blur-xl rounded-xl border border-primary/10 shadow-sm flex items-center justify-center transition-all group-hover:scale-105 group-hover:border-primary/20">
            <Image 
              src="/logo.png" 
              alt="Health Metro Logo" 
              width={32}
              height={32}
              className="w-7 h-7 md:w-8 md:h-8 object-contain"
            />
          </div>
          <span className="text-xl md:text-2xl font-black text-primary tracking-tight">
            Health <span className="text-secondary">Metro</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
