import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContactCta, InnerPage } from "@/components/inner-page";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-posts";
import { siteUrl } from "@/lib/site";
import { absoluteUrl, breadcrumbSchema, organizationId } from "@/lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": postUrl,
    mainEntityOfPage: postUrl,
    url: postUrl,
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    articleSection: post.category,
    inLanguage: "en-IN",
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    isPartOf: { "@id": `${siteUrl}/blog` },
  };

  return (
    <InnerPage>
      <JsonLd data={postSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <article>
        <header className="fine-grid pt-28 pb-12 md:pt-32 md:pb-16">
          <Reveal className="container-shell">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-muted transition hover:text-accent"><ArrowLeft className="size-4" /> All articles</Link>
            <p className="eyebrow mt-10">{post.category}</p>
            <h1 className="display-title mt-5 max-w-4xl text-4xl sm:text-5xl md:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">{post.excerpt}</p>
          </Reveal>
        </header>
        <div className="container-shell pb-20 md:pb-28">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 1216px) 100vw, 1216px" priority className="object-cover" />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-10 md:mt-16">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-3xl font-bold text-primary">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-muted">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
            {post.courseHref && (
              <Link href={post.courseHref} className="inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-bold text-primary transition hover:text-accent">Explore related training <ArrowRight className="size-4" /></Link>
            )}
          </div>
        </div>
      </article>
      <ContactCta title="Ready to learn in the kitchen?" />
    </InnerPage>
  );
}
