import type { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
  title: "About ISLF | AEO Certified Customs Broker & Freight Forwarder | India",
  description:
    "Indian Shipping and Logistics Facility Pvt Ltd (ISLF) — India's AEO certified customs broker and freight forwarder since 2000. Tuticorin HQ with offices in Chennai, Bangalore, Gujarat, Mumbai & Vietnam. Learn our mission, vision and recognition.",
  keywords:
    "ISLF logistics India, Indian Shipping Logistics Facility, AEO certified customs broker India, customs broker Chennai, freight forwarder India, ISLF about, logistics company Chennai, EXIM company India",
  alternates: { canonical: "https://islf.in/about" },
  openGraph: {
    title: "About ISLF | AEO Certified Customs Broker & Freight Forwarder | India",
    description:
      "India's AEO certified customs broker and freight forwarder since 2000, headquartered in Tuticorin.",
    url: "https://islf.in/about",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://islf.in/about#aboutpage",
  name: "About ISLF — Indian Shipping and Logistics Facility Pvt Ltd",
  url: "https://islf.in/about",
  description:
    "ISLF is India's AEO certified customs broker and freight forwarder, founded in 2000, headquartered in Tuticorin with offices in Chennai, Bangalore, Gujarat, Mumbai and Vietnam.",
  about: { "@id": "https://islf.in/#organization" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutContent />
    </>
  );
}
