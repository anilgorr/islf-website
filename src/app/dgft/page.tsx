import type { Metadata } from "next";
import DGFTContent from "./content";

export const metadata: Metadata = {
  title: "DGFT Consulting Services India | IEC Registration | EPCG | Advance Authorization | ISLF",
  description:
    "Expert DGFT consultancy by ISLF — IEC registration, EPCG, Advance Authorization (DEEC), DFIA, RoDTEP, SCOMET licenses, Status Holder Certificate, SION norms and HQ-level policy representations in India.",
  keywords:
    "DGFT consultant India, DGFT consultancy services, IEC registration India, EPCG license consultant, Advance Authorization consultant, DEEC license India, RoDTEP consultant, SCOMET license, Status Holder Certificate, RCMC certificate, DGFT HQ consultant, SION norms India",
  alternates: { canonical: "https://islf.in/dgft" },
  openGraph: {
    title: "DGFT Consulting Services India | IEC Registration | EPCG | Advance Authorization | ISLF",
    description: "Expert DGFT consultancy — IEC, EPCG, Advance Authorization, RoDTEP, SCOMET and HQ-level representations.",
    url: "https://islf.in/dgft",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/dgft#service",
  name: "DGFT Consulting Services",
  description:
    "Expert DGFT consulting — IEC registration, EPCG, Advance Authorization, RoDTEP, SCOMET licenses and HQ-level policy representations.",
  provider: { "@id": "https://islf.in/#organization" },
  url: "https://islf.in/dgft",
  areaServed: "IN",
  serviceType: "DGFT Consulting",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DGFTContent />
    </>
  );
}
