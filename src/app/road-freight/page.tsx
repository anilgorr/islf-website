import type { Metadata } from "next";
import RoadFreightContent from "./content";

export const metadata: Metadata = {
  title: "Road Freight India | FTL LTL Inland Transport | Pan-India Logistics | ISLF",
  description:
    "ISLF provides FTL and LTL road freight across India — 15+ owned fleet vehicles, pan-India network, factory-to-port and port-to-door inland transport for importers and exporters.",
  keywords:
    "road freight India, inland transport India, FTL India, LTL India, road transport logistics India, factory to port transport India, port to door delivery India, road freight Chennai, road freight Bengaluru, surface freight India, trucking India, cargo transport India",
  alternates: { canonical: "https://islf.in/road-freight" },
  openGraph: {
    title: "Road Freight India | FTL, LTL & Port Transport | ISLF",
    description:
      "Pan-India road freight with 15+ own vehicles — FTL, LTL, factory-to-port and last-mile delivery for importers and exporters.",
    url: "https://islf.in/road-freight",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://islf.in/road-freight#service",
    name: "Road Freight & Inland Transport Services India",
    description:
      "FTL and LTL road freight across India by ISLF — 15+ owned fleet vehicles, pan-India network, factory-to-port, port-to-door and multimodal last-mile delivery.",
    provider: { "@id": "https://islf.in/#organization" },
    url: "https://islf.in/road-freight",
    areaServed: "IN",
    serviceType: "Road Freight",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between FTL and LTL road freight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FTL (Full Truck Load) means your cargo fills an entire truck — ideal for large shipments requiring faster, direct transit without stops. LTL (Less than Truck Load) means your cargo shares truck space with other shippers — cost-effective for smaller loads. ISLF provides both across India.",
        },
      },
      {
        "@type": "Question",
        name: "Does ISLF provide factory-to-port transport for exporters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ISLF provides door-to-port and factory-to-port transport for exporters — coordinating container pickup from factories, stuffing, and timely port delivery at Chennai, Tuticorin and other Indian ports. This is fully integrated with our customs clearance services.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RoadFreightContent />
    </>
  );
}
