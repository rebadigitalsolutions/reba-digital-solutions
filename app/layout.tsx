import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl, defaultTitle, defaultDescription } from "@/lib/site";
import { enabledSocialLinks } from "@/lib/social";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Reba Digital Solutions",
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Reba Digital Solutions",
    type: "website",
    locale: "en_IN",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(defaultTitle)}`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`/api/og?title=${encodeURIComponent(defaultTitle)}`],
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
              "@type": "ProfessionalService",
              name: "Reba Digital Solutions",
              url: siteUrl,
              telephone: "+918282859551",
              email: "hello@rebadigitalsolutions.com",
              address: {
                "@type": "PostalAddress",
                // TODO: add street address once confirmed for GBP/local SEO
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
              areaServed: [
                "Kolkata",
                "Rajarhat",
                "New Town",
                "Salt Lake",
                "India",
              ],
              sameAs: enabledSocialLinks
                .filter((link) => link.id !== "whatsapp")
                .map((link) => link.url),
            }),
          }}
        />
      </body>
    </html>
  );
}
