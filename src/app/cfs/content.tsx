"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Warehouse, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  "Obtaining new CFS license through to full notification and operationalization.",
  "Staffing / coordination between CFS staff (custodian) and customs officials.",
  "Permission for addition of special services at CFS — bonded warehouse, temperature-controlled storage, etc.",
  "Facilitation towards creation of new EDI port code where required.",
  "Day-to-day statutory activities at the CFS.",
  "LCL (Less than Container Load) consolidation and deconsolidation.",
  "FCL (Full Container Load) import and export management.",
  "Liaison with customs department for all CFS operations.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Container Freight Station (CFS) Consulting Services",
  "description": "Professional CFS consulting by ISLF — CFS license procurement, bonded warehouse permissions, EDI port code facilitation, day-to-day statutory compliance and coordination with customs officials.",
  "provider": { "@id": "https://islf.in/#organization" },
  "url": "https://islf.in/cfs",
  "areaServed": "IN",
  "serviceType": "CFS Consulting",
};

export default function CFSPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Container Freight Station (CFS) Consulting India | CFS License | ISLF"
        description="Expert CFS (Container Freight Station) consulting by ISLF — CFS license procurement, bonded warehouse permissions, EDI port code, custodian coordination and full statutory compliance. Chennai, Tuticorin, India."
        canonical="https://islf.in/cfs"
        keywords="CFS consultant India, Container Freight Station consultant, CFS license India, CFS compliance consultant, bonded warehouse CFS India, CFS customs India, EDI port code CFS, CFS LCL FCL India"
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
              Container Freight <span className="text-accent">Station</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              End-to-end CFS consulting — from license procurement to daily operations, bonded warehousing and customs coordination.
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
                  <span className="block w-8 h-[2px] bg-accent" /> What is a CFS?
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-6">CFS Consulting Services</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                  A <strong>Container Freight Station (CFS)</strong> is a warehouse or terminal for loading (stuffing) exported cargo into containers and unloading (destuffing) imported containers. CFS facilities serve as central locations for receiving, storing, consolidating and deconsolidating goods.
                </motion.p>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                  CFS facilities provide services for both LCL (Less than Container Load) and FCL (Full Container Load) shipments — whether imported or exported. Obtaining and maintaining a CFS license requires specialized expertise in customs law, port regulations and statutory compliance.
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
                <Warehouse className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading font-semibold uppercase text-sm mb-2">CFS Key Facts</h3>
                <ul className="space-y-2 text-white/70 text-xs">
                  {[
                    "Regulated by Customs Act and Port regulations",
                    "License issued by Commissioner of Customs",
                    "Serves both LCL and FCL cargo",
                    "Can include bonded warehousing facilities",
                    "Requires EDI port code for electronic filing",
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
                    { label: "Customs Broking", href: "/customs-broking" },
                  ].map((l, i) => (
                    <Link key={i} href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent" /> {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-6">
                <p className="text-white font-bold text-sm mb-3">Planning a CFS?</p>
                <Link href="/contacts">
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
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">CFS License & Compliance Experts</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-lg mx-auto mb-8">Contact ISLF for expert guidance on CFS setup, license procurement and ongoing statutory compliance.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contacts">
                <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all group inline-flex items-center gap-3">
                  Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
