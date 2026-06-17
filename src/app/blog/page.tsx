import type { Metadata } from "next";
import BlogContent from "./content";

export const metadata: Metadata = {
  title: "ISLF Blog — Logistics Insights, Trade Policy & Customs Updates | India",
  description:
    "Expert trade and logistics insights from ISLF — RoDTEP scheme, DGFT policy, GST for exporters, customs broker guides, freight forwarding tips and EXIM compliance updates for Indian businesses.",
  keywords:
    "logistics blog India, customs broker blog, DGFT updates India, RoDTEP blog, GST exporter India, trade policy India, EXIM blog, shipping news India, customs clearance guide",
  alternates: { canonical: "https://islf.in/blog" },
  openGraph: {
    title: "ISLF Blog — Logistics Insights, Trade Policy & Customs Updates | India",
    description: "Expert trade and logistics insights from ISLF — RoDTEP, DGFT, GST and customs broker guides.",
    url: "https://islf.in/blog",
    type: "website",
  },
};

export default function Page() {
  return <BlogContent />;
}
