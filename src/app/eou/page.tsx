import type { Metadata } from "next";
import EOUContent from "./content";

export const metadata: Metadata = {
  title: "Export Oriented Unit (EOU) Consulting India | Registration | Compliance | ISLF",
  description:
    "Expert EOU consulting services by ISLF — registration under STPI/EHTP/SEZ, LOI/LOP, customs bonding, Section 65 license, annual performance reports and compliance across India.",
  keywords:
    "EOU consultant India, Export Oriented Unit India, EOU registration India, EOU compliance India, EOU customs bonding, LOI LOP EOU, Section 65 license, EOU annual report India",
  alternates: { canonical: "https://islf.in/eou" },
  openGraph: {
    title: "Export Oriented Unit (EOU) Consulting India | Registration | Compliance | ISLF",
    description: "Expert EOU consulting — registration, LOI/LOP, customs bonding, Section 65 license and annual compliance.",
    url: "https://islf.in/eou",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/eou#service",
  name: "Export Oriented Unit (EOU) Consulting",
  description: "EOU registration, LOI/LOP, customs bonding, Section 65 license and annual performance compliance.",
  provider: { "@id": "https://islf.in/#organization" },
  url: "https://islf.in/eou",
  areaServed: "IN",
  serviceType: "EOU Consulting",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EOUContent />
    </>
  );
}
