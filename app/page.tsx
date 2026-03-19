import Script from "next/script";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Services";
import ClientFlowSection from "@/components/ClientFlowSection";
import Portfolio from "@/components/Portfolio";
// import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Reba Digital Solutions",
            url: "https://rebadigitalsolutions.com",
            telephone: "+918282859551",
            description:
              "Reba Digital Solutions provides business automation, WhatsApp automation, custom website development, and data analytics dashboards using Excel and Power BI for businesses in Kolkata, Newtown, Salt Lake, and across India.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kolkata",
              addressRegion: "West Bengal",
              addressCountry: "India",
            },
            areaServed: ["Kolkata", "Newtown", "Salt Lake"],
            serviceType: [
              "Business Automation",
              "WhatsApp Automation",
              "Custom Website Development",
              "Excel Data Analysis",
              "Power BI Dashboards",
              "Data Automation",
            ],
          }),
        }}
      />

      <main className="bg-black text-white min-h-screen">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ClientFlowSection />
        {/* <Industries /> */}
        <Portfolio />
        <Pricing />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
