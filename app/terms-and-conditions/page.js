import Link from "next/link";
import { InnerPage, PageHero } from "@/components/inner-page";
import { callLink, phoneDisplay } from "@/lib/site";

export const metadata = {
  title: "Terms & Conditions",
  description: "Important information about using the Entrain Culinary Academy website and enquiring about its culinary courses.",
  alternates: { canonical: "/terms-and-conditions" },
};

const sections = [
  {
    title: "Using this website",
    copy: "This website provides information about Entrain Culinary Academy and a way to enquire about our courses. Please use it for lawful enquiries and do not misuse the site or its content.",
  },
  {
    title: "Courses and enrollment",
    copy: "Course descriptions, schedules, fees, inclusions and availability may change. An enquiry or brochure request is not an enrollment or a reservation. Before paying or enrolling, please confirm the current course details, fees, accommodation if relevant, and any cancellation or refund terms directly with our team. Any enrollment terms agreed with you separately will apply to that enrollment.",
  },
  {
    title: "Certificates and outcomes",
    copy: "Ask our team to confirm certificate requirements and any available career guidance for the course you choose. Completing a course does not guarantee employment, overseas placement or a particular business result.",
  },
  {
    title: "Content and external services",
    copy: "The text, images and branding on this site belong to Entrain Culinary Academy or their respective owners. Please do not reuse them commercially without permission. Links and embedded services such as WhatsApp, Google Maps and social platforms have their own terms and are outside our control.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <InnerPage>
      <PageHero compact eyebrow="Website information" title="Terms & Conditions" copy="The essential points to know when browsing our site or asking about a course." />
      <section className="pb-20 md:pb-28">
        <div className="container-shell max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Last updated 12 October 2026</p>
          <div className="mt-8 space-y-8">
            {sections.map(({ title, copy }) => (
              <section key={title} className="border-t border-border-subtle pt-7">
                <h2 className="font-serif text-2xl text-primary">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted md:text-base">{copy}</p>
              </section>
            ))}
            <section className="border-t border-border-subtle pt-7">
              <h2 className="font-serif text-2xl text-primary">Questions or updates</h2>
              <p className="mt-3 text-sm leading-7 text-muted md:text-base">For current course terms or questions about this website, contact us at <a href={callLink} className="font-semibold text-primary underline decoration-accent underline-offset-4">{phoneDisplay}</a>. We may update these website terms and will show the latest date here.</p>
              <p className="mt-4 text-sm text-muted">For information about enquiries, see our <Link href="/privacy-policy" className="font-semibold text-primary underline decoration-accent underline-offset-4">Privacy Policy</Link>.</p>
            </section>
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
