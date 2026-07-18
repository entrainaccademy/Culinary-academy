"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChefHat,
  ChevronDown,
  Globe2,
  Languages,
  MapPin,
  Phone,
  Play,
  Quote,
  TrendingUp,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { callLink, SiteShell } from "@/components/site-shell";
import { Reveal, rise, stagger } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { IndiaReachGlobe } from "@/components/ui/india-reach-globe";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "Dessert Workshop",
    type: "One-day workshop",
    detail: "Jars, tiramisu & Middle Eastern fusion",
    image: "/images/dessert.png",
  },
  {
    title: "Fried Chicken Masterclass",
    type: "One-day masterclass",
    detail: "Coating, frying, sauces & business insight",
    image: "https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Master 1-Week Course",
    type: "Intensive program",
    detail: "Eight commercial fast-food essentials",
    image: "/images/cooking.jpg",
  },
  {
    title: "Shawarma & Shawai Course",
    type: "5-day hands-on program",
    detail: "Four shawarmas, three shawai styles",
    image: "/images/shawarmastand.jpg",
  },
];

const gallery = [
  { src: "/images/page_10.png", alt: "Entrain Academy workshop participants and mentors", className: "col-span-2 row-span-2 md:col-span-2" },
  { src: "/images/page_7.png", alt: "Participants gathered after an Entrain Academy workshop", className: "col-span-1 row-span-1" },
  { src: "/images/page_6.png", alt: "Large culinary workshop group at Entrain Academy", className: "col-span-1 row-span-2" },
  { src: "/images/workshop2.jpg", alt: "Culinary students and trainers in the academy classroom", className: "col-span-1 row-span-1" },
  { src: "/images/instagram-loaded-fries-reel.jpg", alt: "Students preparing loaded fries during a hands-on workshop", className: "col-span-2 row-span-1 md:col-span-2", instagramUrl: "https://www.instagram.com/reel/DZ0Izz8o5jG/" },
  { src: "/images/page_4.png", alt: "Entrain Academy workshop group gathered after training", className: "col-span-1 row-span-1" },
  { src: "/images/workshop1.jpg", alt: "Culinary workshop participants with their instructors", className: "col-span-1 row-span-1" },
];

const team = [
  {
    title: "Chef Professor",
    focus: "Professional culinary foundations",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1200&q=88",
    alt: "Professional chef mentor in chef whites",
  },
  {
    title: "Senior Chef Mentor",
    focus: "Commercial kitchen techniques",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=88",
    alt: "Senior culinary chef in a professional kitchen",
  },
  {
    title: "Culinary Trainer",
    focus: "Hands-on industry preparation",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=88",
    alt: "Culinary trainer preparing food",
  },
];

const features = [
  [ChefHat, "Expert chef mentors", "20–25 years of commercial experience."],
  [Languages, "Multilingual classes", "Classes available in multiple languages."],
  [BriefcaseBusiness, "Career assistance", "Placement support and job recommendations."],
  [TrendingUp, "Business growth focus", "Practical marketing and business guidance."],
  [UtensilsCrossed, "Industry-relevant training", "Modern equipment and commercial kitchen methods."],
];

const faqs = [
  ["Is the training hands-on?", "Yes. Programs focus on practical culinary skills, commercial kitchen methods and real equipment. The exact balance of hands-on practice and demonstration varies by course."],
  ["Do you provide placement support?", "Entrain Academy provides career assistance, job guidance and relevant recommendations. Placement opportunities depend on the candidate, course and available openings, so employment is not guaranteed."],
  ["Are food and accommodation provided?", "Food and accommodation are included with selected intensive programs, including the one-week and five-day courses. Please confirm the current arrangements with the academy before enrolling."],
  ["Who conducts the training?", "Training is led by experienced chef mentors with around 20–25 years of commercial food-industry experience."],
  ["Are classes available in multiple languages?", "Yes. Entrain offers a multilingual learning environment so participants can understand lessons and communicate comfortably."],
];

const testimonials = [
  {
    quote: "I had a basic idea about cooking before joining, but learned the complete professional process through the course.",
    detail: "Professional process",
    tone: "bg-background",
  },
  {
    quote: "I understood many important techniques and industry practices that were previously unknown to me.",
    detail: "Industry techniques",
    tone: "bg-[#e8dfd0]",
  },
  {
    quote: "The chef was highly supportive and approachable. Every doubt could be asked freely and was explained clearly.",
    detail: "Supportive instruction",
    tone: "bg-primary text-background",
  },
  {
    quote: "The training environment was professional and comfortable, and the staff members were always friendly and ready to help.",
    detail: "Learning environment",
    tone: "bg-[#efe7f0]",
  },
  {
    quote: "I had attended many workshops before, but this course provided much more practical value and exceeded my expectations.",
    detail: "Practical value",
    tone: "bg-[#e5eadf]",
  },
  {
    quote: "Even in a short-duration workshop, all important topics were covered effectively, with more practical tips than expected.",
    detail: "Focused workshop",
    tone: "bg-accent text-dark-section",
  },
];

function TestimonialCard({ testimonial }) {
  const isDark = testimonial.tone.includes("text-background");

  return (
    <motion.article
      role="listitem"
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ duration: 0.22 }}
      className={cn(
        "flex h-[230px] w-[278px] shrink-0 flex-col rounded-[12px] border border-primary/15 p-6 shadow-[4px_6px_0_rgba(15,31,48,0.78)] sm:h-[248px] sm:w-[340px] sm:p-7",
        testimonial.tone,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={cn("grid size-9 place-items-center rounded-full font-serif text-sm font-bold", isDark ? "bg-background/12 text-accent" : "bg-primary text-background")}>E</div>
          <div>
            <p className={cn("text-xs font-extrabold", isDark ? "text-background" : "text-primary")}>Course participant</p>
          </div>
        </div>
        <Quote className={cn("size-5 shrink-0", isDark ? "text-accent" : "text-accent")} strokeWidth={1.5} />
      </div>
      <blockquote className={cn("mt-7 font-serif text-base leading-7 sm:text-[1.05rem]", isDark ? "text-background/88" : "text-primary")}>“{testimonial.quote}”</blockquote>
      <div className={cn("mt-auto h-px w-10", isDark ? "bg-accent" : "bg-accent")} />
    </motion.article>
  );
}

function TestimonialRow({ row, rowIndex, distance }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex w-max gap-5 pr-5"
      initial={{ x: rowIndex === 0 ? 0 : -distance }}
      animate={reduceMotion || !distance ? undefined : { x: rowIndex === 0 ? [0, -distance] : [-distance, 0] }}
      transition={{ duration: rowIndex === 0 ? 28 : 32, repeat: Infinity, ease: "linear" }}
    >
      <div className="flex gap-5" role="list" aria-label={rowIndex === 0 ? "Customer testimonials, row one" : "Customer testimonials, row two"}>
        {row.map((testimonial) => <TestimonialCard key={testimonial.detail} testimonial={testimonial} />)}
      </div>
      <div className="flex gap-5" aria-hidden="true">
        {row.map((testimonial) => <TestimonialCard key={`duplicate-${testimonial.detail}`} testimonial={testimonial} />)}
      </div>
    </motion.div>
  );
}

function TestimonialMarquee() {
  const rows = [testimonials, [...testimonials.slice(3), ...testimonials.slice(0, 3)]];

  return (
    <div className="relative mt-12 space-y-5 overflow-hidden py-2">
      <div className="space-y-5 sm:hidden">
        {rows.map((row, rowIndex) => <TestimonialRow key={rowIndex} row={row} rowIndex={rowIndex} distance={1788} />)}
      </div>
      <div className="hidden space-y-5 sm:block">
        {rows.map((row, rowIndex) => <TestimonialRow key={rowIndex} row={row} rowIndex={rowIndex} distance={2160} />)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f2ece3] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f2ece3] to-transparent sm:w-24" />
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy, align = "left", titleClassName = "" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`display-title mt-4 text-3xl sm:text-4xl md:text-5xl ${titleClassName}`}>{title}</h2>
      {copy && <p className="mt-5 text-sm leading-7 text-muted md:text-base md:leading-8">{copy}</p>}
    </div>
  );
}

export function HomePage() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <SiteShell>
      <main>
        <section className="fine-grid relative min-h-[100dvh] overflow-hidden pt-[78px]">
          <div className="pointer-events-none absolute -left-32 top-36 size-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="container-shell grid min-h-[calc(100dvh-78px)] items-center gap-12 py-14 lg:grid-cols-[1.03fr_.97fr] lg:py-16">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <h1 className="display-title max-w-3xl text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.55rem]">Learn from experience. <span className="italic text-accent">Grow</span> with confidence.</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">Develop practical culinary and business skills for your career or food venture.</p>

              <div className="relative mx-auto mt-8 w-full max-w-lg lg:hidden">
                <div className="absolute -right-3 -top-3 h-full w-full border border-accent/55" />
                <div className="relative aspect-[4/5] overflow-hidden bg-dark-section">
                  <video className="absolute inset-0 size-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/images/cooking.jpg" aria-label="Culinary training in a professional kitchen">
                    <source src="/videos/cookingvidoe.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-section/65 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-background"><p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Learning by doing</p><p className="mt-2 font-serif text-xl">Industry skills, taught hands-on.</p></div>
                </div>
              </div>

              <div className="mt-9 flex items-center gap-3 sm:gap-4">
                <Link href="/courses" className="group relative inline-flex min-h-14 w-fit min-w-[12rem] items-center justify-between gap-4 overflow-hidden rounded-full bg-dark-section py-1.5 pl-5 pr-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.1em] text-background shadow-[0_14px_34px_rgba(15,31,48,.22)] ring-1 ring-primary/15 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-[0_20px_42px_rgba(15,31,48,.32)] sm:min-w-0 sm:max-w-[14.5rem] sm:pl-6 sm:text-[0.74rem]">
                  <span className="relative z-10 whitespace-nowrap">Explore Courses</span>
                  <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full bg-accent text-dark-section shadow-[0_6px_16px_rgba(184,134,63,.3)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-[-8deg] group-hover:scale-105">
                    <ArrowRight className="size-[1.1rem]" strokeWidth={2.25} />
                  </span>
                </Link>
                <Link
                  href={callLink}
                  aria-label="Call Entrain Academy"
                  title="Call Entrain Academy"
                  className="group inline-flex h-14 w-11 shrink-0 items-center justify-center overflow-hidden bg-transparent text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-primary transition-[width,color,transform] duration-300 hover:-translate-y-0.5 hover:text-accent sm:hover:w-[8.25rem] sm:focus-visible:w-[8.25rem]"
                >
                  <FaPhone className="size-5 shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                  <span className="ml-0 hidden max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 sm:block sm:group-hover:ml-3 sm:group-hover:max-w-24 sm:group-hover:opacity-100 sm:group-focus-visible:ml-3 sm:group-focus-visible:max-w-24 sm:group-focus-visible:opacity-100">Call Us</span>
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 border-y border-border-subtle py-5">
                {[["20–25", "Years chef experience"], ["Worldwide", "Customer reach"], ["Certified", "Every course"]].map(([value, label], index) => (
                  <div key={value} className={`px-2 first:pl-0 sm:px-5 ${index > 0 ? "border-l border-border-subtle" : ""}`}><p className="font-serif text-lg font-bold text-primary sm:text-2xl">{value}</p><p className="mt-1 text-[0.58rem] font-bold uppercase leading-4 tracking-[0.08em] text-muted sm:text-[0.65rem]">{label}</p></div>
                ))}
              </div>
            </motion.div>
            <motion.div className="relative mx-auto hidden w-full max-w-lg lg:block lg:max-w-none" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }}>
              <div className="absolute -right-3 -top-3 h-full w-full border border-accent/55 sm:-right-5 sm:-top-5" />
              <div className="relative aspect-[4/5] overflow-hidden bg-dark-section">
                <video
                  className="absolute inset-0 size-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/cooking.jpg"
                  aria-label="Culinary training in a professional kitchen"
                >
                  <source src="/videos/cookingvidoe.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-section/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-background sm:bottom-8 sm:left-8 sm:right-8"><div><p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Learning by doing</p><p className="mt-2 font-serif text-xl">Industry skills, taught hands-on.</p></div><div className="hidden items-center gap-2 text-[0.6rem] font-extrabold uppercase tracking-[0.14em] text-background/70 sm:flex"><span className="size-2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(184,134,63,.18)]" /> In motion</div></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="story" className="overflow-hidden py-20 md:py-28">
          <div className="container-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[10px]">
                {/* TEMP IMAGE - replace with client photo */}
                <Image src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1400&q=88" alt="Chef working with fresh ingredients in a professional kitchen" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-2 max-w-[15rem] bg-primary p-5 text-background shadow-xl sm:-right-6 sm:p-7"><p className="font-serif text-2xl text-accent">Journey since 2014</p><p className="mt-2 text-xs leading-5 text-background/65">Industry experience that inspired Entrain Academy in 2025.</p></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.62, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionHeading eyebrow="Our story" title="Built from the realities of the food industry." />
              <p className="mt-6 text-sm leading-7 text-muted md:text-base md:leading-8">Entrain Culinary Academy is a specialized training institute under Entrain EduHub. Founder Noufal K Keedath’s journey began in a family bakery in 2014, where years of production, customer service and business challenges shaped a grounded understanding of the industry.</p>
              <p className="mt-4 text-sm leading-7 text-muted md:text-base md:leading-8">Entrain Academy was established in 2025 to transform that real-world experience into expert chef-led training for aspiring entrepreneurs, culinary professionals and hospitality career seekers.</p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-primary transition-colors hover:text-accent">Read full story <ArrowRight className="size-4" /></Link>
            </motion.div>
          </div>
        </section>

        <section id="team" className="relative overflow-hidden border-t border-border-subtle/70 bg-[#f2ece3] py-20 md:py-28">
          <div className="pointer-events-none absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-accent/15 sm:h-[600px] sm:w-[600px]" />
          <div className="container-shell relative">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">Meet the team</p>
                <h2 className="display-title mt-4 text-3xl sm:text-4xl md:text-5xl">Guided by chefs who know the industry.</h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">Professional experience becomes clear, practical instruction through mentors who support every stage of your learning.</p>
              </div>
            </Reveal>

            <motion.div className="mx-auto mt-14 grid max-w-6xl gap-12 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-3 lg:gap-10" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
              {team.map((member, index) => (
                <motion.article key={member.title} variants={rise} whileHover={{ y: -7 }} transition={{ duration: 0.3 }} className="group mx-auto w-full max-w-[340px] text-center">
                  <div className="relative px-3 pt-3">
                    <div className="absolute inset-x-0 top-0 mx-auto h-[78%] w-full rounded-t-[999px] border border-accent/55 transition-transform duration-300 group-hover:-translate-y-1" />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[12px] bg-primary shadow-[0_18px_40px_rgba(15,31,48,.12)]">
                      {/* TEMP IMAGE - replace with client chef photo */}
                      <Image src={member.image} alt={member.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.045]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-section/38 via-transparent to-transparent" />
                      <span className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full border border-background/45 bg-background/10 font-serif text-xs text-background backdrop-blur-md">0{index + 1}</span>
                    </div>
                  </div>
                  <div className="relative mx-5 -mt-5 rounded-[10px] border border-border-subtle bg-background px-5 py-6 shadow-[0_12px_28px_rgba(15,31,48,.08)] transition-shadow duration-300 group-hover:shadow-[0_18px_36px_rgba(15,31,48,.13)]">
                    <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-accent" />
                    <h3 className="font-serif text-2xl font-bold text-primary">{member.title}</h3>
                    <p className="mt-2 text-[0.62rem] font-bold uppercase leading-5 tracking-[0.12em] text-muted">{member.focus}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <Reveal delay={0.12} className="mt-12 flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-accent" />
              <ChefHat className="size-5 text-primary" strokeWidth={1.4} />
              <div className="h-px w-10 bg-accent" />
            </Reveal>
          </div>
        </section>

        <section id="reach" className="relative overflow-hidden border-y border-background/10 bg-dark-section text-background md:min-h-[580px]">
          <div className="absolute inset-0"><IndiaReachGlobe /></div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,31,48,.98)_0%,rgba(15,31,48,.94)_58%,rgba(15,31,48,.68)_100%)] sm:bg-[linear-gradient(90deg,rgba(15,31,48,.96)_0%,rgba(15,31,48,.82)_30%,rgba(15,31,48,.3)_57%,rgba(15,31,48,.02)_78%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(15,31,48,.76)_0%,transparent_42%,rgba(15,31,48,.16)_100%)]" />
          <div className="container-shell pointer-events-none relative z-10 flex items-center py-14 sm:min-h-[620px] md:min-h-[580px] md:py-16">
            <Reveal className="pointer-events-auto w-full max-w-[36rem] border-l border-accent/55 pl-4 sm:pl-8">
              <p className="eyebrow">Our reach</p>
              <h2 className="mt-3 max-w-xl font-serif text-[1.7rem] leading-[1.12] text-background sm:mt-4 sm:text-4xl md:text-[2.75rem]">Practical culinary training for customers across India and beyond.</h2>
              <p className="mt-4 max-w-lg text-[0.82rem] leading-6 text-background/75 sm:mt-5 sm:text-sm sm:leading-7 sm:text-background/68">Based in Manjeri, Entrain Academy welcomes aspiring professionals, entrepreneurs and food business owners from across India and international locations, including South Africa.</p>
              <div className="mt-7 grid border-t border-background/15 sm:mt-9 sm:grid-cols-3 sm:gap-6 sm:pt-5">
                {[["Manjeri", "Our training centre"], ["Across India", "Customers from multiple regions"], ["International", "Participation from South Africa and beyond"]].map(([title, copy]) => (
                  <div key={title} className="grid grid-cols-[6.5rem_1fr] items-center gap-3 border-b border-background/10 py-3 last:border-b-0 sm:block sm:border-b-0 sm:border-l sm:border-background/15 sm:py-0 sm:pl-4 sm:first:border-l-0 sm:first:pl-0"><p className="text-[0.64rem] font-extrabold uppercase tracking-[0.1em] text-accent sm:text-xs">{title}</p><p className="text-[0.7rem] leading-5 text-background/65 sm:mt-2 sm:text-xs">{copy}</p></div>
                ))}
              </div>
              {/* <p className="mt-5 text-[0.54rem] uppercase tracking-[0.13em] text-background/35">Locations shown represent the academy&apos;s growing customer reach</p> */}
            </Reveal>
          </div>
        </section>

        <section id="courses" className="bg-[#f2ece3] py-20 md:py-28">
          <div className="container-shell">
            <Reveal><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Explore our training" title="Courses shaped for real outcomes." titleClassName="whitespace-nowrap !text-[clamp(1.05rem,5.5vw,1.875rem)] sm:!text-4xl md:!text-5xl" copy="Focused workshops and intensive programs for entrepreneurs, professionals and career seekers." /><Link href="/courses" className={cn(buttonVariants({ variant: "outline" }), "w-fit")}>View all courses <ArrowRight className="size-4" /></Link></div></Reveal>
            <motion.div className="mt-12 grid gap-6 md:grid-cols-2" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
              {courses.map((course) => (
                <motion.article key={course.title} variants={rise} whileHover={{ y: -5, scale: 1.015 }} transition={{ duration: 0.25 }} className="group overflow-hidden rounded-[12px] border border-border-subtle/70 bg-background shadow-[0_8px_30px_rgba(15,31,48,0.05)] transition-shadow hover:shadow-[0_18px_42px_rgba(15,31,48,0.13)]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* TEMP IMAGE - replace with client photo */}
                    <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-section/50 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 bg-background/92 px-3 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.13em] text-primary backdrop-blur">{course.type}</span>
                  </div>
                  <div className="p-6 sm:p-7"><div className="flex items-start justify-between gap-4"><div><h3 className="font-serif text-2xl font-bold text-primary">{course.title}</h3><p className="mt-2 text-sm text-muted">{course.detail}</p></div><ArrowRight className="mt-1 size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" /></div><div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/35 px-3 py-1.5 text-[0.64rem] font-extrabold uppercase tracking-[0.1em] text-primary"><Award className="size-3.5 text-accent" /> Certificate provided</div></div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="gallery" className="py-20 md:py-28">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="Inside Entrain" title="Craft, confidence and community."  align="center" /></Reveal>
            <motion.div className="mt-12 grid auto-rows-[135px] grid-cols-2 gap-3 md:auto-rows-[190px] md:grid-cols-4 md:gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
              {gallery.map((item, index) => item.instagramUrl ? (
                <motion.a key={item.src} variants={rise} href={item.instagramUrl} target="_blank" rel="noreferrer" whileHover={{ scale: 1.018 }} className={`group relative overflow-hidden rounded-[10px] bg-dark-section text-left shadow-sm transition-shadow hover:shadow-xl ${item.className}`} aria-label="Watch the loaded fries workshop Reel on Instagram">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                  <span className="absolute inset-0 bg-dark-section/35 transition-colors group-hover:bg-dark-section/45" />
                  <span className="absolute inset-0 grid place-items-center"><span className="grid size-14 place-items-center rounded-full bg-background/95 text-primary shadow-xl transition-transform duration-300 group-hover:scale-110"><Play className="ml-0.5 size-5 fill-accent text-accent" /></span></span>
                  <span className="absolute bottom-4 left-5 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-background">Watch on Instagram</span>
                </motion.a>
              ) : (
                <motion.button key={item.src} variants={rise} onClick={() => setActiveImage(index)} whileHover={{ scale: 1.018 }} className={`group relative overflow-hidden rounded-[10px] bg-dark-section text-left shadow-sm transition-shadow hover:shadow-xl ${item.className}`} aria-label={`Open image: ${item.alt}`}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 50vw, 30vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                  <span className="absolute inset-0 bg-dark-section/0 transition-colors group-hover:bg-dark-section/10" />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="testimonials" className="border-t border-border-subtle bg-[#f2ece3] py-20 md:py-24">
          <div className="container-shell"><Reveal><SectionHeading eyebrow="Customer stories" title="Practical training. Meaningful experiences." titleClassName="whitespace-nowrap !text-[clamp(1rem,5.15vw,1.875rem)] sm:!text-4xl md:!text-5xl" /></Reveal></div>
          <TestimonialMarquee />
        </section>

        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container-shell">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-14">
              <motion.div className="flex flex-col justify-center" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
                <h2 className="font-serif text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">Why choose Entrain</h2>
                <motion.div className="mt-8 grid border-t border-border-subtle sm:grid-cols-2" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
                {features.map(([Icon, title, copy], index) => (
                  <motion.article key={title} variants={rise} className={`group relative border-b border-border-subtle py-5 sm:min-h-[145px] sm:p-5 ${index % 2 === 0 ? "sm:border-r" : ""} ${index === 4 ? "sm:col-span-2 sm:min-h-0 sm:border-r-0" : ""}`}>
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-accent" strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-3 font-serif text-lg font-bold text-primary">{title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-muted sm:text-sm">{copy}</p>
                  </motion.article>
                ))}
                </motion.div>
              </motion.div>

              <motion.div className="relative min-h-[430px] sm:min-h-[560px] lg:min-h-0" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <div className="absolute left-0 top-0 h-[48%] w-[88%] overflow-hidden rounded-[12px]">
                  <Image src="/images/choose1.jpg" alt="Chefs working in a professional kitchen" fill sizes="(max-width: 1024px) 88vw, 36vw" className="object-cover object-[center_42%]" />
                </div>
                <div className="absolute bottom-0 right-0 h-[48%] w-[88%] overflow-hidden rounded-[12px]">
                  <Image src="/images/choose2.jpg" alt="Chef cooking vegetables over an open flame" fill sizes="(max-width: 1024px) 88vw, 36vw" className="object-cover object-[center_62%]" />
                </div>
                <span className="absolute right-0 top-0 h-[48%] w-[8%] bg-accent" />
                <span className="absolute bottom-0 left-0 h-[48%] w-[8%] border border-accent/55" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e8dfd0] py-20 md:py-24">
          <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full border border-primary/10" />
          <div className="container-shell">
            <Reveal className="relative mx-auto max-w-4xl">
              <h2 className="font-serif text-3xl text-primary sm:text-4xl md:text-5xl">Frequently asked questions</h2>
              <div className="mt-10 space-y-3">
                {faqs.map(([question, answer]) => (
                  <details key={question} name="home-faq" className="group/faq rounded-[10px] bg-background/65 px-5 transition-colors open:bg-background sm:px-7">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-serif text-lg font-bold text-primary transition-colors hover:text-accent sm:text-xl [&::-webkit-details-marker]:hidden">
                      <span>{question}</span>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent/15 text-accent transition-colors group-open/faq:bg-accent group-open/faq:text-background"><ChevronDown className="size-4 transition-transform duration-300 group-open/faq:rotate-180" /></span>
                    </summary>
                    <p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-muted">{answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24"><Reveal className="container-shell"><div className="relative overflow-hidden border border-border-subtle bg-[#f2ece3] px-6 py-12 text-center sm:px-12 md:py-16"><div className="absolute left-1/2 top-0 h-px w-28 -translate-x-1/2 bg-accent" /><p className="eyebrow">Your next step</p><h2 className="display-title mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl md:text-5xl">Ready to turn your interest into practical skill?</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">Talk to our team about the program that best fits your business goals or culinary career.</p><a href="tel:+917593841013" aria-label="Call Entrain Academy at 7593841013" className={cn(buttonVariants({ size: "lg" }), "mt-8")}><Phone className="size-4" /> Call Our Team</a></div></Reveal></section>
      </main>

      <AnimatePresence>
        {activeImage !== null && (
          <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-dark-section/95 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveImage(null)} role="dialog" aria-modal="true" aria-label="Gallery image viewer">
            <motion.div className="relative h-[75dvh] w-full max-w-5xl" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.25 }} onClick={(event) => event.stopPropagation()}>
              {/* TEMP IMAGE - replace with client photo */}
              <Image src={gallery[activeImage].src} alt={gallery[activeImage].alt} fill sizes="100vw" className="object-contain" />
              <button onClick={() => setActiveImage(null)} className="absolute right-0 top-0 grid size-11 -translate-y-12 place-items-center text-background transition hover:text-accent" aria-label="Close image viewer"><X /></button>
              <p className="absolute inset-x-0 -bottom-10 text-center text-xs text-background/60">{gallery[activeImage].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteShell>
  );
}
