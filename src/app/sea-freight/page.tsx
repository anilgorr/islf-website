import type { Metadata } from "next";
import SeaFreightContent from "./content";

export const metadata: Metadata = {
  title: "Sea Freight India | FCL LCL Ocean Freight | Chennai Tuticorin | ISLF",
  description:
    "ISLF provides FCL, LCL, break-bulk, ODC and refrigerated ocean freight from Chennai, Tuticorin, JNPT and Mundra to 100+ countries — cost-effective shipping with AEO certified customs clearance.",
  keywords:
    "sea freight India, ocean freight India, FCL India, LCL India, FCL LCL freight India, ocean freight Chennai, ocean freight Tuticorin, break bulk cargo India, ODC cargo India, reefer cargo India, container shipping India, international sea freight India",
  alternates: { canonical: "https://islf.in/sea-freight" },
  openGraph: {
    title: "Sea Freight India | FCL, LCL & Break-Bulk Ocean Freight | ISLF",
    description:
      "FCL, LCL, ODC and reefer ocean freight from Chennai, Tuticorin and all major Indian ports — integrated with AEO certified customs clearance.",
    url: "https://islf.in/sea-freight",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://islf.in/sea-freight#service",
    name: "Sea Freight / Ocean Freight Services India",
    description:
      "FCL, LCL, break-bulk, ODC and refrigerated ocean freight by ISLF from Chennai, Tuticorin, JNPT, Mundra and all major Indian ports to worldwide destinations.",
    provider: { "@id": "https://islf.in/#organization" },
    url: "https://islf.in/sea-freight",
    areaServed: "IN",
    serviceType: "Sea Freight",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between FCL and LCL sea freight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FCL (Full Container Load) means your cargo fills or you book an entire container — best for large shipments above approximately 12–15 CBM. LCL (Less than Container Load) means your cargo is consolidated with other shippers' goods in a shared container — ideal for smaller consignments. ISLF handles both from all major Indian ports.",
        },
      },
      {
        "@type": "Question",
        name: "Which ports does ISLF handle sea freight from in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ISLF handles ocean freight from Chennai (Kamarajar/Ennore Port), Tuticorin (V.O. Chidambaranar Port), JNPT (Nhava Sheva), Mundra, Cochin and other major Indian ports — with direct offices in Chennai and Tuticorin.",
        },
      },
      {
        "@type": "Question",
        name: "Does ISLF handle refrigerated (reefer) container shipments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ISLF arranges reefer (refrigerated) container shipments for perishables, pharmaceuticals, chemicals and other temperature-sensitive cargo requiring controlled temperature environments throughout the ocean transit.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeaFreightContent />
    </>
  );
}
