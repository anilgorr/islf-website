"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, RotateCcw, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const searchTypes = [
  "House Waybill",
  "Master Waybill",
  "Bill of Lading",
  "Container Number",
  "Booking Reference",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Track Your Shipment — ISLF Freight Management",
  "description": "Track any ISLF Freight Management shipment by transportation mode and search number. Contact your ISLF representative for maximum visibility.",
  "url": "https://islf.in/track-your-shipment",
  "provider": { "@id": "https://islf.in/#organization" },
};

export default function TrackYourShipmentPage() {
  const [mode, setMode] = useState("All");
  const [searchType, setSearchType] = useState("House Waybill");
  const [searchNumbers, setSearchNumbers] = useState("");
  const [searched, setSearched] = useState(false);

  const handleTrack = (e: React.FormEvent) => { e.preventDefault(); setSearched(true); };
  const handleReset = () => { setMode("All"); setSearchType("House Waybill"); setSearchNumbers(""); setSearched(false); };

  return (
    <PageLayout>
      <SEOHead
        title="Track Your Shipment | ISLF Freight Management"
        description="Track any ISLF Freight Management shipment by Air Ground, Ocean, Brokerage or All modes. Use your House Waybill, Master Waybill, Bill of Lading or container number."
        canonical="https://islf.in/track-your-shipment"
        keywords="track shipment India, track freight India, ISLF shipment tracking, track cargo India, freight tracking India, shipment status India"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Shipment Tracking
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Track Your <span className="text-accent">Shipment</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Track any ISLF Freight Management shipment across air, ocean, and brokerage modes.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left — tracking form */}
            <div className="lg:col-span-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                  <span className="block w-8 h-[2px] bg-accent" /> Freight Management
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-5">
                  Track Any Freight Management Shipment
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                  Track any ISLF Freight Management shipment. If you require maximum visibility to your customer Freight Management transactions, contact your ISLF Representative, or local ISLF Service Center.
                </motion.p>

                <motion.form variants={fadeUp} onSubmit={handleTrack} className="space-y-6">
                  {/* Transportation Mode */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Transportation Mode</p>
                    <div className="flex flex-wrap gap-4">
                      {["Air Ground", "Ocean", "Brokerage", "All"].map((m) => (
                        <label key={m} className="flex items-center gap-2 cursor-pointer group">
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${mode === m ? "border-accent" : "border-gray-300 group-hover:border-accent/50"}`}>
                            {mode === m && <span className="w-2 h-2 rounded-full bg-accent" />}
                          </span>
                          <input type="radio" name="mode" value={m} checked={mode === m} onChange={() => setMode(m)} className="sr-only" />
                          <span className={`text-sm transition-colors ${mode === m ? "text-primary font-semibold" : "text-gray-600"}`}>{m}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Search Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Search Type</label>
                    <select
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                      className="w-full max-w-xs border border-gray-200 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-accent transition-colors bg-white"
                    >
                      {searchTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {/* Search Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      Search Number(s) <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={searchNumbers}
                      onChange={(e) => setSearchNumbers(e.target.value)}
                      placeholder="Enter one or more reference numbers (one per line)..."
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                    <p className="text-xs text-gray-400 mt-1">This will return up to 100 records matching your criteria.</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-8 py-3 transition-all group inline-flex items-center gap-2"
                    >
                      <Search className="w-4 h-4" /> Track Now
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-gray-500 hover:text-primary transition-colors text-sm font-semibold inline-flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Reset
                    </button>
                  </div>
                </motion.form>

                {/* Search result placeholder */}
                {searched && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 border border-gray-100 bg-gray-50 p-6"
                  >
                    <p className="text-sm text-gray-500 text-center">
                      No tracking results found for the provided reference number(s). Please verify your details or{" "}
                      <Link href="/contacts" className="text-accent hover:underline">contact your ISLF representative</Link> for assistance.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Right — sidebar */}
            <div className="space-y-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-accent text-white p-6">
                <p className="font-heading font-semibold uppercase text-sm mb-3">Need More Visibility?</p>
                <p className="text-white/80 text-xs leading-relaxed mb-4">
                  For maximum visibility to your Freight Management transactions, contact your dedicated ISLF representative or local service center.
                </p>
                <Link href="/contacts">
                  <button className="w-full bg-white text-accent hover:bg-white/90 font-bold text-xs uppercase tracking-widest py-2.5 transition-colors inline-flex items-center justify-center gap-2">
                    Contact Us <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary text-white p-6">
                <p className="font-heading font-semibold uppercase text-sm mb-4">ISLF Service Centers</p>
                <div className="space-y-3 text-xs text-white/70">
                  <div>
                    <p className="text-white font-semibold text-xs uppercase tracking-wide mb-0.5">Tuticorin Head Office</p>
                    <a href="tel:+914612340790" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                      <Phone className="w-3 h-3 text-accent shrink-0" /> +91-0461-2340790 – 95
                    </a>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs uppercase tracking-wide mb-0.5">Chennai Office</p>
                    <a href="tel:+914425251314" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                      <Phone className="w-3 h-3 text-accent shrink-0" /> +91-44-2525 1314 – 18
                    </a>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs uppercase tracking-wide mb-0.5">Email</p>
                    <a href="mailto:info@islf.in" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                      <Mail className="w-3 h-3 text-accent shrink-0" /> info@islf.in
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-accent/5 border border-accent/20 p-6">
                <p className="font-bold text-xs uppercase tracking-widest text-primary mb-3">Quick Links</p>
                <div className="space-y-2">
                  {[
                    { label: "Request Ship Freight Quote", href: "/request-ship-freight-quote" },
                    { label: "Request Air Freight Quote", href: "/request-air-freight-quote" },
                    { label: "Sea Freight Services", href: "/sea-freight" },
                    { label: "Air Freight Services", href: "/air-freight" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" /> {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
