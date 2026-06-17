"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Factory } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  "Consultancy on EOU procedures and compliance requirements.",
  "Registration of Units under the Export Oriented Unit Scheme.",
  "Preparation of Application for setting up of EOU under SEZ / STPI / EHTP.",
  "Obtaining Letter of Intent (LOI) from Development Commissioner.",
  "Obtaining Letter of Permission (LOP) from the Director of STPI / Development Commissioner at SEZ.",
  "Obtaining In-bond Manufacturing License under Section 65 of the Customs Act, 1962.",
  "Obtaining Warehousing License under Section 58 of the Customs Act, 1962.",
  "Bonding of premises by the Customs department.",
  "Execution of B/17 Bond with Customs department.",
  "Handling all customs matters with respect to import and export of goods by the EOU unit.",
  "Submission of monthly / quarterly / yearly returns to concerned departments.",
  "DTA Sales permission from STPI / SEZ & Customs department.",
  "Obtaining CT3 Certificate.",
  "Reimbursement of CST from the concerned department.",
  "De-bonding of goods by the Customs authorities.",
  "De-bonding of premises by the Customs authorities.",
  "Shifting permission from STPI / Development Commissioner.",
  "Closure of the STPI / EHTP / EOU / SEZ Unit.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Export Oriented Unit (EOU) Consulting Services",
  "description": "Comprehensive EOU consulting by ISLF — registration, LOI/LOP, customs bonding, returns, DTA sales permission and closure procedures for Export Oriented Units in India.",
  "provider": { "@id": "https://islf.in/#organization" },
  "url": "https://islf.in/eou",
  "areaServed": "IN",
  "serviceType": "EOU Consulting",
};

export default function EOUPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Export Oriented Unit (EOU) Consulting India | Registration | Compliance | ISLF"
        description="Expert EOU (Export Oriented Unit) consulting services by ISLF — registration under STPI/EHTP/SEZ, LOI/LOP, customs bonding, Section 65 license, B/17 bond, DTA sales permission, annual returns and closure. Chennai, India."
        canonical="https://islf.in/eou"
        keywords="EOU consultant India, Export Oriented Unit consultant, EOU registration India, EOU compliance consultant, STPI EOU consultant, SEZ EOU consultant, B17 bond EOU, EOU customs bonding, EOU closure India, LOI LOP EOU"
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
              Export Oriented <span className="text-accent">Units</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Complete EOU consultancy — from initial setup and registration through day-to-day compliance, DTA sales and eventual closure.
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
                  <span className="block w-8 h-[2px] bg-accent" /> What We Offer
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-6">EOU Services</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                  An Export Oriented Unit (EOU) is a unit established under the EOU Scheme of the Government of India, eligible for importing goods duty-free for use in export production. ISLF provides end-to-end consultancy for setting up and managing EOU compliance.
                </motion.p>
                <motion.ul variants={stagger} className="space-y-3">
                  {services.map((item, i) => (
                    <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-gray-700 border-b border-gray-50 pb-3 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary text-white p-6">
                <Factory className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading font-semibold uppercase text-sm mb-2">EOU Scheme Benefits</h3>
                <ul className="space-y-2 text-white/70 text-xs">
                  {["Nil customs duty on capital goods & raw materials", "Exemption from excise duty on goods used for production", "Freedom to sell in DTA (with applicable duties)", "Access to global markets as a recognized exporter"].map((b, i) => (
                    <li key={i} className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-accent shrink-0 mt-0.5" />{b}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-accent/5 border border-accent/20 p-6">
                <p className="font-bold text-xs uppercase tracking-widest text-primary mb-3">Related Services</p>
                <div className="space-y-2">
                  {[{ label: "SEZ Consulting", href: "/sez" }, { label: "STPI Consulting", href: "/stpi" }, { label: "DGFT Consulting", href: "/dgft" }].map((l, i) => (
                    <Link key={i} href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent" /> {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-6">
                <p className="text-white font-bold text-sm mb-3">Ready to set up an EOU?</p>
                <Link href="/#contacts">
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest py-3 transition-colors">Contact Us</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>;
}
