import type { Metadata } from "next";
import ConsultingContent from "./content";

export const metadata: Metadata = {
  title: "EXIM Consulting Services India | DGFT | Customs | CFS | EOU | SEZ | STPI | GST | RoDTEP | ISLF",
  description:
    "Comprehensive EXIM consulting by ISLF — DGFT, Customs Consultancy, CFS licensing, EOU registration, SEZ compliance, STPI/HTPI/EHTP consulting, GST refunds and RoDTEP services across India.",
  keywords:
    "EXIM consulting India, DGFT consultant India, customs consultancy India, CFS consultant, EOU consultant, SEZ consultant, STPI consultant, GST consultant India, RoDTEP consultant, trade compliance India, import export consulting India",
  alternates: { canonical: "https://islf.in/consulting" },
  openGraph: {
    title: "EXIM Consulting Services India | DGFT | Customs | CFS | EOU | SEZ | STPI | GST | RoDTEP | ISLF",
    description: "End-to-end EXIM consulting: DGFT, Customs, CFS, EOU, SEZ, STPI, GST and RoDTEP services.",
    url: "https://islf.in/consulting",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://islf.in/consulting#page",
  name: "ISLF EXIM Consulting Services",
  url: "https://islf.in/consulting",
  description: "End-to-end EXIM consulting covering DGFT, Customs, CFS, EOU, SEZ, STPI, GST and RoDTEP.",
  provider: { "@id": "https://islf.in/#organization" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConsultingContent />
    </>
  );
}
