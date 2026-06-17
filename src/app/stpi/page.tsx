import type { Metadata } from "next";
import STPIContent from "./content";

export const metadata: Metadata = {
  title: "STPI Consulting India | Software Technology Parks | HTPI | EHTP | ISLF",
  description:
    "Expert STPI, HTPI and EHTP consulting by ISLF — registration, LOI/LOP, customs compliance, periodic returns and audit support for Software Technology Parks, Hardware Technology Parks and Electronic Hardware Technology Parks in India.",
  keywords:
    "STPI consultant India, HTPI consulting India, EHTP consulting India, Software Technology Park India, STPI registration India, STPI customs compliance, STPI annual returns India",
  alternates: { canonical: "https://islf.in/stpi" },
  openGraph: {
    title: "STPI Consulting India | Software Technology Parks | HTPI | EHTP | ISLF",
    description: "Expert STPI, HTPI and EHTP consulting — registration, LOI/LOP, customs compliance and audit support.",
    url: "https://islf.in/stpi",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/stpi#service",
  name: "STPI / HTPI / EHTP Consulting",
  description: "Registration, LOI/LOP, customs compliance and audit support for STPI, HTPI and EHTP units.",
  provider: { "@id": "https://islf.in/#organization" },
  url: "https://islf.in/stpi",
  areaServed: "IN",
  serviceType: "STPI Consulting",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <STPIContent />
    </>
  );
}
