"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText, Globe, Warehouse, Anchor, Truck, CheckCircle2, ArrowRight, ChevronDown,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const sections = [
  {
    icon: FileText,
    id: "dgft",
    title: "DGFT Consulting",
    subtitle: "Directorate General of Foreign Trade",
    intro: "DGFT is an agency of the Ministry of Commerce and Industry, Government of India. It regulates foreign trade, issues Import Export Codes, formulates Foreign Trade Policy and monitors trade compliance. We provide end-to-end DGFT consultancy.",
    groups: [
      {
        label: "Core DGFT Services",
        items: [
          "IEC (Import / Export Code) registration and modification",
          "Steel Import Monitoring System (SIMS) registration",
          "EPCG / Advance Authorization (DEEC) / DFIA / Annual Advance Authorization",
          "RoDTEP / SCOMET Export license / TMA Scheme",
          "Status Holder Certificate / RCMC Certificate (new & renewal)",
          "Deemed Exports — Drawback / Refund of Terminal Excise Duty (TED)",
          "Specific License for restricted items & Hi-tech Product Export Promotion Scheme",
          "Clubbing / Amendment / Regularization / Extension / Revalidation of licenses",
          "Free Sale Certificate for manufacturers or traders",
          "Closure of EPCG / Advance (DEEC) / DFIA License",
          "Chip Import Monitoring System (CHIMS)",
          "Restricted import authorization for IT hardware (Notification 23/2023)",
          "DGFT Appeals — HQ & Regional Authority",
        ],
      },
      {
        label: "DGFT Headquarters Representations",
        items: [
          "Fixation / Ratification of SION Norms / Adhoc Norms",
          "Import License for Restricted items (Negative License)",
          "Policy Relaxation Committee (PRC) representations",
          "EPCG Committee representations",
          "Exim Facilitation Committee (EFC) representations",
          "Policy Interpretation Committee (PIC) representations",
          "Revalidation / Extension / Condonation of licenses",
        ],
      },
    ],
  },
  {
    icon: Globe,
    id: "customs-consultancy",
    title: "Customs Consultancy",
    subtitle: "Advisory & Representation Services",
    intro: "Our customs consultancy goes beyond clearance — we provide expert advisory for complex customs matters including assessments under protest, refund claims, SCN responses, and appeals before all levels of customs authorities.",
    groups: [
      {
        label: "Consultancy Services",
        items: [
          "Finalization of assessment for provisional / protest basis clearances",
          "Claiming refunds and long-standing duty drawback from customs",
          "Response to Show Cause Notices (SCN) till adjudication & Appeals",
          "Challenges towards valuation / processing and finalization of SVB",
          "Assessment, inspection and examination of break-bulk cargo",
          "Vessel chartering advisory",
          "Appeal-related matters before customs authorities",
        ],
      },
    ],
  },
  {
    icon: Warehouse,
    id: "cfs",
    title: "CFS Consulting",
    subtitle: "Container Freight Station Services",
    intro: "A Container Freight Station (CFS) is a warehouse or terminal for loading/unloading containers. We provide comprehensive consulting for CFS setup, operations, and compliance for both LCL and FCL shipments.",
    groups: [
      {
        label: "CFS Services",
        items: [
          "Obtaining new CFS license till notification of CFS",
          "Permission for addition of special services at CFS — bonded warehouse, etc.",
          "LCL & FCL shipment management and advisory",
          "Import & export consolidation / de-consolidation",
          "Regulatory compliance advisory for CFS operators",
        ],
      },
    ],
  },
  {
    icon: Anchor,
    id: "stpi-sez-eou",
    title: "STPI / SEZ / EOU Consulting",
    subtitle: "Software Technology Parks, Special Economic Zones & Export Oriented Units",
    intro: "We offer complete consultancy for units operating under STPI, HTPI, SEZ and EOU schemes — from registration and day-to-day compliance to internal audits and closure procedures.",
    groups: [
      {
        label: "Setup & Registration",
        items: [
          "Preparation of Application for EOU under STPI / EHTP, SEZ unit, etc.",
          "Registration of units — obtaining LOI / LOP from Development Commissioner / STPI / SEZ / GST",
          "Consultancy on import & local procurement procedures for SEZ / STPI / HTPI / EOU",
        ],
      },
      {
        label: "Day-to-Day Compliance",
        items: [
          "Maintaining all registers as per STPI / SEZ / GST / Customs rules",
          "Submission of monthly / half-yearly returns to GST / STPI / SEZ",
          "DTA Sales permission from STPI / SEZ / GST / Customs",
          "Issue of Re-warehousing Certificates",
          "Handling material for job work — maintaining all job work registers",
          "Goods Received Note, Material Requisition Slip, Material Issue Slip management",
          "Work as C&F agent on behalf of developer / unit",
        ],
      },
      {
        label: "Internal Audit Services",
        items: [
          "Verification of Clearances",
          "Verification of Production / Stock / Delivery registers",
          "Verification of Purchase Records",
          "Verification of Job Work Records",
          "Verification of Export Documents",
        ],
      },
      {
        label: "Closure Services",
        items: [
          "Closure of STPI / EHTP / EOU / SEZ units",
          "Interacting with Customs and Development Commissioner for closure",
        ],
      },
    ],
  },
  {
    icon: Truck,
    id: "gst",
    title: "GST Consulting",
    subtitle: "Goods & Services Tax",
    intro: "GST is India's biggest indirect taxation reform. We diligently handle GST registration and all export-related refund claims, ensuring businesses recover every rupee they're entitled to.",
    groups: [
      {
        label: "IGST & ITC Refund Services",
        items: [
          "Refund of Excess Balance in Electronic Cash Ledger",
          "Refund of ITC on Export of Goods & Services without payment of tax",
          "On account of supplies made to SEZ unit / SEZ developer (without payment of tax)",
          "Refund on account of ITC accumulated due to Inverted Tax Structure",
          "Refund by Recipient of deemed export",
          "Supplies to SEZ unit / SEZ Developer (with payment of tax)",
          "Export of services with payment of tax",
          "Tax paid on intra-State supply subsequently held inter-State (and vice versa)",
          "Refund by Supplier of deemed export",
          "Excess payment of tax",
          "On account of Assessment / Provisional Assessment / Appeal / Any other order",
        ],
      },
    ],
  },
];

export default function ConsultingPage() {
  const [openSection, setOpenSection] = useState<string | null>("dgft");
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <PageLayout>
      <SEOHead
        title="EXIM Consulting Services India | DGFT | Customs | CFS | EOU | SEZ | STPI | GST | RoDTEP | ISLF"
        description="Comprehensive EXIM consulting by ISLF — DGFT, Customs Consultancy, CFS licensing, EOU registration, SEZ compliance, STPI/HTPI/EHTP, GST refunds and RoDTEP scheme advisory for importers and exporters across India."
        canonical="https://islf.in/consulting"
        keywords="EXIM consulting India, DGFT consultant India, customs consultancy India, CFS consultant, EOU consultant, SEZ consultant, STPI consultant, GST consultant India, RoDTEP consultant, trade compliance India, import export consulting India"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "ISLF EXIM Consulting Services",
          "description": "One-stop EXIM consulting — DGFT, Customs, CFS, EOU, SEZ, STPI, GST and RoDTEP consulting for importers and exporters in India.",
          "url": "https://islf.in/consulting",
          "provider": { "@id": "https://islf.in/#organization" },
        }}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Expert Advisory
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Consulting <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Specialized advisory for DGFT, Customs, GST, SEZ and STPI matters — trusted by exporters and importers across India for over two decades.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Quick nav */}
      <section className="bg-white border-b border-gray-100 sticky top-[76px] z-30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex gap-0 overflow-x-auto">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setOpenSection(openSection === s.id ? null : s.id)}
                className={`px-5 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all duration-200 shrink-0 ${openSection === s.id ? "border-accent text-accent" : "border-transparent text-gray-500 hover:text-primary"}`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-4">
            {sections.map((section) => {
              const Icon = section.icon;
              const isOpen = openSection === section.id;
              return (
                <motion.div
                  key={section.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenSection(isOpen ? null : section.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-accent" : "bg-primary/5 group-hover:bg-accent/10"}`}>
                        <Icon className={`w-6 h-6 transition-colors ${isOpen ? "text-white" : "text-primary group-hover:text-accent"}`} />
                      </div>
                      <div>
                        <h2 className="font-heading font-semibold text-lg md:text-xl text-primary uppercase">{section.title}</h2>
                        <p className="text-accent text-xs font-semibold mt-0.5">{section.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-primary/40 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""}`} />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-t border-gray-100 px-6 md:px-8 pb-8"
                    >
                      <p className="text-gray-600 leading-relaxed mt-6 mb-8 text-base">{section.intro}</p>
                      <div className="space-y-6">
                        {section.groups.map((group) => {
                          const groupKey = `${section.id}-${group.label}`;
                          const groupOpen = openGroups[groupKey] !== false;
                          return (
                            <div key={group.label} className="border border-gray-100">
                              <button
                                onClick={() => toggleGroup(groupKey)}
                                className="w-full flex items-center justify-between px-5 py-3 text-left bg-gray-50 hover:bg-accent/5 transition-colors"
                              >
                                <span className="font-bold text-xs uppercase tracking-widest text-primary">{group.label}</span>
                                <ChevronDown className={`w-4 h-4 text-accent transition-transform ${groupOpen ? "rotate-180" : ""}`} />
                              </button>
                              {groupOpen && (
                                <ul className="p-5 space-y-2.5">
                                  {group.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4">Two Decades of Expertise</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl uppercase mb-6">
              Talk to Our Consultants
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto mb-10">
              Every regulatory challenge has a solution. Our team of experts will analyze your specific situation and provide actionable guidance.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/#contacts">
                <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all duration-300 group inline-flex items-center gap-3">
                  Book a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
