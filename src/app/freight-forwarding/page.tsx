import type { Metadata } from "next";
import FreightForwardingContent from "./content";

export const metadata: Metadata = {
  title: "Freight Forwarding India | FCL LCL Air Sea Road Freight | ISLF Chennai",
  description:
    "ISLF provides end-to-end freight forwarding — FCL & LCL ocean freight, air freight, road freight, ODC, break-bulk, cold chain, DGR and door-to-door delivery from Chennai, Tuticorin and all major Indian ports.",
  keywords:
    "freight forwarding India, freight forwarder India, FCL LCL India, ocean freight India, air freight India, multimodal transport India, freight forwarder Chennai, freight forwarder Tuticorin, international freight India, ODC cargo India, break bulk India, cold chain logistics India",
  alternates: { canonical: "https://islf.in/freight-forwarding" },
  openGraph: {
    title: "Freight Forwarding India | ISLF — FCL, LCL, Air, Sea & Road",
    description:
      "End-to-end freight forwarding by ISLF — FCL/LCL, air freight, road freight, ODC, cold chain. Offices in Chennai, Tuticorin, Bengaluru.",
    url: "https://islf.in/freight-forwarding",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://islf.in/freight-forwarding#service",
    name: "Freight Forwarding Services India",
    description:
      "Comprehensive freight forwarding by ISLF — FCL/LCL ocean freight, air freight, multimodal transport, ODC, break-bulk, cold chain and door-to-door delivery from all major Indian ports and airports.",
    provider: { "@id": "https://islf.in/#organization" },
    url: "https://islf.in/freight-forwarding",
    areaServed: "IN",
    serviceType: "Freight Forwarding",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a freight forwarder do in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A freight forwarder in India arranges the transportation of goods on behalf of importers and exporters. They book space with shipping lines or airlines, handle documentation (Bills of Lading, Airway Bills, customs paperwork), coordinate port/airport handling, and manage the entire supply chain from origin to destination.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between FCL and LCL in sea freight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FCL (Full Container Load) means you book an entire container exclusively for your cargo — ideal for large shipments. LCL (Less than Container Load) means your cargo shares container space with other shippers' goods — cost-effective for smaller consignments. ISLF handles both FCL and LCL shipments from all major Indian ports.",
        },
      },
      {
        "@type": "Question",
        name: "Does ISLF handle dangerous goods (DGR) freight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ISLF is experienced in handling Dangerous Goods (DGR/IMDG/IATA) by air and sea — including proper classification, documentation, packaging compliance and regulatory approvals required for both air and ocean shipments.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FreightForwardingContent />
    </>
  );
}
