import type { Metadata } from "next";
import StevedoringContent from "./content";

export const metadata: Metadata = {
  title: "Stevedoring Services India | Vessel Loading & Unloading | Tuticorin | ISLF",
  description:
    "Professional stevedoring by ISLF — vessel loading and unloading of dry bulk, break-bulk, project cargo and containers with experienced gangs and modern equipment at Indian ports including Tuticorin.",
  keywords:
    "stevedoring India, stevedoring Tuticorin, vessel loading unloading India, break bulk handling, dry bulk stevedoring, project cargo handling India, port cargo handling, stevedore Tuticorin port",
  alternates: { canonical: "https://islf.in/stevedoring" },
  openGraph: {
    title: "Stevedoring Services India | Vessel Loading & Unloading | ISLF",
    description: "Professional stevedoring — dry bulk, break-bulk, project cargo and container handling at Indian ports.",
    url: "https://islf.in/stevedoring",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/stevedoring#service",
  name: "Stevedoring Services",
  description: "Vessel loading and unloading — dry bulk, break-bulk, project cargo and container handling with experienced gangs and modern equipment.",
  provider: { "@id": "https://islf.in/#organization" },
  url: "https://islf.in/stevedoring",
  areaServed: "IN",
  serviceType: "Stevedoring",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StevedoringContent />
    </>
  );
}
