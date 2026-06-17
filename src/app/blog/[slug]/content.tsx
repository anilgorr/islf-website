"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Tag, CheckCircle2, Phone, Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { getPostBySlug, getRelatedPosts, allPosts } from "@/data/blogPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const categoryColors: Record<string, string> = {
  Logistics: "bg-blue-100 text-blue-700",
  GST: "bg-purple-100 text-purple-700",
  CHA: "bg-orange-100 text-orange-700",
  "Freight Forwarding": "bg-emerald-100 text-emerald-700",
  DGFT: "bg-blue-100 text-blue-700",
  CFS: "bg-teal-100 text-teal-700",
  Warehouse: "bg-amber-100 text-amber-700",
  EXIM: "bg-rose-100 text-rose-700",
  Shipping: "bg-sky-100 text-sky-700",
  "IEC Code": "bg-violet-100 text-violet-700",
  "IT Consulting": "bg-indigo-100 text-indigo-700",
};

export default function BlogPostContent({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <PageLayout>
        <section className="py-32 text-center">
          <h1 className="font-heading font-semibold text-4xl text-primary uppercase mb-4">Article Not Found</h1>
          <p className="text-gray-500 mb-8">This article doesn't exist or has been moved.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </section>
      </PageLayout>
    );
  }

  const related = getRelatedPosts(post);

  // Find prev/next in array
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? allPosts[idx - 1] : null;
  const next = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;

  return (
    <PageLayout>
      <SEOHead
        title={`${post.title} | ISLF Blog`}
        description={post.excerpt}
        canonical={`https://islf.in/blog/${post.slug}/`}
        keywords={post.keywords.join(", ")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "url": `https://islf.in/blog/${post.slug}/`,
          "datePublished": post.date,
          "articleSection": post.category,
          "publisher": { "@id": "https://islf.in/#organization" },
          "author": {
            "@type": "Organization",
            "name": "ISLF — Indian Shipping and Logistics Facility Pvt Ltd",
            "url": "https://islf.in",
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://islf.in/blog/${post.slug}/`,
          },
        }}
      />

      {/* Hero */}
      <section className="bg-primary text-white pt-20 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-grid opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-accent text-xs font-bold uppercase tracking-widest mb-8 transition-colors group">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> Back to Blog
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-5 ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
              {post.category}
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl uppercase leading-tight mb-6 max-w-4xl">
              {post.title}
            </motion.h1>
            <motion.div variants={fadeUp} className="flex items-center gap-6 text-white/50 text-sm">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime} read</span>
              <span>{post.date}</span>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* Article body */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <motion.article
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:col-span-2"
            >
              {/* Lead */}
              <motion.p variants={fadeUp} className="text-lg text-gray-700 leading-relaxed border-l-4 border-accent pl-5 mb-10">
                {post.excerpt}
              </motion.p>

              {/* Full article content */}
              {post.content.map((section, i) => (
                <motion.div key={i} variants={fadeUp} className="mb-10">
                  <h2 className="font-heading font-semibold text-primary uppercase text-xl md:text-2xl mb-5 leading-tight">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((para, j) => (
                      <p key={j} className="text-gray-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Key topics */}
              <motion.div variants={fadeUp} className="mb-10 bg-gray-50 border border-gray-100 p-8">
                <h2 className="font-heading font-semibold text-primary uppercase text-xl mb-5">
                  Key Topics Covered
                </h2>
                <ul className="space-y-3">
                  {post.keywords.map((kw, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{kw}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Why ISLF */}
              <motion.div variants={fadeUp} className="bg-primary text-white p-8 mb-10">
                <h2 className="font-heading font-semibold uppercase text-xl mb-4">Why Choose ISLF?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "25+ Years Experience", desc: "Deep industry knowledge across all EXIM verticals" },
                    { title: "AEO Certified", desc: "India's first AEO certified customs broker from Tuticorin" },
                    { title: "6 Offices Across India", desc: "Chennai, Tuticorin, Bengaluru, Gujarat and more" },
                    { title: "1,000+ Clients Served", desc: "Trusted by importers, exporters and manufacturers" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <div>
                        <p className="font-bold text-sm">{item.title}</p>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Prev / Next navigation */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                {prev && (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="flex-1 border border-gray-100 hover:border-accent/40 p-5 group transition-colors"
                  >
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                      <ArrowLeft className="w-3 h-3" /> Previous
                    </p>
                    <p className="font-heading font-semibold text-primary uppercase text-sm leading-snug group-hover:text-accent transition-colors">
                      {prev.title}
                    </p>
                  </Link>
                )}
                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="flex-1 border border-gray-100 hover:border-accent/40 p-5 group transition-colors text-right"
                  >
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1 justify-end">
                      Next <ArrowRight className="w-3 h-3" />
                    </p>
                    <p className="font-heading font-semibold text-primary uppercase text-sm leading-snug group-hover:text-accent transition-colors">
                      {next.title}
                    </p>
                  </Link>
                )}
              </motion.div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* CTA card */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-primary text-white p-6 sticky top-24"
              >
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">Get Expert Help</p>
                <h3 className="font-heading font-semibold text-xl uppercase mb-3 leading-tight">
                  Need {post.category} Assistance?
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  ISLF's experts are ready to help with all your {post.category.toLowerCase()} requirements across India.
                </p>
                <a href="/#contacts" className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest px-5 py-3 mb-3 transition-colors w-full">
                  Request a Consultation <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <a href="tel:+919538876950" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                    <Phone className="w-3.5 h-3.5" /> +91 95388 76950
                  </a>
                  <a href="mailto:info@islf.in" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                    <Mail className="w-3.5 h-3.5" /> info@islf.in
                  </a>
                </div>
              </motion.div>

              {/* Related posts */}
              {related.length > 0 && (
                <motion.div initial="hidden" animate="visible" variants={stagger}>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Related Articles</p>
                  <div className="space-y-3">
                    {related.map((rp) => (
                      <motion.div key={rp.slug} variants={fadeUp}>
                        <Link
                          href={`/blog/${rp.slug}`}
                          className="block border border-gray-100 hover:border-accent/40 p-4 group transition-colors"
                        >
                          <span className={`inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2 ${categoryColors[rp.category] || "bg-gray-100 text-gray-600"}`}>
                            {rp.category}
                          </span>
                          <p className="font-heading font-semibold text-primary uppercase text-xs leading-snug group-hover:text-accent transition-colors">
                            {rp.title}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">{rp.date} · {rp.readTime} read</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Category tag */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-2 text-xs text-gray-400">
                <Tag className="w-3.5 h-3.5" />
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Browse all {post.category} articles →
                </Link>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-3xl md:text-4xl uppercase mb-4">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-lg mx-auto mb-8">
              Contact ISLF's experts for personalised guidance on {post.title.split("|")[0].trim()}.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contacts" className="bg-accent hover:bg-accent/90 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors">
                Contact ISLF Today
              </a>
              <Link href="/blog" className="border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors">
                Read More Articles
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
