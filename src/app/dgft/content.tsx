"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, FileText, Building2, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const coreServices = [
  "IEC (Import / Export Code) registration and modification.",
  "Steel Import Monitoring System (SIMS) registration.",
  "Obtain new EPCG / Advance Authorization (DEEC) / DFIA / Annual Advance Authorization.",
  "Obtain new RoDTEP / SCOMET Export license / TMA Scheme.",
  "Obtain new / renewal of Status Holder Certificate / RCMC Certificate.",
  "Deemed Exports — Drawback / Refund of Terminal Excise Duty (TED).",
  "Specific License for restricted items and Hi-tech Product Export Promotion Scheme.",
  "Clubbing / Amendment / Regularization / Extension / Invalidation / Revalidation of licenses.",
  "Free Sale Certificate for manufacturers or traders.",
  "Closure of EPCG / Advance (DEEC) / DFIA License.",
  "Chip Import Monitoring System (CHIMS).",
  "Restricted import authorization for IT hardware (Notification 23/2023 dated 03.08.2023).",
  "DGFT Appeals — HQ & Regional Authority (RA).",
];

const hqServices = [
  "Fixation / Ratification of SION Norms / Adhoc Norms.",
  "Import License for Restricted items (Negative License).",
  "Policy Relaxation Committee (PRC) representations.",
  "EPCG Committee representations.",
  "Exim Facilitation Committee (EFC) representations.",
  "Policy Interpretation Committee (PIC) representations.",
  "Revalidation / Extension / Condonation of licenses.",
];

const objectives = [
  "Regulating foreign trade (imports and exports) in India.",
  "Issuing Import Export Code (IEC) — mandatory for all importers and exporters.",
  "Formulating and implementing the Foreign Trade Policy (FTP).",
  "Licensing and permissions for export and import.",
  "Monitoring trade compliance and ensuring India's trade policy objectives are met.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://islf.in/dgft#service",
  "name": "DGFT Consulting Services",
  "description": "Expert DGFT (Directorate General of Foreign Trade) consulting services in India — IEC registration, EPCG, Advance Authorization, RoDTEP, SCOMET, Status Holder Certificate and HQ-level policy representations.",
  "provider": { "@id": "https://islf.in/#organization" },
  "url": "https://islf.in/dgft",
  "areaServed": "IN",
  "serviceType": "DGFT Consulting",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "areaServed": "IN",
  },
};

export default function DGFTPage() {
  return (
    <PageLayout>
      <SEOHead
        title="DGFT Consulting Services India | IEC Registration | EPCG | Advance Authorization | ISLF"
        description="Expert DGFT consultancy by ISLF — IEC registration, EPCG, Advance Authorization (DEEC), DFIA, RoDTEP, SCOMET licenses, Status Holder Certificate, SION norms and HQ-level policy representations in India."
        canonical="https://islf.in/dgft"
        keywords="DGFT consultant India, DGFT consultancy services, IEC registration India, EPCG license consultant, Advance Authorization consultant, DEEC license India, RoDTEP consultant, SCOMET license, Status Holder Certificate, RCMC certificate, DGFT HQ consultant, SION norms India"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Consulting Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              DGFT <span className="text-accent">Consulting</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Directorate General of Foreign Trade (DGFT) expertise — from IEC registration to HQ-level policy representations. We are one of India's leading DGFT consultancy providers.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link href="/#contacts">
                <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-8 py-3.5 transition-all group inline-flex items-center gap-3">
                  Get Expert Help <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* What is DGFT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span className="block w-8 h-[2px] bg-accent" /> Understanding DGFT
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-6">
                What is DGFT?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-5">
                <strong>DGFT (Directorate General of Foreign Trade)</strong> is an agency of the Ministry of Commerce and Industry, Government of India. It regulates foreign trade, formulates Foreign Trade Policy, and is the authority that issues all import-export licenses and codes.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-6">
                Navigating DGFT's complex regulatory framework requires deep expertise. ISLF's specialized team handles everything from routine IEC filings to intricate HQ-level policy interventions.
              </motion.p>
              <motion.div variants={fadeUp}>
                <p className="font-bold text-xs uppercase tracking-widest text-primary mb-3">DGFT Key Objectives</p>
                <ul className="space-y-2.5">
                  {objectives.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-2">
              <motion.div variants={fadeUp} className="bg-accent/5 border border-accent/20 p-5">
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-1">Why ISLF for DGFT?</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We are one of the leading DGFT consultancy providers in India with established representation at DGFT Headquarters in New Delhi — handling matters at PRC, EPCG Committee, EFC and PIC levels.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-primary/3 border border-gray-100 p-5">
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Quick Links</p>
                <div className="space-y-2">
                  {[
                    { label: "Customs Broking Services", href: "/customs-broking" },
                    { label: "RoDTEP Consulting", href: "/rodtep" },
                    { label: "All Consulting Services", href: "/consulting" },
                  ].map((link, i) => (
                    <Link key={i} href={link.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent" /> {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> What We Handle
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase">DGFT Services We Offer</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-white border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-primary uppercase">Core DGFT Services</h3>
              </div>
              <ul className="space-y-3">
                {coreServices.map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-primary text-white border border-primary p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-white uppercase">DGFT HQ Representations</h3>
              </div>
              <p className="text-white/70 text-sm mb-5">We are among the few consultants with expertise in handling matters directly at DGFT Headquarters, New Delhi:</p>
              <ul className="space-y-3">
                {hqServices.map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl uppercase mb-4">Need DGFT Assistance?</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 max-w-xl mx-auto mb-10">
              Our DGFT specialists handle everything from basic IEC registration to complex HQ-level policy matters. Get in touch today.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/#contacts">
                <button className="bg-white text-accent hover:bg-white/90 font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all">
                  Contact Our DGFT Team
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
