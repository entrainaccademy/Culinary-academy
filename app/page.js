import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/json-ld";
import { faqs } from "@/lib/faqs";
import { siteUrl } from "@/lib/site";

export const metadata = {
  alternates: { canonical: null },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Page() {
  return (
    <>
      <link rel="canonical" href={`${siteUrl}/`} />
      <JsonLd data={faqSchema} />
      <HomePage />
    </>
  );
}
