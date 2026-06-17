import type { Metadata } from "next";
import CFSContent from "./content";

export const metadata: Metadata = {
  title: "Container Freight Station (CFS) Consulting India | CFS License | ISLF",
  description:
    "Expert CFS consulting by ISLF — CFS license procurement, bonded warehouse permissions, EDI port code, custodian coordination and all regulatory compliances for setting up and operating a CFS in India.",
  keywords:
    "CFS consultant India, CFS license India, bonded warehouse CFS, Container Freight Station India, CFS setup India, CFS compliance India, port bonded warehouse India",
  alternates: { canonical: "https://islf.in/cfs" },
  openGraph: {
    title: "Container Freight Station (CFS) Consulting India | CFS License | ISLF",
    description: "Expert CFS consulting — license procurement, bonded warehouse, EDI port code and regulatory compliance.",
    url: "https://islf.in/cfs",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/cfs#service",
  name: "Container Freight Station (CFS) Consulting",
  description: "CFS license procurement, bonded warehouse permissions, EDI port code and custodian coordination.",
  provider: { "@id": "https://islf.in/#organization" },
  url: "https://islf.in/cfs",
  areaServed: "IN",
  serviceType: "CFS Consulting",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CFSContent />
    </>
  );
}
