import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <HeroSection />

      <ServicesSection />

      <Footer />
    </main>
  );
}
