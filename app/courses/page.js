import { InnerPage } from "@/components/inner-page";
import { CourseCategories } from "@/components/course-categories";
import { JsonLd } from "@/components/json-ld";
import { courseDetails } from "@/lib/courses";
import { siteUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Courses",
  description: "Explore culinary courses and workshops at Entrain Culinary Academy in Manjeri, Kerala.",
  alternates: { canonical: "/courses" },
};

const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Courses at Entrain Culinary Academy",
  itemListElement: courseDetails.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: course.title,
    url: `${siteUrl}/courses/${course.slug}`,
  })),
};

export default function CoursesPage() {
  return (
    <InnerPage>
      <JsonLd data={courseListSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Courses", path: "/courses" }])} />
      <CourseCategories />
    </InnerPage>
  );
}
