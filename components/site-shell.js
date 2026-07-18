"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { CrestLogo } from "@/components/crest-logo";
import { cn } from "@/lib/utils";

const navItems = [
  ["Home", "/"],
  ["Our Story", "/about"],
  ["Courses", "/courses"],
  ["Gallery", "/#gallery"],
  ["Contact", "/#contact"],
];

export const callLink = "tel:+917593841013";
const locationLink = "https://www.google.com/maps/place/Entrain+academy/data=!4m2!3m1!1s0x0:0xa4b9b37a9b1fe363?sa=X&ved=1t:2428&ictx=111";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-background/95 shadow-[0_8px_32px_rgba(15,31,48,0.08)] backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="container-shell flex h-[78px] items-center justify-between" aria-label="Main navigation">
        <Link href="/" onClick={() => setOpen(false)}><CrestLogo /></Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={label} href={href} className="text-[0.78rem] font-bold text-primary/75 transition-colors hover:text-accent">{label}</Link>
          ))}
          <Link href={callLink} className={buttonVariants()}><Phone className="size-4" /> Call Us</Link>
        </div>
        <button className="grid size-11 place-items-center text-primary lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden border-t border-border-subtle/60 bg-background lg:hidden">
            <div className="container-shell flex flex-col py-5">
              {navItems.map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-border-subtle/50 text-sm font-bold text-primary">{label}</Link>
              ))}
              <Link href={callLink} className={cn(buttonVariants(), "mt-5 w-full")}><Phone className="size-4" /> Call Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-dark-section text-background">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.1fr_.8fr_.8fr] md:py-20">
        <div><CrestLogo light /><p className="mt-6 max-w-sm text-sm leading-7 text-background/60">Practical culinary education, grounded in real industry experience and built for meaningful careers and resilient food businesses.</p></div>
        <div>
          <p className="eyebrow">Visit the academy</p>
          <a href={locationLink} target="_blank" rel="noreferrer" className="group mt-5 flex gap-3 text-sm leading-7 text-background/70 transition-colors hover:text-background">
            <MapPin className="mt-1 size-4 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5" />
            <span>Veemboor - Mariyad School Rd,<br />Manjeri, Kerala 676122<br /><span className="mt-2 inline-block text-[0.63rem] font-bold uppercase tracking-[0.12em] text-accent">Open in Google Maps</span></span>
          </a>
        </div>
        <div>
          <p className="eyebrow">Start a conversation</p>
          <Link href={callLink} className={cn(buttonVariants({ variant: "default" }), "mt-5")}><Phone className="size-4" /> Call Us</Link>
          <p className="mt-7 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-background/45">Follow the academy</p>
          <div className="mt-3 flex gap-3">
            <a href="https://www.instagram.com/entrain_academy/?hl=en" target="_blank" rel="noreferrer" aria-label="Entrain Academy on Instagram" title="Instagram" className="grid size-10 place-items-center text-background/70 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-accent"><FaInstagram className="size-[1.1rem]" /></a>
            <a href="https://www.facebook.com/p/Entrain-academy-61582002569465/" target="_blank" rel="noreferrer" aria-label="Entrain Academy on Facebook" title="Facebook" className="grid size-10 place-items-center text-background/70 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-accent"><FaFacebookF className="size-4" /></a>
            <span aria-label="Entrain Academy on YouTube" title="YouTube" className="grid size-10 place-items-center text-background/70"><FaYoutube className="size-[1.15rem]" /></span>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10"><div className="container-shell py-5 text-xs text-background/40"><p>© {new Date().getFullYear()} Entrain Academy. All rights reserved.</p></div></div>
      <div className="container-shell relative h-[5.4rem] overflow-hidden sm:h-[8rem] md:h-[10.5rem] lg:h-[13rem]" aria-hidden="true">
        <motion.p
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-0 bg-[linear-gradient(180deg,rgba(250,247,242,.18),rgba(250,247,242,.035))] bg-clip-text whitespace-nowrap text-center font-serif text-[clamp(3rem,17vw,15.5rem)] font-bold leading-[0.85] tracking-[-0.075em] text-transparent sm:leading-[0.72]"
        >
          ENTRAIN
        </motion.p>
      </div>
    </footer>
  );
}

export function SiteShell({ children }) {
  return <><Navbar />{children}<Footer /></>;
}
