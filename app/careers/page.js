import {
  Briefcase,
  Check,
  ChevronDown,
  Clock,
  Mail,
} from "lucide-react";
import { InnerPage, PageHero } from "@/components/inner-page";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { siteUrl } from "@/lib/site";
import { breadcrumbSchema, organizationId, postalAddress } from "@/lib/schema";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Entrain Culinary Academy. Apply for open Executive Chef and Bakery Trainer positions.",
  alternates: { canonical: "/careers" },
};

const hrEmail = "hr.entrain@gmail.com";

const jobs = [
  {
    id: "executive-chef-head-academics",
    datePosted: "2026-09-11",
    title: "Executive Chef & Head of Culinary Academics",
    department: "Culinary Academics & Digital Learning",
    type: "Full-Time – Senior Position",
    experience: "7+ years industry (min. 2 yrs senior leadership)",
    responsibilities: [
      "Lead and maintain commercial cooking standards, food safety, and recipe standardization",
      "Develop structured syllabuses, lesson plans, assessments, and academic documentation",
      "Lead online course video lessons and on-camera culinary demonstrations",
      "Plan class schedules, allocate resources, and mentor culinary trainers",
      "Research, design, and pilot new culinary courses",
    ],
    qualifications: [
      "Degree in Culinary Arts, Hotel Management, Food Production, or related field",
      "Minimum 7 years culinary industry experience (min. 2 years in Executive Chef / Head Chef leadership)",
      "Structured culinary teaching, mentoring, or demonstration experience preferred",
      "Clear communication in Malayalam with working proficiency in English",
      "Comfortable with Google Docs, Sheets, and basic LMS tools",
      "Food Safety / HACCP certification is an advantage",
    ],
    skills: [
      "Commercial Cooking & Demonstration",
      "Recipe Standardization & Quality Control",
      "Curriculum & Rubric Development",
      "On-Camera Culinary Presentation",
      "Trainer Leadership & Scheduling",
      "Academic Documentation & Reporting",
      "Digital Tools (Docs, Sheets, LMS)",
    ],
    emailSubject: "Application for Executive Chef & Head of Culinary Academics",
  },
  {
    id: "bakery-chef-trainer",
    datePosted: "2026-09-11",
    title: "Bakery Chef / Bakery Trainer",
    department: "Culinary Academics",
    type: "Full-Time",
    experience: "Professional bakery production & teaching",
    responsibilities: [
      "Conduct hands-on bakery and pastry practical classes and demonstrations",
      "Prepare and maintain standardized bakery recipes, yields, and wastage controls",
      "Support development of bakery modules, lesson plans, and practical assessments",
      "Demonstrate bakery techniques and recipes on camera for digital courses",
      "Maintain ovens, mixers, tools, hygiene standards, and ingredient stock",
    ],
    qualifications: [
      "Diploma / Degree / Certification in Bakery & Pastry Arts, Culinary Arts, or Hotel Management",
      "Strong practical background in commercial bakery and pastry production",
      "Ability to explain baking techniques clearly to students during practical sessions",
      "Clear communication in Malayalam and working knowledge of English",
      "Basic working knowledge of Docs, Sheets, and digital communication",
      "Food Safety / HACCP certification is preferred",
    ],
    skills: [
      "Professional Baking & Pastry Skills",
      "Hands-On Student Training",
      "Recipe Trials & Standardization",
      "Kitchen & Equipment Management",
      "On-Camera Demonstration",
      "Hygiene & Food Safety",
      "Basic Digital Documentation",
    ],
    emailSubject: "Application for Bakery Chef / Bakery Trainer",
  },
];

function listHtml(heading, items) {
  return `<p><strong>${heading}</strong></p><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

const jobSchemas = jobs.map((job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: [
    `<p>${job.title} — ${job.department}, Entrain Culinary Academy, Manjeri, Kerala. Experience: ${job.experience}. Apply by emailing ${hrEmail}.</p>`,
    listHtml("Key Responsibilities", job.responsibilities),
    listHtml("Qualifications & Experience", job.qualifications),
    listHtml("Required Skills", job.skills),
  ].join(""),
  identifier: { "@type": "PropertyValue", name: "Entrain Culinary Academy", value: job.id },
  datePosted: job.datePosted,
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    "@id": organizationId,
    name: "Entrain Culinary Academy",
    sameAs: siteUrl,
    logo: `${siteUrl}/images/logo.webp`,
  },
  jobLocation: {
    "@type": "Place",
    address: postalAddress,
  },
  directApply: false,
  url: `${siteUrl}/careers#${job.id}`,
  skills: job.skills.join(", "),
  qualifications: job.qualifications.join(" "),
  responsibilities: job.responsibilities.join(" "),
  industry: "Culinary Education",
}));

export default function CareersPage() {
  return (
    <InnerPage>
      {jobSchemas.map((schema) => <JsonLd key={schema.identifier.value} data={schema} />)}
      <JsonLd data={breadcrumbSchema([{ name: "Careers", path: "/careers" }])} />
      <PageHero
        compact
        eyebrow="Join our team"
        title="Careers at Entrain Academy"
        copy="Explore open positions for experienced culinary leaders and bakery trainers."
      />

      {/* Open Positions */}
      <section className="pb-16 pt-0 md:pb-24 md:pt-0">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Open positions</p>
                <h2 className="display-title mt-2 text-3xl md:text-5xl">Current openings</h2>
              </div>
              <p className="text-sm font-semibold text-muted">
                {jobs.length} Active {jobs.length === 1 ? "Opening" : "Openings"}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 space-y-8">
            {jobs.map((job, index) => {
              const mailtoLink = `mailto:${hrEmail}?subject=${encodeURIComponent(
                job.emailSubject
              )}&body=${encodeURIComponent(
                `Hello HR Team,\n\nI would like to apply for the position of ${job.title} at Entrain Culinary Academy.\n\nPlease find my resume/portfolio attached.\n\nName:\nPhone:\nTotal Experience:\n`
              )}`;

              return (
                <Reveal key={job.id} delay={index * 0.08}>
                  <article
                    id={job.id}
                    className="scroll-mt-24 overflow-hidden rounded-xl border border-border-subtle bg-[#f2ece3] p-6 shadow-sm transition-all sm:p-9 lg:p-10"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-muted">
                          <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-accent">
                            <Briefcase className="size-3.5" /> {job.type}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full border border-border-subtle bg-background/80 px-3 py-1 text-primary">
                            <Clock className="size-3.5 text-accent" /> {job.experience}
                          </span>
                        </div>

                        <h3 className="mt-4 font-serif text-2xl font-bold text-primary sm:text-3xl">
                          {job.title}
                        </h3>
                        <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-accent">
                          {job.department}
                        </p>
                      </div>

                      <div className="sm:shrink-0">
                        <a
                          href={mailtoLink}
                          className={cn(buttonVariants({ size: "default" }), "gap-2")}
                        >
                          <Mail className="size-4" /> Apply via Email
                        </a>
                      </div>
                    </div>

                    {/* Key Responsibilities & Qualifications */}
                    <div className="mt-8 grid gap-8 border-t border-border-subtle pt-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                          Key Responsibilities
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm text-muted">
                          {job.responsibilities.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Check className="mt-1 size-4 shrink-0 text-accent" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                          Qualifications & Experience
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm text-muted">
                          {job.qualifications.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Check className="mt-1 size-4 shrink-0 text-accent" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Skills Toggle */}
                    <details className="group/details mt-8 border-t border-border-subtle">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xs font-extrabold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                        <span className="group-open/details:hidden">View Required Skills</span>
                        <span className="hidden group-open/details:inline">Hide Required Skills</span>
                        <span className="grid size-8 place-items-center rounded-full border border-accent/35 text-accent">
                          <ChevronDown className="size-4 transition-transform duration-300 group-open/details:rotate-180" />
                        </span>
                      </summary>
                      <div className="pb-4 pt-2">
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-border-subtle bg-background px-3 py-1.5 text-xs font-medium text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </details>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Email Section */}
      <section className="border-t border-border-subtle bg-[#f2ece3] py-16 md:py-20">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="inline-grid size-14 place-items-center rounded-full border border-accent/35 bg-accent/10 text-accent">
              <Mail className="size-6" />
            </div>
            <p className="eyebrow mt-5">Direct application</p>
            <h2 className="display-title mt-3 text-3xl md:text-4xl">How to Apply</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Please email your updated Resume / CV and culinary portfolio to our HR department with the position name in the email subject.
            </p>

            <div className="mt-8 inline-block rounded-2xl border border-border-subtle bg-background px-8 py-6 shadow-sm">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-widest text-muted">HR Email Address</p>
              <a
                href={`mailto:${hrEmail}`}
                className="mt-1 inline-block font-serif text-2xl font-bold text-accent transition hover:underline"
              >
                {hrEmail}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </InnerPage>
  );
}
