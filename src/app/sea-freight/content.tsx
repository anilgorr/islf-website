"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ship, CheckCircle2, ArrowRight, Anchor } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const serviceTypes = [
  {
    title: "FCL — Full Container Load",
    desc: "Book an entire 20ft or 40ft container exclusively for your cargo. Best for shipments above 12–15 CBM — faster transit, no cargo co-mingling, lower handling risk.",
    highlights: ["20ft, 40ft, 40ft HC, 45ft containers", "Direct port-to-port or door-to-door", "Flat rack & open-top for ODC/project cargo", "Reefer containers for temperature-sensitive goods"],
  },
  {
    title: "LCL — Less than Container Load",
    desc: "Share container space with other shippers — ideal for consignments under 12 CBM. ISLF consolidates your cargo at our CFS to save you the cost of an entire box.",
    highlights: ["Competitive groupage rates", "CFS consolidation & deconsolidation", "Weekly sailings on major trade lanes", "Cargo insurance facilitation"],
  },
  {
    title: "Break-Bulk & ODC",
    desc: "For cargo that cannot be containerised — over-dimensional, heavy-lift or project cargo requiring flat racks, open tops, special vessels or chartered tonnage.",
    highlights: ["Over-dimensional cargo (ODC) permits", "Heavy lift up to several hundred tonnes", "Project cargo planning & lashing", "Vessel chartering for large project lots"],
  },
  {
    title: "Refrigerated (Reefer)",
    desc: "Temperature-controlled ocean freight for perishables, pharmaceuticals, chemicals and other cargo requiring a controlled environment throughout transit.",
    highlights: ["Reefer container booking & monitoring", "Cold chain continuity from factory to destination", "Pre-trip inspection & temperature setting", "Pharma GDP compliant routing options"],
  },
];

const ports = [
  { name: "Chennai (Kamarajar / Ennore Port)", note: "Primary hub — direct ISLF office", icon: "★" },
  { name: "Tuticorin (V.O. Chidambaranar Port)", note: "Direct ISLF office", icon: "★" },
  { name: "JNPT (Nhava Sheva)", note: "India's largest container port", icon: "◆" },
  { name: "Mundra Port", note: "Western India gateway", icon: "◆" },
  { name: "Cochin Port", note: "Kerala & South India", icon: "◆" },
  { name: "Krishnapatnam", note: "Andhra Pradesh", icon: "◆" },
];

const faqs = [
  {
    q: "What is the difference between FCL and LCL sea freight?",
    a: "FCL (Full Container Load) means you book the entire container — best for large shipments above ~12 CBM, offering faster transit and no handling of goods with other consignments. LCL (Less than Container Load) consolidates your cargo with other shippers — cost-effective for smaller volumes but with slightly longer transit due to consolidation and deconsolidation.",
  },
  {
    q: "Which ports does ISLF handle sea freight from?",
    a: "ISLF handles ocean freight from Chennai (Kamarajar/Ennore), Tuticorin (V.O. Chidambaranar), JNPT (Nhava Sheva), Mundra, Cochin and other major Indian ports — with direct offices at Chennai and Tuticorin providing the deepest local expertise.",
  },
  {
    q: "Does ISLF handle refrigerated (reefer) container shipments?",
    a: "Yes. ISLF arranges reefer container shipments for perishables, pharmaceuticals, chemicals and any cargo requiring controlled temperature environments — with pre-trip inspection, temperature setting and cold chain monitoring throughout transit.",
  },
  {
    q: "How long does ocean freight from India to major destinations take?",
    a: "Typical transit times from Indian ports: Europe 18–28 days, USA East Coast 20–30 days, Middle East 8–14 days, Southeast Asia 10–18 days, Australia 12–22 days. Transit times vary by origin port, carrier and routing.",
  },
];

export default function SeaFreightPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> FCL · LCL · Break-Bulk · ODC · Reefer
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Sea <span className="text-accent">Freight</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Cost-effective ocean freight from Chennai, Tuticorin and all major Indian ports to 100+ countries — fully integrated with ISLF's AEO certified customs clearance.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Service types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Ocean Freight Services
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-4">
              Every Shipment Type Covered
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              Whether you ship a few pallets or an entire vessel, ISLF has the experience and shipping line relationships to move your cargo competitively and compliantly.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceTypes.map((svc, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="border-2 border-gray-100 hover:border-accent/40 p-8 group transition-all"
              >
                <h3 className="font-heading font-semibold text-primary uppercase text-lg mb-2 group-hover:text-accent transition-colors">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Port coverage */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Port Coverage
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl uppercase">Indian Port Network</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ports.map((port, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 p-6 hover:border-accent/40 transition-colors flex items-start gap-4"
              >
                <Anchor className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-semibold text-white text-sm uppercase">{port.name}</p>
                  <p className="text-white/50 text-xs mt-1">{port.note}</p>
                </div>
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
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase">Ocean Freight FAQ</motion.h2>
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
                { label: "Air Freight", href: "/air-freight" },
                { label: "Road Freight", href: "/road-freight" },
                { label: "Freight Forwarding", href: "/freight-forwarding" },
                { label: "Customs Broking", href: "/customs-broking" },
                { label: "CFS Consulting", href: "/cfs" },
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
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">Get an Ocean Freight Quote</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 max-w-lg mx-auto mb-8">Share your cargo details — commodity, weight, CBM, origin and destination. We will send a competitive FCL or LCL rate within 24 hours.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/#contacts">
                <button className="bg-white text-accent hover:bg-white/90 font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all">
                  Request a Quote
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
