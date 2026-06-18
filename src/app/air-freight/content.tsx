"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, CheckCircle2, ArrowRight, Clock, Shield, Globe, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const strengths = [
  { icon: Clock, title: "Time-Critical Delivery", desc: "2–7 day transit to major global destinations — the fastest mode when deadlines cannot slip." },
  { icon: Shield, title: "High-Value Security", desc: "Enhanced handling, tracking and custody chain for electronics, jewellery and sensitive cargo." },
  { icon: Globe, title: "Global Reach", desc: "Access to 200+ destinations worldwide via all major international airlines and charter networks." },
  { icon: Zap, title: "Emergency Response", desc: "AOG (Aircraft on Ground), urgent spare parts and humanitarian cargo moved at short notice." },
];

const cargoTypes = [
  "General cargo — manufactured goods, machinery, auto parts",
  "Pharmaceuticals & temperature-sensitive healthcare products",
  "Perishables — fresh produce, seafood, flowers",
  "High-value goods — electronics, gems, jewellery",
  "Dangerous Goods (IATA DGR) — chemicals, batteries, hazmat",
  "Over-sized / heavy cargo requiring special freighter aircraft",
  "Express courier consolidations — B2B and e-commerce",
  "Exhibition & trade fair cargo with ATA Carnet",
  "AOG (Aircraft on Ground) urgent spare parts",
  "Live animals — with IATA LAR compliant handling",
];

const airports = [
  { city: "Chennai", code: "MAA", note: "Primary hub — direct office" },
  { city: "Bengaluru", code: "BLR", note: "Direct office" },
  { city: "Mumbai", code: "BOM", note: "Major gateway" },
  { city: "Delhi", code: "DEL", note: "Major gateway" },
  { city: "Hyderabad", code: "HYD", note: "Southern India" },
  { city: "Cochin", code: "COK", note: "Kerala & South" },
];

const faqs = [
  {
    q: "When should I choose air freight over sea freight?",
    a: "Air freight is ideal when time is critical — for perishables, pharmaceuticals, high-value cargo or emergency spare parts. Air transit from India to major destinations is 2–7 days versus 15–45 days by sea.",
  },
  {
    q: "Can ISLF handle Dangerous Goods (DGR) by air?",
    a: "Yes. ISLF manages IATA DGR compliant air shipments — classification, packaging, marking, labelling, documentation and airline approvals for all classes of dangerous goods.",
  },
  {
    q: "Does ISLF offer air charter services from India?",
    a: "Yes — full and part aircraft charters for time-critical, oversized or high-volume cargo where scheduled airline capacity is insufficient. We source the right aircraft type for your cargo dimensions and weight.",
  },
  {
    q: "How does cold chain air freight work for pharmaceuticals?",
    a: "Temperature-sensitive pharma cargo moves in validated temperature-controlled containers (passive or active) with pre-cooling, real-time data loggers and IATA CEIV Pharma compliant handling through GDP-compliant routes.",
  },
];

export default function AirFreightPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Express · Standard · Charter
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Air <span className="text-accent">Freight</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              When time matters most — express air cargo from Chennai, Bengaluru and all major Indian airports to 200+ destinations worldwide. DGR, cold chain and high-value cargo specialists.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Why air freight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Why Choose Air
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-4">
              Speed When It Counts
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              Air freight is the fastest mode of international transport. ISLF's air freight service connects India to global markets with reliable transit times, full cargo tracking and specialist handling for sensitive or high-value shipments.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((item, i) => {
              const Icon = item.icon;
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
                  <h3 className="font-heading font-semibold text-primary uppercase text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cargo types + airports */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cargo types */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span className="block w-8 h-[2px] bg-accent" /> What We Move
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl text-primary uppercase mb-8">Cargo Types</motion.h2>
              <ul className="space-y-3">
                {cargoTypes.map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Airports */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span className="block w-8 h-[2px] bg-accent" /> Coverage
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl text-primary uppercase mb-8">Origin Airports</motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {airports.map((ap, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-white border border-gray-100 p-5 hover:border-accent/40 transition-colors">
                    <div className="flex items-center gap-3 mb-1">
                      <Plane className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-heading font-semibold text-primary uppercase text-sm">{ap.city}</span>
                      <span className="text-accent font-bold text-xs">{ap.code}</span>
                    </div>
                    <p className="text-gray-500 text-xs pl-7">{ap.note}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="mt-8 bg-primary p-8">
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">Service Types</p>
                <ul className="space-y-2">
                  {[
                    "Express airfreight — next flight out",
                    "Standard airfreight — scheduled airlines",
                    "Consolidated airfreight — cost-effective groupage",
                    "Full / part aircraft charters",
                    "Hand carry & courier consolidations",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Common Questions
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase">Air Freight FAQ</motion.h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }} className="border border-gray-100 p-8 hover:border-accent/40 transition-colors">
                <h3 className="font-heading font-semibold text-primary uppercase text-sm mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Related Services
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Sea Freight", href: "/sea-freight" },
                { label: "Road Freight", href: "/road-freight" },
                { label: "Freight Forwarding", href: "/freight-forwarding" },
                { label: "Customs Broking", href: "/customs-broking" },
                { label: "Warehousing", href: "/warehousing" },
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
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">Get an Air Freight Quote</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 max-w-lg mx-auto mb-8">Share your commodity, weight, dimensions and destination — we will respond within hours with a competitive rate.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contacts">
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
