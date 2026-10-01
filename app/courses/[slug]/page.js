import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock3 } from "lucide-react";
import { BrochureDownload } from "@/components/brochure-download";
import { CourseApplication } from "@/components/course-application";
import { ContactCta, InnerPage } from "@/components/inner-page";
import { Reveal } from "@/components/reveal";
import { courseDetails, getCourseBySlug } from "@/lib/courses";

export function generateStaticParams() {
  return courseDetails.map((course) => ({ slug: course.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.description || `${course.title} at Entrain Culinary Academy in Manjeri, Kerala. Duration: ${course.duration}.`,
    alternates: { canonical: `/courses/${course.slug}` },
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <InnerPage>
      <section className="fine-grid pt-28 pb-12 md:pt-32 md:pb-16">
        <Reveal className="container-shell">
          <Link href="/courses" className="inline-flex items-center gap-2 text-xs font-bold text-muted transition hover:text-accent">
            <ArrowLeft className="size-4" /> All courses
          </Link>
          <p className="eyebrow mt-10">{course.category}</p>
          <h1 className="display-title mt-5 max-w-4xl text-4xl sm:text-5xl md:text-6xl">{course.title}</h1>
          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-muted">
            <Clock3 className="size-5 text-accent" /> Duration: {course.duration}
          </p>
        </Reveal>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[.86fr_1.14fr] lg:gap-12">
          <Reveal className="relative min-h-72 overflow-hidden rounded-xl sm:min-h-96 lg:min-h-[34rem]">
            <Image src={course.image} alt={course.title} fill sizes="(max-width: 1024px) 100vw, 43vw" className="object-cover" priority />
          </Reveal>
          <Reveal delay={0.08} className="rounded-xl border border-border-subtle bg-[#f2ece3] p-6 sm:p-9 lg:p-11">
            {course.description && <p className="text-base leading-7 text-muted">{course.description}</p>}
            {course.durationDetail && <p className="mt-5 text-sm font-semibold text-muted">{course.durationDetail}</p>}

            <div className="mt-8 space-y-8">
              {course.groups.map(([heading, items]) => (
                <div key={heading}>
                  <h2 className="font-serif text-2xl font-bold text-primary">{heading}</h2>
                  <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                        <Check className="mt-1 size-4 shrink-0 text-accent" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {course.note && <p className="mt-8 border-t border-border-subtle pt-5 text-sm italic leading-6 text-muted">{course.note}</p>}
            <div className="mt-8 flex flex-wrap gap-3 border-t border-border-subtle pt-6">
              <CourseApplication courseTitle={course.title} />
              {course.brochure && <BrochureDownload courseTitle={course.title} brochureUrl={course.brochure} />}
            </div>
          </Reveal>
        </div>
      </section>
      <ContactCta title="Questions about this course?" />
    </InnerPage>
  );
}
