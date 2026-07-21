"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Award, Globe, Users, ShieldCheck, Anchor, Star } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const mission = [
  "Innovative solutions for our demanding customers.",
  "Service with uncompromising quality and timely response.",
  "Long-term relationship and commitment to every customer.",
  "Forward-looking to maintain leadership in the industry.",
];

const vision = [
  "Provide trustworthy, value-added and flawless services in Customs Broking, Freight Forwarding and DGFT consulting.",
  "Air & Ocean Cargo Insurance for complete shipment protection.",
  "Highly efficient customs brokerage with full compliance.",
  "Clearance and compliance service with no compromises.",
  "Ensuring complete security across every supply chain link.",
];

const stats = [
  { value: "25+", label: "Years of Excellence", icon: Award },
  { value: "6", label: "Offices Globally", icon: Globe },
  { value: "AEO", label: "Certified by CBEC", icon: ShieldCheck },
  { value: "1,000+", label: "Clients Served", icon: Users },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://islf.in/about#webpage",
    "url": "https://islf.in/about",
    "name": "About ISLF — Indian Shipping and Logistics Facility Pvt Ltd",
    "description": "Learn about ISLF's 25+ year legacy as India's AEO-certified customs broker and freight forwarder — our mission, vision, recognition and global presence.",
    "isPartOf": { "@id": "https://islf.in/#website" },
    "about": { "@id": "https://islf.in/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://islf.in/#organization",
    "name": "Indian Shipping and Logistics Facility Pvt Ltd",
    "alternateName": "ISLF",
    "foundingDate": "2000",
    "url": "https://islf.in",
    "description": "AEO certified customs broker and freight forwarder in India, headquartered in Tuticorin with offices in Chennai, Bangalore, Gujarat, Mumbai, Ho Chi Minh City (Vietnam) and Jakarta (Indonesia).",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "AEO Certification",
      "name": "Authorised Economic Operator (AEO) Certificate — Central Board of Excise & Customs, Ministry of Finance, Government of India",
    },
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <SEOHead
        title="About ISLF | AEO Certified Customs Broker & Freight Forwarder | India"
        description="Indian Shipping and Logistics Facility Pvt Ltd (ISLF) — India's AEO certified customs broker and freight forwarder since 2000. Tuticorin HQ with offices in Chennai, Bengaluru, Gujarat, Mumbai & Vietnam. Learn our mission, vision and recognition."
        canonical="https://islf.in/about"
        keywords="ISLF logistics India, Indian Shipping Logistics Facility, AEO certified customs broker India, customs broker Chennai, freight forwarder India, ISLF about, logistics company Chennai, EXIM company India"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Since 2000
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              We Are <span className="text-accent">ISLF</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Indian Shipping and Logistics Facility Pvt Ltd — positioned to take advantage of the millennium's burgeoning global trade potential, with associates in all major destinations worldwide.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="text-center p-6 border border-gray-100 hover:border-accent/30 transition-colors group">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-heading font-semibold text-4xl text-primary mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span className="block w-8 h-[2px] bg-accent" /> Who We Are
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl text-primary uppercase mb-6">
                India's Trusted Logistics Partner
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-5">
                Indian Shipping and Logistics Facility Pvt Ltd is one of India's top logistics service providers and shipping companies, headquartered in Tuticorin with branch offices in Chennai, Bangalore, Gujarat, Mumbai and overseas branches at Ho Chi Minh City, Vietnam and Jakarta, Indonesia.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-5">
                Our associates in all major destinations in the world make our presence compelling as the logistics provider of choice in the Air and Sea shipping industry. We are committed to making global trade simple, compliant and efficient for our clients.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                We are the <strong className="text-primary">first Customs Broker from Tuticorin</strong> to receive <strong className="text-primary">AEO (Authorised Economic Operator) certification</strong> from the Central Board of Excise & Customs, Ministry of Finance, Government of India — a testament to our compliance standards and trustworthiness.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/services">
                  <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-8 py-3.5 transition-all group inline-flex items-center gap-3">
                    Explore Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
              {/* AEO Certificate card */}
              <motion.div variants={fadeUp} className="bg-primary text-white p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <ShieldCheck className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-heading font-semibold text-xl uppercase mb-2">AEO Certified</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Authorised Economic Operator certification from the Central Board of Excise & Customs — first customs broker from Tuticorin to achieve this distinction.
                </p>
              </motion.div>
              {/* Award card */}
              <motion.div variants={fadeUp} className="bg-accent text-white p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <Star className="w-10 h-10 text-white mb-4" />
                <h3 className="font-heading font-semibold text-xl uppercase mb-2">Award for Excellence 2023–24</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Proud recipients of the Award for Excellence in Traffic Performance from V.O. Chidambaranar Port Authority — for the highest number of Liquid Bulk Cargo applications filed.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4">Our Purpose</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl text-primary uppercase">Mission & Vision</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white border-2 border-primary p-8">
              <div className="flex items-center gap-3 mb-6">
                <Anchor className="w-8 h-8 text-accent" />
                <h3 className="font-heading font-semibold text-2xl text-primary uppercase">Mission</h3>
              </div>
              <ul className="space-y-3">
                {mission.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary border-2 border-primary p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-accent" />
                <h3 className="font-heading font-semibold text-2xl text-white uppercase">Vision</h3>
              </div>
              <ul className="space-y-3">
                {vision.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4">Global Presence</motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl text-primary uppercase">Our Offices</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Tuticorin — Head Office", address: "No. 3/188/5A, MSP Towers, Palayamkottai Main Road, Periyanayagapuram, Opp. Collector Office, Tuticorin – 628 101, India", phone: "+91-0461-2340790 / 91 / 92 / 93 / 94 / 95" },
              { city: "Chennai — Branch Office", address: "Sudharsanam Tower, No.06 & 08, Coral Merchant Street, Mannady, Chennai 600001", phone: "+91-44-2525 1314 / 15 / 16 / 17 / 18" },
              { city: "Chennai — Freight Forwarding", address: "Door No.2A, Zafrullah Towers, 2nd Floor, Angappan Street, Parrys Corner, Chennai 600001", phone: "+91 44 4789 6568" },
              { city: "Bengaluru", address: "Flat 101, Saroj Regency, Site 3, MS Reddy Nagar, Marathahalli, Bengaluru 560037", phone: "+91 9538876950 (WhatsApp only)" },
              { city: "Gujarat", address: '"Gold Coin" No.202, Plot 321, Ward 12/B, Gandhidham, Kutch, Gujarat 370201 (Mundra Port & Kantla Port)', phone: "+91 9538876950" },
              { city: "Vietnam (Overseas)", address: "L202-2nd floor, ARC REAL building, No.1, Nguyen Duy Street, Gia Dinh Ward, Ho Chi Minh City, Vietnam", phone: "+84-28-62873031" },
              { city: "Indonesia (Overseas)", address: "The Mansion Bougenville, Tower Fontana Zona, BF 31A1, JI. Trembesi Blok D, Kemayoran, Jakarta Utara, DKI Jakarta 14410", phone: "+62 81188060213 / +91 9677794670" },
            ].map((office, i) => (
              <motion.div key={i} variants={fadeUp} className="border border-gray-100 p-6 hover:border-accent/40 transition-colors">
                <h3 className="font-heading font-semibold text-primary uppercase text-sm mb-3">{office.city}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{office.address}</p>
                <p className="text-accent text-sm font-semibold">{office.phone}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl uppercase mb-6">Partner With Us</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-xl mx-auto mb-10">
              Let ISLF's two-decade expertise simplify your logistics, customs and trade compliance challenges.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacts">
                <button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all group inline-flex items-center gap-3">
                  Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button className="border border-white/30 hover:border-accent text-white hover:text-accent font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 transition-all">
                  View Services
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
