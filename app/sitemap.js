import { courseDetails } from "@/lib/courses";
import { siteUrl } from "@/lib/site";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/courses`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/careers`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/gallery`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...courseDetails.map((course) => ({
      url: `${siteUrl}/courses/${course.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
