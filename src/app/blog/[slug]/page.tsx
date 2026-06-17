import type { Metadata } from "next";
import { allPosts, getPostBySlug } from "@/data/blogPosts";
import BlogPostContent from "./content";

type Params = { slug: string };

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Article Not Found | ISLF Blog" };
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://islf.in/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://islf.in/blog/${post.slug}/`,
    author: { "@id": "https://islf.in/#organization" },
    publisher: { "@id": "https://islf.in/#organization" },
    articleSection: post.category,
    keywords: post.keywords,
  };
  return {
    title: `${post.title} | ISLF Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    alternates: { canonical: `https://islf.in/blog/${post.slug}/` },
    openGraph: {
      title: `${post.title} | ISLF Blog`,
      description: post.excerpt,
      url: `https://islf.in/blog/${post.slug}/`,
      type: "article",
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd),
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `https://islf.in/blog/${post.slug}/#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        url: `https://islf.in/blog/${post.slug}/`,
        author: { "@id": "https://islf.in/#organization" },
        publisher: { "@id": "https://islf.in/#organization" },
        articleSection: post.category,
        keywords: post.keywords,
      }
    : null;
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPostContent slug={slug} />
    </>
  );
}
