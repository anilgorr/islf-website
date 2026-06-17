import type { Metadata } from "next";
import FAQContent from "./content";

export const metadata: Metadata = {
  title: "FAQ — Customs Broking, Freight Forwarding & INCOTERMS | ISLF India",
  description:
    "Answers to common questions about customs broking, freight forwarding, multimodal transport, Bills of Entry, duty drawback and INCOTERMS (EXW, FOB, CIF, DDU, DDP) from ISLF India.",
  keywords:
    "customs broking FAQ India, freight forwarding questions India, INCOTERMS explained, Bill of Entry India, shipping terms India, logistics FAQ India, customs clearance process India",
  alternates: { canonical: "https://islf.in/faq" },
  openGraph: {
    title: "FAQ — Customs Broking, Freight Forwarding & INCOTERMS | ISLF India",
    description: "Answers to common questions about customs broking, freight forwarding and INCOTERMS.",
    url: "https://islf.in/faq",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://islf.in/faq#faqpage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is customs broking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Customs broking is the professional service of filing import and export declarations (Bills of Entry and Shipping Bills) with customs authorities on behalf of importers and exporters, ensuring duty payment, compliance, and timely clearance of goods.",
      },
    },
    {
      "@type": "Question",
      name: "What is freight forwarding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freight forwarding is the coordination and management of the shipment of goods from origin to destination — encompassing booking cargo space with carriers (airlines, shipping lines), arranging inland transport, preparing export documents, and tracking shipments.",
      },
    },
    {
      "@type": "Question",
      name: "What are INCOTERMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "INCOTERMS (International Commercial Terms) are standardised trade terms published by the International Chamber of Commerce that define the responsibilities of buyers and sellers for the delivery of goods — covering costs, risk transfer, insurance, and documentation obligations.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FAQContent />
    </>
  );
}
