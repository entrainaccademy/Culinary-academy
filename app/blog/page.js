import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InnerPage, PageHero } from "@/components/inner-page";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { blogPosts } from "@/lib/blog-posts";
import { siteUrl } from "@/lib/site";
import { absoluteUrl, breadcrumbSchema, organizationId } from "@/lib/schema";

export const metadata = {
  title: "Blog",
  description: "Culinary ideas, practical kitchen skills, and food business insights from Entrain Culinary Academy.",
  alternates: { canonical: "/blog" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteUrl}/blog`,
  url: `${siteUrl}/blog`,
  name: "The Entrain Journal",
  description: metadata.description,
  publisher: { "@id": organizationId },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    url: `${siteUrl}/blog/${post.slug}`,
  })),
};

export default function BlogPage() {
  return (
    <InnerPage>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", path: "/blog" }])} />
      <PageHero
        compact
        eyebrow="The Entrain journal"
        title="Ideas for the kitchen and the journey ahead."
        copy="Explore practical culinary skills, training insights and food business ideas."
      />
      <section className="pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="container-shell">
          {blogPosts.length === 0 ? (
            <Reveal className="border border-border-subtle bg-[#f2ece3] px-6 py-16 text-center sm:px-12">
              <p className="eyebrow">Coming soon</p>
              <h2 className="display-title mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl">Stories and insights are on their way.</h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">Check back for articles about culinary training, kitchen techniques and building a food business.</p>
            </Reveal>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {blogPosts.map((post) => (
                <Reveal key={post.slug} className="h-full">
                  <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-[#f2ece3] transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_35px_rgba(15,31,48,.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <p className="eyebrow">{post.category}</p>
                      <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-primary transition-colors group-hover:text-accent sm:text-3xl">{post.title}</h2>
                      <p className="mt-4 text-sm leading-7 text-muted">{post.excerpt}</p>
                      <span className="mt-auto flex items-center gap-2 pt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-accent">Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </InnerPage>
  );
}
