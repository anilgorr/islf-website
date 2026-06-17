import type { Metadata } from "next";
import CustomsBrokingContent from "./content";

export const metadata: Metadata = {
  title: "Customs Broking India | AEO Certified Customs Clearance | Chennai | Tuticorin | ISLF",
  description:
    "AEO certified customs broking by ISLF — import and export customs clearance, Bills of Entry, Shipping Bills, duty payment and post-clearance compliance. Offices in Chennai, Tuticorin, Bengaluru, Gujarat.",
  keywords:
    "customs broker India, customs clearance India, AEO certified customs broker, import customs clearance, export customs clearance, Bill of Entry India, Shipping Bill India, customs broker Chennai, customs broker Tuticorin",
  alternates: { canonical: "https://islf.in/customs-broking" },
  openGraph: {
    title: "Customs Broking India | AEO Certified Customs Clearance | ISLF",
    description: "AEO certified customs broking — import/export clearance, Bills of Entry, Shipping Bills across India.",
    url: "https://islf.in/customs-broking",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/customs-broking#service",
  name: "Customs Broking Services",
  description: "AEO certified import and export customs clearance — Bills of Entry, Shipping Bills, duty payment and compliance.",
  provider: { "@id": "https://islf.in/#organization" },
  url: "https://islf.in/customs-broking",
  areaServed: "IN",
  serviceType: "Customs Broking",
  hasCredential: "AEO Certification — Customs Broker",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CustomsBrokingContent />
    </>
  );
}
