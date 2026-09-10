import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rebadigitalsolutions.com"),
  title: {
    default: "Reba Digital Solutions | Websites, Marketing & Automation",
    template: "%s | Reba Digital Solutions",
  },
  description:
    "Websites, apps, digital marketing, CRM and workflow automation for businesses in India and beyond. Based in Kolkata. Discuss your project with Reba Digital Solutions.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Reba Digital Solutions",
    type: "website",
    locale: "en_IN",
    title: "Reba Digital Solutions",
    description: "Better websites. Smarter systems. More room to grow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Reba Digital Solutions",
              url: "https://rebadigitalsolutions.com",
              telephone: "+918282859551",
              email: "rebadigitalsolutions@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/rebadigitalsolutions/",
                "https://www.facebook.com/profile.php?id=61579534472049",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
