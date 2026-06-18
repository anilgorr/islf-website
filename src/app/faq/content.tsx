"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const faqs = [
  {
    q: "What is customs broking or customs brokerage?",
    a: "Customs broking or customs brokerage is a profession that involves the \"clearing\" of goods through customs barriers for importers and exporters. A licensed customs broker handles all documentation, duty calculations, regulatory compliance and communication with customs authorities on behalf of the importer or exporter.",
  },
  {
    q: "What is freight forwarding?",
    a: "A freight forwarder (also known as a non-vessel operating common carrier — NVOCC) is a person or company that organizes shipments for individuals or corporations to get goods from the manufacturer or producer to a market, customer or final point of distribution. They coordinate with shipping lines, airlines, trucking companies and customs authorities.",
  },
  {
    q: "What is multimodal transport?",
    a: "Multimodal transport (also known as combined transport) is the transportation of goods under a single contract, but performed with at least two different means of transport (e.g., rail, sea and road). The carrier — called a Multimodal Transport Operator (MTO) — is liable for the entire carriage even though it may involve several sub-carriers.",
  },
  {
    q: "What is a Shipping Bill / Bill of Export?",
    a: "A Shipping Bill is the document filed with the customs department to export cargo by crossing the country's border — through air, sea, road or rail. A Bill of Export is filed within a Special Economic Zone (SEZ), Export Processing Zone (EPZ) or Free Trade Zone (FTZ) and represents what is called a \"deemed export\" — where goods move within the country but outside the zone.",
  },
  {
    q: "What is a Bill of Entry?",
    a: "A Bill of Entry is a declaration / document prepared by an importer or their customs broker describing the goods, their precise quantity and value at the time of landing. It is the primary document examined by customs authorities for accuracy and conformity with the customs tariff and regulations before goods are permitted for consumption.",
  },
  {
    q: "What is a Bill of Lading or Airway Bill?",
    a: "A Bill of Lading is a legal document between the shipper of goods and the carrier, detailing the type, quantity and destination of goods. It serves as a receipt of shipment when goods are delivered. For ocean transport it is called a Bill of Lading; for road/surface transport it is a Waybill; for air transport it is an Airway Bill; for rail transport it is a Rail Receipt (RR).",
  },
  {
    q: "What is DGFT and why is IEC important?",
    a: "DGFT (Directorate General of Foreign Trade) is an agency of India's Ministry of Commerce and Industry that regulates foreign trade, formulates Foreign Trade Policy and issues import/export licenses. The Import Export Code (IEC) is mandatory for anyone who wants to import or export from India — without it, customs clearance cannot be completed.",
  },
  {
    q: "What services does ISLF provide for DGFT?",
    a: "ISLF provides comprehensive DGFT consultancy including IEC registration/modification, EPCG/Advance Authorization, RoDTEP/SCOMET licenses, Status Holder Certificates, SION Norms fixation at DGFT HQ, Policy Relaxation Committee representations, and closure of licenses. We handle both routine filings and complex HQ-level policy matters.",
  },
  {
    q: "What is the difference between FCL and LCL shipping?",
    a: "FCL (Full Container Load) means your shipment fills an entire container exclusively. LCL (Less than Container Load) means your shipment shares a container with other cargo — a freight forwarder consolidates multiple LCL shipments into one container. FCL is generally faster and more secure; LCL is more economical for smaller shipments.",
  },
  {
    q: "What is an Over-Dimensional Cargo (ODC)?",
    a: "Over-Dimensional Cargo (ODC) refers to cargo that exceeds standard container dimensions in weight, height, width or length — such as heavy machinery, industrial equipment or construction components. Special flat-rack, open-top or platform containers are required, along with specialized handling equipment and permits.",
  },
  {
    q: "What is an AEO certification?",
    a: "Authorised Economic Operator (AEO) is a programme under the World Customs Organization (WCO) SAFE Framework of Standards. An AEO-certified business is recognized by customs as a trusted trader, resulting in faster clearances, fewer examinations and priority treatment. ISLF holds AEO certification, enabling faster and smoother customs processing for our clients.",
  },
  {
    q: "What GST refunds can exporters claim?",
    a: "Exporters can claim: (1) Refund of ITC on export of goods/services without payment of tax, (2) IGST refund on exports with payment of tax, (3) ITC refund due to Inverted Tax Structure, (4) Refunds on supplies to SEZ units/developers, and (5) Deemed export refunds. ISLF handles all categories of GST refund filings.",
  },
];

const incoterms = [
  { term: "EXW — Ex Works", desc: "Minimum seller responsibility. Goods are made available at seller's premises; buyer handles all export clearance, insurance and transport." },
  { term: "FOB — Free On Board", desc: "Seller delivers goods to the port of origin. Risk transfers to buyer when goods cross the ship's rail. Used for ocean/inland waterway transport." },
  { term: "FCA — Free Carrier", desc: "Seller arranges transport to a named point, acting at buyer's risk and expense. Buyer is responsible for insurance." },
  { term: "FAS — Free Alongside Ship", desc: "Buyer bears all transportation costs and risk. Seller clears goods for export and delivers alongside the named vessel." },
  { term: "CFR — Cost and Freight", desc: "Seller pays freight to destination port. Risk transfers at port of origin. Buyer arranges insurance from port of shipment onwards." },
  { term: "CIF — Cost, Insurance & Freight", desc: "Like CFR, but seller also insures the goods during maritime transit. Delivery occurs at destination port." },
  { term: "CPT — Carriage Paid To", desc: "Seller pays freight to named destination. Risk transfers when goods are handed to the first carrier." },
  { term: "CIP — Carriage & Insurance Paid To", desc: "Like CPT, but seller must also purchase cargo insurance. Used primarily for multimodal transport." },
  { term: "DAP — Delivered At Place", desc: "Seller delivers goods ready for unloading at the named destination. Buyer handles import duties and clearance." },
  { term: "DDP — Delivered Duty Paid", desc: "Maximum seller responsibility. Seller handles all costs — freight, insurance, import duties and clearance — to buyer's door." },
  { term: "DDU — Delivered Duty Unpaid", desc: "Same as DDP except buyer is responsible for customs duties, fees and taxes upon arrival." },
  { term: "DEQ — Delivered Ex Quay", desc: "Seller delivers goods to the quay/wharf at destination port. Buyer arranges customs clearance and pays duties." },
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openInco, setOpenInco] = useState<number | null>(null);

  return (
    <PageLayout>
      <SEOHead
        title="FAQ — Customs Broking, Freight Forwarding & INCOTERMS | ISLF India"
        description="Answers to common questions about customs broking, freight forwarding, multimodal transport, Bills of Entry, Shipping Bills, Bill of Lading, airway bills and INCOTERMS (EXW, FOB, CIF, DDU, DDP) from ISLF India."
        canonical="https://islf.in/faq"
        keywords="customs broking FAQ India, freight forwarding questions India, INCOTERMS explained, Bill of Entry India, Shipping Bill India, Bill of Lading India, customs broker FAQ, multimodal transport India, EXW FOB CIF DDP explained"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "url": "https://islf.in/faq",
          "name": "ISLF FAQ — Customs Broking, Freight Forwarding & INCOTERMS",
          "mainEntity": [
            { "@type": "Question", "name": "What is customs broking?", "acceptedAnswer": { "@type": "Answer", "text": "Customs broking involves clearing goods through customs barriers for importers and exporters, handling documentation, duties, compliance and authority communication." } },
            { "@type": "Question", "name": "What is freight forwarding?", "acceptedAnswer": { "@type": "Answer", "text": "A freight forwarder organizes shipments for individuals or corporations to move goods from origin to destination, coordinating with shipping lines, airlines, trucking companies and customs." } },
            { "@type": "Question", "name": "What are INCOTERMS?", "acceptedAnswer": { "@type": "Answer", "text": "INCOTERMS (International Commercial Terms) are standardized trade terms defining the responsibilities of buyers and sellers in international trade — including EXW, FOB, CIF, DAP, DDP and others." } },
          ],
        }}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Knowledge Base
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Answers to common questions about customs broking, freight forwarding, DGFT, GST and international trade terms.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* FAQ accordion */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} className="border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left group hover:bg-accent/2 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-accent font-heading font-semibold text-lg shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading font-semibold text-primary text-base group-hover:text-accent transition-colors">{faq.q}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-accent shrink-0 mt-0.5 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="px-6 pb-6 pl-16 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* INCOTERMS section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> International Trade Terms
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl text-primary uppercase mb-4">
              INCOTERMS Guide
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 text-base leading-relaxed">
              INCOTERMS (International Commercial Terms) were created by the International Chamber of Commerce in 1936 to establish uniform language for global trade. Each term defines cost, control and liability responsibilities between buyer and seller.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto space-y-2">
            {incoterms.map((inco, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenInco(openInco === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group"
                >
                  <span className="font-heading font-semibold text-primary text-sm uppercase tracking-wide group-hover:text-accent transition-colors">
                    {inco.term}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-accent shrink-0 transition-transform duration-300 ${openInco === i ? "rotate-180" : ""}`} />
                </button>
                {openInco === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4"
                  >
                    {inco.desc}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl uppercase mb-6">
              Still Have Questions?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto mb-10">
              Our experts are happy to answer any specific queries about your shipment, trade compliance or documentation requirements.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contacts">
                <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all duration-300 group inline-flex items-center gap-3">
                  Contact Our Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
