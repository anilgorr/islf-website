"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const duties = [
  { title: "Documentation", desc: "Handling Bills of Entry, Shipping Bills and all import/export documents with precision and compliance." },
  { title: "Duties & Taxes", desc: "Accurate calculation and timely payment of customs duties, GST, CESS and any other applicable levies." },
  { title: "Compliance & Regulations", desc: "Verifying adherence to all import/export regulations, licenses and restrictions applicable to the goods." },
  { title: "Authority Communication", desc: "Handling all customs authority interactions for smooth clearance — examinations, queries and assessments." },
  { title: "Cargo Inspection", desc: "Assistance with physical inspection and verification of goods when required by customs authorities." },
  { title: "Dispute Management", desc: "Resolving classification errors, valuation disputes and documentation discrepancies swiftly." },
  { title: "Logistics Coordination", desc: "Working with shipping lines, freight forwarders and transport companies for on-time delivery." },
];

const importServices = [
  "Normal / regular clearances on merit duty.",
  "Import clearance of raw materials under Advance Authorization (DEEC) with NIL duty.",
  "Capital goods under EPCG with NIL duty.",
  "Project Import Clearance.",
  "Import under concessional rate — Annexure III (EOU).",
  "Hi-tech goods, Served from India Scheme, Target Plus.",
  "Import under RoDTEP / Duty Free Import Authorization (DFIA).",
  "Bonding / De-bonding / High Sea Sale / Job Work.",
  "Re-import & Second-hand goods clearance.",
  "Closure of Warehouse Bond / DEEC Bond / EPCG Bond / Bank Guarantee at Customs.",
  "LMPC Certificate facilitation.",
  "PIMS Certificate facilitation.",
  "BIS Certificate facilitation.",
  "EPR Certificate facilitation.",
  "Customs Appeals.",
];

const exportServices = [
  "Duty Free Exports without claiming any export benefits.",
  "Export Clearance under licenses — DEEC / DFIA / EPCG / EOU / SEZ.",
  "Export Clearance under RoDTEP / Duty Drawback / ROSL.",
  "Re-Export clearances.",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Customs Broking Services India",
    "description": "AEO certified customs broking by ISLF — import and export customs clearance, documentation, duty payment, compliance, and all licensing for importers and exporters across India. Offices in Chennai, Tuticorin, Bengaluru, Gujarat.",
    "provider": { "@id": "https://islf.in/#organization" },
    "url": "https://islf.in/customs-broking",
    "areaServed": ["Chennai", "Tuticorin", "Bengaluru", "Gujarat", "India"],
    "serviceType": "Customs Broking",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "AEO Certification — Authorised Economic Operator",
      "credentialCategory": "AEO",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a licensed customs broker do in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A licensed customs broker (CHA — Custom House Agent) in India facilitates importers and exporters in clearing goods through customs. They handle documentation (Bills of Entry, Shipping Bills), calculate and pay customs duties/GST, ensure regulatory compliance, liaise with customs authorities and coordinate with shipping lines and freight forwarders for timely delivery.",
        },
      },
      {
        "@type": "Question",
        "name": "Is ISLF an AEO certified customs broker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ISLF holds AEO (Authorised Economic Operator) certification from the Central Board of Excise & Customs, Ministry of Finance, Government of India. ISLF was the first customs broker from Tuticorin to receive this certification, which enables faster clearances and fewer inspections for clients.",
        },
      },
    ],
  },
];

export default function CustomsBrokingPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Customs Broking India | AEO Certified Customs Clearance | Chennai | Tuticorin | ISLF"
        description="AEO certified customs broking by ISLF — import and export customs clearance, Bills of Entry, Shipping Bills, EPCG/DEEC/DFIA clearances, RoDTEP, duty drawback, BIS/LMPC/EPR certificates. Offices in Chennai, Tuticorin, Bengaluru, Gujarat."
        canonical="https://islf.in/customs-broking"
        keywords="customs broker India, customs clearance India, customs broker Chennai, customs broker Tuticorin, AEO certified customs broker, import clearance India, export clearance India, customs agent India, CHA India, Bill of Entry filing, Shipping Bill India, EPCG clearance, duty drawback India"
        jsonLd={jsonLd}
      />

      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> AEO Certified
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Customs <span className="text-accent">Broking</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              India's first AEO certified customs broker from Tuticorin — complete import and export clearance services with zero-compromise compliance.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* AEO Badge */}
      <section className="py-10 bg-accent text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-white shrink-0" />
              <div>
                <p className="font-heading font-semibold uppercase text-lg">AEO Certified — First from Tuticorin</p>
                <p className="text-white/80 text-sm">Authorised Economic Operator certification from CBEC, Ministry of Finance, Government of India</p>
              </div>
            </div>
            <Link href="/contacts">
              <button className="bg-white text-accent hover:bg-white/90 font-bold text-xs uppercase tracking-widest px-8 py-3 transition-colors shrink-0">
                Get Clearance Support
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What CCA does */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12 max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Our Role
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-4">
              What a Customs Broker Does
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              Customs Clearance Agents (CCA) / Customs Brokers facilitate importers and exporters to clear goods from customs, ensuring shipments comply with all laws and regulations. ISLF's licensed brokers handle every step of the clearance process.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {duties.map((d, i) => (
              <motion.div key={i} variants={fadeUp} className="border border-gray-100 p-6 hover:border-accent/40 transition-colors group">
                <span className="text-accent font-heading font-semibold text-2xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading font-semibold text-primary uppercase text-sm mt-2 mb-2 group-hover:text-accent transition-colors">{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Import & Export services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Clearance Services
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase">Import & Export Clearance</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-white border border-gray-100 p-8">
              <h3 className="font-heading font-semibold text-primary uppercase mb-5 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent inline-block" /> Import Clearances
              </h3>
              <ul className="space-y-3">
                {importServices.map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-primary border border-primary p-8">
              <h3 className="font-heading font-semibold text-white uppercase mb-5 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent inline-block" /> Export Clearances
              </h3>
              <ul className="space-y-3">
                {exportServices.map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">Also Available</p>
                <ul className="space-y-2">
                  {[{ label: "Customs Consultancy", href: "/customs-consultancy" }, { label: "DGFT Consulting", href: "/dgft" }, { label: "Freight Forwarding", href: "/services" }].map((l, i) => (
                    <li key={i}>
                      <Link href={l.href} className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-accent" /> {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">India's Trusted Customs Broker</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 max-w-lg mx-auto mb-8">AEO certified. Two decades of experience. Offices at Chennai, Tuticorin, Bengaluru and Gujarat.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contacts">
                <button className="bg-white text-accent hover:bg-white/90 font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all">
                  Request Clearance Support
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
