import Image from "next/image";
import { Building2, Globe2, Lightbulb, Users } from "lucide-react";
import { ContactCta, InnerPage, PageHero } from "@/components/inner-page";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Our Story",
  description: "The real industry journey behind Entrain Culinary Academy and its practical approach to culinary education.",
};

const audiences = [
  "Existing food business owners",
  "Individuals planning to start a food business",
  "Restaurant and hospitality professionals",
  "Customers seeking hospitality job opportunities",
  "Candidates preparing for overseas employment",
  "Agency-referred groups seeking customized culinary training",
];

export default function AboutPage() {
  return (
    <InnerPage>
      <PageHero eyebrow="The story behind Entrain" title="Experience became the lesson. Resilience became the academy." copy="A culinary training institute built from the realities of food production, hospitality, customer service and business ownership." />

      <section className="py-20 md:py-28">
        <div className="container-shell grid items-start gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[10px]">
              {/* TEMP IMAGE - replace with client photo */}
              <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1400&q=88" alt="Experienced chef in a professional kitchen" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-section/45 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-background"><p className="eyebrow">Founder</p><p className="mt-2 font-serif text-2xl">Noufal K Keedath</p><p className="mt-1 text-xs text-background/65">Industry journey: 2014 · Entrain Academy: 2025</p></div>
            </div>
          </Reveal>
          <div>
            <Reveal><p className="eyebrow">A grounded beginning</p><h2 className="display-title mt-4 text-3xl md:text-5xl">Not theory alone. Knowledge earned in the real world.</h2></Reveal>
            <Reveal delay={0.05} className="mt-8 space-y-5 text-sm leading-8 text-muted md:text-base">
              <p>Entrain Culinary Academy is a specialized culinary training institute under Entrain EduHub, focused on practical, commercial food industry training for aspiring entrepreneurs, culinary professionals and people seeking careers in hospitality.</p>
              <p>The journey began in 2014, when founder Noufal K Keedath stepped away from degree studies to support his family bakery. The years that followed brought deep experience in food production, bakery operations, customer service, business management and the day-to-day challenges of running a food venture.</p>
              <p>The bakery later faced severe pressure from floods, the COVID-19 pandemic and financial difficulties, eventually leading to its closure. Those setbacks also revealed lasting lessons about business operations, resilience and long-term sustainability.</p>
              <p>Those lessons became the foundation for Entrain Culinary Academy, established in 2025 — a place where customers can gain practical industry knowledge, real-world business insight and hands-on culinary training before making important career or investment decisions.</p>
            </Reveal>
          </div>
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

      <section className="bg-[#f2ece3] py-20 md:py-24"><Reveal className="container-shell text-center"><p className="eyebrow">Our guiding message</p><blockquote className="mx-auto mt-5 max-w-4xl font-serif text-3xl leading-tight text-primary md:text-5xl">“Learn from real experience. Develop practical culinary skills. Make informed business decisions.”</blockquote><p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted">Build opportunities in the food and hospitality industry — trusted by customers across India and around the world.</p></Reveal></section>
      <ContactCta />
    </InnerPage>
  );
}
