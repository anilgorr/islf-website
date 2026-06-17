"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Monitor, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  "Consultancy on import & local procurement procedures for STPI / HTPI / EOU units.",
  "Preparation of Application for setting up of EOU under STPI / EHTP.",
  "Registration of units — obtaining LOI / LOP from Development Commissioner / Directorate of STPI.",
  "Maintain all registers as per STPI / SEZ / GST / Customs rules.",
  "Submission of monthly / half-yearly returns to GST / STPI / SEZ.",
  "Verification of Registration Certificate.",
  "Handling all customs department matters.",
  "Work as C&F agent on behalf of the developer / unit.",
  "DTA Sales permission from STPI / SEZ / GST / Customs department.",
  "Issue of Re-warehousing Certificates.",
  "Interacting with Customs and Development Commissioner.",
  "Provide Help Desk on-site for EOU under STPI / EHTP for day-to-day activity.",
  "Closure of the STPI / EHTP / EOU / SEZ Unit.",
];

const auditServices = [
  "Verification of Clearances.",
  "Verification of Production / Stock / Delivery registers.",
  "Verification of Purchase Records.",
  "Verification of Job Work Records.",
  "Verification of Export Documents.",
];

const recordsManaged = [
  "Goods Received Note.",
  "Material Requisition Slip.",
  "Material Issue Slip.",
  "Consumption Records.",
  "Job Work Registers.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "STPI / HTPI / EHTP Consulting Services",
  "description": "Expert STPI, HTPI and EHTP consulting by ISLF — registration, LOI/LOP, customs handling, periodic returns, DTA sales permission, internal audit and on-site help desk for Software Technology Parks in India.",
  "provider": { "@id": "https://islf.in/#organization" },
  "url": "https://islf.in/stpi",
  "areaServed": "IN",
  "serviceType": "STPI Consulting",
};

export default function STPIPage() {
  return (
    <PageLayout>
      <SEOHead
        title="STPI Consulting India | Software Technology Parks | HTPI | EHTP | ISLF"
        description="Expert STPI (Software Technology Parks India), HTPI and EHTP consulting by ISLF — registration, LOI/LOP, customs compliance, periodic returns, DTA sales permission, internal audit and unit closure. Chennai, India."
        canonical="https://islf.in/stpi"
        keywords="STPI consultant India, Software Technology Parks India consultant, HTPI consultant, EHTP consultant, STPI registration India, STPI compliance, STPI customs India, STPI LOI LOP, STPI DTA sales, STPI closure India"
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
              STPI / HTPI / <span className="text-accent">EHTP</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Software Technology Parks India (STPI), Hardware Technology Parks India (HTPI) and Electronic Hardware Technology Parks (EHTP) — complete consulting from setup to closure.
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
                  <span className="block w-8 h-[2px] bg-accent" /> Full-Spectrum Consulting
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-6">STPI / SEZ / EOU Services</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                  Software Technology Parks India (STPI) is a scheme under the Ministry of Electronics and Information Technology (MeitY) that allows software companies to export software and IT services with significant duty and tax benefits.
                </motion.p>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                  ISLF provides comprehensive consulting covering all activities related to SEZ / STPI / HTPI / EOU units — from initial registration and obtaining LOI/LOP through ongoing compliance and eventually closure.
                </motion.p>

                <motion.div variants={fadeUp} className="mb-8">
                  <p className="font-heading font-semibold text-primary uppercase text-sm mb-4">Core Consulting Services</p>
                  <ul className="space-y-3">
                    {services.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 border-b border-gray-50 pb-3 last:border-0">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 border border-gray-100">
                    <p className="font-heading font-semibold text-primary uppercase text-xs mb-4">Internal Audit Services</p>
                    <ul className="space-y-2">
                      {auditServices.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 p-6">
                    <p className="font-heading font-semibold text-primary uppercase text-xs mb-4">Records We Maintain</p>
                    <ul className="space-y-2">
                      {recordsManaged.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary text-white p-6">
                <Monitor className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading font-semibold uppercase text-sm mb-2">STPI Key Benefits</h3>
                <ul className="space-y-2 text-white/70 text-xs">
                  {[
                    "100% FDI through automatic route for IT/ITES",
                    "Duty-free import of hardware and software",
                    "Tax holiday benefits (subject to current policy)",
                    "Single-window clearance for imports",
                    "Simplified export documentation",
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
                    { label: "SEZ Consulting", href: "/sez" },
                    { label: "EOU Consulting", href: "/eou" },
                    { label: "GST Consulting", href: "/gst" },
                  ].map((l, i) => (
                    <Link key={i} href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent" /> {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-6">
                <p className="text-white font-bold text-sm mb-3">Need STPI guidance?</p>
                <Link href="/#contacts">
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest py-3 transition-colors">Contact Us</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">Your STPI/SEZ/EOU Partner</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-lg mx-auto mb-8">From registration to closure, ISLF handles all compliance for technology park units across India.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/#contacts">
                <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all group inline-flex items-center gap-3">
                  Get Expert Guidance <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
