"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { callLink } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { courseDetails } from "@/lib/courses";
import oneWeekImage from "@/public/images/oneweek.jpg";
import oneDayImage from "@/public/images/oneday.jpg";

const categories = [
  {
    id: "one-week",
    title: "One Week Workshops",
    image: oneWeekImage,
    courseSlugs: ["master-one-week-course", "shawarma-shawai", "arabian-cuisine-masterclass", "cake-pastry-workshop"],
  },
  {
    id: "one-day",
    title: "One Day Workshops",
    image: oneDayImage,
    courseSlugs: ["fried-chicken-masterclass", "dessert-workshop", "pizza-burger-workshop", "loaded-fries-mojito-workshop"],
  },
];

export function CourseCategories() {
  const [selected, setSelected] = useState(null);
  const category = categories.find((item) => item.id === selected);
  const courses = category?.courseSlugs.map((slug) => courseDetails.find((course) => course.slug === slug)).filter(Boolean);

  return (
    <section className="pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="container-shell">
        {!category ? (
          <div>
            <h1 className="display-title mb-8 text-4xl sm:text-5xl md:mb-10">Explore our workshops.</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {categories.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.06} className="h-full">
                  <button
                    type="button"
                    onClick={() => setSelected(item.id)}
                    className="group relative flex min-h-[28rem] w-full overflow-hidden rounded-xl border border-border-subtle bg-primary text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_35px_rgba(15,31,48,.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:min-h-[34rem]"
                    aria-label={`View ${item.title}`}
                  >
                    <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" loading={index === 0 ? "eager" : "lazy"} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#0f1f30]/95 via-[#0f1f30]/35 to-[#0f1f30]/10" />
                    <span className="relative mt-auto flex w-full items-end justify-between gap-4 p-7 text-white sm:p-9">
                      <span>
                        <span className="mb-3 block text-xs font-extrabold uppercase tracking-[0.18em] text-[#e6bd7c]">{item.courseSlugs.length} workshops</span>
                        <span className="block font-serif text-3xl font-bold leading-tight sm:text-4xl">{item.title}</span>
                      </span>
                      <ArrowRight className="mb-1 size-6 shrink-0 text-[#e6bd7c] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center gap-5 border-t border-border-subtle pt-8 text-center">
              <Image src="/images/workshop-guidance.svg" alt="" width={160} height={120} className="mb-1" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary">Not sure which workshop to choose?</h2>
                <p className="mt-2 text-sm leading-6 text-muted">Talk with our team and find the right place to start.</p>
              </div>
              <Link href={callLink} className={buttonVariants({ variant: "outline" })}>
                <Phone className="size-4" aria-hidden="true" /> Call Us
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <button type="button" onClick={() => setSelected(null)} aria-label="Back to workshop categories" className="mb-6 inline-flex min-h-11 items-center text-primary transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <ArrowLeft className="size-5" aria-hidden="true" />
            </button>
            <h1 className="display-title mb-8 text-4xl sm:text-5xl md:mb-10">{category.title}</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {courses.map((course) => (
                <div key={course.slug} className="h-full">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-[#f2ece3] transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_35px_rgba(15,31,48,.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex min-h-44 flex-1 flex-col justify-between p-6 sm:p-8">
                      <h3 className="font-serif text-2xl font-bold leading-tight text-primary transition-colors group-hover:text-accent sm:text-3xl">{course.title}</h3>
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <span className="flex items-center gap-2 text-sm font-semibold text-muted"><Clock3 className="size-4 text-accent" aria-hidden="true" />{course.duration}</span>
                        <ArrowRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
