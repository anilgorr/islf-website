"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

const countries = [
  "India", "United States", "United Kingdom", "China", "Japan", "Germany",
  "France", "Singapore", "United Arab Emirates", "Australia", "Canada",
  "South Korea", "Vietnam", "Malaysia", "Indonesia", "Thailand", "Sri Lanka",
  "Bangladesh", "Pakistan", "Other",
];

const incoterms = ["EXW", "FCA", "FAS", "FOB", "CFR", "CIF", "CPT", "CIP", "DAP", "DPU", "DDP"];
const containerTypes = ["20' GP", "40' GP", "40' HC", "20' RF (Reefer)", "40' RF (Reefer)", "OT (Open Top)", "FR (Flat Rack)", "LCL (Groupage)"];

type FormState = {
  goodName: string; companyName: string;
  streetAddress: string; city: string; zipCode: string; country: string;
  mobileNumber: string; companyPhone: string; email: string; companyWebsite: string;
  portOfLoading: string; portOfDischarge: string; commodity: string;
  grossWeight: string; volume: string; containerType: string;
  numberOfPackages: string; incoterm: string; readyDate: string; remarks: string;
};

const empty: FormState = {
  goodName: "", companyName: "",
  streetAddress: "", city: "", zipCode: "", country: "",
  mobileNumber: "", companyPhone: "", email: "", companyWebsite: "",
  portOfLoading: "", portOfDischarge: "", commodity: "",
  grossWeight: "", volume: "", containerType: "",
  numberOfPackages: "", incoterm: "", readyDate: "", remarks: "",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Request Ship Freight Quote — ISLF",
  "description": "Request a sea freight quote from ISLF — India's trusted customs broker and freight forwarder. Get competitive rates for FCL, LCL, and break-bulk shipments.",
  "url": "https://islf.in/request-ship-freight-quote",
  "provider": { "@id": "https://islf.in/#organization" },
};

export default function RequestShipFreightQuotePage() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <PageLayout>
      <SEOHead
        title="Request Ship Freight Quote | Sea Freight India | ISLF"
        description="Request a competitive sea freight quote from ISLF — FCL, LCL and break-bulk shipments. India's trusted AEO certified customs broker and freight forwarder."
        canonical="https://islf.in/request-ship-freight-quote"
        keywords="ship freight quote India, sea freight quote, FCL quote India, LCL quote India, ocean freight India, freight forwarder quote India, ISLF sea freight"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Request a Quote
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Ship Freight <span className="text-accent">Quote</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Request a competitive sea freight quote for FCL, LCL or break-bulk shipments worldwide.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
              <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-5" />
              <h2 className="font-heading font-semibold text-primary text-3xl uppercase mb-3">Quote Request Received</h2>
              <p className="text-gray-600 max-w-md mx-auto mb-8">Thank you. Our freight team will review your requirements and get back to you with a competitive quote shortly.</p>
              <button onClick={() => { setSubmitted(false); setForm(empty); }} className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-xs uppercase tracking-widest px-8 py-3 transition-all">
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <p className="font-heading font-semibold text-primary text-lg uppercase mb-3">Welcome to ISLF Ship Freight Quote Request</p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
                  Please complete the fields in the form below and we will research pricing for a specific transportation logistics service or combination of services. Please fill out all areas carefully and submit the Quote Request Form upon completion. <span className="text-accent font-semibold">* Fields are mandatory.</span>
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-0">
                {/* Personal Information */}
                <motion.div variants={fadeUp}>
                  <div className="bg-primary text-white px-6 py-3">
                    <p className="font-heading font-semibold text-xs uppercase tracking-[0.2em]">Personal Information</p>
                  </div>
                  <div className="border border-t-0 border-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Your Good Name" name="goodName" required value={form.goodName} onChange={set} placeholder="Full name" />
                    <Field label="Your Company Name" name="companyName" required value={form.companyName} onChange={set} placeholder="Company name" />
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Your Company Address <span className="text-accent">*</span></label>
                      <input name="streetAddress" required value={form.streetAddress} onChange={set} placeholder="Street Address" className={inputCls + " mb-2"} />
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <input name="city" required value={form.city} onChange={set} placeholder="City" className={inputCls} />
                        <input name="zipCode" value={form.zipCode} onChange={set} placeholder="ZIP / Postal Code" className={inputCls} />
                      </div>
                      <select name="country" required value={form.country} onChange={set} className={inputCls}>
                        <option value="">Select Country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <Field label="Your Mobile Number" name="mobileNumber" required value={form.mobileNumber} onChange={set} placeholder="+91 XXXXX XXXXX" type="tel" />
                    <Field label="Your Company Telephone Number" name="companyPhone" required value={form.companyPhone} onChange={set} placeholder="Company phone" type="tel" />
                    <Field label="Your Email Address" name="email" required value={form.email} onChange={set} placeholder="your@email.com" type="email" />
                    <Field label="Your Company Website" name="companyWebsite" value={form.companyWebsite} onChange={set} placeholder="https://" type="url" />
                  </div>
                </motion.div>

                {/* Shipment Details */}
                <motion.div variants={fadeUp} className="mt-6">
                  <div className="bg-primary text-white px-6 py-3">
                    <p className="font-heading font-semibold text-xs uppercase tracking-[0.2em]">Shipment Details</p>
                  </div>
                  <div className="border border-t-0 border-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field label="Port of Loading" name="portOfLoading" required value={form.portOfLoading} onChange={set} placeholder="e.g. Chennai, Tuticorin, JNPT" />
                    <Field label="Port of Discharge" name="portOfDischarge" required value={form.portOfDischarge} onChange={set} placeholder="e.g. Singapore, Dubai, Hamburg" />
                    <div className="md:col-span-2">
                      <Field label="Commodity / Cargo Description" name="commodity" required value={form.commodity} onChange={set} placeholder="Describe your cargo" />
                    </div>
                    <Field label="Gross Weight (MT)" name="grossWeight" required value={form.grossWeight} onChange={set} placeholder="e.g. 10 MT" />
                    <Field label="Volume (CBM)" name="volume" value={form.volume} onChange={set} placeholder="e.g. 25 CBM" />
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Container Type</label>
                      <select name="containerType" value={form.containerType} onChange={set} className={inputCls}>
                        <option value="">Select type</option>
                        {containerTypes.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <Field label="Number of Packages" name="numberOfPackages" value={form.numberOfPackages} onChange={set} placeholder="e.g. 50 cartons" />
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Incoterms</label>
                      <select name="incoterm" value={form.incoterm} onChange={set} className={inputCls}>
                        <option value="">Select Incoterms</option>
                        {incoterms.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <Field label="Ready to Ship Date" name="readyDate" value={form.readyDate} onChange={set} type="date" />
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Special Requirements / Remarks</label>
                      <textarea name="remarks" rows={3} value={form.remarks} onChange={set} placeholder="Any special handling, hazardous cargo, or additional notes..." className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors resize-none" />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="pt-6 flex justify-center">
                  <button type="submit" className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-12 py-4 transition-all group inline-flex items-center gap-3">
                    Submit Quote Request <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-semibold text-primary text-lg uppercase">Need Air Freight Instead?</p>
            <p className="text-gray-500 text-sm mt-1">Request an air freight quote for time-sensitive shipments.</p>
          </div>
          <Link href="/request-air-freight-quote">
            <button className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold text-xs uppercase tracking-widest px-8 py-3 transition-all group inline-flex items-center gap-3">
              Air Freight Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

const inputCls = "w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors bg-white";

function Field({ label, name, value, onChange, placeholder, required, type = "text" }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; required?: boolean; type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} value={value} onChange={onChange} placeholder={placeholder} className={inputCls} />
    </div>
  );
}
