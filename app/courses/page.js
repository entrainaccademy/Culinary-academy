import { InnerPage } from "@/components/inner-page";
import { CourseCategories } from "@/components/course-categories";

export const metadata = {
  title: "Courses",
  description: "Explore culinary courses and workshops at Entrain Culinary Academy in Manjeri, Kerala.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <InnerPage>
      <CourseCategories />
    </InnerPage>
  );
}
