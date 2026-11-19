import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/json-ld";
import { faqs } from "@/lib/faqs";
import { siteUrl } from "@/lib/site";
const homeTitle = "Entrain Academy | Best Culinary Schools in India";
const homeDescription =
  "Entrain Academy best Culinary schools in India, Kerala offers practical chef-led culinary courses, bakery training and food business workshops.";

export const metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Entrain Culinary Academy",
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: "/images/cooking.webp",
        width: 1200,
        height: 630,
        alt: "Practical culinary training at Entrain Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/images/cooking.webp"],
  },
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
