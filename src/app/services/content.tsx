"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ship, Plane, FileText, ShieldCheck, Warehouse, Globe, CheckCircle2,
  ChevronRight, ArrowRight, Anchor, Truck,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: ShieldCheck,
    title: "Customs Broking",
    slug: "customs-broking",
    href: "/customs-broking",
    tagline: "Compliant clearance, every shipment.",
    summary: "We facilitate importers and exporters to clear goods through customs, ensuring shipments comply with all laws, regulations and documentation requirements.",
    highlights: [
      "Normal / regular clearances on merit duty",
      "Import clearance under Advance Authorization (DEEC) & EPCG with NIL duty",
      "Project Import Clearance & concessional rate clearances",
      "Bonding / De-bonding / High Sea Sale / Job work",
      "BIS, LMPC, PIMS, EPR Certificate facilitation",
      "Customs Appeals representation",
      "Export clearances under RoDTEP / Duty Drawback / ROSL",
      "Re-Export clearances",
    ],
  },
  {
    icon: Ship,
    title: "Freight Forwarding",
    slug: "freight-forwarding",
    href: "/freight-forwarding",
    tagline: "From origin to destination, seamlessly.",
    summary: "We provide air freight, ocean freight and multimodal transportation worldwide — door pickup to door delivery, covering FCL, LCL, ODC and special cargo.",
    highlights: [
      "FCL & LCL shipments globally",
      "Over-Dimensional Cargo (ODC) & special equipment handling",
      "Door-to-door delivery (DDU & DDP processing)",
      "Break-Bulk & de-consolidation services",
      "Refrigerated cargo & cold chain logistics",
      "Dangerous Goods (DGR) & perishable cargo handling",
      "Chartering services — aircraft & vessel",
      "ATA Carnet & exhibition cargo handling",
    ],
  },
  {
    icon: FileText,
    title: "DGFT Consulting",
    slug: "dgft",
    href: "/dgft",
    tagline: "Navigate foreign trade policy with confidence.",
    summary: "We provide end-to-end consultancy for Directorate General of Foreign Trade (DGFT) matters — from IEC registration to HQ-level policy representations.",
    highlights: [
      "IEC (Import / Export Code) registration & modification",
      "EPCG / Advance Authorization (DEEC) / DFIA processing",
      "RoDTEP / SCOMET Export license",
      "Status Holder Certificate & RCMC Certificate",
      "Deemed Exports — Drawback / Refund of TED",
      "SION Norms fixation / ratification at DGFT HQ",
      "Policy Relaxation Committee (PRC) representations",
      "Closure of EPCG / Advance / DFIA licenses",
    ],
  },
  {
    icon: Globe,
    title: "Customs Consultancy",
    slug: "customs-consultancy",
    href: "/customs-consultancy",
    tagline: "Advisory beyond clearance.",
    summary: "Professional advisory services for complex customs matters — assessments, refunds, show cause notices, SVB challenges and appeal proceedings.",
    highlights: [
      "Finalization of provisional / protest assessments",
      "Claiming refunds & long-standing duty drawback",
      "Response to Show Cause Notices till adjudication",
      "Valuation challenges & SVB finalization",
      "Assessment & inspection of break-bulk cargo",
      "Vessel chartering advisory",
      "Appeals before Customs authorities",
    ],
  },
  {
    icon: Warehouse,
    title: "CFS Consulting",
    slug: "cfs",
    href: "/cfs",
    tagline: "Container Freight Station expertise.",
    summary: "We assist in obtaining CFS licenses, adding special services like bonded warehousing, and managing all compliance requirements for CFS operations.",
    highlights: [
      "Obtaining new CFS license till notification",
      "Permission for addition of bonded warehouse & special services",
      "LCL & FCL shipment management",
      "Import & export consolidation / deconsolidation",
      "Regulatory compliance advisory",
    ],
  },
  {
    icon: Anchor,
    title: "STPI / SEZ / EOU Consulting",
    slug: "stpi-sez-eou",
    href: "/stpi",
    tagline: "Technology park & zone compliance.",
    summary: "Complete consultancy for Software Technology Parks, Special Economic Zones and Export Oriented Units — from setup to day-to-day compliance and closure.",
    highlights: [
      "Registration under STPI / SEZ / EOU (LOI / LOP)",
      "Import & local procurement procedures for SEZ / STPI / EOU",
      "Monthly / half-yearly returns to GST / STPI / SEZ",
      "DTA Sales permission from STPI / SEZ / Customs",
      "Maintaining Goods Received, Material Issue & Consumption records",
      "Internal audit — clearances, stock, purchase, job work",
      "Closure of STPI / EHTP / EOU / SEZ units",
    ],
  },
  {
    icon: Anchor,
    title: "Stevedoring",
    slug: "stevedoring",
    href: "/stevedoring",
    tagline: "Expert cargo handling at the berth.",
    summary: "Professional stevedoring services for loading and unloading vessels — dry bulk, break-bulk, project cargo and containers — with experienced gangs and modern equipment at Indian ports.",
    highlights: [
      "Expert stevedoring & port cargo handling",
      "Lo-Lo operations with harbor & gantry cranes",
      "Dry bulk & liquid bulk transfer",
      "Project cargo, steel, machinery & oversized shipments",
      "Automotive & wheeled cargo handling",
      "Cargo securing, weight distribution & lashing",
      "Temporary storage, staging & yard-to-quay transfer",
      "Port compliance & documentation support",
    ],
  },
  {
    icon: Truck,
    title: "GST Consulting",
    slug: "gst",
    href: "/gst",
    tagline: "Indirect tax expertise for trade.",
    summary: "We handle GST registration, IGST refunds and all export-related GST compliance — ensuring your business recovers every rupee it's entitled to.",
    highlights: [
      "GST registration for importers & exporters",
      "Refund of ITC on Export of Goods & Services (without payment of tax)",
      "IGST refunds — SEZ supplies, deemed exports",
      "ITC refunds due to Inverted Tax Structure",
      "Export of services with payment of tax refunds",
      "Excess payment of tax claims",
      "Assessment / Provisional Assessment / Appeal-related refunds",
    ],
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <PageLayout>
      <SEOHead
        title="Logistics & Shipping Services India | Customs Broking | Freight Forwarding | ISLF"
        description="ISLF offers AEO certified customs broking, sea freight, air freight, road freight, warehousing, DGFT consulting, CFS, EOU/SEZ/STPI and GST services across India. Offices in Chennai, Tuticorin, Bengaluru, Gujarat."
        canonical="https://islf.in/services"
        keywords="logistics services India, customs broking India, freight forwarding India, sea freight India, air freight India, warehousing India, DGFT consulting, CFS India, EOU SEZ STPI consultant, GST consulting India, shipping company India"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "ISLF Logistics & Shipping Services",
          "description": "Complete range of logistics and EXIM trade services by ISLF — customs broking, freight forwarding, DGFT, CFS, EOU, SEZ, STPI, GST and RoDTEP consulting.",
          "url": "https://islf.in/services",
          "provider": { "@id": "https://islf.in/#organization" },
        }}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> What We Do
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Our <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              From customs broking to freight forwarding and government trade consulting — ISLF is your single-window partner for all logistics and compliance needs.
            </motion.p>
          </motion.div>
        </div>
        {/* Decorative angled bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isOpen = expanded === service.slug;
              return (
                <motion.div
                  key={service.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className={`border-2 transition-all duration-300 ${isOpen ? "border-accent col-span-1 md:col-span-2 lg:col-span-1" : "border-gray-100 hover:border-accent/40"} bg-white`}
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : service.slug)}
                    className="w-full text-left p-8 group"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 flex items-center justify-center transition-colors ${isOpen ? "bg-accent" : "bg-primary/5 group-hover:bg-accent/10"}`}>
                        <Icon className={`w-7 h-7 transition-colors ${isOpen ? "text-white" : "text-primary group-hover:text-accent"}`} />
                      </div>
                      <span className={`text-3xl font-heading font-semibold transition-colors ${isOpen ? "text-accent" : "text-gray-100"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="font-heading font-semibold text-xl text-primary uppercase mb-2">{service.title}</h2>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{service.tagline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.summary}</p>
                    <div className={`flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-widest transition-colors ${isOpen ? "text-accent" : "text-primary/40 group-hover:text-accent"}`}>
                      {isOpen ? "Hide details" : "View details"} <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="overflow-hidden border-t border-accent/20"
                    >
                      <div className="p-8 pt-6 bg-primary/2">
                        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Key Services</p>
                        <ul className="space-y-2.5">
                          {service.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              {h}
                            </li>
                          ))}
                        </ul>
                        <Link href={service.href}>
                          <button className="mt-6 flex items-center gap-2 bg-accent text-white font-bold text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-accent/90 transition-colors group">
                            Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </Link>
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
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4">Ready to move forward?</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl uppercase mb-6">Get a Free Consultation</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto mb-10">
              Our team of experts is ready to help with your specific logistics and trade compliance requirements.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contacts">
                <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all duration-300">
                  Contact Us Today
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
