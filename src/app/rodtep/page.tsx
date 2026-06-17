import type { Metadata } from "next";
import RoDTEPContent from "./content";

export const metadata: Metadata = {
  title: "RoDTEP Consulting India | Remission of Duties & Taxes on Exports | ISLF",
  description:
    "Expert RoDTEP consulting by ISLF — eligibility assessment, Shipping Bill declaration, scrip generation, credit transfer and utilisation for exporters under the Remission of Duties and Taxes on Exported Products scheme.",
  keywords:
    "RoDTEP consultant India, RoDTEP scheme India, RoDTEP scrip India, remission of duties taxes exports India, RoDTEP Shipping Bill India, RoDTEP eligibility India, export incentive India",
  alternates: { canonical: "https://islf.in/rodtep" },
  openGraph: {
    title: "RoDTEP Consulting India | Remission of Duties & Taxes on Exports | ISLF",
    description: "Expert RoDTEP consulting — eligibility, Shipping Bill declaration, scrip generation and utilisation.",
    url: "https://islf.in/rodtep",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/rodtep#service",
  name: "RoDTEP Consulting Services",
  description: "Eligibility assessment, Shipping Bill declaration, RoDTEP scrip generation and credit utilisation.",
  provider: { "@id": "https://islf.in/#organization" },
  url: "https://islf.in/rodtep",
  areaServed: "IN",
  serviceType: "RoDTEP Consulting",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RoDTEPContent />
    </>
  );
}
