import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import { Providers } from "./Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://islf.in/#organization",
  name: "Indian Shipping and Logistics Facility Pvt Ltd",
  alternateName: "ISLF",
  url: "https://islf.in/",
  logo: "https://islf.in/logo.png",
  description:
    "AEO certified customs broker, freight forwarder and EXIM consultant headquartered in Tuticorin with offices across India, Vietnam and Indonesia.",
  foundingDate: "2000",
  email: "info@islf.in",
  telephone: "+914612340790",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 3/188/5A, MSP Towers, Palayamkottai Main Road, Periyanayagapuram, Opp. Collector Office",
    addressLocality: "Tuticorin",
    addressRegion: "Tamil Nadu",
    postalCode: "628101",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: [
    "https://www.facebook.com/islflogistics",
    "https://www.linkedin.com/company/islf",
  ],
};

export const metadata: Metadata = {
  title: {
    default:
      "ISLF — Indian Shipping & Logistics Facility | AEO Certified Customs Broker",
    template: "%s",
  },
  description:
    "ISLF (Indian Shipping and Logistics Facility Pvt Ltd) — AEO certified customs broker and freight forwarder headquartered in Tuticorin with offices in Chennai, Bangalore, Gujarat & Vietnam.",
  keywords:
    "shipping company India, logistics company Chennai, customs broker India, freight forwarder Chennai, AEO certified customs broker",
  authors: [{ name: "Indian Shipping and Logistics Facility Pvt Ltd" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://islf.in/",
    siteName: "ISLF — Indian Shipping and Logistics Facility",
    images: [{ url: "https://islf.in/hero.webp", width: 1920, height: 1080 }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://islf.in/hero.webp"],
  },
  alternates: { canonical: "https://islf.in/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
