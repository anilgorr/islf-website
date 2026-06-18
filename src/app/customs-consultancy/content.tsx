"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Scale, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  "Finalization of assessment for clearances under provisional assessment or protest basis.",
  "Claiming refunds and long-standing duty drawback from Customs.",
  "Assistance to respond to Show Cause Notices (SCN) from Customs till adjudication.",
  "Appeals before Customs authorities — Commissioner (Appeals) and CESTAT.",
  "Challenges towards valuation / processing and finalization of SVB (Special Valuation Branch).",
  "Assessment, inspection and examination of break-bulk cargo.",
  "Vessel chartering advisory.",
  "Advisory on import/export policy classifications and duty structures.",
  "Resolution of disputes over mis-classification of goods.",
  "Assistance with re-assessment and correction of demand notices.",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Customs Consultancy Services India",
    "description": "Professional customs consultancy by ISLF — provisional assessment finalization, duty drawback refunds, SCN responses, customs appeals (CESTAT), SVB challenges and break-bulk cargo advisory in India.",
    "provider": { "@id": "https://islf.in/#organization" },
    "url": "https://islf.in/customs-consultancy",
    "areaServed": "IN",
    "serviceType": "Customs Consultancy",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Show Cause Notice (SCN) in Customs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Show Cause Notice (SCN) is a formal notice issued by Customs authorities requiring an importer or exporter to explain why a specific action should not be taken against them — such as payment of additional duty, imposition of penalty, or confiscation of goods. ISLF provides expert assistance in drafting responses to SCNs through to adjudication and appeals.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the SVB (Special Valuation Branch) in Customs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Special Valuation Branch (SVB) is a customs authority that examines the valuation of imported goods in transactions between related parties to ensure that the declared transaction value is not influenced by the relationship. ISLF provides expert assistance in SVB proceedings and finalization of SVB orders.",
        },
      },
    ],
  },
];

export default function CustomsConsultancyPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Customs Consultancy Services India | Duty Drawback | SCN Response | Appeals | ISLF"
        description="Expert customs consultancy by ISLF — provisional assessment finalization, duty drawback refunds, Show Cause Notice (SCN) responses, customs appeals (CESTAT), SVB challenges and break-bulk cargo advisory. Chennai, Tuticorin, India."
        canonical="https://islf.in/customs-consultancy"
        keywords="customs consultancy India, customs consultant Chennai, duty drawback India, show cause notice customs, customs SCN response, CESTAT appeal India, SVB customs India, provisional assessment customs, customs valuation dispute India, break bulk cargo customs"
        jsonLd={jsonLd}
      />

      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Advisory Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Customs <span className="text-accent">Consultancy</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Professional advisory for complex customs matters — assessments, refunds, Show Cause Notices, SVB challenges and appeal proceedings before Customs and CESTAT.
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
                  <span className="block w-8 h-[2px] bg-accent" /> Beyond Clearance
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-6">Customs Advisory Services</motion.h2>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                  Customs Consultancy Services go far beyond routine import/export clearance. They provide professional advisory and representation for businesses facing complex regulatory situations — from disputed assessments and duty recovery to Show Cause Notices and formal appeals.
                </motion.p>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                  ISLF's customs consultancy team has extensive experience navigating disputes with customs authorities, representing clients before Commissioners and CESTAT, and resolving long-standing valuation and classification issues.
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
                <Scale className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading font-semibold uppercase text-sm mb-2">Common Issues We Resolve</h3>
                <ul className="space-y-2 text-white/70 text-xs">
                  {[
                    "Disputes over HS Code classification",
                    "Valuation disagreements with customs",
                    "Pending duty drawback claims",
                    "Unexplained SCNs and demands",
                    "CESTAT appeals and representations",
                    "SVB proceedings for related-party imports",
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
                    { label: "Customs Broking", href: "/customs-broking" },
                    { label: "DGFT Consulting", href: "/dgft" },
                    { label: "All Services", href: "/services" },
                  ].map((l, i) => (
                    <Link key={i} href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent" /> {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary p-6">
                <p className="text-white font-bold text-sm mb-1">Received an SCN?</p>
                <p className="text-white/70 text-xs mb-3">Don't delay. Time-bound responses are critical in customs disputes.</p>
                <Link href="/contacts">
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest py-3 transition-colors">Contact Us Now</button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">Expert Customs Representation</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 max-w-lg mx-auto mb-8">ISLF's customs consultants have resolved complex customs disputes for clients across industries — from SCN responses to CESTAT representations.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contacts">
                <button className="bg-white text-accent hover:bg-white/90 font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all">
                  Talk to Our Customs Expert
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
