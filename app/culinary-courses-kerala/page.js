import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin, Play, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { InnerPage } from "@/components/inner-page";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { courseDetails } from "@/lib/courses";
import { callLink, phoneDisplay, siteUrl, whatsappNumber } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

const path = "/culinary-courses-kerala";
const title = "Hands on culinary courses in kerala | Entrain Academy";
const description = "Explore hands-on culinary courses in Kerala at Entrain Academy. Learn shawarma, fried chicken, and more with practical chef-led training";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: `${siteUrl}${path}`,
    images: [{ url: "/images/workshop-batch9-kitchen.jpg", alt: "Entrain Academy students in the training kitchen" }],
  },
};

const featuredSlugs = [
  "shawarma-shawai",
  "master-one-week-course",
  "arabian-cuisine-masterclass",
  "cake-pastry-workshop",
  "pizza-burger-workshop",
  "loaded-fries-mojito-workshop",
  "dessert-workshop",
];
const featuredCourses = featuredSlugs.map((slug) => courseDetails.find((course) => course.slug === slug));

const steps = [
  ["01", "Watch the chef", "See each technique demonstrated, from preparation and marination to cooking and plating."],
  ["02", "Get into the kitchen", "Prepare dishes in practical sessions with guidance on equipment, hygiene and safety."],
  ["03", "Practise and improve", "Ask questions, receive individual feedback and repeat techniques to build confidence."],
];

const faqs = [
  ["Where is Entrain Academy located in Kerala?", "Entrain Academy is located in Manjeri, Malappuram district, Kerala. Students from across Kerala and other Indian states can enquire about courses, batch schedules and accommodation."],
  ["Can beginners join culinary courses at Entrain Academy?", "Yes. Entrain Academy offers practical culinary training suitable for beginners, aspiring chefs, home cooks and food entrepreneurs. Experienced chefs guide students through cooking techniques, preparation methods and kitchen safety."],
  ["Do students from other districts and states join your culinary courses?", "Yes. Students join Entrain Academy from across Kerala and other Indian states. Contact the team to ask about travel and accommodation options."],
  ["Are classes taught in Malayalam, English, Hindi or other languages?", "Classes are multilingual. Ask the admissions team which languages are available for your chosen batch when you enquire."],
  ["What skills will I learn?", "Depending on your course, you can learn marination, frying and coating, shawarma and grill preparation, desserts, baking and pastry, sauces, presentation, kitchen hygiene, food safety and equipment handling. Some workshops also include food costing and business guidance."],
  ["How can I enroll in a course?", "Pick a course, then call or WhatsApp +91 75938 41013, or use the enquiry form on this page. The team will confirm the batch dates, fee and inclusions before reserving your seat."],
];

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Entrain Academy, I would like to enquire about culinary courses in Kerala.")}`;

export default function KeralaCoursesPage() {
  return (
    <InnerPage>
      <JsonLd data={breadcrumbSchema([{ name: "Culinary Courses in Kerala", path }])} />
      <section className="relative overflow-hidden bg-dark-section pt-28 text-background md:pt-32">
        <div className="absolute inset-0">
          <Image src="/images/workshop-batch9-kitchen.jpg" alt="best culinery course in kerala" fill sizes="100vw" priority className="object-cover object-[center_63%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,31,48,.98)_0%,rgba(15,31,48,.9)_42%,rgba(15,31,48,.38)_100%)]" />
          <div className="absolute inset-0 bg-linear-to-t from-dark-section/75 via-transparent to-transparent" />
        </div>
        <div className="container-shell relative flex min-h-[560px] items-center py-16 md:min-h-[650px] md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-serif text-[clamp(2.55rem,6vw,5.35rem)] leading-[1.08] tracking-[-.045em]">Culinary Courses in Kerala <span className="block text-accent">Hands-On Professional Training</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-background/85 md:text-lg">Students learning professional cooking techniques and practical culinary skills at one of the best culinary courses in Kerala.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#choose-courses" className="group inline-flex min-h-14 items-center justify-between gap-5 rounded-full bg-accent py-1.5 pl-6 pr-1.5 text-xs font-extrabold uppercase tracking-widest text-dark-section shadow-[0_12px_30px_rgba(0,0,0,.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c39653] hover:shadow-[0_18px_36px_rgba(0,0,0,.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">View courses <span className="grid size-11 shrink-0 place-items-center rounded-full bg-dark-section text-accent transition-transform duration-300 group-hover:translate-x-0.5"><ArrowRight className="size-4" /></span></Link>
              <Link href="#enquire" className="inline-flex min-h-14 items-center justify-center rounded-full border border-background/55 bg-background/10 px-7 text-xs font-extrabold uppercase tracking-widest text-background backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:text-dark-section focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Enquire now</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="choose-courses" className="bg-[#f2ece3] py-20 md:py-28">
        <div className="container-shell">
          <h2 className="display-title max-w-3xl text-3xl sm:text-4xl md:text-5xl">Best culinary, bakery &amp; pastry courses in Kerala</h2>
          <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featuredCourses.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="group overflow-hidden rounded-xl border border-border-subtle/70 bg-background shadow-[0_8px_26px_rgba(15,31,48,.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,31,48,.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                <div className="relative aspect-[16/10] overflow-hidden bg-dark-section">
                  <Image src={course.image} alt={`${course.title} course at Entrain Academy`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex min-h-36 flex-col justify-between p-6">
                  <h3 className="font-serif text-xl font-bold leading-snug text-primary sm:text-2xl">{course.title}</h3>
                  <div className="mt-5 flex items-center justify-between border-t border-border-subtle/70 pt-4 text-xs font-bold uppercase tracking-wider text-muted"><span>{course.duration}</span><span className="inline-flex items-center gap-1 text-accent">Explore course <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div>
                </div>
              </Link>
            ))}
            <Link href="/courses/bakery-pastry-diploma" className="group overflow-hidden rounded-xl border border-border-subtle/70 bg-primary text-background shadow-[0_8px_26px_rgba(15,31,48,.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,31,48,.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src="/images/bakery-diploma-wide.png" alt="Pastry chef decorating a cake for the bakery diploma" fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex min-h-36 flex-col justify-between p-6">
                <h3 className="font-serif text-xl font-bold leading-snug sm:text-2xl">Advanced Diploma in Bakery, Pastry &amp; Artisan Bread</h3>
                <div className="mt-5 flex items-center justify-between border-t border-background/25 pt-4 text-xs font-bold uppercase tracking-wider text-background/80"><span>Upcoming · 12 months</span><span className="inline-flex items-center gap-1 text-accent">Explore diploma <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="enquire" className="py-20 md:py-28">
        <div className="container-shell grid overflow-hidden rounded-xl border border-border-subtle bg-background shadow-[0_20px_65px_rgba(15,31,48,.08)] lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative overflow-hidden bg-dark-section p-8 text-background sm:p-12 lg:p-14">
            <h2 className="relative max-w-md font-serif text-3xl leading-tight sm:text-4xl">Find the right course for your next step.</h2>
            <p className="relative mt-6 max-w-md text-sm leading-7 text-background/75">Tell us what you want to learn. Our team can help with course choice, upcoming batches, fees and accommodation.</p>
            <div className="relative mt-10 border-t border-background/20 pt-7">
              <a href={callLink} className="flex items-center gap-3 text-lg font-bold hover:text-accent"><Phone className="size-5 text-accent" />{phoneDisplay}</a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-background/85 underline decoration-accent underline-offset-4 hover:text-accent">Message us on WhatsApp <ArrowRight className="size-4" /></a>
            </div>
          </div>
          <div className="p-7 sm:p-10 lg:p-14"><ContactForm /></div>
        </div>
      </section>

      <section className="bg-[#f2ece3] py-20 md:py-28">
        <div className="container-shell max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 h-px w-16 bg-accent" />
            <h2 className="display-title text-3xl sm:text-4xl md:text-5xl">What Will You Learn in Our Culinary Courses?</h2>
          </div>
          <div className="mt-12 border border-border-subtle bg-background px-6 py-8 sm:px-9 sm:py-10">
            <p className="max-w-5xl text-sm leading-8 text-muted md:text-base">At Entrain Academy, our culinary courses help students develop professional cooking skills through hands-on training. Our week-long courses include Shawarma, Shawai &amp; Al Faham, Fried Chicken, Arabian Cuisine, and Cakes &amp; Pastries. We also offer one-day workshops in Pizza &amp; Burgers, Loaded Fries &amp; Mojitos, and Desserts. Some one-day workshops are demonstration based; check each course page for its format.</p>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="border-t-2 border-accent bg-background/70 px-6 py-7 sm:px-8">
              <p className="text-sm leading-8 text-muted md:text-base">Our experienced chefs first demonstrate each recipe, followed by practical sessions in hands-on courses where students prepare dishes independently under expert supervision. Mistakes are corrected, and students can practise repeatedly until they master each technique.</p>
            </div>
            <div className="border-t-2 border-accent bg-background/70 px-6 py-7 sm:px-8">
              <p className="text-sm leading-8 text-muted md:text-base">Students learn chicken cutting, marination, food preparation, step-by-step cooking methods and creative food presentation, supported by theoretical lessons. Training also covers kitchen hygiene, food safety, professional kitchen behaviour and equipment handling.</p>
            </div>
            <div className="border-t border-border-subtle bg-background/70 px-6 py-7 sm:px-8">
              <p className="text-sm leading-8 text-muted md:text-base">Whether you plan to start a restaurant, upgrade your existing menu, pursue a culinary career or improve your home cooking skills, our courses provide essential practical knowledge.</p>
            </div>
            <div className="border-t border-border-subtle bg-background/70 px-6 py-7 sm:px-8">
              <p className="text-sm leading-8 text-muted md:text-base">We also offer recipe guides, business consultation and placement support to help students work toward their culinary and business goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl"><h2 className="display-title text-3xl sm:text-4xl md:text-5xl">How You Learn in Our Kitchen</h2><p className="mt-6 text-sm leading-8 text-muted md:text-base">Learning at Entrain begins with real cooking practice. Experienced chefs demonstrate each technique before students try it themselves. Students can practise everything from cutting and marination to cooking and plating, with feedback and individual attention along the way.</p></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="relative min-h-80 overflow-hidden rounded-xl sm:min-h-[480px]"><Image src="/images/testimonials/newworkshop.png" alt="Entrain Academy students celebrating after culinary training in the academy kitchen" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
            <div className="flex flex-col justify-center rounded-xl bg-primary p-7 text-background sm:p-8"><h3 className="font-serif text-2xl">Demonstrate. Prepare. Practise. Refine.</h3><p className="mt-4 text-sm leading-7 text-background/75">Work with modern commercial equipment, learn safe kitchen routines and receive direct feedback from chefs. Food costing and business guidance help connect each recipe to real kitchen work.</p></div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">{steps.map(([number, heading, copy]) => <div key={number} className="border-t-2 border-accent bg-[#f2ece3] p-6"><span className="font-serif text-3xl text-accent">{number}</span><h3 className="mt-4 font-serif text-xl font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-7 text-muted">{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#f2ece3] py-20 md:py-28">
        <div className="container-shell"><div className="mb-14 grid gap-7 rounded-xl bg-[#e8dfd0] p-7 text-primary sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-10 lg:p-12"><p className="font-serif text-2xl leading-snug sm:text-3xl">Wondering how to find the <Link href="/" className="text-primary underline decoration-accent underline-offset-4 hover:text-accent">best culinary academy in India</Link> for hands-on training?</p><p className="border-t border-primary/20 pt-6 text-sm leading-8 text-muted md:text-base lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">The answer depends on your goal, so compare hands-on hours, who teaches, what the fees include and what the certificate means. At Entrain Academy, you cook in a working kitchen with chef-instructors, and we help students from other states with food and stay.</p></div><h2 className="display-title text-3xl sm:text-4xl md:text-5xl">Professional Chef Training</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-muted">Learn with chefs who bring real commercial kitchen experience to every demonstration and practical session.</p>
          <div className="mt-11 grid gap-6 md:grid-cols-2">
            <article className="grid overflow-hidden rounded-xl bg-background shadow-sm sm:grid-cols-[.42fr_.58fr]"><div className="relative min-h-72"><Image src="/images/testimonials/chefakhil.jpeg" alt="Chef Akhil at the grill" fill sizes="(max-width: 640px) 100vw, 30vw" className="object-cover object-[center_22%]" /></div><div className="p-7 sm:p-8"><h3 className="font-serif text-2xl font-bold text-primary">Chef Akhil</h3><p className="mt-4 text-sm leading-7 text-muted">Chef Akhil brings seven years of industry experience and two years of academic experience. His areas of focus span Continental, South Indian and American cuisine. He helps students understand preparation, technique and kitchen workflow while building confidence through guided practice.</p><p className="mt-5 border-t border-border-subtle pt-4 text-xs font-bold text-primary">7 years industry · 2 years academic experience</p></div></article>
            <article className="grid overflow-hidden rounded-xl bg-background shadow-sm sm:grid-cols-[.42fr_.58fr]"><div className="relative min-h-72"><Image src="/images/testimonials/chef_sharafali.jpg" alt="Chef Sharafali in professional chef attire" fill sizes="(max-width: 640px) 100vw, 30vw" className="object-cover object-[center_18%]" /></div><div className="p-7 sm:p-8"><h3 className="font-serif text-2xl font-bold text-primary">Chef Sharafali</h3><p className="mt-4 text-sm leading-7 text-muted">Chef Sharafali has 19 years of industry experience with a focus on Arabic cuisine. He shares practical knowledge of flavours, preparation and commercial cooking methods, showing students how professional kitchen techniques are applied in real food service.</p><p className="mt-5 border-t border-border-subtle pt-4 text-xs font-bold text-primary">19 years industry experience · Arabic cuisine</p></div></article>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28"><div className="container-shell"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="display-title text-3xl sm:text-4xl md:text-5xl">Hear it from our students.</h2><a href="https://www.youtube.com/@EntrainAcademy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-accent underline-offset-4 hover:text-accent">Visit our YouTube channel <ArrowRight className="size-4" /></a></div><p className="mt-5 max-w-2xl text-sm leading-7 text-muted">From first-time learners to food business owners, students share how practical teaching helped them build skills they could use. Watch their first-hand stories below.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Muneer", "I learned the correct procedures, including marination and refrigeration times. The supportive staff and approachable chef made it a wonderful learning experience.", "https://www.instagram.com/reel/DZiArEposzb/"],
            ["Rashid", "After the Fried Chicken course, I added the products to my shop and received a good response. I returned for the dessert course so I can expand my menu further.", "https://www.instagram.com/reel/DWl-P9ECFaF/"],
            ["Mohammed Muthahir", "A very good experience with a great environment, a talented chef and accommodation. I recommend this course to anyone planning to start a food business.", "https://www.instagram.com/reel/DafsIoZIpqb/"],
          ].map(([name, quote, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between rounded-xl border border-border-subtle bg-[#f2ece3] p-7 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"><div><Play className="size-8 text-accent" aria-hidden="true" /><blockquote className="mt-6 font-serif text-lg leading-8 text-primary">“{quote}”</blockquote></div><div className="mt-7 flex items-center justify-between border-t border-border-subtle pt-5"><span className="text-sm font-bold text-primary">{name}</span><span className="inline-flex items-center gap-1 text-xs font-bold text-accent">Watch video <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div></a>)}
        </div></div></section>

      <section className="bg-[#e8dfd0] py-20 md:py-28"><div className="container-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"><div><h2 className="display-title text-3xl sm:text-4xl md:text-5xl">Frequently asked questions</h2><p className="mt-5 text-sm leading-7 text-muted">Have another question? Our team can help you choose a course and confirm the details of your batch.</p><a href={callLink} className="mt-7 inline-flex items-center gap-2 font-bold text-primary hover:text-accent"><Phone className="size-4" />{phoneDisplay}</a></div><div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-border-subtle bg-background px-5 sm:px-7"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-primary [&::-webkit-details-marker]:hidden"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-accent transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pb-6 text-sm leading-7 text-muted">{answer}</p></details>)}</div></div></section>

      <section className="bg-dark-section py-16 text-background md:py-20"><div className="container-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Your next step starts in the kitchen.</h2><p className="mt-3 flex items-center gap-2 text-sm text-background/70"><MapPin className="size-4 text-accent" />Manjeri, Malappuram, Kerala</p></div><Link href="#enquire" className={cn(buttonVariants({ size: "lg" }), "self-start md:self-auto")}>Enquire now <ArrowRight className="size-4" /></Link></div></section>
    </InnerPage>
  );
}
