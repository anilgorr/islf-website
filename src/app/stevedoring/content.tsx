"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Anchor, CheckCircle2, ArrowRight, Ship, Container, HardHat, Gauge } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const capabilities = [
  {
    icon: Ship,
    title: "Bulk & Break-Bulk Handling",
    desc: "Loading and unloading of dry bulk cargo, break-bulk consignments and bagged cargo with efficient gang deployment and round-the-clock operations.",
  },
  {
    icon: Container,
    title: "Container & Project Cargo",
    desc: "Container stuffing and de-stuffing at berth and CFS, plus handling of project and Over-Dimensional Cargo (ODC) with specialised rigging and equipment.",
  },
  {
    icon: HardHat,
    title: "Experienced Gangs & Supervision",
    desc: "Trained stevedoring gangs, foremen and supervisors ensuring safe, damage-free cargo operations in full compliance with port regulations.",
  },
  {
    icon: Gauge,
    title: "Modern Equipment",
    desc: "Cranes, grabs, forklifts, payloaders and lashing gear deployed to match cargo type — maximising discharge and load rates for faster vessel turnaround.",
  },
];

const services = [
  "Expert stevedoring & port cargo handling",
  "Lo-Lo (Lift-on / Lift-off) operations with harbor & gantry cranes",
  "Dry bulk & liquid bulk transfer",
  "Project cargo, steel, machinery & oversized shipments",
  "Automotive & wheeled cargo handling",
  "Cargo securing, weight distribution & lashing",
  "Temporary storage, staging & yard-to-quay transfer",
  "Hatch survey, tallying & draft survey coordination",
  "Port compliance & documentation support",
];

export default function StevedoringContent() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Port Operations
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Stevedoring <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Professional vessel loading and unloading at Indian ports — dry bulk, break-bulk, project cargo and containers handled by experienced gangs with modern equipment.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4">What We Handle</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl text-primary uppercase">Cargo Operations Expertise</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="border border-gray-100 p-8 hover:border-accent/40 transition-colors">
                  <div className="w-14 h-14 bg-primary/5 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-primary uppercase mb-3">{cap.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Key services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span className="block w-8 h-[2px] bg-accent" /> Scope of Work
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl text-primary uppercase mb-6">
                End-to-End Stevedoring
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-5">
                From hatch opening to final tally, ISLF manages the complete stevedoring cycle. Our teams coordinate with vessel agents, port authorities and surveyors to ensure safe, efficient and compliant cargo operations.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
                Combined with our customs broking and freight forwarding capabilities, stevedoring completes ISLF's single-window offering — one partner from berth to final delivery.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border-2 border-primary p-8">
              <div className="flex items-center gap-3 mb-6">
                <Anchor className="w-8 h-8 text-accent" />
                <h3 className="font-heading font-semibold text-2xl text-primary uppercase">Key Services</h3>
              </div>
              <ul className="space-y-3">
                {services.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl uppercase mb-6">Need Stevedoring Support?</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto mb-10">
              Talk to our port operations team about your vessel call, cargo type and handling requirements.
            </motion.p>
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
