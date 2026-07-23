"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone, Mail, Clock, MapPin,
  Facebook, Twitter, Linkedin, Instagram,
  Menu, X, ChevronDown, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const offices = [
  { label: "Bengaluru Office", phone: "+91 9538876950", phoneDisplay: "+91 9538876950 (WhatsApp only)", hours: "Mon–Sat: 9AM–6PM" },
  { label: "Chennai Office", phone: "+914425251314", phoneDisplay: "CALL FREE: +91-44-2525 1314 / 15 / 16 / 17 / 18", hours: "Mon–Sat: 9AM–6PM" },
  { label: "Chennai Freight", phone: "+914447896568", phoneDisplay: "+91 44 4789 6568", hours: "Mon–Sat: 9AM–6PM" },
  { label: "Tuticorin Head Office", phone: "+914612340790", phoneDisplay: "CALL FREE: +91-0461-2340790 / 91 / 92 / 93 / 94 / 95", hours: "Mon–Sat: 9AM–6PM" },
  { label: "Vietnam Office", phone: "+842862873031", phoneDisplay: "+84-28-62873031", hours: "Mon–Fri: 8AM–5PM · Sat: 8AM–12PM" },
  { label: "Gujarat Office", phone: "+919538876950", phoneDisplay: "+91 9538876950", hours: "Mon–Sat: 9AM–6PM" },
  { label: "Indonesia Office", phone: "+6281188060213", phoneDisplay: "+62 81188060213 / +91 9677794670", hours: "Mon–Sat: 9AM–6PM" },
];

const footerOffices = [
  {
    label: "Tuticorin — HQ",
    address: ["No. 3/188/5A, MSP Towers,", "Palayamkottai Main Road, Periyanayagapuram,", "Opp. Collector Office, Tuticorin – 628 101"],
    phone: "+91-0461-2340790 / 91 / 92 / 93 / 94 / 95",
    email: "info@islf.in",
  },
  {
    label: "Chennai — Branch",
    address: ["Sudharsanam Tower, No.06 & 08,", "Coral Merchant Street, Mannady,", "Chennai 600001"],
    phone: "+91-44-2525 1314 / 15 / 16 / 17 / 18",
    email: "info@islf.in",
  },
  {
    label: "Chennai — Freight Forwarding",
    address: ["Door No.2A, Zafrullah Towers, 2nd Floor,", "Angappan Street, Parrys Corner,", "Chennai 600001"],
    phone: "+91 44 4789 6568",
    email: "info@islf.in",
  },
  {
    label: "Bengaluru — Branch",
    address: ["Flat 101, Saroj Regency, Site 3,", "MS Reddy Nagar, Marathahalli,", "Bengaluru 560037"],
    phone: "+91 9538876950 (WhatsApp only)",
    email: "info@islf.in",
  },
  {
    label: "Gujarat — Branch",
    address: ["\u201cGold Coin\u201d No.202, Plot 321,", "Ward 12/B, Gandhidham,", "Kutch, Gujarat 370201 (Mundra Port \u0026 Kantla Port)"],
    phone: "+91 9538876950",
    email: "info@islf.in",
  },
  {
    label: "Vietnam — Branch",
    address: ["L202-2nd floor, ARC REAL building,", "No.1, Nguyen Duy Street, Gia Dinh Ward,", "Ho Chi Minh City, Vietnam"],
    phone: "+84-28-62873031",
    email: "info@islf.in",
  },
  {
    label: "Indonesia — Branch",
    address: ["The Mansion Bougenville, Tower Fontana Zona,", "BF 31A1, JI. Trembesi Blok D, Kemayoran,", "Jakarta Utara, DKI Jakarta 14410"],
    phone: "+62 81188060213 / +91 9677794670",
    email: "info@islf.in",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Consulting", href: "/consulting" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
  { label: "Contacts", href: "/contacts" },
  { label: "Blog", href: "/blog" },
  { label: "Track Your Shipment", href: "/track-your-shipment" },
];

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [footerOfficeOpen, setFooterOfficeOpen] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentOffice = offices[selectedOffice];

  return (
    <div className="bg-noise min-h-screen text-foreground font-sans">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 relative">
        {/* Top bar */}
        <div className={`bg-primary text-white text-sm border-b border-white/10 transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-12 py-2 opacity-100"}`}>
          <div className="container mx-auto px-6 md:px-12 flex flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/80 min-w-0">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href={`tel:${currentOffice.phone}`} className="font-medium truncate hover:text-white transition-colors">
                <span className="hidden md:inline">{currentOffice.phoneDisplay}</span>
                <span className="md:hidden">{currentOffice.phone}</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/70 hover:text-white transition-colors shrink-0">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:info@islf.in" className="font-medium">info@islf.in</a>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-white/70 shrink-0">
              <Clock className="w-4 h-4 text-accent" />
              <span className="font-medium">{currentOffice.hours}</span>
            </div>
            <div className="shrink-0 ml-auto">
              <button
                onClick={() => setOfficeDropdownOpen((o) => !o)}
                aria-expanded={officeDropdownOpen}
                aria-haspopup="listbox"
                aria-label={`Select office: ${currentOffice.label}`}
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 transition-colors"
              >
                {currentOffice.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${officeDropdownOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Office dropdown */}
        <AnimatePresence>
          {officeDropdownOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setOfficeDropdownOpen(false)} />
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="absolute right-6 md:right-12 top-[44px] w-52 bg-[#3B5273] border border-white/10 shadow-2xl z-50"
              >
                {offices.map((office, i) => (
                  <button
                    key={i}
                    onClick={() => { setSelectedOffice(i); setOfficeDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors border-b border-white/5 last:border-0 ${selectedOffice === i ? "bg-accent text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
                  >
                    {office.label}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Nav */}
        <nav className={`w-full transition-all duration-300 ${isScrolled ? "bg-primary/95 backdrop-blur-md shadow-2xl py-4" : "bg-primary py-5"}`}>
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <Image src="/logo.png" alt="ISLF Logo" width={128} height={64} priority className="h-14 md:h-16 object-contain" style={{ width: 'auto' }} />
            </Link>

            <div className="hidden lg:flex items-center justify-center gap-8 font-heading font-semibold text-base text-white">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className={`hover:text-accent transition-colors relative group py-2 ${location === link.href ? "text-accent" : ""}`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              ))}

              {/* Services dropdown */}
              <div className="relative" onMouseEnter={() => setOpenDropdown("services")} onMouseLeave={() => setOpenDropdown(null)}>
                <Link href="/services" className={`hover:text-accent transition-colors relative group py-2 flex items-center gap-1 ${location === "/services" ? "text-accent" : ""}`}>
                  Services <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${location === "/services" ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
                <AnimatePresence>
                  {openDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 min-w-[220px] bg-[#3B5273] border-t-[3px] border-accent shadow-2xl z-50"
                    >
                      {[
                        { label: "DGFT", href: "/dgft" },
                        { label: "Customs Broker", href: "/customs-broking" },
                        { label: "Freight Forwarding", href: "/freight-forwarding" },
                        { label: "Warehouse", href: "/warehousing" },
                        { label: "Stevedoring", href: "/stevedoring" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} className="block px-8 py-4 text-white hover:text-accent hover:bg-white/5 transition-colors text-lg border-b border-white/5 last:border-0">
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Consulting dropdown */}
              <div className="relative" onMouseEnter={() => setOpenDropdown("consulting")} onMouseLeave={() => setOpenDropdown(null)}>
                <Link href="/consulting" className={`hover:text-accent transition-colors relative group py-2 flex items-center gap-1 ${location === "/consulting" ? "text-accent" : ""}`}>
                  Consulting <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${location === "/consulting" ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
                <AnimatePresence>
                  {openDropdown === "consulting" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 min-w-[280px] bg-[#3B5273] border-t-[3px] border-accent shadow-2xl z-50"
                    >
                      {[
                        { label: "DGFT", href: "/dgft" },
                        { label: "CCS", href: "/customs-consultancy" },
                        { label: "CFS", href: "/cfs" },
                        { label: "STPI / HTPI / SEZ / EOU", href: "/stpi" },
                        { label: "GST", href: "/gst" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} className="block px-8 py-4 text-white hover:text-accent hover:bg-white/5 transition-colors text-lg border-b border-white/5 last:border-0">
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { label: "FAQ", href: "/faq" },
                { label: "Careers", href: "/careers" },
                { label: "Contacts", href: "/contacts" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className={`hover:text-accent transition-colors relative group py-2 ${location === link.href ? "text-accent" : ""}`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3">
              <div className="relative hidden lg:block" onMouseEnter={() => setOpenDropdown("quote")} onMouseLeave={() => setOpenDropdown(null)}>
                <Button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-lg px-8 h-12 rounded-none transition-all duration-300 flex items-center gap-2">
                  Request a Quote <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                </Button>
                <AnimatePresence>
                  {openDropdown === "quote" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 min-w-[280px] bg-[#3B5273] border-t-[3px] border-accent shadow-2xl z-50"
                    >
                      {[
                        { label: "Request Ship Freight Quote", href: "/request-ship-freight-quote" },
                        { label: "Request Air Freight Quote", href: "/request-air-freight-quote" },
                        { label: "Track Your Shipment", href: "/track-your-shipment" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} className="block px-8 py-4 text-white hover:text-accent hover:bg-white/5 transition-colors text-lg border-b border-white/5 last:border-0">
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                className="lg:hidden text-white bg-white/10 hover:bg-white/20 p-2 rounded-sm transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden border-t border-white/10 bg-primary"
              >
                <div className="container mx-auto px-6 py-4 flex flex-col gap-0 font-heading font-semibold text-white">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                  ].map((link) => (
                    <Link key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-accent py-3 border-b border-white/5 flex items-center justify-between">
                      {link.label} <ChevronRight className="w-4 h-4 text-accent" />
                    </Link>
                  ))}

                  {/* Services accordion */}
                  <div>
                    <button
                      className="w-full text-white/80 hover:text-accent py-3 border-b border-white/5 flex items-center justify-between"
                      onClick={() => setMobileDropdown(mobileDropdown === "services" ? null : "services")}
                    >
                      Services <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-200 ${mobileDropdown === "services" ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    {mobileDropdown === "services" && (
                      <div className="bg-white/5 border-b border-white/5">
                        {[
                          { label: "DGFT", href: "/dgft" },
                          { label: "Customs Broker", href: "/customs-broking" },
                          { label: "Freight Forwarding", href: "/freight-forwarding" },
                          { label: "Warehouse", href: "/warehousing" },
                        { label: "Stevedoring", href: "/stevedoring" },
                        ].map((item) => (
                          <Link key={item.href} href={item.href} className="flex items-center gap-2 pl-6 pr-4 py-3 text-white/60 hover:text-accent font-medium text-sm border-b border-white/5 last:border-0" onClick={() => setIsMobileMenuOpen(false)}>
                            <ChevronRight className="w-3 h-3 text-accent/60 shrink-0" aria-hidden="true" /> {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Consulting accordion */}
                  <div>
                    <button
                      className="w-full text-white/80 hover:text-accent py-3 border-b border-white/5 flex items-center justify-between"
                      onClick={() => setMobileDropdown(mobileDropdown === "consulting" ? null : "consulting")}
                    >
                      Consulting <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-200 ${mobileDropdown === "consulting" ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    {mobileDropdown === "consulting" && (
                      <div className="bg-white/5 border-b border-white/5">
                        {[
                          { label: "DGFT", href: "/dgft" },
                          { label: "CCS", href: "/customs-consultancy" },
                          { label: "CFS", href: "/cfs" },
                          { label: "STPI / HTPI / SEZ / EOU", href: "/stpi" },
                          { label: "GST", href: "/gst" },
                        ].map((item) => (
                          <Link key={item.href} href={item.href} className="flex items-center gap-2 pl-6 pr-4 py-3 text-white/60 hover:text-accent font-medium text-sm border-b border-white/5 last:border-0" onClick={() => setIsMobileMenuOpen(false)}>
                            <ChevronRight className="w-3 h-3 text-accent/60 shrink-0" aria-hidden="true" /> {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {[
                    { label: "FAQ", href: "/faq" },
                    { label: "Careers", href: "/careers" },
                    { label: "Contacts", href: "/contacts" },
                    { label: "Blog", href: "/blog" },
                  ].map((link) => (
                    <Link key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-accent py-3 border-b border-white/5 flex items-center justify-between">
                      {link.label} <ChevronRight className="w-4 h-4 text-accent" />
                    </Link>
                  ))}

                  {/* Request a Quote accordion */}
                  <div>
                    <button
                      className="w-full text-white/80 hover:text-accent py-3 border-b border-white/5 flex items-center justify-between"
                      onClick={() => setMobileDropdown(mobileDropdown === "quote" ? null : "quote")}
                    >
                      Request a Quote <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-200 ${mobileDropdown === "quote" ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    {mobileDropdown === "quote" && (
                      <div className="bg-white/5 border-b border-white/5">
                        {[
                          { label: "Request Ship Freight Quote", href: "/request-ship-freight-quote" },
                          { label: "Request Air Freight Quote", href: "/request-air-freight-quote" },
                          { label: "Track Your Shipment", href: "/track-your-shipment" },
                        ].map((item) => (
                          <Link key={item.href} href={item.href} className="flex items-center gap-2 pl-6 pr-4 py-3 text-white/60 hover:text-accent font-medium text-sm border-b border-white/5 last:border-0" onClick={() => setIsMobileMenuOpen(false)}>
                            <ChevronRight className="w-3 h-3 text-accent/60 shrink-0" aria-hidden="true" /> {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      <main>{children}</main>

      <footer className="bg-primary text-white">
        <div className="h-1 w-full bg-accent" />
        <div className="container mx-auto px-6 md:px-12 pt-16 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
            <div>
              <div className="inline-block mb-4">
                <Image src="/logo.png" alt="ISLF Logo" width={96} height={48} className="h-12 object-contain" style={{ width: 'auto' }} />
              </div>
              <p className="text-white/60 max-w-xs text-sm leading-relaxed">
                India&apos;s trusted freight partner — AEO certified, two decades of excellence across ocean, air, and road.
              </p>
            </div>
            <div className="flex gap-3">
              {([
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
              ] as const).map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={`Follow ISLF on ${label}`} className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-b border-white/10">
            <div>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                <span className="block w-6 h-[2px] bg-accent" /> Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 text-accent/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                <span className="block w-6 h-[2px] bg-accent" /> Our Offices
              </h4>
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                {footerOffices.map((office, i) => {
                  const isOpen = footerOfficeOpen === i;
                  return (
                    <div key={office.label}>
                      <button
                        type="button"
                        onClick={() => setFooterOfficeOpen(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-3 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-white font-semibold text-sm uppercase tracking-wide">{office.label}</span>
                        <ChevronDown className={`w-4 h-4 text-accent shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 text-sm text-white/60 pb-5">
                              <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span>
                                  {office.address.map((line, idx) => (
                                    <span key={idx}>{line}{idx < office.address.length - 1 && <br />}</span>
                                  ))}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-accent shrink-0" />
                                <span>{office.phone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-accent shrink-0" />
                                <span>{office.email}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                <span className="block w-6 h-[2px] bg-accent" /> Newsletter
              </h4>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">Subscribe for logistics news and trade updates from ISLF.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newsletter-email-footer" className="sr-only">Email address for newsletter</label>
                <input id="newsletter-email-footer" type="email" placeholder="Your email address" className="bg-white/5 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-accent w-full transition-colors" />
                <button type="submit" className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest py-3 px-6 transition-all duration-200 w-full">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-white/40 text-xs">
            <p>&copy; {new Date().getFullYear()} Indian Shipping and Logistics Facility Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
