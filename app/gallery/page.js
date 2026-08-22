import { ContactCta, InnerPage, PageHero } from "@/components/inner-page";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata = {
  title: "Gallery",
  description: "Explore practical culinary training, workshops and community moments at Entrain Culinary Academy.",
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
];

export default function GalleryPage() {
  return (
    <InnerPage>
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
