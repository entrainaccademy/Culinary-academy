import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { InnerPage, PageHero } from "@/components/inner-page";
import { Reveal } from "@/components/reveal";
import { courseDetails } from "@/lib/courses";

export const metadata = {
  title: "Courses",
  description: "Explore culinary courses and workshops at Entrain Culinary Academy in Manjeri, Kerala.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <InnerPage>
      <PageHero compact eyebrow="Programs & workshops" title="Choose your learning path." />
      <section className="pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {courseDetails.map((course) => (
              <Reveal key={course.slug} delay={0.06} className="h-full">
                <Link
                  href={`/courses/${course.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-[#f2ece3] transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_35px_rgba(15,31,48,.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex min-h-44 flex-1 flex-col justify-between p-6 sm:p-8">
                    <h2 className="font-serif text-2xl font-bold leading-tight text-primary transition-colors group-hover:text-accent sm:text-3xl">{course.title}</h2>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="flex items-center gap-2 text-sm font-semibold text-muted"><Clock3 className="size-4 text-accent" />{course.duration}</span>
                      <ArrowRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
