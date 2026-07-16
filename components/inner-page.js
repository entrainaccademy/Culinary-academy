import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { callLink, SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="fine-grid relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="absolute -right-20 top-20 size-72 rounded-full bg-accent/10 blur-3xl" />
      <Reveal className="container-shell relative">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-xs font-bold text-muted transition hover:text-accent"><ArrowLeft className="size-4" /> Back to home</Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title mt-5 max-w-4xl text-4xl sm:text-5xl md:text-6xl">{title}</h1>
        {copy && <p className="mt-6 max-w-2xl text-sm leading-7 text-muted md:text-lg md:leading-8">{copy}</p>}
      </Reveal>
    </section>
  );
}

export function ContactCta({ title = "Build your next chapter with practical skill." }) {
  return (
    <section className="py-20 md:py-24">
      <Reveal className="container-shell">
        <div className="border border-border-subtle bg-[#f2ece3] px-6 py-12 text-center sm:px-10 md:py-16"><p className="eyebrow">Speak with our team</p><h2 className="display-title mx-auto mt-4 max-w-2xl text-3xl md:text-5xl">{title}</h2><Link href={callLink} className={cn(buttonVariants({ size: "lg" }), "mt-8")}><Phone className="size-4" /> Call Us</Link></div>
      </Reveal>
    </section>
  );
}

export function InnerPage({ children }) {
  return <SiteShell><main>{children}</main></SiteShell>;
}
