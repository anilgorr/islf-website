"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const branches = [
  "Bengaluru Office",
  "Chennai Head Office",
  "Chennai Freight Forwarding",
  "Tuticorin Office",
  "Vietnam Office",
  "Gujarat Office",
  "Indonesia Office",
];

const locations = [
  {
    city: "Bengaluru",
    label: "India",
    address: "Flat 101, Saroj Regency, Site 3, MS Reddy Nagar, Opposite to Maha Bazaar, Marathahalli, Bangalore 560037",
    phone: "+91 9538876950 (WhatsApp only)",
    email: "info@islf.in",
    mapSrc: "https://maps.google.com/maps?q=Marathahalli,+Bangalore+560037&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Chennai",
    label: "Head Office",
    address: '"Sudharsanam Tower" No.06 & 08, Old No 176, 3rd Floor, Coral Merchant Street, Mannady, Chennai – 600 001',
    phone: "+91-44-2525 1314 / 15 / 16 / 17 / 18",
    email: "info@islf.in",
    mapSrc: "https://maps.google.com/maps?q=Coral+Merchant+Street,+Mannady,+Chennai+600001&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Chennai",
    label: "Freight Forwarding",
    address: "Door No.2A, Old No.126, New No.257, Zafrullah Towers, 2nd Floor, Angappan Street, Parrys Corner, Chennai – 600 001",
    phone: "+91 44 4789 6568",
    email: "info@islf.in",
    mapSrc: "https://maps.google.com/maps?q=Angappan+Street,+Parrys+Corner,+Chennai+600001&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Tuticorin",
    label: "India",
    address: "No. 3/188/5A, MSP Towers, Palayamkottai Main Road, Periyanayagapuram, Opp. Collector Office, Tuticorin – 628 101, India",
    phone: "+91-0461-2340790 / 91 / 92 / 93 / 94 / 95",
    email: "info@islf.in",
    mapSrc: "https://maps.google.com/maps?q=Palayamkottai+Main+Road,+Tuticorin+628101,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Vietnam",
    label: "Ho Chi Minh City",
    address: "L202-2nd floor, ARC REAL building, No.1, Nguyen Duy Street, Gia Dinh Ward, Ho Chi Minh City, Vietnam",
    phone: "+84-28-62873031",
    email: "info@islf.in",
    mapSrc: "https://maps.google.com/maps?q=Ho+Chi+Minh+City,+Vietnam&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Gujarat",
    label: "India",
    address: '"Gold Coin" No.202, Second Floor, Plot No.321, Ward 12/B, Gandhidham, Kutch, Gujarat 370201',
    phone: "+91 9538876950",
    email: "info@islf.in",
    mapSrc: "https://maps.google.com/maps?q=Gandhidham,+Kutch,+Gujarat+370201&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Indonesia",
    label: "Jakarta",
    address: "The Mansion Bougenville, Tower Fontana Zona, BF 31A1, JI. Trembesi Blok D, Kemayoran, Kec. Pademangan, Jakarta Utara, DKI Jakarta - Indonesia 14410",
    phone: "+62 81188060213 / +91 9677794670",
    email: "info@islf.in",
    mapSrc: "https://maps.google.com/maps?q=Kemayoran,+Jakarta+Utara,+DKI+Jakarta+14410&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact ISLF — Indian Shipping and Logistics Facility",
  "description": "Contact ISLF for customs broking, freight forwarding, DGFT consulting and logistics services. Offices in Chennai, Tuticorin, Bengaluru, Gujarat and Vietnam.",
  "url": "https://islf.in/contacts",
  "mainEntity": {
    "@id": "https://islf.in/#organization",
  },
};

type FormState = {
  contactPerson: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  fax: string;
  address: string;
  enquiryFor: string;
  details: string;
  branch: string;
};

const emptyForm: FormState = {
  contactPerson: "",
  companyName: "",
  country: "",
  email: "",
  phone: "",
  fax: "",
  address: "",
  enquiryFor: "",
  details: "",
  branch: "",
};

export default function ContactsPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const loc = locations[activeLocation];

  return (
    <PageLayout>
      <SEOHead
        title="Contact Us | ISLF — Indian Shipping and Logistics Facility"
        description="Contact ISLF for customs broking, freight forwarding, DGFT consulting and logistics services. Offices in Chennai, Tuticorin, Bengaluru, Gujarat and Vietnam. Phone: +91 9538876950 | Email: info@islf.in"
        canonical="https://islf.in/contacts"
        keywords="contact ISLF, ISLF customs broker contact, ISLF Chennai, ISLF Tuticorin, ISLF Bengaluru, logistics company contact India, customs broker enquiry India"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Get In Touch
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              Contact <span className="text-accent">Us</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Reach out to our team for enquiries on customs broking, freight forwarding, DGFT consulting or any of our services.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Left — intro */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-1">
              <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span className="block w-8 h-[2px] bg-accent" /> Enquiry Form
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl text-primary uppercase mb-5">
                Get In Touch
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                If you have any question about ISLF Logistics or how we can support your business, please contact us directly by selecting the branch most relevant to your enquiry and filling out the short feedback form.
              </motion.p>

              <motion.div variants={stagger} className="space-y-5">
                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">Phone</p>
                    <a href="tel:+919538876950" className="text-gray-600 text-sm hover:text-accent transition-colors">+91 9538876950</a>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">Email</p>
                    <a href="mailto:info@islf.in" className="text-gray-600 text-sm hover:text-accent transition-colors">info@islf.in</a>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">Head Office</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Sudharsanam Tower, Coral Merchant Street, Mannady, Chennai 600001</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
              {submitted ? (
                <div className="bg-gray-50 border border-gray-100 p-12 text-center">
                  <CheckCircle2 className="w-14 h-14 text-accent mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-primary text-2xl uppercase mb-3">Thank You</h3>
                  <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
                    Your enquiry has been received. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(emptyForm); }}
                    className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-xs uppercase tracking-widest px-8 py-3 transition-all"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  {/* Section: Contact Information */}
                  <div className="bg-primary text-white px-6 py-3">
                    <p className="font-heading font-semibold text-xs uppercase tracking-[0.2em]">Contact Information</p>
                  </div>
                  <div className="border border-t-0 border-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactPerson" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Contact Person <span className="text-accent">*</span></label>
                      <input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        required
                        value={form.contactPerson}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Address <span className="text-accent">*</span></label>
                      <textarea
                        id="address"
                        name="address"
                        required
                        rows={3}
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Your address"
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Company Name</label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={form.companyName}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Phone No <span className="text-accent">*</span></label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Country</label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="fax" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Fax</label>
                      <input
                        id="fax"
                        name="fax"
                        type="text"
                        value={form.fax}
                        onChange={handleChange}
                        placeholder="Fax number"
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">E-mail <span className="text-accent">*</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Section: Enquiry Details */}
                  <div className="bg-primary text-white px-6 py-3 mt-6">
                    <p className="font-heading font-semibold text-xs uppercase tracking-[0.2em]">Enquiry Details</p>
                  </div>
                  <div className="border border-t-0 border-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiryFor" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Enquiry For</label>
                      <input
                        id="enquiryFor"
                        name="enquiryFor"
                        type="text"
                        value={form.enquiryFor}
                        onChange={handleChange}
                        placeholder="e.g. Customs Broking, DGFT..."
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="details" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Details <span className="text-accent">*</span></label>
                      <textarea
                        id="details"
                        name="details"
                        required
                        rows={3}
                        value={form.details}
                        onChange={handleChange}
                        placeholder="Describe your enquiry..."
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="branch" className="block text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Branch</label>
                      <select
                        id="branch"
                        name="branch"
                        value={form.branch}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-accent transition-colors bg-white"
                      >
                        <option value="">— Select Branch —</option>
                        {branches.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-center">
                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-12 py-4 transition-all group inline-flex items-center gap-3"
                    >
                      Submit Enquiry <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-[#F8F9FB]">
        <div className="container mx-auto px-6 md:px-12 pt-16 pb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-[2px] bg-accent" />
              <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Worldwide Presence</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-semibold text-primary uppercase">
              Our Offices
            </motion.h2>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[520px]">
          {/* Left — location selector */}
          <div className="lg:w-[340px] shrink-0 bg-[#0A1628] flex flex-col">
            {locations.map((l, i) => (
              <button
                key={i}
                onClick={() => setActiveLocation(i)}
                className={`group relative flex items-center gap-4 px-8 py-6 text-left transition-all duration-200 border-l-4 ${
                  activeLocation === i
                    ? "border-accent bg-accent/10 text-white"
                    : "border-transparent text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={`font-heading text-xs font-bold transition-colors ${activeLocation === i ? "text-accent" : "text-white/25 group-hover:text-white/50"}`}>
                  0{i + 1}
                </span>
                <div>
                  <p className={`font-heading font-semibold text-lg uppercase tracking-wide leading-none transition-colors ${activeLocation === i ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                    {l.city}
                  </p>
                  <p className={`text-xs mt-1 transition-colors ${activeLocation === i ? "text-accent" : "text-white/40 group-hover:text-white/60"}`}>
                    {l.label}
                  </p>
                </div>
                {activeLocation === i && (
                  <span className="ml-auto">
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right — map + details */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <iframe
                    title={`Map of ${loc.city} — ${loc.label}`}
                    src={loc.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="bg-white border-t border-border px-8 py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{loc.address}</span>
                  </div>
                  <div className="flex sm:flex-col gap-4 sm:gap-2 shrink-0 text-sm">
                    <a href={`tel:${loc.phone.split("/")[0].replace(/[^\d+]/g, "")}`} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                      <Phone className="w-4 h-4 text-accent" />
                      {loc.phone}
                    </a>
                    <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                      <Mail className="w-4 h-4 text-accent" />
                      {loc.email}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
