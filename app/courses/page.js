import Image from "next/image";
import { Award, Check, Clock3 } from "lucide-react";
import { ContactCta, InnerPage, PageHero } from "@/components/inner-page";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Courses",
  description: "One-day culinary workshops and intensive programs for food entrepreneurs and hospitality career seekers.",
};

const courseDetails = [
  {
    title: "Dessert One-Day Workshop",
    category: "One-Day Workshop",
    duration: "1 day",
    image: "/images/dessert.png",
    highlights: ["Expert guidance", "Live demonstration", "Beginner-friendly training", "Certificate provided"],
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
    highlights: ["Certificate provided", "Commercial techniques", "Machinery awareness", "Business insight"],
    groups: [["Topics Covered", ["Fried Chicken", "Broasted Chicken", "Zinger Burger", "Versatile Sauces", "Loaded Fries", "Crispy Coating Secrets", "Perfect Frying Techniques", "Business Tips & Machinery Awareness"]]],
  },
  {
    title: "Master 1-Week Course Training",
    category: "Intensive Program",
    duration: "1 week",
    image: "/images/cooking.jpg",
    highlights: ["Accommodation included", "Food included", "Certificate provided", "Hands-on training"],
    groups: [["Topics Covered", ["Broast", "Fried Chicken", "Zinger Burger", "Wraps", "Loaded Fries", "Popcorn Chicken", "Types of Sandwich", "Mojitos"]]],
  },
  {
    title: "Professional Shawarma & Shawai",
    category: "Intensive Program",
    duration: "5 days",
    image: "/images/shawarmastand.jpg",
    highlights: ["Accommodation included", "Food included", "Certificate provided", "Fully hands-on training"],
    groups: [["Training Includes", ["4 Types of Shawarma", "3 Types of Shawai", "Fully Hands-On Training", "5-Day Intensive Class"]]],
  },
];

const benefits = ["Test whether a food business is the right decision", "Learn from experienced industry professionals", "Solve common operational challenges", "Understand food-industry marketing strategies", "Use modern commercial kitchen equipment", "Develop hotel and restaurant career skills", "Learn in a multilingual environment", "Build a strong foundation for culinary growth"];

export default function CoursesPage() {
  return (
    <InnerPage>
      <PageHero eyebrow="Programs & workshops" title="Practical training for the kitchen, the career and the business." copy="Programs designed for aspiring entrepreneurs, existing business owners and candidates preparing for professional hospitality opportunities." />

      <section className="py-20 md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal><p className="eyebrow">Who these courses are for</p><h2 className="display-title mt-4 text-3xl md:text-5xl">Training that meets you where you are.</h2><p className="mt-6 text-sm leading-7 text-muted">Whether you are validating a business idea, improving an existing operation or preparing for employment, the focus stays practical and commercial.</p></Reveal>
          <Reveal delay={0.08}><div className="grid gap-3 sm:grid-cols-2">{["Aspiring food entrepreneurs", "Existing business owners", "Future restaurant, café or bakery founders", "Hospitality career candidates", "Hotel and restaurant job seekers", "Culinary skill-builders"].map((item) => <div key={item} className="flex min-h-20 items-center gap-4 border border-border-subtle bg-[#f2ece3] p-5"><Check className="size-4 shrink-0 text-accent" /><p className="text-sm font-bold text-primary">{item}</p></div>)}</div></Reveal>
        </div>
      </section>

      <section className="bg-dark-section py-20 text-background md:py-24"><div className="container-shell"><Reveal><p className="eyebrow">Benefits of training</p><h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-5xl">Confidence comes from understanding the work.</h2></Reveal><div className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">{benefits.map((item, index) => <Reveal key={item} delay={(index % 2) * 0.05}><div className="flex gap-4 border-b border-background/10 pb-5"><span className="font-serif text-accent">0{index + 1}</span><p className="text-sm leading-6 text-background/65">{item}</p></div></Reveal>)}</div><Reveal><p className="mt-10 max-w-3xl text-sm italic leading-7 text-background/45">With dedication, practice and continuous skill development, customers can build the expertise required to pursue professional culinary careers.</p></Reveal></div></section>

      <section className="py-20 md:py-28">
        <div className="container-shell"><Reveal><p className="eyebrow">Course catalogue</p><h2 className="display-title mt-4 text-3xl md:text-5xl">Choose your learning path.</h2></Reveal>
          <div className="mt-14 space-y-10">
            {courseDetails.map((course, courseIndex) => (
              <Reveal key={course.title}>
                <article className="overflow-hidden rounded-[12px] border border-border-subtle bg-[#f2ece3] lg:grid lg:grid-cols-[.86fr_1.14fr]">
                  <div className="relative min-h-72 lg:min-h-full">
                    {/* TEMP IMAGE - replace with client photo */}
                    <Image src={course.image} alt={course.title} fill sizes="(max-width: 1024px) 100vw, 43vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-section/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-background"><p className="eyebrow">{course.category}</p><div className="flex items-center gap-2 text-xs font-bold"><Clock3 className="size-4 text-accent" />{course.duration}</div></div>
                  </div>
                  <div className="p-6 sm:p-9 lg:p-11">
                    <span className="text-xs font-bold text-accent">0{courseIndex + 1}</span><h3 className="mt-2 font-serif text-3xl font-bold text-primary">{course.title}</h3>
                    <div className="mt-6 flex flex-wrap gap-2">{course.highlights.map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-background px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-primary"><Award className="size-3 text-accent" />{item}</span>)}</div>
                    <div className="mt-8 space-y-7">{course.groups.map(([title, items]) => <div key={title}><h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">{title}</h4><div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">{items.map((item) => <div key={item} className="flex gap-3 text-sm text-muted"><Check className="mt-0.5 size-4 shrink-0 text-accent" />{item}</div>)}</div></div>)}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactCta title="Find the course that fits your ambition." />
    </InnerPage>
  );
}
