"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, MapPin, Briefcase, Clock, Users, Globe, TrendingUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const openings = [
  {
    title: "Customs Clearance Executive",
    location: "Chennai / Tuticorin",
    type: "Full Time",
    exp: "2–5 years",
    desc: "Handle import/export documentation, coordinate with customs authorities and ensure timely clearance of shipments.",
    skills: ["Bill of Entry filing", "Shipping Bill processing", "ICES system", "Customs regulations"],
  },
  {
    title: "DGFT Consultant",
    location: "Chennai",
    type: "Full Time",
    exp: "3–7 years",
    desc: "Provide expert consultancy on DGFT matters including IEC, EPCG, Advance Authorization and policy representations at HQ level.",
    skills: ["DGFT policy knowledge", "License management", "SION norms", "Client communication"],
  },
  {
    title: "Freight Forwarding Executive",
    location: "Bengaluru / Chennai",
    type: "Full Time",
    exp: "1–4 years",
    desc: "Coordinate air and ocean freight shipments, liaise with shipping lines and airlines, and manage documentation for FCL/LCL cargo.",
    skills: ["Ocean / Air freight", "Carrier coordination", "BL / AWB handling", "Customer service"],
  },
  {
    title: "GST & Compliance Executive",
    location: "Chennai",
    type: "Full Time",
    exp: "2–4 years",
    desc: "Handle GST filing, IGST refund claims, ITC reconciliation and liaise with tax authorities on behalf of clients.",
    skills: ["GST portal", "IGST refunds", "ITC reconciliation", "Tax compliance"],
  },
  {
    title: "Business Development Manager",
    location: "Bengaluru / Gujarat",
    type: "Full Time",
    exp: "4–8 years",
    desc: "Drive growth by identifying new clients, building relationships with importers and exporters, and presenting ISLF's end-to-end logistics solutions.",
    skills: ["B2B sales", "Logistics sector", "CRM tools", "Trade knowledge"],
  },
  {
    title: "Operations Trainee",
    location: "Chennai",
    type: "Full Time",
    exp: "Fresher",
    desc: "Entry-level role for recent graduates looking to build a career in logistics and international trade. Training provided across all verticals.",
    skills: ["Willingness to learn", "Commerce / Law graduate", "MS Office", "Communication skills"],
  },
];

const values = [
  { icon: Users, title: "Collaborative Culture", desc: "Work alongside seasoned trade professionals and grow through mentorship." },
  { icon: Globe, title: "Global Exposure", desc: "Handle international shipments across 6 offices in India and Vietnam." },
  { icon: TrendingUp, title: "Career Growth", desc: "Clear paths to senior roles with performance-based advancement." },
  { icon: Briefcase, title: "Industry Expertise", desc: "Build rare, in-demand skills across customs, freight and DGFT consulting." },
];

export default function CareersPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Careers at ISLF | Customs Broker Jobs | Freight Forwarding Jobs | India"
        description="Join ISLF — India's AEO certified customs broker. Open positions in Chennai, Tuticorin, Bengaluru and Gujarat: Customs Executive, Freight Operations Manager, DGFT Consultant, GST Consultant and more."
        canonical="https://islf.in/careers"
        keywords="customs broker jobs India, freight forwarding jobs India, DGFT consultant jobs, GST consultant jobs India, logistics jobs Chennai, customs executive jobs, shipping company jobs India, ISLF careers"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Various Positions at ISLF",
          "description": "ISLF is hiring customs executives, freight operations managers, DGFT consultants, GST consultants and business development executives across India.",
          "hiringOrganization": { "@id": "https://islf.in/#organization" },
          "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Chennai", "addressRegion": "Tamil Nadu", "addressCountry": "IN" } },
          "employmentType": "FULL_TIME",
        }}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Join Our Team
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Build Your <span className="text-accent">Career</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Be part of India's trusted freight and logistics partner. We're looking for driven professionals who want to shape the future of global trade.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Why ISLF */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 text-center">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4">Why Work With Us</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl text-primary uppercase">
              More Than a Job
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="border border-gray-100 p-8 hover:border-accent/40 transition-colors group">
                  <div className="w-12 h-12 bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary uppercase text-sm mb-2">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Open Positions
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl text-primary uppercase">
              Current Openings
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((job, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white border border-gray-100 p-8 hover:border-accent/40 transition-colors group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-heading font-semibold text-primary uppercase text-lg group-hover:text-accent transition-colors">{job.title}</h3>
                  <span className="bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 shrink-0">{job.exp}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-accent" />{job.location}</span>
                  <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-accent" />{job.type}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" />Exp: {job.exp}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{job.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill, j) => (
                    <span key={j} className="border border-gray-200 text-gray-600 text-xs px-3 py-1 font-medium">{skill}</span>
                  ))}
                </div>
                <a
                  href={`mailto:info@islf.in?subject=Application for ${job.title}`}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 transition-colors group/btn"
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* General application */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl uppercase mb-6">
              Don't See Your Role?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto mb-10">
              We're always looking for talented professionals in logistics, trade compliance and operations. Send us your CV and we'll be in touch.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@islf.in?subject=General Job Application — ISLF"
                className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all duration-300 inline-flex items-center gap-3 group justify-center"
              >
                Send Your CV <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/contacts">
                <button className="border border-white/30 hover:border-accent text-white hover:text-accent font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all duration-300">
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
