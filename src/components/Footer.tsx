import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto brightness-0 invert" />
              <span className="text-2xl font-black tracking-tight">Health Metro</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              The world's most reliable digital infrastructure for global healthcare 
              connectivity. Stable. Energetic. World-Class.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-secondary">Global Network</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="/cities/london" className="hover:text-secondary transition-colors">London</Link></li>
              <li><Link href="/cities/dubai" className="hover:text-secondary transition-colors">Dubai</Link></li>
              <li><Link href="/cities/new-york" className="hover:text-secondary transition-colors">New York</Link></li>
              <li><Link href="/cities/singapore" className="hover:text-secondary transition-colors">Singapore</Link></li>
              <li><Link href="/cities/mumbai" className="hover:text-secondary transition-colors">Mumbai</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-secondary">Regional Hubs</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="/cities/berlin" className="hover:text-secondary transition-colors">Berlin</Link></li>
              <li><Link href="/cities/bangkok" className="hover:text-secondary transition-colors">Bangkok</Link></li>
              <li><Link href="/cities/sydney" className="hover:text-secondary transition-colors">Sydney</Link></li>
              <li><Link href="/cities/toronto" className="hover:text-secondary transition-colors">Toronto</Link></li>
              <li><Link href="/cities/tokyo" className="hover:text-secondary transition-colors">Tokyo</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6">
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
