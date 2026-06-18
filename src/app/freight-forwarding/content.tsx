"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ship, Plane, Truck, Warehouse, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const modes = [
  {
    icon: Ship,
    title: "Ocean Freight",
    tagline: "FCL · LCL · Break-Bulk · ODC",
    desc: "Full Container Load, Less than Container Load, break-bulk and over-dimensional cargo from Chennai (Ennore), Tuticorin, JNPT, Mundra and all major Indian ports to 100+ countries.",
    href: "/sea-freight",
  },
  {
    icon: Plane,
    title: "Air Freight",
    tagline: "Express · Standard · Charter",
    desc: "Time-critical and high-value shipments via all major Indian international airports — express, general and charter services with full DGR and cold-chain capability.",
    href: "/air-freight",
  },
  {
    icon: Truck,
    title: "Road Freight",
    tagline: "FTL · LTL · Last Mile",
    desc: "Pan-India road transport with a 15-vehicle owned fleet — full truck load, part loads and multimodal last-mile connections for imports and exports.",
    href: "/road-freight",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    tagline: "Bonded · CFS · Temperature-Controlled",
    desc: "Bonded and general warehousing, CFS-integrated storage and temperature-controlled facilities at Chennai, Tuticorin and Bengaluru.",
    href: "/warehousing",
  },
];

const capabilities = [
  { title: "FCL & LCL Shipments", desc: "Full Container Load and Less than Container Load bookings across all major shipping lines at competitive rates." },
  { title: "Over-Dimensional Cargo (ODC)", desc: "Specialised handling, permits and transport for project cargo, heavy lifts and out-of-gauge shipments." },
  { title: "Break-Bulk & Deconsolidation", desc: "Cargo assembly, stuffing, de-stuffing and distribution from CFS and port facilities." },
  { title: "Cold Chain & Refrigerated Cargo", desc: "Reefer containers and temperature-controlled routing for pharma, perishables and healthcare products." },
  { title: "Dangerous Goods (DGR/IMDG/IATA)", desc: "Full compliance handling — classification, documentation, packaging and regulatory approvals for hazardous cargo." },
  { title: "Door-to-Door (DDU & DDP)", desc: "Origin pickup to final delivery, managing all customs, duties, freight and last-mile transport." },
  { title: "Chartering — Aircraft & Vessel", desc: "Full and part charter solutions for time-critical, project or oversized cargo requirements." },
  { title: "ATA Carnet & Exhibition Cargo", desc: "Temporary import/export, trade fair and exhibition cargo handling across borders." },
];

const steps = [
  { num: "01", title: "Inquiry & Quote", desc: "Share cargo details — commodity, dimensions, weight, origin and destination. We provide a competitive, all-inclusive rate." },
  { num: "02", title: "Booking & Planning", desc: "We confirm space with airlines or shipping lines, plan routing, and advise on documentation requirements." },
  { num: "03", title: "Pick-up & Stuffing", desc: "Cargo collection from your factory or warehouse, packing, stuffing and CFS/port delivery." },
  { num: "04", title: "Customs & Departure", desc: "Our licensed customs brokers handle export documentation, duties and clearances at origin." },
  { num: "05", title: "Transit & Tracking", desc: "Real-time shipment visibility with proactive updates at every milestone." },
  { num: "06", title: "Destination Clearance & Delivery", desc: "Import customs clearance at destination and final delivery — DDU or DDP as agreed." },
];

export default function FreightForwardingPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> End-to-End Logistics
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Freight <span className="text-accent">Forwarding</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Sea, air, road and multimodal freight solutions — from India to the world and back. Two decades of experience, AEO certification and offices across India.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Mode cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Transport Modes
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-4">
              Every Mode, One Partner
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              ISLF manages your entire supply chain — ocean, air, road and warehousing — under one roof, eliminating hand-off gaps and reducing cost.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modes.map((mode, i) => {
              const Icon = mode.icon;
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
                  <h3 className="font-heading font-semibold text-primary uppercase text-lg mb-1">{mode.title}</h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{mode.tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{mode.desc}</p>
                  <Link href={mode.href} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/40 group-hover:text-accent transition-colors">
                    Learn More <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12 max-w-2xl">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> What We Handle
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-4">
              Cargo Capabilities
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white border border-gray-100 p-6 hover:border-accent/40 transition-colors group">
                <span className="text-accent font-heading font-semibold text-2xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading font-semibold text-primary uppercase text-sm mt-2 mb-2 group-hover:text-accent transition-colors">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> How It Works
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl uppercase">Our Process</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 p-8 hover:border-accent/40 transition-colors group"
              >
                <span className="text-accent font-heading font-semibold text-4xl opacity-60 group-hover:opacity-100 transition-opacity">{step.num}</span>
                <h3 className="font-heading font-semibold text-white uppercase text-sm mt-4 mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Related Services
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Customs Broking", href: "/customs-broking" },
                { label: "DGFT Consulting", href: "/dgft" },
                { label: "Customs Consultancy", href: "/customs-consultancy" },
                { label: "CFS Consulting", href: "/cfs" },
                { label: "GST Consulting", href: "/gst" },
              ].map((link, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Link href={link.href} className="flex items-center gap-2 border border-gray-200 hover:border-accent px-5 py-3 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent transition-all group">
                    <ArrowRight className="w-3.5 h-3.5 text-accent/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">Get a Freight Quote Today</motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 max-w-lg mx-auto mb-8">Share your shipment details and our team will respond with a competitive, all-inclusive quote within 24 hours.</motion.p>
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
