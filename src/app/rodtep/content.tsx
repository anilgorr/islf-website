"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, TrendingUp, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  "Assessment of RoDTEP eligibility across your export product portfolio.",
  "Assistance with RoDTEP declaration in Shipping Bills (SB003 scroll).",
  "Scrip / credit generation on ICEGATE and DGFT portals.",
  "Transfer / utilization of RoDTEP credits against import duties.",
  "Reconciliation of claimed amounts vs. approved disbursements.",
  "Compliance with RoDTEP Monitoring Committee guidelines.",
  "Advisory on product classification for correct RoDTEP rates.",
  "Assistance with SCOMET Export License under RoDTEP framework.",
  "Liaison with DGFT for scheme clarifications and representations.",
  "Transition advisory from MEIS to RoDTEP for affected exporters.",
];

const keyFacts = [
  "Effective from 1st January 2021 — replaced the MEIS scheme.",
  "Administered by the Ministry of Commerce and Industry.",
  "Benefits credited as transferable duty credit scrips.",
  "Rates notified by an Inter-Ministerial Committee.",
  "Applicable to all sectors (textiles, engineering, chemicals, etc.).",
  "Benefits can be transferred to other importers.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "RoDTEP Consulting Services — Remission of Duties and Taxes on Exported Products",
  "description": "Expert RoDTEP consulting by ISLF — eligibility assessment, Shipping Bill declaration, scrip generation, credit utilization and DGFT liaison for the Remission of Duties and Taxes on Exported Products scheme in India.",
  "provider": { "@id": "https://islf.in/#organization" },
  "url": "https://islf.in/rodtep",
  "areaServed": "IN",
  "serviceType": "RoDTEP Consulting",
};

export default function RoDTEPPage() {
  return (
    <PageLayout>
      <SEOHead
        title="RoDTEP Consulting India | Remission of Duties & Taxes on Exports | ISLF"
        description="Expert RoDTEP (Remission of Duties and Taxes on Exported Products) consulting by ISLF — eligibility assessment, Shipping Bill declaration, scrip generation, credit transfer and DGFT liaison for exporters across India."
        canonical="https://islf.in/rodtep"
        keywords="RoDTEP consultant India, RoDTEP scheme India, RoDTEP consulting services, remission duties taxes exports India, RoDTEP scrip India, MEIS replacement India, export incentives India, RoDTEP DGFT, RoDTEP ICEGATE, duty remission exports"
        jsonLd={jsonLd}
      />

      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Export Incentive Consulting
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              RoDTEP <span className="text-accent">Consulting</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Remission of Duties and Taxes on Exported Products — maximizing your export incentive benefits under India's flagship duty remission scheme.
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
                  <span className="block w-8 h-[2px] bg-accent" /> What is RoDTEP?
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-6">RoDTEP — Duty Remission for Exporters</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                  The <strong>Remission of Duties and Taxes on Exported Products (RoDTEP)</strong> scheme was introduced to implement the global principle that "taxes and duties should not be exported." It remits embedded taxes and duties not refunded by any other scheme — including electricity duties, VAT on fuel, mandi taxes and other indirect levies.
                </motion.p>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                  Effective from <strong>1st January 2021</strong>, RoDTEP replaced the Merchandise Exports from India Scheme (MEIS). Benefits are provided as transferable duty credit scrips credited to the exporter's ICEGATE account, usable for payment of import duties.
                </motion.p>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                  Many exporters leave significant RoDTEP benefits unclaimed due to incorrect Shipping Bill declarations or failure to properly track and utilize scrips. ISLF's experts ensure you capture every benefit entitled to your exports.
                </motion.p>

                <motion.p variants={fadeUp} className="font-heading font-semibold text-primary uppercase text-sm mb-4">RoDTEP Services We Offer</motion.p>
                <motion.ul variants={stagger} className="space-y-3 mb-8">
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
                <TrendingUp className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading font-semibold uppercase text-sm mb-3">Key Facts About RoDTEP</h3>
                <ul className="space-y-2 text-white/70 text-xs">
                  {keyFacts.map((b, i) => (
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
                    { label: "Customs Broking", href: "/customs-broking" },
                    { label: "GST Consulting", href: "/gst" },
                  ].map((l, i) => (
                    <Link key={i} href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent" /> {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-accent p-6 text-white">
                <p className="font-bold text-sm mb-1">Unclaimed RoDTEP?</p>
                <p className="text-white/80 text-xs mb-3">Let ISLF review your exports and recover your entitled benefits.</p>
                <Link href="/contacts">
                  <button className="w-full bg-white text-accent hover:bg-white/90 font-bold text-xs uppercase tracking-widest py-3 transition-colors">Contact Us</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">Maximize Your Export Returns</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-lg mx-auto mb-8">Our RoDTEP experts help exporters across all sectors — textiles, engineering, chemicals, pharma and more — maximize their entitled benefits.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contacts">
                <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all group inline-flex items-center gap-3">
                  Talk to RoDTEP Expert <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
