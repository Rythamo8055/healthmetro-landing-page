"use client";
import LogoLoop from './LogoLoop';
import Image from 'next/image';

const brandLogos = [
  {
    node: (
      <Image
        src="/logo.png"
        alt="Health Metro"
        width={120}
        height={60}
        className="h-10 w-auto object-contain"
      />
    ),
    href: "/",
    title: "Health Metro",
  },
];

export default function TopLogo() {
  return (
    <div className="fixed top-0 left-0 w-full z-40 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center md:justify-start">
        <div
          className="pointer-events-auto bg-white/50 backdrop-blur-xl rounded-2xl border border-[#027473]/10 px-4 py-2 shadow-sm overflow-hidden"
          style={{ width: '220px' }}
        >
          <LogoLoop
            logos={brandLogos}
            speed={25}
            direction="left"
            logoHeight={40}
            gap={60}
            pauseOnHover
            fadeOut
            fadeOutColor="rgba(255,255,255,0)"
            ariaLabel="Health Metro"
          />
        </div>
      </div>
    </div>
  );
}
