"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Warehouse, CheckCircle2, ArrowRight, Shield, Thermometer, Package, FileText } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const warehouseTypes = [
  {
    icon: Shield,
    title: "Bonded Warehouse",
    desc: "Customs-approved storage for imported goods where duty payment is deferred until clearance for home consumption or re-export. Ideal for importers who need to stage goods before distribution.",
    points: [
      "Duty-deferred storage under customs bond",
      "Re-export without duty payment",
      "Bonded warehouse compliance management",
      "Periodic stock reconciliation and audits",
      "Port proximity at Chennai and Tuticorin",
    ],
  },
  {
    icon: Thermometer,
    title: "Temperature-Controlled Storage",
    desc: "Refrigerated and cold storage facilities for pharmaceuticals, food, chemicals and other cargo requiring a controlled temperature environment throughout the storage period.",
    points: [
      "2–8°C and -20°C storage options",
      "Continuous temperature monitoring and logging",
      "GDP compliant pharmaceutical storage",
      "Cold chain continuity from port to warehouse",
      "Handling for FSSAI regulated products",
    ],
  },
  {
    icon: Package,
    title: "General Warehousing & CFS Integration",
    desc: "Dry general cargo storage connected to Container Freight Station (CFS) operations — for importers requiring deconsolidation, inspection and staged delivery, and exporters consolidating cargo for export.",
    points: [
      "LCL deconsolidation and distribution",
      "Export cargo consolidation and stuffing",
      "Rack and bulk floor storage",
      "Inventory management and reporting",
      "Integration with customs clearance",
    ],
  },
  {
    icon: FileText,
    title: "EOU / SEZ Warehousing & Compliance",
    desc: "Specialised warehousing compliance for Export Oriented Units and SEZ entities — in-bond storage, consumption record maintenance, monthly returns and customs supervision.",
    points: [
      "In-bond import storage for duty-free procurement",
      "Goods Received and Material Issue records",
      "Monthly consumption statements to Customs/STPI/SEZ",
      "DTA Sale permission assistance",
      "Internal audit support",
    ],
  },
];

const locations = [
  { city: "Chennai", detail: "CFS-integrated warehousing near Kamarajar Port — bonded and general storage" },
  { city: "Tuticorin", detail: "Port-side bonded and general warehousing — V.O. Chidambaranar Port proximity" },
  { city: "Bengaluru", detail: "Distribution warehousing for import cargo cleared via air freight at BLR" },
];

const faqs = [
  {
    q: "What is a bonded warehouse in India?",
    a: "A bonded warehouse (Section 57–63, Customs Act) is a facility licensed by Customs where imported goods can be stored without paying customs duty. Duty is paid only when goods are 'ex-bonded' for home consumption. Goods can also be re-exported from bond without any duty payment. ISLF manages bonded warehouse operations at Chennai and Tuticorin.",
  },
  {
    q: "Can EOU and SEZ units use ISLF's warehousing?",
    a: "Yes. ISLF's warehousing and compliance services are well-suited for Export Oriented Units (EOU) and SEZ entities — covering in-bond import storage, consumption record maintenance, periodic returns to Customs/STPI/SEZ and internal compliance audits.",
  },
  {
    q: "Does ISLF offer temperature-controlled warehousing for pharmaceuticals?",
    a: "Yes. We provide 2–8°C and -20°C temperature-controlled storage with continuous data logging, GDP compliant procedures and FSSAI regulatory compliance for pharmaceutical and food products.",
  },
  {
    q: "How is ISLF's warehousing integrated with customs clearance?",
    a: "ISLF's warehousing operates alongside our AEO certified customs broking team — so import cargo can be cleared, de-stuffed, inspected and moved into storage under one roof, eliminating handoff delays and reducing the risk of documentation errors.",
  },
];

export default function WarehousingPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Bonded · CFS · Temperature-Controlled · EOU/SEZ
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Ware<span className="text-accent">housing</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Bonded warehousing, CFS-integrated storage, temperature-controlled facilities and EOU/SEZ compliance warehousing at Chennai, Tuticorin and Bengaluru — fully integrated with our AEO certified customs clearance.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Warehouse types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Storage Solutions
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-4">
              Every Storage Need Covered
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              From bonded duty-deferral storage to temperature-controlled pharmaceutical warehousing and EOU compliance — ISLF provides end-to-end warehousing solutions at India's key port and distribution hubs.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {warehouseTypes.map((wh, i) => {
              const Icon = wh.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="border-2 border-gray-100 hover:border-accent/40 p-8 group transition-all"
                >
                  <div className="w-14 h-14 bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary uppercase text-lg mb-2 group-hover:text-accent transition-colors">{wh.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{wh.desc}</p>
                  <ul className="space-y-2">
                    {wh.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Warehouse Locations
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl uppercase">Where We Operate</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 p-8 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Warehouse className="w-6 h-6 text-accent shrink-0" />
                  <h3 className="font-heading font-semibold text-white uppercase text-xl">{loc.city}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{loc.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Common Questions
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase">Warehousing FAQ</motion.h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }} className="bg-white border border-gray-100 p-8 hover:border-accent/40 transition-colors">
                <h3 className="font-heading font-semibold text-primary uppercase text-sm mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Related Services
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Customs Broking", href: "/customs-broking" },
                { label: "CFS Consulting", href: "/cfs" },
                { label: "EOU Consulting", href: "/eou" },
                { label: "SEZ Consulting", href: "/sez" },
                { label: "Road Freight", href: "/road-freight" },
                { label: "Sea Freight", href: "/sea-freight" },
              ].map((link, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Link href={link.href} className="flex items-center gap-2 border border-gray-200 hover:border-accent px-5 py-3 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent transition-all group">
                    <ArrowRight className="w-3.5 h-3.5 text-accent/50 group-hover:text-accent transition-colors" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">Discuss Your Warehousing Requirement</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 max-w-lg mx-auto mb-8">Whether you need bonded storage, cold chain or EOU compliance warehousing — speak to our team today.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contacts">
                <button className="bg-white text-accent hover:bg-white/90 font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
