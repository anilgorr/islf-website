"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { allPosts } from "@/data/blogPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

const CATEGORIES = [
  "All",
  "Logistics",
  "Freight Forwarding",
  "DGFT",
  "GST",
  "Customs Broker",
  "CFS",
  "EXIM",
  "Shipping",
  "Warehouse",
  "IEC Code",
  "IT Consulting",
];

const categoryColors: Record<string, string> = {
  Logistics: "bg-blue-100 text-blue-700",
  GST: "bg-purple-100 text-purple-700",
  "Customs Broker": "bg-orange-100 text-orange-700",
  "Freight Forwarding": "bg-emerald-100 text-emerald-700",
  DGFT: "bg-blue-100 text-blue-700",
  CFS: "bg-teal-100 text-teal-700",
  Warehouse: "bg-amber-100 text-amber-700",
  EXIM: "bg-rose-100 text-rose-700",
  Shipping: "bg-sky-100 text-sky-700",
  "IEC Code": "bg-violet-100 text-violet-700",
  "IT Consulting": "bg-indigo-100 text-indigo-700",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = allPosts[0];
  const gridPosts = allPosts.slice(1);
  const filtered =
    activeCategory === "All"
      ? gridPosts
      : gridPosts.filter((p) => p.category === activeCategory);

  return (
    <PageLayout>
      <SEOHead
        title="ISLF Blog — Logistics Insights, Trade Policy & Customs Updates | India"
        description="Expert trade and logistics insights from ISLF — RoDTEP scheme, DGFT policy, GST for exporters, customs broker guides, AEO certification, SEZ/EOU compliance, freight forwarding tips and more."
        canonical="https://islf.in/blog"
        keywords="logistics blog India, customs broker blog, DGFT updates India, RoDTEP blog, GST exporter India, trade policy India, freight forwarding tips, AEO certification blog, SEZ EOU updates India, EXIM trade news India"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "url": "https://islf.in/blog",
          "name": "ISLF Blog — Logistics, Trade & Customs Insights",
          "description": "Trade policy, logistics guides and expert insights from India's customs and freight professionals at ISLF.",
          "publisher": { "@id": "https://islf.in/#organization" },
          "inLanguage": "en-IN",
          "blogPost": allPosts.map((p) => ({
            "@type": "BlogPosting",
            "headline": p.title,
            "url": `https://islf.in/blog/${p.slug}/`,
            "datePublished": p.date,
            "articleSection": p.category,
            "publisher": { "@id": "https://islf.in/#organization" },
          })),
        }}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-accent" /> Insights & Updates
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-5xl md:text-7xl uppercase leading-none mb-6">
              ISLF <span className="text-accent">Blog</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl leading-relaxed">
              {allPosts.length} articles on trade policy, customs regulations, freight forwarding and logistics compliance from ISLF's EXIM experts.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all duration-200 shrink-0 ${
                  cat === activeCategory
                    ? "border-accent text-accent"
                    : "border-transparent text-gray-500 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Featured Article</p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="block border-2 border-primary p-8 md:p-12 relative overflow-hidden group hover:border-accent transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-5 ${categoryColors[featured.category] || "bg-gray-100 text-gray-600"}`}>
                {featured.category}
              </span>
              <h2 className="font-heading font-semibold text-primary text-2xl md:text-3xl uppercase mb-4 group-hover:text-accent transition-colors max-w-3xl">
                {featured.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-6 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime} read</span>
                  <span>{featured.date}</span>
                </div>
                <span className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {activeCategory === "All" ? `All Articles (${gridPosts.length})` : `${activeCategory} (${filtered.length})`}
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((post) => (
                <motion.div key={post.slug} variants={fadeUp}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-200 group flex flex-col h-full block"
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 w-fit ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                        {post.category}
                      </span>
                      <h3 className="font-heading font-semibold text-primary uppercase text-sm leading-snug mb-3 group-hover:text-accent transition-colors flex-1">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
                          <span>{post.date}</span>
                        </div>
                        <span className="text-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-sm">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gray-50 border-y border-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "42", label: "Expert Articles" },
              { num: "11", label: "Topic Categories" },
              { num: "2015", label: "Publishing Since" },
              { num: "100%", label: "Free to Read" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading font-semibold text-3xl text-accent mb-1">{s.num}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-4xl md:text-5xl uppercase mb-4">
              Stay Informed
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-lg mx-auto mb-10">
              Subscribe to receive the latest trade policy updates, customs notifications and logistics insights from ISLF.
            </motion.p>
            <motion.form variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition-colors shrink-0">
                Subscribe
              </button>
            </motion.form>
            <motion.p variants={fadeUp} className="text-white/40 text-xs mt-4">
              No spam. Unsubscribe any time.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
