import type { Metadata } from "next";
import SEZContent from "./content";

export const metadata: Metadata = {
  title: "Special Economic Zone (SEZ) Consulting India | SEZ Compliance | C&F Agent | ISLF",
  description:
    "Expert SEZ consulting by ISLF — import procedures, Development Commissioner returns, C&F agency, customs handling and all SEZ compliance services across India.",
  keywords:
    "SEZ consultant India, Special Economic Zone consulting, SEZ compliance India, SEZ customs agent, Development Commissioner returns, SEZ import export India, SEZ C&F agent India",
  alternates: { canonical: "https://islf.in/sez" },
  openGraph: {
    title: "Special Economic Zone (SEZ) Consulting India | SEZ Compliance | C&F Agent | ISLF",
    description: "Expert SEZ consulting — import procedures, DC returns, C&F agency and customs handling.",
    url: "https://islf.in/sez",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/sez#service",
  name: "Special Economic Zone (SEZ) Consulting",
  description: "SEZ import procedures, Development Commissioner returns, C&F agency and customs compliance.",
  provider: { "@id": "https://islf.in/#organization" },
  url: "https://islf.in/sez",
  areaServed: "IN",
  serviceType: "SEZ Consulting",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SEZContent />
    </>
  );
}
