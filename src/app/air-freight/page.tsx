import type { Metadata } from "next";
import AirFreightContent from "./content";

export const metadata: Metadata = {
  title: "Air Freight India | International Air Cargo | Express Air Freight | ISLF",
  description:
    "ISLF offers air freight solutions for time-sensitive, high-value and perishable cargo — express, standard and charter services from Chennai, Bengaluru, Mumbai and all major Indian international airports.",
  keywords:
    "air freight India, air cargo India, international air freight India, express air freight India, air freight Chennai, air freight Bengaluru, DGR air cargo India, pharma air freight India, perishable air cargo India, air charter India, air freight forwarder India",
  alternates: { canonical: "https://islf.in/air-freight" },
  openGraph: {
    title: "Air Freight India | Express & Charter Air Cargo | ISLF",
    description:
      "Time-critical air freight solutions — express, standard and charter from all major Indian airports. DGR, cold chain and high-value cargo specialists.",
    url: "https://islf.in/air-freight",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://islf.in/air-freight#service",
    name: "Air Freight Services India",
    description:
      "International and domestic air freight by ISLF — express, standard and charter services for general, DGR, pharma, perishable and high-value cargo from all major Indian airports.",
    provider: { "@id": "https://islf.in/#organization" },
    url: "https://islf.in/air-freight",
    areaServed: "IN",
    serviceType: "Air Freight",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When should I choose air freight over sea freight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Air freight is the right choice when time is critical — for perishable goods, pharmaceutical products, high-value electronics, emergency spare parts, or when ocean freight transit times (typically 15–45 days) are too long. Air transit from India to major global destinations typically takes 2–7 days.",
        },
      },
      {
        "@type": "Question",
        name: "Can ISLF handle Dangerous Goods (DGR) by air?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ISLF is experienced in handling IATA Dangerous Goods Regulations (DGR) compliant shipments by air — including proper classification, packaging, marking, labelling, documentation and airline/authority approvals.",
        },
      },
      {
        "@type": "Question",
        name: "Does ISLF offer air charter services from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ISLF arranges full and part aircraft charters for time-critical, oversized or high-volume cargo where scheduled airline capacity is insufficient or unavailable.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AirFreightContent />
    </>
  );
}
