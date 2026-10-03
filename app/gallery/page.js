import { ContactCta, InnerPage, PageHero } from "@/components/inner-page";
import { GalleryGrid } from "@/components/gallery-grid";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Gallery",
  description: "Explore practical culinary training, workshops and community moments at Entrain Culinary Academy.",
  alternates: { canonical: "/gallery" },
};

const galleryImages = [
  { src: "/images/page_1.png", alt: "Participants gathered for Entrain Academy Workshop 1", wide: true },
  { src: "/images/page_4.webp", alt: "Participants gathered for Entrain Academy Workshop 4" },
  { src: "/images/page_5.png", alt: "Participants gathered for Entrain Academy Workshop 5" },
  { src: "/images/page_6.webp", alt: "Participants gathered for Entrain Academy Workshop 6" },
  { src: "/images/page_7.webp", alt: "Participants gathered for Entrain Academy Workshop 7" },
  { src: "/images/page_10.webp", alt: "Participants gathered for Entrain Academy Workshop 10", wide: true },
  { src: "/images/workshop1.webp", alt: "Entrain Academy workshop participants and instructors", aspectClassName: "aspect-video" },
  { src: "/images/workshop2.webp", alt: "Participants gathered after practical culinary training", aspectClassName: "aspect-video" },
  { src: "/images/workshop3.jpg", alt: "Workshop participants gathered inside the Entrain Academy classroom", aspectClassName: "aspect-4/3" },
  { src: "/images/workshop4.jpeg", alt: "A small workshop group with their instructors", aspectClassName: "aspect-4/3" },
  { src: "/images/workshop5.jpeg", alt: "A large Entrain Academy workshop group", aspectClassName: "aspect-video", wide: true },
  { src: "/images/testimonials/newworkshop.png", alt: "Entrain Academy students gathered during a hands-on culinary workshop", aspectClassName: "aspect-4/3" },
  { src: "/images/testimonials/newworkshop2.png", alt: "Workshop participants celebrating their culinary training at Entrain Academy", aspectClassName: "aspect-4/3" },
  { src: "/images/workshop-batch5.jpg", alt: "Participants gathered for the 5-day workshop, batch 5", aspectClassName: "aspect-4/3" },
  { src: "/images/workshop-batch6.jpg", alt: "Participants gathered for the 5-day workshop, batch 6" },
  { src: "/images/workshop-23.jpg", alt: "Participants gathered for Entrain Academy Workshop 23" },
  { src: "/images/workshop-24.jpg", alt: "Participants gathered for Entrain Academy Workshop 24", aspectClassName: "aspect-4/3" },
  { src: "/images/workshop-25.jpg", alt: "Participants gathered for the Pizza workshop, first batch" },
  { src: "/images/workshop-26.jpg", alt: "Participants gathered for Entrain Academy Workshop 26" },
  { src: "/images/workshop-27.jpg", alt: "Participants gathered for Entrain Academy Workshop 27", wide: true },
  { src: "/images/workshop-28.jpg", alt: "Participants gathered for Entrain Academy Workshop 28", aspectClassName: "aspect-4/3" },
  { src: "/images/workshop-batch8-kitchen.jpg", alt: "Culinary students training in the Entrain Academy commercial kitchen, batch 8" },
  { src: "/images/workshop-batch9-kitchen.jpg", alt: "Culinary workshop group in the Entrain Academy kitchen, batch 9", aspectClassName: "aspect-4/3" },
  { src: "/images/workshop-batch10-certificates.jpg", alt: "Entrain Academy students celebrating with their workshop certificates, batch 10", wide: true },
  { src: "/images/workshop-batch11.jpg", alt: "Participants gathered for the 5-day workshop, batch 11" },
];

export default function GalleryPage() {
  return (
    <InnerPage>
      <JsonLd data={breadcrumbSchema([{ name: "Gallery", path: "/gallery" }])} />
      <PageHero eyebrow="Inside Entrain" title="Craft, confidence and community." copy="Explore hands-on training, shared achievements and the people who bring every Entrain Academy workshop to life." />
      <section className="bg-[#f2ece3] py-16 md:py-24">
        <div className="container-shell">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
      <ContactCta title="Ready to become part of the Entrain community?" />
    </InnerPage>
  );
}
