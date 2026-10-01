"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, animate, motion, useInView, useReducedMotion } from "framer-motion";
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
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
    image: "/images/dessert.webp",
    href: "/courses/dessert-workshop",
  },
  {
    title: "Fried Chicken Masterclass",
    type: "One-day masterclass",
    detail: "Coating, frying, sauces & business insight",
    image: "https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&w=1400",
    href: "/courses/fried-chicken-masterclass",
  },
  {
    title: "Master 1-Week Course",
    type: "Intensive program",
    detail: "Eight commercial fast-food essentials",
    image: "/images/cooking.webp",
    href: "/courses/master-one-week-course",
  },
  {
    title: "Shawarma & Shawai Course",
    type: "5-day hands-on program",
    detail: "Four shawarmas, three shawai styles",
    image: "/images/shawarmastand.jpg",
    href: "/courses/shawarma-shawai",
  },
];

const milestones = [
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    duration: 2.4,
    label: "Customers Trained",
    copy: "Food entrepreneurs, café founders and aspiring chefs who built real culinary confidence.",
  },
  {
    icon: MapPin,
    value: 14,
    suffix: "+",
    duration: 1.8,
    label: "States Across India",
    copy: "Learners travelling from across the country to train at our Manjeri kitchen.",
  },
  {
    icon: Globe2,
    value: 2,
    suffix: "",
    duration: 1.2,
    label: "Countries Reached",
    copy: "Including international participation from South Africa alongside our Indian learners.",
  },
];

const gallery = [
  { src: "/images/page_10.webp", alt: "Entrain Academy workshop participants and mentors", className: "col-span-2 row-span-2 md:col-span-2" },
  { src: "/images/page_7.webp", alt: "Participants gathered after an Entrain Academy workshop", className: "col-span-1 row-span-1" },
  { src: "/images/page_6.webp", alt: "Large culinary workshop group at Entrain Academy", className: "col-span-1 row-span-2" },
  { src: "/images/workshop-27.jpg", alt: "Culinary students and trainers in the academy classroom", className: "col-span-1 row-span-1" },
  { src: "/images/instagram-loaded-fries-reel.jpg", alt: "Students preparing loaded fries during a hands-on workshop", className: "col-span-2 row-span-1 md:col-span-2", instagramUrl: "https://www.instagram.com/reel/DZ0Izz8o5jG/" },
  { src: "/images/page_4.webp", alt: "Entrain Academy workshop group gathered after training", className: "col-span-1 row-span-1" },
  { src: "/images/workshop-24.jpg", alt: "Culinary workshop participants with their instructors", className: "col-span-1 row-span-1" },
];

const team = [
  {
    title: "Chef Akhil",
    experience: "7 years of industry experience · 2 years of academic experience",
    focus: "Continental · South Indian · American cuisine",
    image: "/images/testimonials/chefakhil.jpeg",
    imageClassName: "object-[center_22%]",
    alt: "Chef Akhil preparing barbecue dishes at the grill",
  },
  {
    title: "Chef Sharafali",
    experience: "19 years of industry experience",
    focus: "Arabic cuisine",
    image: "/images/testimonials/chef_sharafali.jpg",
    imageClassName: "object-[center_18%]",
    alt: "Chef Sharafali in professional chef attire",
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
    quote: "A very good experience with a great environment, a talented chef and accommodation. I recommend this course to anyone planning to start a food business.",
    detail: "Mohammed Muthahir testimonial",
    name: "Mohammed Muthahir",
    location: "Mysore",
    initials: "MM",
    reelUrl: "https://www.instagram.com/reel/DafsIoZIpqb/",
    tone: "bg-background",
  },
  {
    quote: "I learned the correct procedures, including marination and refrigeration times. The supportive staff and approachable chef made it a wonderful learning experience.",
    detail: "Muneer testimonial",
    name: "Muneer",
    initials: "M",
    reelUrl: "https://www.instagram.com/reel/DZiArEposzb/",
    tone: "bg-[#e8dfd0]",
  },
  {
    quote: "Unlike other workshops I attended, everything was explained simply and practically. It is easy to apply for an existing business or a new small shop.",
    detail: "Ameen testimonial",
    name: "Ameen",
    initials: "A",
    reelUrl: "https://www.instagram.com/reel/DY99uZCo4yj/",
    tone: "bg-primary text-background",
  },
  {
    quote: "The team made every concept simple and patiently answered all our questions. Their recipes and practical teaching helped us learn so much in a very short time.",
    detail: "Annu Sona testimonial",
    name: "Annu Sona",
    initials: "AS",
    reelUrl: "https://www.instagram.com/reel/DYCnTDTo2--/",
    tone: "bg-[#efe7f0]",
  },
  {
    quote: "After the Fried Chicken course, I added the products to my shop and received a good response. I returned for the dessert course so I can expand my menu further.",
    detail: "Rashid testimonial",
    name: "Rashid",
    initials: "R",
    reelUrl: "https://www.instagram.com/reel/DWl-P9ECFaF/",
    tone: "bg-[#e5eadf]",
  },
  {
    quote: "The flavours taught here are very well-balanced, and I liked the professional setup. It was a valuable one-day workshop, and I would like to attend and collaborate on more programs.",
    detail: "Chef Kiran Joshi testimonial",
    name: "Chef Kiran Joshi",
    initials: "CK",
    image: "/images/testimonials/chefkiran-avatar.jpeg",
    reelUrl: "https://www.instagram.com/reel/DVNhShHEwT3/",
    tone: "bg-accent text-dark-section",
  },
  {
    quote: "My experience was excellent — the accommodation, food, staff and kitchen setup were outstanding. I finally found the commercial kitchen machinery I had been searching for over the past two to three years.",
    detail: "Nabil Abdul Rahman testimonial",
    name: "Nabil Abdul Rahman",
    location: "Maharashtra",
    initials: "NA",
    reelUrl: "https://www.instagram.com/reel/DdEZkHfoyb2/",
    tone: "bg-background",
  },
  {
    quote: "I've always wanted to start a business young, and I love the shawarma concept. After training at Entrain Academy, I gained the knowledge and confidence to start my own food business.",
    detail: "Siddhi testimonial",
    name: "Siddhi",
    location: "Maharashtra",
    initials: "S",
    reelUrl: "https://www.instagram.com/reel/DdTtDquoZW6/",
    tone: "bg-[#e8dfd0]",
  },
  {
    quote: "We had no previous experience, but the trainers taught us everything from the basics — fried chicken, chicken popcorn, sandwiches, zinger burgers, mojitos and more.",
    detail: "Anjali and Gourav Gupta testimonial",
    name: "Anjali & Gourav Gupta",
    location: "Delhi",
    initials: "AG",
    reelUrl: "https://www.instagram.com/reel/DdGxiBXIN8H/",
    tone: "bg-primary text-background",
  },
];

function TestimonialCard({ testimonial }) {
  const isDark = testimonial.tone.includes("text-background");
  const Card = testimonial.reelUrl ? motion.a : motion.article;

  return (
    <Card
      role="listitem"
      href={testimonial.reelUrl}
      target={testimonial.reelUrl ? "_blank" : undefined}
      rel={testimonial.reelUrl ? "noopener noreferrer" : undefined}
      aria-label={testimonial.reelUrl ? `Watch ${testimonial.name}'s testimonial on Instagram` : undefined}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ duration: 0.22 }}
      className={cn(
        "relative mt-8 flex h-57.5 w-69.5 shrink-0 flex-col rounded-xl border border-primary/15 p-6 pt-11 shadow-[4px_6px_0_rgba(15,31,48,0.78)] sm:h-62 sm:w-85 sm:p-7 sm:pt-11",
        testimonial.reelUrl && "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        testimonial.tone,
      )}
    >
      <div className={cn("absolute left-1/2 top-0 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border-4 font-serif text-base font-bold shadow-sm", isDark ? "border-primary bg-primary text-background" : "border-background bg-primary text-background")}>
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={`${testimonial.name || "Course participant"} profile`}
            fill
            sizes="128px"
            className="object-cover"
          />
        ) : (
          <span aria-hidden="true">{testimonial.initials || "E"}</span>
        )}
      </div>
      <div className="mt-3">
        <p className={cn("text-xs font-extrabold", isDark ? "text-background" : "text-primary")}>{testimonial.name || "Course participant"}</p>
        {testimonial.location && <p className={cn("mt-0.5 text-[0.65rem]", isDark ? "text-background/70" : "text-muted")}>{testimonial.location}</p>}
      </div>
      <div className="absolute right-6 top-6 sm:right-7 sm:top-7">
        {testimonial.reelUrl ? <Play className="size-5 fill-accent text-accent" strokeWidth={1.5} /> : <Quote className="size-5 text-accent" strokeWidth={1.5} />}
      </div>
      <blockquote className={cn("mt-5 line-clamp-5 font-serif text-sm leading-6 sm:line-clamp-6 sm:text-[0.95rem] sm:leading-6", isDark ? "text-background/88" : "text-primary")}>“{testimonial.quote}”</blockquote>
      <div className={cn("mt-auto h-px w-10", isDark ? "bg-accent" : "bg-accent")} />
    </Card>
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
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-[#f2ece3] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-[#f2ece3] to-transparent sm:w-24" />
    </div>
  );
}

function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, prefersReduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
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
        <section className="fine-grid relative min-h-dvh overflow-hidden pt-19.5">
          <div className="pointer-events-none absolute -left-32 top-36 size-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="container-shell grid min-h-[calc(100dvh-78px)] items-center gap-12 py-14 lg:grid-cols-[1.03fr_.97fr] lg:py-16">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <h1 className="display-title max-w-3xl text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.55rem]">Learn from experience. <span className="italic text-accent">Grow</span> with confidence.</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">Develop practical culinary and business skills for your career or food venture.</p>

              <div className="relative mx-auto mt-8 w-full max-w-lg lg:hidden">
                <div className="absolute -right-3 -top-3 h-full w-full border border-accent/55" />
                <div className="relative aspect-4/5 overflow-hidden bg-dark-section">
                  <video
                    className="absolute inset-0 size-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/cooking.webp"
                    aria-label="Culinary training in a professional kitchen"
                  >
                    <source src="/videos/cookingvidoe.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-linear-to-t from-dark-section/65 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-background">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-accent">Learning by doing</p>
                      <p className="mt-1 font-serif text-lg sm:text-xl">Industry skills, taught hands-on.</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[0.6rem] font-extrabold uppercase tracking-widest text-background/80">
                      <span className="size-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(184,134,63,.25)]" /> In motion
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-9 flex items-center gap-3 sm:gap-4">
                <Link href="/courses" className="group relative inline-flex min-h-14 w-fit min-w-48 items-center justify-between gap-4 overflow-hidden rounded-full bg-dark-section py-1.5 pl-5 pr-1.5 text-[0.7rem] font-extrabold uppercase tracking-widest text-background shadow-[0_14px_34px_rgba(15,31,48,.22)] ring-1 ring-primary/15 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-[0_20px_42px_rgba(15,31,48,.32)] sm:min-w-0 sm:max-w-58 sm:pl-6 sm:text-[0.74rem]">
                  <span className="relative z-10 whitespace-nowrap">Explore Courses</span>
                  <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full bg-accent text-dark-section shadow-[0_6px_16px_rgba(184,134,63,.3)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-[-8deg] group-hover:scale-105">
                    <ArrowRight className="size-[1.1rem]" strokeWidth={2.25} />
                  </span>
                </Link>
                <Link
                  href={callLink}
                  aria-label="Call Entrain Academy"
                  title="Call Entrain Academy"
                  className="group inline-flex h-14 w-11 shrink-0 items-center justify-center overflow-hidden bg-transparent text-[0.72rem] font-extrabold uppercase tracking-widest text-primary transition-[width,color,transform] duration-300 hover:-translate-y-0.5 hover:text-accent sm:hover:w-33 sm:focus-visible:w-33"
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
              <div className="relative aspect-4/5 overflow-hidden bg-dark-section">
                <video
                  className="absolute inset-0 size-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/cooking.webp"
                  aria-label="Culinary training in a professional kitchen"
                >
                  <source src="/videos/cookingvidoe.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-t from-dark-section/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-background sm:bottom-8 sm:left-8 sm:right-8"><div><p className="text-[0.65rem] font-bold uppercase tracking-widest text-accent">Learning by doing</p><p className="mt-2 font-serif text-xl">Industry skills, taught hands-on.</p></div><div className="hidden items-center gap-2 text-[0.6rem] font-extrabold uppercase tracking-widest text-background/70 sm:flex"><span className="size-2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(184,134,63,.18)]" /> In motion</div></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="milestones" className="overflow-hidden py-20 md:py-28">
          <div className="container-shell">
            <Reveal className="mx-auto max-w-xl text-center">
              <p className="eyebrow">Our Milestones</p>
              <h2 className="display-title mt-3 text-3xl sm:text-4xl md:text-5xl">A decade of experience, now shared.</h2>
            </Reveal>

            <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-4xl">
              <div className="absolute -right-3 -top-3 hidden h-full w-full border border-accent/55 sm:-right-5 sm:-top-5 sm:block" />
              <motion.div
                className="relative grid gap-12 border border-border-subtle bg-[#f2ece3]/55 px-8 py-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border-subtle sm:px-6 sm:py-14"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {milestones.map(({ icon: Icon, value, suffix, duration, label, copy }) => (
                  <motion.div key={label} variants={rise} className="text-center sm:px-8">
                    <Icon className="mx-auto size-5 text-accent" strokeWidth={1.5} />
                    <div className="mt-5 font-serif text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                      <AnimatedCounter value={value} suffix={suffix} duration={duration} />
                    </div>
                    <div className="mx-auto mt-4 h-px w-8 bg-accent/60" />
                    <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">{label}</p>
                    <p className="mx-auto mt-2 max-w-56 text-sm leading-6 text-muted">{copy}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Reveal>
          </div>
        </section>

        <section id="reach" className="relative overflow-hidden border-y border-background/10 bg-[#070f18] text-background min-h-[620px] md:min-h-[720px]">
          <div className="absolute inset-0"><IndiaReachGlobe /></div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,31,48,.98)_0%,rgba(15,31,48,.92)_50%,rgba(15,31,48,.5)_75%,rgba(15,31,48,.15)_100%)] sm:bg-[linear-gradient(90deg,rgba(15,31,48,.96)_0%,rgba(15,31,48,.84)_36%,rgba(15,31,48,.25)_62%,rgba(15,31,48,.02)_82%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(7,15,24,.85)_0%,transparent_35%,rgba(7,15,24,.3)_100%)]" />
          <div className="container-shell pointer-events-none relative z-10 flex items-center py-14 sm:min-h-[620px] md:min-h-[720px] md:py-16">
            <Reveal className="pointer-events-auto w-full max-w-xl border-l border-accent/55 pl-4 sm:pl-8">
              <p className="eyebrow">Our reach</p>
              <h2 className="mt-3 max-w-xl font-serif text-[1.7rem] leading-[1.12] text-background sm:mt-4 sm:text-4xl md:text-[2.75rem]">Practical culinary training for customers across India, South Africa and Tanzania.</h2>
              <p className="mt-4 hidden max-w-lg text-sm leading-7 text-background/68 sm:mt-5 sm:block">Based in Manjeri, Entrain Academy welcomes aspiring professionals, entrepreneurs and food business owners from across India, alongside international learners travelling from South Africa and Tanzania.</p>
              <div className="mt-7 grid border-t border-background/15 sm:mt-9 sm:grid-cols-3 sm:gap-6 sm:pt-5">
                {[["Manjeri", "Our training centre"], ["India", "Customers across the country"], ["International", "Learners from South Africa & Tanzania"]].map(([title, copy]) => (
                  <div key={title} className="grid grid-cols-[6.5rem_1fr] items-center gap-3 border-b border-background/10 py-3 last:border-b-0 sm:block sm:border-b-0 sm:border-l sm:border-background/15 sm:py-0 sm:pl-4 sm:first:border-l-0 sm:first:pl-0"><p className="text-[0.64rem] font-extrabold uppercase tracking-widest text-accent sm:text-xs">{title}</p><p className="text-[0.7rem] leading-5 text-background/65 sm:mt-2 sm:text-xs">{copy}</p></div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="courses" className="bg-[#f2ece3] py-20 md:py-28">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Explore our training"
                title="Courses shaped for real outcomes."
                titleClassName="whitespace-nowrap !text-[clamp(1.05rem,5.5vw,1.875rem)] sm:!text-4xl md:!text-5xl"
                copy="Focused workshops and intensive programs for entrepreneurs, professionals and career seekers."
              />
            </Reveal>
            <motion.div className="mt-12 grid gap-6 md:grid-cols-2" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
              {courses.map((course) => (
                <motion.div key={course.title} variants={rise} whileHover={{ y: -5, scale: 1.015 }} transition={{ duration: 0.25 }}>
                  <Link href={course.href} aria-label={`View details for ${course.title}`} className="group block h-full overflow-hidden rounded-xl border border-border-subtle/70 bg-background shadow-[0_8px_30px_rgba(15,31,48,0.05)] transition-shadow hover:shadow-[0_18px_42px_rgba(15,31,48,0.13)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  <div className="relative aspect-video overflow-hidden">
                    {/* TEMP IMAGE - replace with client photo */}
                    <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-section/50 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 bg-background/92 px-3 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.13em] text-primary backdrop-blur">{course.type}</span>
                  </div>
                  <div className="p-6 sm:p-7"><div className="flex items-start justify-between gap-4"><div><h3 className="font-serif text-2xl font-bold text-primary">{course.title}</h3><p className="mt-2 text-sm text-muted">{course.detail}</p></div><ArrowRight className="mt-1 size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" /></div><div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/35 px-3 py-1.5 text-[0.64rem] font-extrabold uppercase tracking-widest text-primary"><Award className="size-3.5 text-accent" /> Certificate provided</div></div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <Reveal delay={0.15} className="mt-12 flex justify-center">
              <Link href="/courses" className={cn(buttonVariants({ size: "lg" }), "group")}>
                View all courses <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>

        <section id="team" className="relative overflow-hidden border-t border-border-subtle/70 bg-[#f2ece3] py-20 md:py-28">
          <div className="pointer-events-none absolute left-1/2 top-32 h-105 w-105 -translate-x-1/2 rounded-full border border-accent/15 sm:h-150 sm:w-150" />
          <div className="container-shell relative">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">Meet the team</p>
                <h2 className="display-title mt-4 text-3xl sm:text-4xl md:text-5xl">Guided by chefs who know the industry.</h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">Professional experience becomes clear, practical instruction through mentors who support every stage of your learning.</p>
              </div>
            </Reveal>

            <motion.div className="mx-auto mt-14 grid max-w-4xl gap-12 sm:grid-cols-2 sm:gap-x-10" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
              {team.map((member, index) => (
                <motion.article key={member.title} variants={rise} whileHover={{ y: -7 }} transition={{ duration: 0.3 }} className="group mx-auto flex h-full w-full max-w-85 flex-col text-center">
                  <div className="relative px-3 pt-3">
                    <div className="absolute inset-x-0 top-0 mx-auto h-[78%] w-full rounded-t-[999px] border border-accent/55 transition-transform duration-300 group-hover:-translate-y-1" />
                    <div className="relative aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-xl bg-primary shadow-[0_18px_40px_rgba(15,31,48,.12)]">
                      <Image src={member.image} alt={member.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" className={cn("object-cover transition-transform duration-700 group-hover:scale-[1.045]", member.imageClassName)} />
                      <div className="absolute inset-0 bg-linear-to-t from-dark-section/38 via-transparent to-transparent" />
                      <span className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full border border-background/45 bg-background/10 font-serif text-xs text-background backdrop-blur-md">0{index + 1}</span>
                    </div>
                  </div>
                  <div className="relative mx-5 -mt-5 flex flex-1 flex-col justify-center rounded-[10px] border border-border-subtle bg-background px-5 py-6 shadow-[0_12px_28px_rgba(15,31,48,.08)] transition-shadow duration-300 group-hover:shadow-[0_18px_36px_rgba(15,31,48,.13)]">
                    <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-accent" />
                    <h3 className="font-serif text-2xl font-bold text-primary">{member.title}</h3>
                    <p className="mt-3 text-xs font-semibold leading-5 text-primary/80">{member.experience}</p>
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

        <section id="gallery" className="py-20 md:py-28">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="Inside Entrain" title="Craft, confidence and community."  align="center" /></Reveal>
            <motion.div className="mt-12 grid auto-rows-33.75 grid-cols-2 gap-3 md:auto-rows-47.5 md:grid-cols-4 md:gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
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
            <Reveal className="mt-10 text-center">
              <Link href="/gallery" className={buttonVariants({ variant: "outline", size: "lg" })}>View full gallery <ArrowRight className="size-4" /></Link>
            </Reveal>
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
                  <motion.article key={title} variants={rise} className={`group relative border-b border-border-subtle py-5 sm:min-h-36.25 sm:p-5 ${index % 2 === 0 ? "sm:border-r" : ""} ${index === 4 ? "sm:col-span-2 sm:min-h-0 sm:border-r-0" : ""}`}>
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-accent" strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-3 font-serif text-lg font-bold text-primary">{title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-muted sm:text-sm">{copy}</p>
                  </motion.article>
                ))}
                </motion.div>
              </motion.div>

              <motion.div className="relative min-h-107.5 sm:min-h-140 lg:min-h-0" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
                <div className="absolute left-0 top-0 h-[48%] w-[88%] overflow-hidden rounded-xl">
                  <Image src="/images/choose1.jpg" alt="Chefs working in a professional kitchen" fill sizes="(max-width: 1024px) 88vw, 36vw" className="object-cover object-[center_42%]" />
                </div>
                <div className="absolute bottom-0 right-0 h-[48%] w-[88%] overflow-hidden rounded-xl">
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
          <span className="pointer-events-none absolute -left-3 top-14 -rotate-12 text-5xl opacity-25 sm:left-8 sm:text-7xl md:left-12" aria-hidden="true">🍳</span>
          <span className="pointer-events-none absolute left-5 top-1/2 rotate-6 text-3xl opacity-20 sm:left-16 sm:text-5xl" aria-hidden="true">🥖</span>
          <span className="pointer-events-none absolute bottom-10 left-1 -rotate-6 text-4xl opacity-20 sm:left-10 sm:text-6xl" aria-hidden="true">🧁</span>
          <span className="pointer-events-none absolute right-5 top-12 rotate-6 text-3xl opacity-20 sm:right-16 sm:text-5xl" aria-hidden="true">🍲</span>
          <span className="pointer-events-none absolute right-2 top-1/2 -rotate-12 text-4xl opacity-20 sm:right-10 sm:text-6xl" aria-hidden="true">👨‍🍳</span>
          <span className="pointer-events-none absolute -right-2 bottom-12 rotate-12 text-5xl opacity-25 sm:right-8 sm:text-7xl md:right-12" aria-hidden="true">🥐</span>
          <div className="container-shell">
            <Reveal className="relative mx-auto max-w-4xl">
              <h2 className="font-serif text-3xl text-primary sm:text-4xl md:text-5xl">Frequently asked questions</h2>
              <div className="mt-10 space-y-3">
                {faqs.map(([question, answer]) => (
                  <details key={question} name="home-faq" className="group/faq rounded-xl border border-border-subtle/70 bg-background/80 px-5 shadow-[0_4px_16px_rgba(15,31,48,0.03)] transition-all hover:border-accent/40 open:bg-background open:shadow-md sm:px-7">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-sans text-base font-semibold text-primary transition-colors hover:text-accent sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden">
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
          <motion.div className="fixed inset-0 z-100 grid place-items-center bg-dark-section/95 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveImage(null)} role="dialog" aria-modal="true" aria-label="Gallery image viewer">
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
