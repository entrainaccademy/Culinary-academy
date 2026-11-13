import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { InnerPage } from "@/components/inner-page";
import { JsonLd } from "@/components/json-ld";
import { callLink, phoneDisplay, siteUrl, whatsappNumber } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

const path = "/bakery-pastry-course";
const title = "Professional Bakery & Pastry Chef Course Malappuram, Kerala | Entrain Academy";
const description = "Explore professional bakery and pastry training at Entrain Academy, Malappuram Kerala. Learn cakes, breads and desserts through practical workshops. Enquire today.";

export const metadata = {
  title: { absolute: title },
  description,
  keywords: ["professional bakery and pastry chef courses", "bakery pastry course Malappuram", "baking classes Kerala"],
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: `${siteUrl}${path}`,
    images: [{ url: "/images/bakerypage-cake.jpg", alt: "Finished cake for bakery and pastry training" }],
  },
};

const syllabusLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Entrain Academy, please send me the syllabus for your bakery and pastry courses.")}`;

const learning = [
  ["Cakes and Brownies", "Sponge preparation, brownie variations and finishing techniques."],
  ["Breads and Doughs", "Dough preparation, fermentation and baking methods."],
  ["Cookies and Baked Products", "Mixing, shaping, baking and texture control."],
  ["Desserts and Pastries", "Cheesecakes, tiramisu, macarons and other specialized desserts."],
  ["Creams and Finishing", "Ganache, fillings, frosting and presentation techniques."],
  ["Practical Baking Skills", "Ingredient measurements, equipment handling and temperature control."],
];

const posters = [
  {
    title: "Cakes & brownies", image: "/images/bakerypage-cake&brownimakingimg.jpg",
    products: "Sponge cakes · Brownie variations", techniques: "Mixing · Baking · Finishing", skills: "Texture control · Presentation",
  },
  {
    title: "Breads & doughs", image: "/images/bakery-img.jpg",
    products: "Breads · Baked products", techniques: "Dough preparation · Fermentation", skills: "Shaping · Oven handling",
  },
  {
    title: "Desserts & pastry", image: "/images/bakerypage-dessert.jpg",
    products: "Cheesecake · Tiramisu · Macarons", techniques: "Creams · Fillings · Frosting", skills: "Finishing · Plating",
  },
];

const faqs = [
  ["Are bakery and pastry courses worth it for beginners?", "Bakery and pastry courses can be valuable for beginners who want structured learning, practical experience and guidance from experienced chefs. Before enrolling, compare the syllabus, training format, duration and fees to ensure the course matches your expectations."],
  ["How much do the courses cost, and what is included?", "At Entrain Academy, fees vary by duration and training type. One-day courses start from ₹8,000, and one-week courses start from ₹27,000. Both include hands-on practical training under experienced chefs, covering essential techniques and food preparation skills. A certificate is provided upon successful completion of these courses. Confirm the exact inclusions for your chosen workshop before enrolling."],
  ["Can I visit or try a class before enrolling?", "Yes. You can visit the academy and see the kitchen before enrolling. Contact our team to arrange a visit and ask about opportunities to observe a class."],
  ["What is your refund or cancellation policy?", "A small advance booking amount is required to confirm enrolment. The remaining fee can be paid according to the academy's payment instructions. Entrain Academy does not offer refunds for course bookings or payments made. Please review the cancellation terms before confirming your enrolment, and contact the academy for details."],
  ["Are your classes online or in person?", "Classes are in person in our working kitchen in Manjeri. Baking and pastry require real practice with ovens, doughs and tools, so we focus on hands-on learning."],
  ["Will I get hands-on baking practice or only watch chef demonstrations?", "Entrain Academy offers practical, chef-guided bakery training where students can learn preparation methods and practise techniques. The balance of hands-on activities and demonstrations varies by workshop, so confirm the format before enrolling."],
  ["Can a short-term bakery course help me become a professional pastry chef?", "A short-term course can help you develop specific baking and pastry skills. Becoming a professional pastry chef generally requires broader knowledge, repeated practice and experience in a commercial kitchen."],
  ["Can I start a home bakery after completing a bakery and pastry course?", "A bakery course can help you develop recipes and practical baking skills for a home bakery. Starting a business also requires ingredient costing, pricing, food safety compliance, equipment planning and marketing."],
  ["What should I check before paying bakery and pastry course fees?", "Check the syllabus, practical training hours, instructor experience and whether ingredients, equipment, certificates, meals and accommodation are included. Understanding the total cost helps you compare courses accurately."],
  ["Will I receive a certificate and placement support after completing the course?", "Certificate availability depends on the selected program. Entrain Academy offers placement support to help eligible students explore employment opportunities, but job placement is not guaranteed. Confirm the certificate and support included in your course."],
  ["I live in another state. Can I still join?", "Yes. Students travel to Manjeri from other states. We can help you find food and accommodation near the academy. The nearest major connections are Kozhikode Railway Station and Calicut International Airport."],
];

export default function BakeryPastryCoursePage() {
  return (
    <InnerPage>
      <JsonLd data={breadcrumbSchema([{ name: "Bakery and Pastry Course", path }])} />
      <section className="relative overflow-hidden bg-[#f2ece3] pt-28 text-primary md:pt-32">
        <div className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-shell relative grid min-h-[570px] items-center gap-10 py-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-[clamp(2.65rem,5.5vw,5.15rem)] leading-[1.08] tracking-[-.045em]">Professional Bakery and Pastry <span className="text-accent">Chef Course</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">Explore professional bakery and pastry chef courses through practical, chef-guided workshops. Learn the techniques behind cakes, breads and desserts in our Manjeri kitchen.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#explore-courses" className="inline-flex min-h-13 items-center gap-3 rounded-full bg-accent px-6 text-sm font-bold text-dark-section transition hover:bg-[#c39653] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Explore courses <ArrowRight className="size-4" /></Link>
              <Link href="#enquire" className="inline-flex min-h-13 items-center rounded-full border border-primary/40 px-6 text-sm font-bold text-primary transition hover:bg-primary hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Enquire now</Link>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-border-subtle shadow-[0_25px_65px_rgba(27,58,92,.15)] sm:min-h-[500px] lg:h-full">
            <Image src="/images/bakerypage-cake.jpg" alt="Finished cake for bakery and pastry training" fill sizes="(max-width: 1024px) 100vw, 45vw" priority className="object-cover object-[center_60%]" />
          </div>
        </div>
      </section>

      <section id="explore-courses" className="bg-[#f2ece3] py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl"><h2 className="display-title text-3xl sm:text-4xl md:text-5xl">Explore Our Bakery and Pastry Courses</h2><p className="mt-5 text-sm leading-7 text-muted md:text-base">Start with a focused workshop or explore longer training. Ask us for the latest syllabus, format and available batches.</p></div>
          <div className="mt-11 grid gap-6 lg:grid-cols-2">
            <Link href="/courses/cake-pastry-workshop" className="group flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-background shadow-[0_10px_30px_rgba(15,31,48,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,31,48,.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              <div className="relative aspect-[16/10] overflow-hidden"><Image src="/images/pastry-course-wide.png" alt="Freshly baked pastries with cream and fruit toppings" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" /></div>
              <div className="flex min-h-52 flex-1 flex-col p-7 sm:p-8"><h3 className="font-serif text-2xl font-bold text-primary sm:text-3xl">Bakery &amp; Pastry Course</h3><p className="mt-3 text-sm leading-7 text-muted">Explore our Cake &amp; Pastry Workshop and learn about the practical training.</p><span className="mt-auto inline-flex items-center gap-2 border-t border-border-subtle pt-5 text-sm font-bold text-primary">Explore course <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" /></span></div>
            </Link>
            <Link href="/courses/bakery-pastry-diploma" className="group flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-background shadow-[0_10px_30px_rgba(15,31,48,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,31,48,.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              <div className="relative aspect-[16/10] overflow-hidden"><Image src="/images/bakery-diploma-wide.png" alt="Pastry chef decorating a cake" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" /></div>
              <div className="flex min-h-52 flex-1 flex-col p-7 sm:p-8"><h3 className="font-serif text-2xl font-bold text-primary sm:text-3xl">Advanced Diploma in Bakery, Pastry &amp; Artisan Bread</h3><p className="mt-3 text-sm leading-7 text-muted">Explore the longer training pathway and ask about enrolment.</p><span className="mt-auto inline-flex items-center gap-2 border-t border-border-subtle pt-5 text-sm font-bold text-primary">Explore diploma <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" /></span></div>
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-6 rounded-xl bg-primary p-7 text-background sm:p-9 md:flex-row md:items-center md:justify-between"><div><h3 className="font-serif text-2xl sm:text-3xl">Find the right workshop.</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-background/80">Our team can help you compare short courses, practical formats and fees.</p></div><a href={syllabusLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-accent px-6 text-sm font-bold text-dark-section transition hover:bg-[#c39653] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:self-auto">Get course syllabus <ArrowRight className="size-4" /></a></div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell">
          <div className="max-w-3xl">
            <h2 className="display-title text-3xl sm:text-4xl md:text-5xl">What Will You Learn in Our Bakery and Pastry Courses?</h2>
            <p className="mt-6 text-sm leading-7 text-muted md:text-base">Depending on the selected workshop, training may cover:</p>
          </div>
          <div className="mt-11 grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
            <div className="relative min-h-[360px] overflow-hidden rounded-xl lg:min-h-full">
              <Image src="/images/bakerypage-bread.jpg" alt="Assortment of breads showing bakery techniques and baked products" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" />
            </div>
            <div className="border-t border-border-subtle">
              {learning.map(([heading, copy], index) => (
                <div key={heading} className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-border-subtle py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-7 sm:py-6">
                  <span className="font-serif text-2xl leading-tight text-accent sm:text-3xl">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3 className="font-serif text-xl font-bold text-primary sm:text-2xl">{heading}</h3><p className="mt-2 text-sm leading-7 text-muted">{copy}</p></div>
                </div>
              ))}
              <p className="pt-6 text-sm italic leading-7 text-muted">The exact recipes and techniques vary by course.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2ece3] py-20 md:py-28">
        <div className="container-shell"><div className="max-w-3xl"><h2 className="display-title text-3xl sm:text-4xl md:text-5xl">Products, techniques and practical skills</h2><p className="mt-5 text-sm leading-7 text-muted md:text-base">A closer look at the areas you can explore. Your chosen workshop syllabus confirms the recipes and hands-on activities.</p></div>
          <div className="mt-11 grid gap-6 md:grid-cols-3">{posters.map((poster) => <article key={poster.title} className="overflow-hidden rounded-xl bg-background shadow-[0_10px_30px_rgba(15,31,48,.07)]"><div className="relative aspect-[4/4.5] overflow-hidden"><Image src={poster.image} alt={`${poster.title} bakery and pastry training`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /><div className="absolute inset-0 bg-linear-to-t from-dark-section/90 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-background"><h3 className="font-serif text-3xl">{poster.title}</h3></div></div><dl className="space-y-4 p-6 text-sm"><div><dt className="font-bold text-primary">Products</dt><dd className="mt-1 leading-6 text-muted">{poster.products}</dd></div><div className="border-t border-border-subtle pt-4"><dt className="font-bold text-primary">Techniques</dt><dd className="mt-1 leading-6 text-muted">{poster.techniques}</dd></div><div className="border-t border-border-subtle pt-4"><dt className="font-bold text-primary">Practical skills</dt><dd className="mt-1 leading-6 text-muted">{poster.skills}</dd></div></dl></article>)}</div>
        </div>
      </section>

      <section id="enquire" className="bg-[#e8dfd0] py-20 md:py-28">
        <div className="container-shell grid overflow-hidden rounded-xl border border-border-subtle shadow-[0_20px_65px_rgba(15,31,48,.08)] lg:grid-cols-[.82fr_1.18fr]">
          <div className="bg-[#ead9bd] p-8 text-primary sm:p-12 lg:p-14">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Get Course Syllabus</h2>
            <p className="mt-5 text-sm leading-7 text-primary/75">Tell us what you want to learn. We can share the relevant syllabus and confirm batch dates, fees and practical training details.</p>
            <a href={syllabusLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-background transition hover:bg-dark-section">Request syllabus on WhatsApp <ArrowRight className="size-4" /></a>
            <div className="mt-9 border-t border-primary/20 pt-7">
              <a href={callLink} className="inline-flex items-center gap-3 text-lg font-bold hover:text-dark-section"><Phone className="size-5 text-accent" />{phoneDisplay}</a>
              <p className="mt-4 flex items-center gap-2 text-sm text-primary/70"><MapPin className="size-4 text-accent" />Manjeri, Malappuram, Kerala</p>
            </div>
          </div>
          <div className="bg-[#f5efe6] p-7 sm:p-10 lg:p-14">
            <h3 className="mb-7 font-serif text-2xl text-primary">Ask us about a course</h3>
            <ContactForm defaultCourse="Professional Bakery and Pastry Chef Course" lightFields />
          </div>
        </div>
      </section>

      <section className="bg-[#e8dfd0] py-20 md:py-28"><div className="container-shell"><h2 className="display-title mx-auto max-w-3xl text-center text-3xl sm:text-4xl md:text-5xl">Frequently asked questions</h2><div className="mt-12 grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"><div><p className="text-sm leading-7 text-muted">Need help choosing a workshop? Our team can confirm the details of your selected course.</p><a href={callLink} className="mt-7 inline-flex items-center gap-2 font-bold text-primary hover:text-accent"><Phone className="size-4" />{phoneDisplay}</a></div><div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-border-subtle bg-background px-5 sm:px-7"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-primary [&::-webkit-details-marker]:hidden"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-accent transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pb-6 text-sm leading-7 text-muted">{answer}</p></details>)}</div></div></div></section>

      <section className="bg-dark-section py-16 text-background md:py-20"><div className="container-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Your baking journey starts here.</h2><p className="mt-3 text-sm text-background/70">Explore the right bakery and pastry workshop for your goals.</p></div><Link href="#enquire" className="inline-flex min-h-12 items-center gap-2 self-start bg-accent px-6 text-sm font-bold text-dark-section transition hover:bg-[#c39653] md:self-auto">Enquire now <ArrowRight className="size-4" /></Link></div></section>
    </InnerPage>
  );
}
