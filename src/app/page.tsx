import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "ISLF — Indian Shipping & Logistics Facility | AEO Certified Customs Broker",
  description:
    "ISLF is India's premier AEO certified customs broker and freight forwarder. 25+ years of expertise in customs clearance, freight forwarding, DGFT consulting, CFS, EOU, SEZ, STPI and GST services.",
  keywords:
    "customs broker India, freight forwarder India, AEO certified customs broker, shipping company Chennai, logistics company India, DGFT consultant, customs clearance India, sea freight India, air freight India",
  alternates: { canonical: "https://islf.in/" },
  openGraph: {
    title: "ISLF — Indian Shipping & Logistics Facility | AEO Certified Customs Broker",
    description:
      "India's AEO certified customs broker & freight forwarder — 25+ years of expertise in customs clearance, DGFT, CFS, EOU, SEZ and GST services.",
    url: "https://islf.in/",
    type: "website",
  },
};

export default function Page() {
  return <HomeContent />;
}
