import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img 
            src="/logo.png" 
            alt="Health Metro Logo" 
            className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
          />
          <p className="text-sm opacity-60 max-w-xs text-center md:text-left">
            Connecting Health Globally. World-class medical infrastructure for everyone.
          </p>
        </div>

        <div className="flex gap-8">
          <Link href="/privacy" className="text-sm font-medium opacity-60 hover:opacity-100">Privacy</Link>
          <Link href="/terms" className="text-sm font-medium opacity-60 hover:opacity-100">Terms</Link>
          <Link href="/contact" className="text-sm font-medium opacity-60 hover:opacity-100">Contact</Link>
        </div>

        <div className="text-sm opacity-40 font-medium">
          © 2026 Health Metro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
