"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Receipt, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const refundTypes = [
  { title: "Excess Balance — Electronic Cash Ledger", desc: "Refund of excess balance deposited in the Electronic Cash Ledger under GST." },
  { title: "ITC on Exports (without IGST payment)", desc: "Refund of accumulated Input Tax Credit on export of goods & services without payment of IGST." },
  { title: "SEZ Supplies (without payment of tax)", desc: "Refund on account of supplies made to SEZ unit or SEZ developer without payment of tax." },
  { title: "Inverted Tax Structure", desc: "Refund of ITC accumulated due to Inverted Duty / Tax Structure (where input GST rate exceeds output GST rate)." },
  { title: "Deemed Exports — Recipient", desc: "Refund on account of supplies treated as deemed exports, claimable by the recipient." },
  { title: "SEZ Supplies (with payment of tax)", desc: "Refund on account of supplies to SEZ unit / SEZ Developer with payment of tax." },
  { title: "Export of Services (with IGST)", desc: "Refund for export of services where IGST has been paid (CIF basis)." },
  { title: "Inter-State vs Intra-State Supply Error", desc: "Tax paid on intra-State supply subsequently held to be inter-State supply and vice versa." },
  { title: "Deemed Exports — Supplier", desc: "Refund on account of deemed export supplies, claimable by the supplier." },
  { title: "Excess Tax Payment", desc: "Refund for excess GST paid due to clerical / calculation errors." },
  { title: "Assessment / Appeal Orders", desc: "Refund pursuant to Assessment, Provisional Assessment, Appeal or any other order by GST authorities." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GST Consulting Services India",
    "description": "Expert GST consulting by ISLF — GST registration, IGST refunds for exporters, ITC refunds, SEZ supply refunds, deemed export refunds and all GST compliance for importers and exporters in India.",
    "provider": { "@id": "https://islf.in/#organization" },
    "url": "https://islf.in/gst",
    "areaServed": "IN",
    "serviceType": "GST Consulting",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can exporters claim IGST refunds in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Exporters can claim IGST refunds either by paying IGST on exports and claiming a refund, or by exporting under bond/LUT and claiming refund of accumulated ITC. ISLF handles both routes for exporters across India.",
        },
      },
      {
        "@type": "Question",
        "name": "What is an Inverted Tax Structure refund under GST?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An Inverted Tax Structure exists when the GST rate on inputs is higher than the GST rate on output supplies. In such cases, businesses can claim a refund of the accumulated ITC that cannot be utilized against output tax liability.",
        },
      },
    ],
  },
];

export default function GSTPage() {
  return (
    <PageLayout>
      <SEOHead
        title="GST Consulting Services India | IGST Refunds | ITC Refunds | Exporters | ISLF"
        description="Expert GST consulting by ISLF — GST registration for importers/exporters, IGST refunds, ITC refunds (inverted tax structure), SEZ supply refunds, deemed export refunds and all GST compliance. Chennai, India."
        canonical="https://islf.in/gst"
        keywords="GST consultant India, IGST refund consultant, ITC refund India, GST registration India, inverted tax structure refund, GST exporter India, SEZ GST refund, deemed export GST refund, GST consultancy Chennai, GST compliance India"
        jsonLd={jsonLd}
      />

      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Consulting Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              GST <span className="text-accent">Consulting</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Goods & Services Tax expertise for importers and exporters — registration, IGST refunds, ITC claims, SEZ and deemed export compliance.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                  <span className="block w-8 h-[2px] bg-accent" /> GST for Trade
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-6">GST Consulting Services</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                  GST (Goods and Services Tax) is India's biggest indirect taxation reform, replacing multiple central and state taxes. Every business involved in import or export must be registered under GST, and exporters are entitled to significant refunds that many businesses miss due to procedural complexity.
                </motion.p>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                  ISLF's GST team handles registration, refund facilitation and compliance — ensuring your business recovers every rupee of IGST and ITC it is entitled to.
                </motion.p>
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary text-white p-6">
                <Receipt className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading font-semibold uppercase text-sm mb-2">Why Act on GST Refunds?</h3>
                <ul className="space-y-2 text-white/70 text-xs">
                  {[
                    "Unclaimed refunds directly impact working capital",
                    "Time-barred claims cannot be recovered later",
                    "Complex portal procedures prevent many from claiming",
                    "ISLF handles end-to-end filing and follow-up",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-accent/5 border border-accent/20 p-6">
                <p className="font-bold text-xs uppercase tracking-widest text-primary mb-3">Related Services</p>
                <div className="space-y-2">
                  {[
                    { label: "DGFT Consulting", href: "/dgft" },
                    { label: "RoDTEP Consulting", href: "/rodtep" },
                    { label: "Customs Consultancy", href: "/customs-consultancy" },
                  ].map((l, i) => (
                    <Link key={i} href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent" /> {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-6">
                <p className="text-white font-bold text-sm mb-3">Claim your GST refunds</p>
                <Link href="/#contacts">
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest py-3 transition-colors">Contact Us</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* IGST Refund types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> IGST & ITC Refunds
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-3">Refund Categories We Handle</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 max-w-2xl">We facilitate all 11 categories of GST refunds applicable to exporters, SEZ suppliers and deemed exporters:</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {refundTypes.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white border border-gray-100 p-5 hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-heading font-semibold text-lg shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-heading font-semibold text-primary text-sm uppercase mb-1">{item.title}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">Maximize Your GST Refunds</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-lg mx-auto mb-8">Don't leave money on the table. ISLF's GST experts handle all refund categories for exporters and SEZ units across India.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/#contacts">
                <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all group inline-flex items-center gap-3">
                  Contact GST Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
