import type { Metadata } from "next";
import ServicesContent from "./content";

export const metadata: Metadata = {
  title: "Logistics & Shipping Services India | Customs Broking | Freight Forwarding | ISLF",
  description:
    "ISLF offers AEO certified customs broking, sea & air freight forwarding, DGFT consulting, CFS operations, EOU/SEZ/STPI compliance, and GST consulting across India. Offices in Chennai, Tuticorin, Bengaluru, Gujarat.",
  keywords:
    "logistics services India, customs broking India, freight forwarding India, sea freight India, air freight India, warehousing India, DGFT consulting, CFS India, EOU SEZ STPI consultant, GST consulting India, shipping company India",
  alternates: { canonical: "https://islf.in/services" },
  openGraph: {
    title: "Logistics & Shipping Services India | Customs Broking | Freight Forwarding | ISLF",
    description:
      "AEO certified customs broking, freight forwarding, DGFT, CFS, EOU/SEZ/STPI and GST services across India.",
    url: "https://islf.in/services",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://islf.in/services#page",
  name: "ISLF Logistics & Shipping Services",
  url: "https://islf.in/services",
  description: "Comprehensive logistics, customs broking, freight forwarding, and EXIM consulting services by ISLF across India.",
  provider: { "@id": "https://islf.in/#organization" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicesContent />
    </>
  );
}
