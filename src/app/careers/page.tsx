import type { Metadata } from "next";
import CareersContent from "./content";

export const metadata: Metadata = {
  title: "Careers at ISLF | Customs Broker Jobs | Freight Forwarding Jobs | India",
  description:
    "Join ISLF — India's AEO certified customs broker and freight forwarder. Open positions in Chennai, Tuticorin, Bengaluru and Gujarat: Customs Executive, Freight Operations Manager, DGFT Consultant, GST Consultant and more.",
  keywords:
    "customs broker jobs India, freight forwarding jobs India, DGFT consultant jobs, GST consultant jobs India, logistics jobs Chennai, customs executive jobs, shipping company jobs India, ISLF careers",
  alternates: { canonical: "https://islf.in/careers" },
  openGraph: {
    title: "Careers at ISLF | Customs Broker Jobs | Freight Forwarding Jobs | India",
    description: "Join India's AEO certified customs broker. Open positions in Chennai, Tuticorin, Bengaluru and Gujarat.",
    url: "https://islf.in/careers",
    type: "website",
  },
};

export default function Page() {
  return <CareersContent />;
}
