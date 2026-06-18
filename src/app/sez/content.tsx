"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Globe, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  "Consultancy on import & local procurement procedures for SEZ units and developers.",
  "Handling customs department matters at the SEZ.",
  "Work as C&F agent on behalf of the developer / unit.",
  "Maintain all registers as per SEZ Rules and regulations.",
  "Submission of monthly / half-yearly returns to the Development Commissioner.",
  "Maintaining Goods Received Note records.",
  "Maintaining Material Requisition Slip records.",
  "Maintaining Material Issue Slip records.",
  "Consumption records management.",
  "Handling material for job work — maintain all job work registers.",
  "Issue of Form-I for availing CST Exemption.",
  "Issue of Re-warehousing Certificates.",
  "Interacting with Customs and Development Commissioner on behalf of units.",
  "Provide Help Desk at the SEZ site for day-to-day activity handling.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Special Economic Zone (SEZ) Consulting Services",
  "description": "Expert SEZ consulting by ISLF — import procedures, compliance, C&F agency, register maintenance, Development Commissioner returns, job work and on-site help desk for SEZ units in India.",
  "provider": { "@id": "https://islf.in/#organization" },
  "url": "https://islf.in/sez",
  "areaServed": "IN",
  "serviceType": "SEZ Consulting",
};

export default function SEZPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Special Economic Zone (SEZ) Consulting India | SEZ Compliance | C&F Agent | ISLF"
        description="Expert SEZ (Special Economic Zone) consulting by ISLF — import procedures, Development Commissioner returns, C&F agency, customs handling, register maintenance and on-site help desk for SEZ units and developers in India."
        canonical="https://islf.in/sez"
        keywords="SEZ consultant India, Special Economic Zone consultant, SEZ compliance India, SEZ customs India, SEZ C&F agent, Development Commissioner returns, SEZ import procedures, SEZ register maintenance, SEZ help desk India"
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
              Special Economic <span className="text-accent">Zone</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Full-spectrum SEZ consulting — procurement procedures, compliance, C&F agency, register management and Development Commissioner liaison.
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
                <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-6">SEZ Consulting Services</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                  A <strong>Special Economic Zone (SEZ)</strong> is a designated geographic region with economic and trade laws that differ from the rest of the country. Units operating within SEZs benefit from significant tax incentives, duty-free imports and simplified regulatory procedures.
                </motion.p>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                  However, SEZ operations involve complex ongoing compliance — register maintenance, periodic returns, customs coordination and Development Commissioner interactions. ISLF provides on-site and remote support for all these requirements.
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
                <Globe className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading font-semibold uppercase text-sm mb-2">SEZ Benefits</h3>
                <ul className="space-y-2 text-white/70 text-xs">
                  {[
                    "Duty-free import of goods and services",
                    "100% income tax exemption for first 5 years",
                    "Exemption from central and state levies",
                    "No minimum export performance requirement",
                    "Single-window clearance facility",
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
                    { label: "EOU Consulting", href: "/eou" },
                    { label: "STPI Consulting", href: "/stpi" },
                    { label: "DGFT Consulting", href: "/dgft" },
                  ].map((l, i) => (
                    <Link key={i} href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent" /> {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-6">
                <p className="text-white font-bold text-sm mb-3">Setting up in an SEZ?</p>
                <Link href="/contacts">
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest py-3 transition-colors">Contact Us</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">SEZ Compliance Made Simple</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 max-w-lg mx-auto mb-8">ISLF handles all SEZ compliance requirements so you can focus on your core business.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contacts">
                <button className="bg-white text-accent hover:bg-white/90 font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all">
                  Talk to Our SEZ Experts
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
