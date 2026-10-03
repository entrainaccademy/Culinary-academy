import Image from "next/image";
import { Building2, Globe2, Lightbulb, Users } from "lucide-react";
import { ContactCta, InnerPage, PageHero } from "@/components/inner-page";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { siteUrl } from "@/lib/site";
import { breadcrumbSchema, organizationId } from "@/lib/schema";

export const metadata = {
  title: "Our Story",
  description: "The real industry journey behind Entrain Culinary Academy and its practical approach to culinary education.",
  alternates: { canonical: "/about" },
};

const audiences = [
  "Existing food business owners",
  "Individuals planning to start a food business",
  "Restaurant and hospitality professionals",
  "Customers seeking hospitality job opportunities",
  "Candidates preparing for overseas employment",
  "Agency-referred groups seeking customized culinary training",
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about`,
  url: `${siteUrl}/about`,
  name: "Our Story",
  description: metadata.description,
  about: { "@id": organizationId },
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/about#founder`,
    name: "Noufal K Keedath",
    jobTitle: "Founder",
    image: `${siteUrl}/images/noufal-founder.jpeg`,
    worksFor: { "@id": organizationId },
    founder: { "@id": organizationId },
  },
};

export default function AboutPage() {
  return (
    <InnerPage>
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Our Story", path: "/about" }])} />
      <PageHero compact eyebrow="The story behind Entrain" title="Experience became the lesson. Resilience became the academy." copy="A culinary training institute built from the realities of food production, hospitality, customer service and business ownership." />

      <section className="pb-20 pt-0 md:pb-28 md:pt-0">
        <div className="container-shell grid items-start gap-8 md:gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
          <Reveal from="left" className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] lg:aspect-[10/9]">
              <Image src="/images/noufal-founder.jpeg" alt="Noufal K Keedath, founder of Entrain Culinary Academy" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-section/45 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-background"><p className="eyebrow">Founder</p><p className="mt-2 font-serif text-2xl">Noufal K Keedath</p><p className="mt-1 text-xs text-background/65">Bakery: 2014 · Cobolt Machinery: 2020 · Entrain Academy: 2025</p></div>
            </div>
          </Reveal>
          <Reveal from="right">
            <p className="eyebrow">A grounded beginning</p><h2 className="display-title mt-4 text-3xl md:text-5xl">Not theory alone. Knowledge earned in the real world.</h2>
            <div className="mt-8 space-y-5 text-sm leading-8 text-muted md:text-base">
              <p>Entrain Culinary Academy, part of Entrain EduHub, trains people who actually want to run a food business — not just cook in one.</p>
              <p>It started in 2014. Noufal K Keedath left his degree unfinished to take over the family bakery, because someone had to. The years after that were spent behind the counter, on the production floor, arguing with suppliers, and figuring out payroll — the parts of running a food business nobody teaches in a classroom.</p>
              <p>Then came the floods. Then COVID. The bakery took hit after hit and kept going — and the ups and downs taught him more about keeping a business alive than any classroom could.</p>
              <p>He didn't stop there. In 2020, he started Cobolt Machinery out of a small space, supplying commercial kitchen equipment to food businesses around him. Learning the inside of every machine a working kitchen runs on — not from a manual, but from installing and fixing them on the job — grew that small setup into a full-scale facility.</p>
              <p>By 2025, all of it — the bakery, the machinery business, everything learned along the way — had turned into something worth teaching. Entrain Culinary Academy exists so the next person doesn't have to learn these lessons the hard way.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-dark-section py-20 text-background md:py-24">
        <div className="container-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[[Building2, "One focused center", "A specialized learning environment in Manjeri, Kerala."], [Users, "Expert-led", "Chefs with 20–25 years of industry experience."], [Lightbulb, "Chef Professor", "Commercial knowledge paired with proven teaching experience."], [Globe2, "Worldwide reach", "Customers from India, South Africa and beyond."]].map(([Icon, title, copy], index) => (
            <Reveal key={title} delay={index * 0.05}><Icon className="size-6 text-accent" strokeWidth={1.5} /><h3 className="mt-5 font-serif text-xl">{title}</h3><p className="mt-3 text-sm leading-7 text-background/55">{copy}</p></Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal><p className="eyebrow">Who we serve</p><h2 className="display-title mt-4 text-3xl md:text-5xl">Different ambitions. One practical foundation.</h2><p className="mt-6 text-sm leading-7 text-muted">Every program is designed around relevant skills, updated equipment and a multilingual learning environment.</p></Reveal>
          <Reveal delay={0.08}><div className="grid gap-px overflow-hidden border border-border-subtle bg-border-subtle sm:grid-cols-2">{audiences.map((item, index) => <div key={item} className="flex gap-4 bg-background p-5"><span className="font-serif text-xl text-accent">0{index + 1}</span><p className="text-sm font-semibold leading-6 text-primary">{item}</p></div>)}</div></Reveal>
        </div>
      </section>

      <section className="bg-[#f2ece3] py-16 md:py-20"><Reveal className="container-shell text-center"><p className="eyebrow">Our guiding message</p><blockquote className="mx-auto mt-5 max-w-4xl font-serif text-3xl leading-tight text-primary md:text-5xl">“Learn from real experience. Develop practical culinary skills. Make informed business decisions.”</blockquote></Reveal></section>
      <ContactCta />
    </InnerPage>
  );
}
