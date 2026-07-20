import Image from "next/image";
import { Check, ChevronDown, Clock3, Compass, CookingPot, Sprout, Users } from "lucide-react";
import { ContactCta, InnerPage, PageHero } from "@/components/inner-page";
import { Reveal } from "@/components/reveal";
import { CourseApplication } from "@/components/course-application";

export const metadata = {
  title: "Courses",
  description: "One-day culinary workshops and intensive programs for food entrepreneurs and hospitality career seekers.",
};

const courseDetails = [
  {
    title: "Advanced Diploma in Bakery, Pastry & Artisan Bread",
    category: "Upcoming Program",
    duration: "12 months",
    durationDetail: "One year",
    image: "/images/tiramisuimg.webp",
    groups: [
      ["Program Structure", ["6 months of advanced bakery, pastry and artisan bread training", "6 months of industrial internship"]],
      ["Eligibility", ["Minimum Education — SSLC / 10th Standard pass or equivalent", "Minimum Age — 16 years", "Language Ability — Basic understanding of English or Malayalam", "Interest — Genuine interest in bakery, pastry, artisan bread or food business", "Physical Fitness — Medically fit to work in a commercial kitchen", "Experience — No previous bakery or culinary experience required"]],
    ],
  },
  {
    title: "Dessert One-Day Workshop",
    category: "One-Day Workshop",
    duration: "1 day",
    image: "/images/dessert.webp",
    groups: [
      ["Canned & Jar Desserts", ["Mango Cream Delight", "Chocolate Biscuit Mousse Jar", "Banana Caramel Crunch Cup", "Dulce Kulfi Dessert"]],
      ["Tiramisu Masterclass", ["Coffee Chocolate Tiramisu", "Mango Tiramisu", "Biscoff Tiramisu", "Classic Italian Tiramisu", "Nutella Tiramisu"]],
      ["Middle Eastern Fusion", ["Qashtuta", "Heba Cake", "Salankatia", "Koushri", "Cheese Bomb Dessert"]],
    ],
  },
  {
    title: "Fried Chicken Master Class",
    category: "One-Day Workshop",
    duration: "1 day",
    image: "https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&w=1600",
    groups: [["Topics Covered", ["Fried Chicken", "Broasted Chicken", "Zinger Burger", "Versatile Sauces", "Loaded Fries", "Crispy Coating Secrets", "Perfect Frying Techniques", "Business Tips & Machinery Awareness"]]],
  },
  {
    title: "Master 1-Week Course Training",
    category: "Intensive Program",
    duration: "1 week",
    image: "/images/cooking.webp",
    groups: [["Topics Covered", ["Broast", "Fried Chicken", "Zinger Burger", "Wraps", "Loaded Fries", "Popcorn Chicken", "Types of Sandwich", "Mojitos"]]],
  },
  {
    title: "Professional Shawarma & Shawai",
    category: "Intensive Program",
    duration: "5 days",
    image: "/images/shawarmastand.jpg",
    groups: [["Training Includes", ["4 Types of Shawarma", "3 Types of Shawai", "Fully Hands-On Training", "5-Day Intensive Class"]]],
  },
];

const benefits = ["Test whether a food business is the right decision", "Learn from experienced industry professionals", "Use modern commercial kitchen equipment", "Build a strong foundation for culinary growth"];
const benefitIcons = [Compass, Users, CookingPot, Sprout];

export default function CoursesPage() {
  return (
    <InnerPage>
      <PageHero compact eyebrow="Programs & workshops" title="Practical training for the kitchen, the career and the business." />

      <section className="relative overflow-hidden bg-dark-section py-16 text-background md:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full border border-accent/10" />
        <div className="container-shell relative">
          <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Who these courses are for</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">Training that meets you where you are.</h2>
              <span className="mx-auto mt-7 block size-16 bg-accent mask-[url('/images/culinary-audience-icon.png')] mask-center mask-no-repeat mask-contain md:size-20" aria-hidden="true" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 grid border-y border-background/15 sm:grid-cols-2 lg:grid-cols-4">
              {["Aspiring food entrepreneurs", "Existing business owners", "Future restaurant, café or bakery founders", "Culinary skill-builders"].map((item, index) => (
                <div key={item} className={`group flex min-h-32 items-center gap-4 border-background/15 px-1 py-6 sm:px-6 lg:px-7 ${index < 3 ? "border-b" : ""} ${index >= 2 ? "sm:border-b-0" : ""} ${index % 2 === 0 ? "sm:border-r" : ""} ${index === 1 ? "lg:border-r" : ""} lg:border-b-0`}>
                  <span className="h-10 w-1 shrink-0 bg-accent/45 transition-all duration-300 group-hover:h-14 group-hover:bg-accent" />
                  <p className="font-serif text-lg leading-7 text-background/85">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2ece3] py-20 md:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Benefits of training</p>
            <h2 className="display-title mt-4 text-3xl md:text-5xl">Confidence comes from understanding the work.</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {benefits.map((item, index) => {
              const Icon = benefitIcons[index];
              return (
                <Reveal key={item} delay={index * 0.06}>
                  <div className="group relative flex min-h-64 flex-col items-center overflow-hidden rounded-t-[7rem] border border-border-subtle bg-background px-4 pb-7 pt-10 text-center shadow-[0_12px_35px_rgba(15,31,48,.05)] transition duration-300 hover:-translate-y-2 hover:border-accent/45 hover:shadow-[0_18px_42px_rgba(15,31,48,.1)] sm:min-h-72 sm:px-6 sm:pt-12">
                    <span className="grid size-14 shrink-0 place-items-center rounded-full border border-accent/35 bg-accent/10 text-accent transition duration-300 group-hover:bg-accent group-hover:text-dark-section"><Icon className="size-6" strokeWidth={1.6} /></span>
                    <div className="my-6 h-8 w-px bg-linear-to-b from-accent/70 to-transparent" />
                    <p className="font-serif text-base leading-6 text-primary sm:text-lg sm:leading-7">{item}</p>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell"><Reveal><p className="eyebrow">Course catalogue</p><h2 className="display-title mt-4 text-3xl md:text-5xl">Choose your learning path.</h2></Reveal>
          <div className="mt-14 space-y-10">
            {courseDetails.map((course, courseIndex) => {
              const topics = course.groups.flatMap(([, items]) => items);
              const previewTopics = topics.slice(0, 4);
              const remainingTopics = topics.slice(4);

              return <Reveal key={course.title}>
                <article className="overflow-hidden rounded-xl border border-border-subtle bg-[#f2ece3] lg:grid lg:grid-cols-[.86fr_1.14fr]">
                  <div className="relative min-h-72 lg:min-h-full">
                    {/* TEMP IMAGE - replace with client photo */}
                    <Image src={course.image} alt={course.title} fill sizes="(max-width: 1024px) 100vw, 43vw" className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-section/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-background"><p className="eyebrow">{course.category}</p><div className="flex items-center gap-2 text-xs font-bold"><Clock3 className="size-4 text-accent" />{course.duration}</div></div>
                  </div>
                  <div className="p-6 sm:p-9 lg:p-11">
                    <span className="text-xs font-bold text-accent">0{courseIndex + 1}</span><h3 className="mt-2 font-serif text-3xl font-bold text-primary">{course.title}</h3>
                    {course.durationDetail && <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-muted"><Clock3 className="size-4 shrink-0 text-accent" />{course.durationDetail}</p>}
                    <div className="mt-7">
                      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">Course includes</p>
                      <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">{previewTopics.map((item) => <div key={item} className="flex gap-3 text-sm text-muted"><Check className="mt-0.5 size-4 shrink-0 text-accent" />{item}</div>)}</div>
                    </div>
                    <details className="group/details mt-8 flex flex-col border-t border-border-subtle">
                      <summary className="order-last flex cursor-pointer list-none items-center justify-between py-5 text-xs font-extrabold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent group-open/details:border-t group-open/details:border-border-subtle [&::-webkit-details-marker]:hidden">
                        <span className="group-open/details:hidden">Show more</span>
                        <span className="hidden group-open/details:inline">Show less</span>
                        <span className="grid size-9 place-items-center rounded-full border border-accent/35 text-accent"><ChevronDown className="size-4 transition-transform duration-300 group-open/details:rotate-180" /></span>
                      </summary>
                      <div className="py-7"><div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">{remainingTopics.map((item) => <div key={item} className="flex gap-3 text-sm text-muted"><Check className="mt-0.5 size-4 shrink-0 text-accent" />{item}</div>)}</div></div>
                    </details>
                    <div className="border-t border-border-subtle pt-6">
                      <CourseApplication courseTitle={course.title} />
                    </div>
                  </div>
                </article>
              </Reveal>
            })}
          </div>
        </div>
      </section>
      <ContactCta title="Find the course that fits your ambition." />
    </InnerPage>
  );
}
