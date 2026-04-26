import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CurvedLoop from "@/components/CurvedLoop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CurvedLoop 
          marqueeText="✦ Health Metro ✦ Connecting Health Globally ✦ Ultra-Reliable ✦ World-Class ✦"
          speed={1.5}
          curveAmount={300}
        />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
