import Link from "next/link";
import { InnerPage, PageHero } from "@/components/inner-page";
import { callLink, phoneDisplay } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Entrain Culinary Academy handles course enquiries and personal information shared through this website and WhatsApp.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "Information you share",
    copy: "When you enquire about a course, request a brochure or apply, you may provide your name, phone number, city or location, course of interest and an optional message. You can also contact us directly by phone or WhatsApp. We do not take payments through this website.",
  },
  {
    title: "How we use it",
    copy: "We use these details to answer your enquiry, provide the information you requested and follow up about a course or enrollment. If you do not want further course-related messages, tell us when we contact you.",
  },
  {
    title: "Website forms and other services",
    copy: "The contact enquiry form sends the details you enter to a private Google Sheet that our authorized team uses to respond. The brochure and course application forms still open WhatsApp with a prepared message; WhatsApp receives it when it opens, and our team receives it if you choose to send it. The embedded Google Map and links to social platforms are run by those providers under their own privacy policies. Our hosting provider may process basic technical data, such as IP address and browser information, to deliver and secure the website.",
  },
  {
    title: "Keeping and sharing information",
    copy: "We share enquiry details only with the team members and service providers needed to respond or provide a requested service. We keep them for as long as needed for that purpose or to meet applicable obligations, then delete them when they are no longer needed.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <InnerPage>
      <PageHero compact eyebrow="Your information" title="Privacy Policy" copy="A clear summary of how we handle information you choose to share with Entrain Culinary Academy." />
      <section className="pb-20 md:pb-28">
        <div className="container-shell max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Last updated 19 October 2026</p>
          <div className="mt-8 space-y-8">
            {sections.map(({ title, copy }) => (
              <section key={title} className="border-t border-border-subtle pt-7">
                <h2 className="font-serif text-2xl text-primary">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted md:text-base">{copy}</p>
              </section>
            ))}
            <section className="border-t border-border-subtle pt-7">
              <h2 className="font-serif text-2xl text-primary">Your choices and contact</h2>
              <p className="mt-3 text-sm leading-7 text-muted md:text-base">You can ask us about the information we hold from your enquiry, request a correction or deletion, or tell us to stop contacting you, subject to applicable law. Contact us at <a href={callLink} className="font-semibold text-primary underline decoration-accent underline-offset-4">{phoneDisplay}</a>. We may update this policy and will show the latest date here.</p>
              <p className="mt-4 text-sm text-muted">See also our <Link href="/terms-and-conditions" className="font-semibold text-primary underline decoration-accent underline-offset-4">Terms &amp; Conditions</Link>.</p>
            </section>
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
