import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContactCta, InnerPage } from "@/components/inner-page";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { RichText } from "@/components/rich-text";
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
    title: post.seoTitle ? { absolute: post.seoTitle } : post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [post.pageImage ?? post.image],
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
    image: absoluteUrl(post.pageImage ?? post.image),
    ...(post.category && { articleSection: post.category }),
    ...(post.datePublished && { datePublished: post.datePublished, dateModified: post.datePublished }),
    inLanguage: "en-IN",
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    isPartOf: { "@id": `${siteUrl}/blog` },
  };

  const faqSchema = post.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <InnerPage>
      <JsonLd data={postSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
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
            {post.category && <p className="eyebrow mt-10 text-center">{post.category}</p>}
            <h1 className={`display-title mx-auto max-w-4xl text-center text-4xl sm:text-5xl md:text-6xl ${post.category ? "mt-5" : "mt-10"}`}>{post.title.split(/(?<=:)\s+/).map((line) => <span key={line} className="block">{line}</span>)}</h1>
            <p className="mt-6 text-center text-base leading-8 text-muted">{(post.intro ?? post.excerpt).split(/(?<=\.)\s+/).map((sentence) => <span key={sentence} className="block">{sentence}</span>)}</p>
          </Reveal>
        </header>
        <div className="container-shell pb-20 md:pb-28">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image src={post.pageImage ?? post.image} alt={post.imageAlt} fill sizes="(max-width: 1216px) 100vw, 1216px" priority className="object-cover" />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-10 md:mt-16">
            {post.content && <ArticleBlocks blocks={post.content} />}
            {post.sections?.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-3xl font-bold text-primary">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-muted">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
            {post.faqs && (
              <section>
                <h2 className="font-serif text-3xl font-bold text-primary">Frequently Asked Questions</h2>
                <div className="mt-6 divide-y divide-border-subtle border-y border-border-subtle">
                  {post.faqs.map(([question, answer]) => (
                    <div key={question} className="py-6">
                      <h3 className="font-serif text-xl font-bold text-primary">{question}</h3>
                      <p className="mt-3 text-base leading-8 text-muted">{answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
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

const listClass = "list-disc space-y-3 pl-6 text-base leading-8 text-muted marker:text-accent";

function ArticleBlocks({ blocks }) {
  return (
    <div className="space-y-5 text-base leading-8 text-muted">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return <h2 key={index} className="pt-6 font-serif text-3xl font-bold text-primary">{block.text}</h2>;
          case "h3":
            return <h3 key={index} className="pt-3 font-serif text-2xl font-bold text-primary">{block.text}</h3>;
          case "h4":
            return <h4 key={index} className="pt-2 text-sm font-extrabold uppercase tracking-[0.12em] text-accent">{block.text}</h4>;
          case "list":
            return (
              <ul key={index} className={listClass}>
                {block.items.map((item) => <li key={item}><RichText text={item} /></li>)}
              </ul>
            );
          case "table":
            return (
              <div key={index} className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[40rem] border-collapse overflow-hidden rounded-lg border border-border-subtle bg-[#f2ece3] text-left text-sm leading-6">
                  <thead>
                    <tr className="bg-primary text-white">
                      {block.headers.map((header) => <th key={header} scope="col" className="px-4 py-3 font-bold">{header}</th>)}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    {block.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, cellIndex) => cellIndex === 0
                          ? <th key={cell} scope="row" className="px-4 py-3 align-top font-bold text-primary">{cell}</th>
                          : <td key={cell} className="px-4 py-3 align-top">{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "note":
            return <p key={index} className="border-l-4 border-accent bg-[#f2ece3] px-5 py-4 text-sm leading-7"><RichText text={block.text} /></p>;
          default:
            return <p key={index}><RichText text={block.text} /></p>;
        }
      })}
    </div>
  );
}
