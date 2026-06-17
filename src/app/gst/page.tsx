import type { Metadata } from "next";
import GSTContent from "./content";

export const metadata: Metadata = {
  title: "GST Consulting Services India | IGST Refunds | ITC Refunds | Exporters | ISLF",
  description:
    "Expert GST consulting by ISLF — GST registration, IGST refunds for exporters, ITC refunds under inverted tax structure, GST return filing and compliance for importers, exporters, SMEs and large enterprises.",
  keywords:
    "GST consultant India, GST consulting services India, IGST refund exporters India, ITC refund inverted tax India, GST registration India, GST return filing India, GST compliance India",
  alternates: { canonical: "https://islf.in/gst" },
  openGraph: {
    title: "GST Consulting Services India | IGST Refunds | ITC Refunds | Exporters | ISLF",
    description: "Expert GST consulting — IGST refunds, ITC refunds, registration and compliance for exporters.",
    url: "https://islf.in/gst",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://islf.in/gst#service",
    name: "GST Consulting Services",
    description: "GST registration, IGST refunds, ITC refunds and compliance for importers, exporters and businesses.",
    provider: { "@id": "https://islf.in/#organization" },
    url: "https://islf.in/gst",
    areaServed: "IN",
    serviceType: "GST Consulting",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is IGST refund for exporters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IGST refund is the refund of Integrated GST paid at the time of export. Exporters who pay IGST on exports are eligible to claim a full refund by filing the Shipping Bill and GSTR-3B correctly.",
        },
      },
      {
        "@type": "Question",
        name: "What is ITC refund under inverted tax structure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ITC refund under inverted tax structure applies when input tax rate is higher than the output tax rate, resulting in excess ITC accumulation. Eligible taxpayers can claim a refund of this excess ITC.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GSTContent />
    </>
  );
}
