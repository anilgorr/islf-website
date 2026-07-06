"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, Clock, MapPin, Truck, Plane, Ship, 
  Warehouse, ArrowRight, CheckCircle2, ChevronRight,
  Facebook, Twitter, Linkedin, Instagram,
  Menu, X, Anchor, Globe, Briefcase, ChevronLeft,
  FileText, ShieldCheck, ChevronDown
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Images
const logoPath = "/logo.jpg";
const directorImage = "/director.webp";
const serviceCustoms = "/service-customs.webp";
const serviceConsulting = "/service-consulting.webp";
const serviceFreight = "/service-freight.webp";

// Hero images served from public/ — stable URLs used by the HTML skeleton
const heroImage = "/hero.webp";
const heroWebp = "/hero.webp";
const heroMobileWebp = "/hero-mobile.webp";

// Async feature load — framer-motion animation engine deferred until after first render
const loadFeatures = () => import("framer-motion").then(r => r.domAnimation);

// Industrial Animations
const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const imageReveal = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openLocation, setOpenLocation] = useState<number | null>(0);
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [footerOfficeOpen, setFooterOfficeOpen] = useState<number | null>(null);

  const footerOffices = [
    {
      label: "Chennai — HQ",
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
      label: "Tuticorin — Branch",
      address: ["No. 3/188/5A, MSP Towers,", "Palayamkottai Main Road, Periyanayagapuram,", "Opp. Collector Office, Tuticorin – 628 101"],
      phone: "+91-0461-2340790 / 91 / 92 / 93 / 94 / 95",
      email: "info@islf.in",
    },
    {
      label: "Gujarat — Branch",
      address: ["\u201cGold Coin\u201d No.202, Plot 321,", "Ward 12/B, Gandhidham,", "Kutch, Gujarat 370201"],
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

  const offices = [
    {
      label: "Bengaluru Office",
      phone: "+91 9538876950",
      phoneDisplay: "+91 9538876950 (WhatsApp only)",
      hours: "Mon–Sat: 9AM–6PM",
      contactIndex: 0,
    },
    {
      label: "Chennai Head Office",
      phone: "+914425251314",
      phoneDisplay: "CALL FREE: +91-44-2525 1314 / 15 / 16 / 17 / 18",
      hours: "Mon–Sat: 9AM–6PM",
      contactIndex: 1,
    },
    {
      label: "Chennai Freight",
      phone: "+914447896568",
      phoneDisplay: "+91 44 4789 6568",
      hours: "Mon–Sat: 9AM–6PM",
      contactIndex: 2,
    },
    {
      label: "Tuticorin Office",
      phone: "+914612340790",
      phoneDisplay: "CALL FREE: +91-0461-2340790 / 91 / 92 / 93 / 94 / 95",
      hours: "Mon–Sat: 9AM–6PM",
      contactIndex: 3,
    },
    {
      label: "Vietnam Office",
      phone: "+842862873031",
      phoneDisplay: "+84-28-62873031",
      hours: "Mon–Fri: 8AM–5PM · Sat: 8AM–12PM",
      contactIndex: 4,
    },
    {
      label: "Gujarat Office",
      phone: "+919538876950",
      phoneDisplay: "+91 9538876950",
      hours: "Mon–Sat: 9AM–6PM",
      contactIndex: 5,
    },
    {
      label: "Indonesia Office",
      phone: "+6281188060213",
      phoneDisplay: "+62 81188060213 / +91 9677794670",
      hours: "Mon–Sat: 9AM–6PM",
      contactIndex: 6,
    },
  ];

  const currentOffice = offices[selectedOffice];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialQuotes = [
    "We had several unclosed DGFT issues prolonging years but ISLF's professional, systematic approach helped us to close all of them and we have made them as one stop shop for our DGFT and trade related activities – Thanks a million",
    "We appreciate and thank ISLF team for solving our complex issues which were circling around and unfound solutions. With ISLF's professional ease, transparent communication, simple communication made find the solution for our issues and found solution for long term",
    "We are in the trade industries for several years and we had several vendors in our panel. Very recently we came across with unique issue which was unable to resolve or unable to find solution by existing vendor. We approached ISLF and over phone itself they understood the issue and suggested workable solution and we entrusted the work and executed flawlessly.",
    "We are honored to have ISLF as our vendor – They are stepping stone for our company's growth. We are working peacefully because they handle all our issues related to DGFT, import, export, all our international trade related",
    "Hats off to Indian Shipping and Logistics Facility, We owe big thanks and we will continue to support them"
  ];
  const testimonialCount = testimonialQuotes.length;

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialCount);
  }, [testimonialCount]);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialCount) % testimonialCount);
  }, [testimonialCount]);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <LazyMotion features={loadFeatures}>
    <div className="bg-noise min-h-screen text-foreground font-sans">
      
      {/* Sticky header wrapper */}
      <div className="sticky top-0 z-50 relative">
        {/* 1. Top Bar — hidden once scrolled */}
        <div className={`bg-primary text-white text-sm border-b border-white/10 transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-12 py-2 opacity-100"}`}>
          <div className="container mx-auto px-6 md:px-12 flex flex-row justify-between items-center gap-4">
            {/* Dynamic phone */}
            <div className="flex items-center gap-2 text-white/80 min-w-0">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href={`tel:${currentOffice.phone}`} className="font-medium truncate hover:text-white transition-colors">
                <span className="hidden md:inline">{currentOffice.phoneDisplay}</span>
                <span className="md:hidden">{currentOffice.phone}</span>
              </a>
            </div>
            {/* Email */}
            <div className="hidden md:flex items-center gap-2 text-white/70 hover:text-white transition-colors shrink-0">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:info@islf.in" className="font-medium">info@islf.in</a>
            </div>
            {/* Dynamic hours */}
            <div className="hidden lg:flex items-center gap-2 text-white/70 shrink-0">
              <Clock className="w-4 h-4 text-accent" />
              <span className="font-medium">{currentOffice.hours}</span>
            </div>

            {/* Office selector button (trigger only — panel rendered outside overflow-hidden) */}
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

        {/* Dropdown panel — sibling to overflow-hidden bar so it is never clipped */}
        <AnimatePresence>
          {officeDropdownOpen && (
            <>
              {/* click-away backdrop */}
              <div className="fixed inset-0 z-40" onClick={() => setOfficeDropdownOpen(false)} />
              <m.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="absolute right-6 md:right-12 top-[44px] w-52 bg-[#0d1f38] border border-white/10 shadow-2xl z-50"
              >
                {offices.map((office, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedOffice(i);
                      setOpenLocation(office.contactIndex);
                      setOfficeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors border-b border-white/5 last:border-0 ${
                      selectedOffice === i
                        ? "bg-accent text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {office.label}
                  </button>
                ))}
              </m.div>
            </>
          )}
        </AnimatePresence>

        {/* 2. Navigation */}
        <nav className={`w-full transition-all duration-300 ${isScrolled ? "bg-primary/95 backdrop-blur-md shadow-2xl py-4" : "bg-primary py-5"}`}>
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Link href="/" className="flex items-center gap-4 bg-white p-2 rounded-sm" data-testid="link-home-logo">
              <Image src="/logo.jpg" alt="ISLF Logo" width={96} height={48} className="h-10 md:h-12 object-contain" style={{ width: 'auto' }} />
            </Link>

            <div className="hidden lg:flex items-center justify-center gap-8 font-heading font-semibold text-base text-white">
              <a href="/" className="hover:text-accent transition-colors relative group py-2">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>

              {/* Services dropdown */}
              <div className="relative" onMouseEnter={() => setOpenDropdown("services")} onMouseLeave={() => setOpenDropdown(null)}>
                <Link href="/services" className="hover:text-accent transition-colors relative group py-2 flex items-center gap-1">
                  Services <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
                <AnimatePresence>
                  {openDropdown === "services" && (
                    <m.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 min-w-[220px] bg-[#0d1f38] border-t-[3px] border-accent shadow-2xl z-50"
                    >
                      {[
                        { label: "DGFT", href: "/dgft" },
                        { label: "CHA", href: "/customs-broking" },
                        { label: "Freight Forwarding", href: "/freight-forwarding" },
                        { label: "Warehouse", href: "/warehousing" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} className="block px-8 py-4 text-white hover:text-accent hover:bg-white/5 transition-colors text-lg border-b border-white/5 last:border-0">
                          {item.label}
                        </Link>
                      ))}
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Consulting dropdown */}
              <div className="relative" onMouseEnter={() => setOpenDropdown("consulting")} onMouseLeave={() => setOpenDropdown(null)}>
                <Link href="/consulting" className="hover:text-accent transition-colors relative group py-2 flex items-center gap-1">
                  Consulting <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
                <AnimatePresence>
                  {openDropdown === "consulting" && (
                    <m.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 min-w-[280px] bg-[#0d1f38] border-t-[3px] border-accent shadow-2xl z-50"
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
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { label: "FAQ", href: "/faq" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-accent transition-colors relative group py-2">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link href="/contacts" className="hover:text-accent transition-colors relative group py-2">
                Contacts
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-3">
              <div className="relative hidden lg:block" onMouseEnter={() => setOpenDropdown("quote")} onMouseLeave={() => setOpenDropdown(null)}>
                <Button className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-lg px-8 h-12 rounded-none transition-all duration-300 flex items-center gap-2">
                  Request a Quote <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                </Button>
                <AnimatePresence>
                  {openDropdown === "quote" && (
                    <m.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 min-w-[280px] bg-[#0d1f38] border-t-[3px] border-accent shadow-2xl z-50"
                    >
                      {[
                        { label: "Request Ship Freight Quote", href: "/sea-freight" },
                        { label: "Request Air Freight Quote", href: "/air-freight" },
                        { label: "Track Your Shipment", href: "#contacts" },
                      ].map((item) => (
                        <a key={item.href} href={item.href} className="block px-8 py-4 text-white hover:text-accent hover:bg-white/5 transition-colors text-lg border-b border-white/5 last:border-0">
                          {item.label}
                        </a>
                      ))}
                    </m.div>
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

          {/* Mobile Nav */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden w-full bg-primary border-t border-white/10 shadow-2xl flex flex-col p-6 gap-0 text-white font-heading font-semibold text-lg"
              >
                <a href="/" className="hover:text-accent border-b border-white/10 py-4 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                  Home <ChevronRight className="w-4 h-4 text-accent" />
                </a>

                {/* Services accordion */}
                <div>
                  <button
                    className="w-full hover:text-accent border-b border-white/10 py-4 flex items-center justify-between"
                    onClick={() => setMobileDropdown(mobileDropdown === "services" ? null : "services")}
                  >
                    Services <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-200 ${mobileDropdown === "services" ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {mobileDropdown === "services" && (
                    <div className="bg-white/5 border-b border-white/10">
                      {[
                        { label: "DGFT", href: "/dgft" },
                        { label: "CHA", href: "/customs-broking" },
                        { label: "Freight Forwarding", href: "/freight-forwarding" },
                        { label: "Warehouse", href: "/warehousing" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} className="flex items-center gap-2 pl-6 pr-4 py-3 text-white/70 hover:text-accent text-base border-b border-white/5 last:border-0" onClick={() => setIsMobileMenuOpen(false)}>
                          <ChevronRight className="w-3 h-3 text-accent/60 shrink-0" aria-hidden="true" /> {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Consulting accordion */}
                <div>
                  <button
                    className="w-full hover:text-accent border-b border-white/10 py-4 flex items-center justify-between"
                    onClick={() => setMobileDropdown(mobileDropdown === "consulting" ? null : "consulting")}
                  >
                    Consulting <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-200 ${mobileDropdown === "consulting" ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {mobileDropdown === "consulting" && (
                    <div className="bg-white/5 border-b border-white/10">
                      {[
                        { label: "DGFT", href: "/dgft" },
                        { label: "CCS", href: "/customs-consultancy" },
                        { label: "CFS", href: "/cfs" },
                        { label: "STPI / HTPI / SEZ / EOU", href: "/stpi" },
                        { label: "GST", href: "/gst" },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} className="flex items-center gap-2 pl-6 pr-4 py-3 text-white/70 hover:text-accent text-base border-b border-white/5 last:border-0" onClick={() => setIsMobileMenuOpen(false)}>
                          <ChevronRight className="w-3 h-3 text-accent/60 shrink-0" aria-hidden="true" /> {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {[
                  { label: "FAQ", href: "/faq" },
                  { label: "Careers", href: "/careers" },
                  { label: "Blog", href: "/blog" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="hover:text-accent border-b border-white/10 py-4 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label} <ChevronRight className="w-4 h-4 text-accent" />
                  </Link>
                ))}
                <Link href="/contacts" className="hover:text-accent border-b border-white/10 py-4 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                  Contacts <ChevronRight className="w-4 h-4 text-accent" />
                </Link>

                {/* Request a Quote accordion */}
                <div>
                  <button
                    className="w-full hover:text-accent border-b border-white/10 py-4 flex items-center justify-between"
                    onClick={() => setMobileDropdown(mobileDropdown === "quote" ? null : "quote")}
                  >
                    Request a Quote <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-200 ${mobileDropdown === "quote" ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {mobileDropdown === "quote" && (
                    <div className="bg-white/5 border-b border-white/10">
                      {[
                        { label: "Request Ship Freight Quote", href: "/sea-freight" },
                        { label: "Request Air Freight Quote", href: "/air-freight" },
                        { label: "Track Your Shipment", href: "#contacts" },
                      ].map((item) => (
                        <a key={item.href} href={item.href} className="flex items-center gap-2 pl-6 pr-4 py-3 text-white/70 hover:text-accent text-base border-b border-white/5 last:border-0" onClick={() => setIsMobileMenuOpen(false)}>
                          <ChevronRight className="w-3 h-3 text-accent/60 shrink-0" aria-hidden="true" /> {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* 3. Hero Section */}
      <section id="hero" data-theme="dark" className="relative w-full min-h-[90vh] flex items-center py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          {/* Ken Burns: entry zoom-in, then slow continuous drift */}
          <m.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <m.div
              className="absolute inset-0"
              animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
              transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
            >
              <Image
                src="/hero.webp"
                alt="Container ship carrying freight at sea"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </m.div>
          </m.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="absolute inset-0 bg-industrial-grid opacity-20" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <m.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <m.div variants={slideInLeft} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-accent"></div>
              <span className="text-accent font-bold text-sm uppercase tracking-widest">Excellence Since 2000</span>
            </m.div>
            
            <m.h1 variants={slideInLeft} className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-white leading-tight mb-8 uppercase">
              Delivery <br/>
              through <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-accent)' }}>Oceanic</span> <br/>
              & <span className="text-accent">Troposphere</span>
            </m.h1>
            
            <m.p variants={slideInLeft} className="text-lg md:text-xl text-white/80 font-medium max-w-2xl leading-relaxed mb-10 border-l-4 border-accent pl-6">
              AEO certified customs broker and freight forwarder — delivering seamless ocean, air and road logistics for importers and exporters across India and worldwide since 2000.
            </m.p>
            
            <m.div variants={slideInLeft} className="flex flex-wrap gap-4">
              <Link href="/services">
                <Button className="bg-accent text-white hover:bg-white hover:text-primary font-heading font-semibold text-lg px-8 h-14 rounded-none transition-all duration-300">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contacts">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-heading font-semibold text-lg px-8 h-14 rounded-none transition-all duration-300">
                  Request a Quote
                </Button>
              </Link>
            </m.div>
          </m.div>
        </div>

        {/* Floating Stat */}
        <m.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-0 right-0 md:right-12 bg-white text-primary p-8 hidden md:block max-w-sm border-t-4 border-accent"
        >
          <div className="flex items-center gap-4 mb-2">
            <ShieldCheck className="w-8 h-8 text-accent" />
            <h3 className="font-heading font-semibold text-xl uppercase">AEO Certified</h3>
          </div>
          <p className="text-muted-foreground font-medium text-sm">
            India's First AEO Certified Customs Broker from Tuticorin (Govt. of India).
          </p>
        </m.div>
      </section>

      {/* 4. Service Quick-Links */}
      <section id="services" className="bg-accent py-12 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20">
            {[
              { icon: Truck, label: "Road Freight", desc: "Continental logistics", href: "/road-freight" },
              { icon: Plane, label: "Air Freight", desc: "Global reach", href: "/air-freight" },
              { icon: Ship, label: "Sea Freight", desc: "Oceanic transport", href: "/sea-freight" },
              { icon: Warehouse, label: "Warehousing", desc: "Secure storage", href: "/warehousing" }
            ].map((item, i) => (
              <m.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
                }}
                className="group flex flex-col items-center text-center"
              >
                <Link href={item.href} className="flex flex-col items-center text-center">
                  <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white group-hover:text-accent text-white transition-colors duration-300">
                    <item.icon className="w-8 h-8 stroke-[2]" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-1 uppercase tracking-wide group-hover:text-white/80 transition-colors">{item.label}</h3>
                  <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Section */}
      <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <m.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="w-full lg:w-1/2 relative z-10"
            >
              <m.div variants={slideInLeft} className="flex items-center gap-4 mb-6">
                <span className="text-accent font-bold text-sm uppercase tracking-widest">The Institution</span>
                <div className="h-[2px] w-12 bg-accent"></div>
              </m.div>
              
              <m.h2 variants={slideInLeft} className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-8 leading-[1.1] uppercase">
                Logistics Services & <br/>
                <span className="text-accent">Shipping Dynasty</span>
              </m.h2>
              
              <m.p variants={slideInLeft} className="text-muted-foreground text-lg font-medium leading-relaxed mb-8">
                Indian Shipping and Logistics Facility Pvt Ltd. — one of India's top logistics service providers, headquartered in Chennai with branch offices in Tuticorin, Bengaluru, Gujarat and an overseas branch at Ho Chi Minh City, Vietnam.
              </m.p>
              
              <m.div variants={slideInLeft} className="bg-secondary p-8 mb-10 border-l-4 border-accent">
                <div className="flex gap-6 items-start">
                  <FileText className="w-10 h-10 text-primary shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-2xl text-primary mb-2 uppercase">First AEO Certified Customs Broker</h4>
                    <p className="text-muted-foreground font-medium text-sm">— from Tuticorin (Govt. of India)</p>
                  </div>
                </div>
              </m.div>
              
              <m.div variants={slideInLeft} className="relative mt-12 pt-8 border-t border-border">
                <div className="absolute top-0 right-0 text-secondary font-serif text-9xl leading-none -mt-4 opacity-50 z-0">"</div>
                <p className="font-serif italic text-2xl text-primary font-medium leading-snug mb-6 relative z-10">
                  Our goal has always been to build a logistics partner that our clients can rely on unconditionally — one that treats every shipment as its own.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <div>
                    <p className="font-heading font-semibold text-xl text-primary uppercase tracking-wide">Shri. K. Jawahar</p>
                    <p className="text-accent font-bold text-xs uppercase tracking-widest">Director & CEO</p>
                  </div>
                </div>
              </m.div>
            </m.div>
            
            <m.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageReveal}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-primary p-2 pb-24">
                <Image src="/hero.webp" alt="ISLF port operations" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full bg-accent p-8 text-white flex justify-between items-end">
                  <div>
                    <p className="text-7xl font-heading font-semibold leading-none mb-1">25<span className="text-primary">+</span></p>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">Years of Authority</p>
                  </div>
                  <Briefcase className="w-16 h-16 text-primary opacity-50" />
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* 6. Special Services Section */}
      <section data-theme="dark" className="py-24 md:py-32 bg-primary text-white relative">
        <div className="absolute inset-0 bg-industrial-grid opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <m.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <m.div variants={slideUp} className="flex items-center gap-4 mb-6">
                <span className="text-accent font-bold text-sm uppercase tracking-widest">Expertise</span>
                <div className="h-[2px] w-12 bg-accent"></div>
              </m.div>
              <m.h2 variants={slideUp} className="text-5xl md:text-6xl font-heading font-semibold mb-6 uppercase">
                Special Services
              </m.h2>
              <m.p variants={slideUp} className="text-muted-foreground text-lg font-medium">
                Globally known for our ability to handle every last detail of our customers' particular logistics and forwarding needs.
              </m.p>
            </m.div>
            
            <m.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="hidden md:block pb-2"
            >
              <Button className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-heading font-semibold uppercase tracking-widest h-14 px-8 rounded-none group transition-all">
                View All Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </m.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customs Clearance",
                desc: "Complete Customs Clearance Services for consignments of import and export through air, ocean, or land.",
                img: serviceCustoms,
                href: "/customs-broking"
              },
              {
                title: "Consulting",
                desc: "Value added consultancy services for exim fraternity to make the customers as one stop solutions.",
                img: serviceConsulting,
                href: "/consulting"
              },
              {
                title: "Freight Forwarding",
                desc: "Comprehensive freight forwarding services such as air freight, ocean freight and multi modal transportation.",
                img: serviceFreight,
                href: "/freight-forwarding"
              }
            ].map((service, i) => (
              <m.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }
                }}
                className="group bg-secondary block relative overflow-hidden"
              >
                <Link href={service.href} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={service.img} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-500"></div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8 relative">
                    <div className="absolute left-0 top-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300"></div>
                    <h3 className="text-3xl font-heading font-semibold text-white mb-4 uppercase group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground font-medium mb-8 line-clamp-3">{service.desc}</p>
                    <div className="inline-flex items-center text-accent uppercase font-bold tracking-widest text-sm">
                      Discover More <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Stats Row */}
      <section className="py-20 bg-accent text-white relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
          >
            {[
              { num: "500+", label: "Projects Executed" },
              { num: "200+", label: "Global Clients" },
              { num: "15", label: "Fleet Vehicles" },
              { num: "50+", label: "Specialists" }
            ].map((stat, i) => (
              <m.div key={i} variants={slideUp} className="text-center">
                <div className="text-6xl md:text-7xl font-heading font-semibold mb-2 text-primary">{stat.num}</div>
                <div className="font-bold text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section id="why-us" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-[2px] w-12 bg-accent"></div>
            <span className="text-accent font-bold text-sm uppercase tracking-widest">Why Choose Us</span>
            <div className="h-[2px] w-12 bg-accent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 relative shadow-xl border-t-4 border-primary">
            <div className="absolute -top-6 -left-6 bg-accent w-12 h-12 flex items-center justify-center rounded-sm">
              <span className="font-serif text-5xl text-white leading-none pt-4">"</span>
            </div>
            
            <div className="min-h-[200px] flex items-center">
              <AnimatePresence mode="wait">
                <m.p
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-heading font-semibold text-primary leading-snug"
                >
                  {testimonialQuotes[activeTestimonial]}
                </m.p>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between items-end mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-heading font-semibold text-lg text-primary uppercase">Client Feedback</p>
                <div className="flex gap-1 mt-2">
                  {testimonialQuotes.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1 transition-all duration-300 ${idx === activeTestimonial ? "w-8 bg-accent" : "w-4 bg-border"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={prevTestimonial} aria-label="Previous testimonial" className="w-12 h-12 flex items-center justify-center bg-secondary hover:bg-primary hover:text-white text-primary transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextTestimonial} aria-label="Next testimonial" className="w-12 h-12 flex items-center justify-center bg-secondary hover:bg-primary hover:text-white text-primary transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Quote CTA */}
      <section id="quote" data-theme="dark" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Ship Freight Quote", icon: Ship },
              { title: "Air Freight Quote", icon: Plane }
            ].map((cta, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-secondary p-10 md:p-14 group hover:bg-accent transition-colors duration-500 cursor-pointer border-l-4 border-transparent hover:border-white"
              >
                <cta.icon className="w-16 h-16 text-accent group-hover:text-white mb-8 transition-colors stroke-[1.5]" />
                <h3 className="text-3xl font-heading font-semibold text-white uppercase mb-4">{cta.title}</h3>
                <div className="flex items-center text-muted-foreground group-hover:text-white font-bold tracking-widest text-sm uppercase transition-colors">
                  Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Get In Touch — Locations */}
      {(() => {
        const locations = [
          {
            city: "Bengaluru",
            country: "India",
            address: "Flat 101, Saroj Regency, Site 3, MS Reddy Nagar, Opposite to Maha Bazaar, Marathahalli, Bangalore 560037",
            phone: "+91 9538876950",
            email: "info@islf.in",
            mapSrc: "https://maps.google.com/maps?q=Marathahalli,+Bangalore+560037&t=&z=15&ie=UTF8&iwloc=&output=embed"
          },
          {
            city: "Chennai",
            country: "Head Office",
            address: "\"Sudharsanam Tower\" No.06 & 08, Old No 176, 3rd Floor, Coral Merchant Street, Mannady, Chennai – 600 001",
            phone: "+91-44-2525 1314",
            email: "info@islf.in",
            mapSrc: "https://maps.google.com/maps?q=Coral+Merchant+Street,+Mannady,+Chennai+600001&t=&z=16&ie=UTF8&iwloc=&output=embed"
          },
          {
            city: "Chennai",
            country: "Freight Forwarding",
            address: "Door No.2A, Old No.126, New No.257, Zafrullah Towers, 2nd Floor, Angappan Street, Parrys Corner, Chennai – 600 001",
            phone: "+91 44 4789 6568",
            email: "info@islf.in",
            mapSrc: "https://maps.google.com/maps?q=Angappan+Street,+Parrys+Corner,+Chennai+600001&t=&z=16&ie=UTF8&iwloc=&output=embed"
          },
          {
            city: "Tuticorin",
            country: "India",
            address: "No. 3/188/5A, MSP Towers, Palayamkottai Main Road, Periyanayagapuram, Opp. Collector Office, Tuticorin – 628 101, India",
            phone: "+91-0461-2340790 / 91 / 92 / 93 / 94 / 95",
            email: "info@islf.in",
            mapSrc: "https://maps.google.com/maps?q=Palayamkottai+Main+Road,+Tuticorin+628101,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
          },
          {
            city: "Vietnam",
            country: "Ho Chi Minh City",
            address: "L202-2nd floor, ARC REAL building, No.1, Nguyen Duy Street, Gia Dinh Ward, Ho Chi Minh City, Vietnam",
            phone: "+91 9538876950",
            email: "info@islf.in",
            mapSrc: "https://maps.google.com/maps?q=Ho+Chi+Minh+City,+Vietnam&t=&z=13&ie=UTF8&iwloc=&output=embed"
          },
          {
            city: "Gujarat",
            country: "India",
            address: '"Gold Coin" No.202, Second Floor, Plot No.321, Ward 12/B, Gandhidham, Kutch, Gujarat 370201',
            phone: "+91 9538876950",
            email: "info@islf.in",
            mapSrc: "https://maps.google.com/maps?q=Gandhidham,+Kutch,+Gujarat+370201&t=&z=13&ie=UTF8&iwloc=&output=embed"
          },
          {
            city: "Indonesia",
            country: "Jakarta",
            address: "The Mansion Bougenville, Tower Fontana Zona, BF 31A1, JI. Trembesi Blok D, Kemayoran, Kec. Pademangan, Jakarta Utara, DKI Jakarta - Indonesia 14410",
            phone: "+62 81188060213 / +91 9677794670",
            email: "info@islf.in",
            mapSrc: "https://maps.google.com/maps?q=Kemayoran,+Jakarta+Utara,+DKI+Jakarta+14410&t=&z=13&ie=UTF8&iwloc=&output=embed"
          }
        ];
        const active = openLocation ?? 0;
        const loc = locations[active];
        return (
          <section className="bg-[#F8F9FB]">
            {/* Header strip */}
            <div className="container mx-auto px-6 md:px-12 pt-16 pb-10">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={slideUp}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="block w-6 h-[2px] bg-accent" />
                  <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Worldwide Presence</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary uppercase">
                  Get In Touch With Us
                </h2>
              </m.div>
            </div>

            {/* Split panel */}
            <div className="flex flex-col lg:flex-row min-h-[520px]">
              {/* Left — location selector */}
              <div className="lg:w-[340px] shrink-0 bg-[#0A1628] flex flex-col">
                {locations.map((l, i) => (
                  <button
                    key={i}
                    onClick={() => setOpenLocation(i)}
                    className={`group relative flex items-center gap-4 px-8 py-6 text-left transition-all duration-200 border-l-4 ${
                      active === i
                        ? "border-accent bg-accent/10 text-white"
                        : "border-transparent text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {/* Number */}
                    <span className={`font-heading text-xs font-bold transition-colors ${active === i ? "text-accent" : "text-white/25 group-hover:text-white/50"}`}>
                      0{i + 1}
                    </span>
                    <div>
                      <p className={`font-heading font-semibold text-lg uppercase tracking-wide leading-none transition-colors ${active === i ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                        {l.city}
                      </p>
                      <p className={`text-xs mt-1 transition-colors ${active === i ? "text-accent" : "text-white/40 group-hover:text-white/60"}`}>
                        {l.country}
                      </p>
                    </div>
                    {active === i && (
                      <span className="ml-auto">
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Right — map + details */}
              <div className="flex-1 flex flex-col">
                {/* Map */}
                <div className="flex-1 relative min-h-[300px]">
                  <AnimatePresence mode="wait">
                    <m.div
                      key={active}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <iframe
                        title={`Map of ${loc.city}`}
                        src={loc.mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      />
                    </m.div>
                  </AnimatePresence>
                </div>

                {/* Contact details bar */}
                <div className="bg-white border-t border-border px-8 py-6">
                  <AnimatePresence mode="wait">
                    <m.div
                      key={active}
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
                        <a href={`tel:${loc.phone}`} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                          <Phone className="w-4 h-4 text-accent" />
                          {loc.phone}
                        </a>
                        <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                          <Mail className="w-4 h-4 text-accent" />
                          {loc.email}
                        </a>
                      </div>
                    </m.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* 11. Footer */}
      <footer id="contacts" className="bg-[#0A1628] text-white">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-accent" />

        {/* Main footer body */}
        <div className="container mx-auto px-6 md:px-12 pt-16 pb-12">
          {/* Top row: brand + tagline */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
            <div>
              <div className="bg-white inline-block p-2 rounded-sm mb-4">
                <Image src="/logo.jpg" alt="ISLF Logo" width={96} height={48} className="h-12 object-contain" style={{ width: 'auto' }} />
              </div>
              <p className="text-white/60 max-w-xs text-sm leading-relaxed">
                India's trusted freight partner — AEO certified, two decades of excellence across ocean, air, and road.
              </p>
            </div>
            <div className="flex gap-3">
              {([
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
              ] as const).map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Follow ISLF on ${label}`}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-b border-white/10">

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                <span className="block w-6 h-[2px] bg-accent" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/", isRoute: false },
                  { label: "Services", href: "/services", isRoute: true },
                  { label: "Consulting", href: "/consulting", isRoute: true },
                  { label: "FAQ", href: "/faq", isRoute: true },
                  { label: "Careers", href: "/careers", isRoute: true },
                  { label: "Contacts", href: "/contacts", isRoute: true },
                  { label: "Blog", href: "/blog", isRoute: true },
                ].map((link) => (
                  <li key={link.label}>
                    {link.isRoute
                      ? <Link href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                          <ChevronRight className="w-3 h-3 text-accent/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                          {link.label}
                        </Link>
                      : <a href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                          <ChevronRight className="w-3 h-3 text-accent/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                          {link.label}
                        </a>
                    }
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                <span className="block w-6 h-[2px] bg-accent" />
                Our Offices
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
                          <m.div
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
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                <span className="block w-6 h-[2px] bg-accent" />
                Newsletter
              </h4>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Subscribe to receive the latest logistics news and industry updates from ISLF.
              </p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newsletter-email-home" className="sr-only">Email address for newsletter</label>
                <input
                  id="newsletter-email-home"
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/5 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-accent w-full transition-colors"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-sm uppercase tracking-widest py-3 px-6 transition-all duration-200 w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
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
    </LazyMotion>
  );
}
