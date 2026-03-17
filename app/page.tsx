import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import AutomationShowcase from "@/components/AutomationShowcase";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
// import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Portfolio />
      <AutomationShowcase />
      <Industries />
      <Pricing />
      {/* <About /> */}
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
