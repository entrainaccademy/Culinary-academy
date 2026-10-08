import { MapPin, MessageCircle, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { InnerPage, PageHero } from "@/components/inner-page";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { callLink, locationLink, phoneDisplay, siteUrl, whatsappNumber } from "@/lib/site";
import { breadcrumbSchema, organizationId } from "@/lib/schema";

export const metadata = {
  title: "Contact",
  description: "Call, WhatsApp or visit Entrain Culinary Academy in Manjeri, Kerala to ask about courses, workshops and admissions.",
  alternates: { canonical: "/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contact`,
  url: `${siteUrl}/contact`,
  name: "Contact Entrain Culinary Academy",
  description: metadata.description,
  about: { "@id": organizationId },
};

const contactMethods = [
  {
    icon: Phone,
    label: "Call us",
    value: phoneDisplay,
    note: "Talk to our team about courses and admissions.",
    href: callLink,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: phoneDisplay,
    note: "Message us anytime and we'll reply as soon as we can.",
    href: `https://wa.me/${whatsappNumber}`,
    external: true,
  },
  {
    icon: MapPin,
    label: "Visit the academy",
    value: "Veemboor - Mariyad School Rd, Manjeri, Kerala 676122",
    note: "Open in Google Maps",
    href: locationLink,
    external: true,
  },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/entrain_academy/?hl=en", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/p/Entrain-academy-61582002569465/", icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/@EntrainAcademy", icon: FaYoutube },
];

export default function ContactPage() {
  return (
    <InnerPage>
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <PageHero compact eyebrow="Contact us" title="Let's talk about your next step in the kitchen." copy="Ask about a course, plan a visit or get help choosing the right workshop. Call, WhatsApp or send an enquiry below." />

      <section className="pb-16 md:pb-20">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {contactMethods.map(({ icon: Icon, label, value, note, href, external }, index) => (
            <Reveal key={label} delay={index * 0.06} className="h-full">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex h-full flex-col rounded-xl border border-border-subtle bg-[#f2ece3] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_35px_rgba(15,31,48,.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-7"
              >
                <span className="grid size-11 place-items-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-6 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#86602a]">{label}</p>
                <p className="mt-2 text-base font-semibold leading-7 text-primary">{value}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{note}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border-subtle py-16 md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Send an enquiry</p>
            <h2 className="display-title mt-4 text-3xl md:text-4xl">Tell us what you'd like to learn.</h2>
            <p className="mb-8 mt-4 text-sm leading-7 text-muted">Fill in your details and we'll open WhatsApp with your message ready to send.</p>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col">
            <div className="relative min-h-80 flex-1 overflow-hidden rounded-xl border border-border-subtle bg-[#f2ece3] lg:min-h-0">
              <iframe
                title="Map showing Entrain Culinary Academy in Manjeri, Kerala"
                src="https://maps.google.com/maps?q=Entrain%20academy%2C%20Manjeri%2C%20Kerala&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">Follow the academy</p>
              <div className="flex gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Entrain Academy on ${label}`} title={label} className="grid size-11 place-items-center rounded-full border border-border-subtle text-primary transition hover:border-accent hover:text-accent">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </InnerPage>
  );
}
