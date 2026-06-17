import type { Metadata } from "next";
import WarehousingContent from "./content";

export const metadata: Metadata = {
  title: "Warehousing India | Bonded Warehouse | CFS Warehousing | Temperature Storage | ISLF",
  description:
    "ISLF provides bonded warehousing, CFS-integrated storage, temperature-controlled facilities and distribution services in Chennai, Tuticorin and Bengaluru — for importers, exporters and EOU/SEZ units.",
  keywords:
    "warehousing India, bonded warehouse India, bonded warehouse Chennai, CFS warehousing India, temperature controlled warehouse India, logistics warehousing India, import warehousing India, export warehousing India, warehouse Tuticorin, distribution warehouse India",
  alternates: { canonical: "https://islf.in/warehousing" },
  openGraph: {
    title: "Warehousing India | Bonded, CFS & Temperature-Controlled Storage | ISLF",
    description:
      "Bonded warehousing, CFS storage and temperature-controlled distribution at Chennai, Tuticorin and Bengaluru — integrated with customs clearance.",
    url: "https://islf.in/warehousing",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://islf.in/warehousing#service",
    name: "Warehousing & Distribution Services India",
    description:
      "Bonded warehousing, CFS-integrated storage, temperature-controlled facilities and distribution services by ISLF at Chennai, Tuticorin and Bengaluru.",
    provider: { "@id": "https://islf.in/#organization" },
    url: "https://islf.in/warehousing",
    areaServed: ["Chennai", "Tuticorin", "Bengaluru", "India"],
    serviceType: "Warehousing",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a bonded warehouse in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A bonded warehouse (customs bonded warehouse) is a secured storage facility approved by Customs authorities where imported goods can be stored without paying import duties until they are cleared for home consumption or re-exported. ISLF assists in bonded warehouse operations and compliance in Chennai and Tuticorin.",
        },
      },
      {
        "@type": "Question",
        name: "Can EOU and SEZ units use ISLF's warehousing services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ISLF's warehousing and compliance services are well-suited for Export Oriented Units (EOU) and SEZ units — covering import procurement, in-bond storage, consumption record maintenance and customs compliance for duty-free imports.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WarehousingContent />
    </>
  );
}
