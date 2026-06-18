"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, CheckCircle2, ArrowRight, MapPin, Shield, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const services = [
  {
    title: "FTL — Full Truck Load",
    desc: "Dedicated truck exclusively for your cargo — direct route, faster delivery, no handling with other consignments. Best for large shipments above 8–10 tonnes.",
    points: ["20ft, 32ft, 40ft trailer options", "Open body, closed body, container trailers", "Factory gate to port / CFS / warehouse", "Refrigerated trucking for cold chain cargo"],
  },
  {
    title: "LTL — Part Truck Load",
    desc: "Share truck space with other consignments — cost-effective for smaller loads without paying for an entire vehicle. Consolidated pick-up and delivery across major corridors.",
    points: ["Competitive part-load rates", "Regular scheduled services on major corridors", "Consolidated pick-up and groupage delivery", "Suitable for 500 kg to 8 tonnes"],
  },
  {
    title: "Port & CFS Transport",
    desc: "Dedicated port-bound trucking — container pickup from shipping lines, transport to factory for destuffing, or factory stuffing and delivery to port before cut-off.",
    points: ["Container pick-up from Chennai & Tuticorin ports", "Factory stuffing and port delivery (factory to port)", "Port to CFS / ICD movement", "Cut-off time compliance management"],
  },
  {
    title: "Last-Mile & Distribution",
    desc: "Multimodal last-mile delivery connecting air and sea freight with the final destination — warehouse, factory or retail distribution centre.",
    points: ["Airport-to-door delivery post air freight", "Port-to-door delivery post ocean clearance", "Hub-and-spoke distribution networks", "Proof of delivery documentation"],
  },
];

const strengths = [
  { icon: Truck, title: "15+ Owned Fleet Vehicles", desc: "Our own fleet of 15+ trucks for controlled quality, reliability and competitive rates — not dependent on third-party availability." },
  { icon: MapPin, title: "Pan-India Network", desc: "Road coverage across Tamil Nadu, Karnataka, Andhra Pradesh, Maharashtra, Gujarat and all major industrial corridors." },
  { icon: Shield, title: "Cargo Safety", desc: "GPS-tracked fleet, experienced drivers, proper lashing and securing practices to protect your cargo in transit." },
  { icon: Clock, title: "On-Time Port Delivery", desc: "We understand export cut-off windows — our port transport is planned to meet shipping line deadlines without exception." },
];

const corridors = [
  "Chennai ↔ Bengaluru",
  "Chennai ↔ Tuticorin",
  "Chennai ↔ Hyderabad",
  "Chennai ↔ Mumbai",
  "Bengaluru ↔ Tuticorin",
  "Bengaluru ↔ Hyderabad",
  "Tamil Nadu ↔ Gujarat",
  "Pan-India project moves",
];

const faqs = [
  {
    q: "What is the difference between FTL and LTL road freight?",
    a: "FTL (Full Truck Load) means your cargo fills an entire truck — faster, direct and with no handling alongside other goods. LTL (Less than Truck Load) consolidates your cargo with others — more economical for smaller loads but with slightly longer transit due to consolidation stops.",
  },
  {
    q: "Does ISLF provide factory-to-port trucking for exporters?",
    a: "Yes. This is a core service — ISLF coordinates stuffed container transport from your factory to Chennai or Tuticorin port before the shipping line cut-off, or arranges empty container delivery to your factory for stuffing. Fully integrated with our customs clearance.",
  },
  {
    q: "Does ISLF handle temperature-controlled road freight?",
    a: "Yes. We arrange refrigerated trucking for pharmaceutical, food, chemical and other temperature-sensitive cargo requiring consistent temperature control throughout inland transit.",
  },
];

export default function RoadFreightPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> FTL · LTL · Factory to Port · Last Mile
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Road <span className="text-accent">Freight</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Pan-India road transport with 15+ owned fleet vehicles — factory-to-port, port-to-door, FTL and LTL services integrated with customs clearance from Chennai and Tuticorin.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Strengths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

      {/* Service types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12 max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Service Types
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-4">Road Freight Solutions</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-2 border-gray-100 hover:border-accent/40 p-8 group transition-all"
              >
                <h3 className="font-heading font-semibold text-primary uppercase text-lg mb-2 group-hover:text-accent transition-colors">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corridors */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Coverage
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl uppercase">Key Road Corridors</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corridors.map((corridor, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 p-5 hover:border-accent/40 transition-colors flex items-center gap-3"
              >
                <Truck className="w-4 h-4 text-accent shrink-0" />
                <p className="text-white/80 text-sm font-medium">{corridor}</p>
              </motion.div>
            ))}
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
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase">Road Freight FAQ</motion.h2>
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

      {/* Related */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Related Services
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Sea Freight", href: "/sea-freight" },
                { label: "Air Freight", href: "/air-freight" },
                { label: "Warehousing", href: "/warehousing" },
                { label: "Freight Forwarding", href: "/freight-forwarding" },
                { label: "Customs Broking", href: "/customs-broking" },
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
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">Get a Road Freight Quote</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 max-w-lg mx-auto mb-8">Tell us your origin, destination, cargo weight and dimensions — we will respond with a competitive rate within hours.</motion.p>
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
