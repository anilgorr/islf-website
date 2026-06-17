import type { Metadata } from "next";
import CustomsConsultancyContent from "./content";

export const metadata: Metadata = {
  title: "Customs Consultancy Services India | Duty Drawback | SCN Response | Appeals | ISLF",
  description:
    "Expert customs consultancy by ISLF — provisional assessment finalization, duty drawback refunds, Show Cause Notice (SCN) responses, customs appeals (CESTAT), SVB investigations and re-assessment in India.",
  keywords:
    "customs consultancy India, duty drawback India, show cause notice customs, SCN response customs India, CESTAT appeals India, SVB investigation India, provisional assessment customs, customs refund India",
  alternates: { canonical: "https://islf.in/customs-consultancy" },
  openGraph: {
    title: "Customs Consultancy Services India | Duty Drawback | SCN Response | Appeals | ISLF",
    description: "Expert customs consultancy — duty drawback, SCN responses, CESTAT appeals and SVB investigations.",
    url: "https://islf.in/customs-consultancy",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/customs-consultancy#service",
  name: "Customs Consultancy Services",
  description: "Provisional assessment, duty drawback, SCN responses, CESTAT appeals and customs advisory services.",
  provider: { "@id": "https://islf.in/#organization" },
  url: "https://islf.in/customs-consultancy",
  areaServed: "IN",
  serviceType: "Customs Consultancy",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CustomsConsultancyContent />
    </>
  );
}
