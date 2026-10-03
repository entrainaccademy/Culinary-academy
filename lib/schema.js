import { siteUrl } from "@/lib/site";

export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Veemboor - Mariyad School Road",
  addressLocality: "Manjeri",
  addressRegion: "Kerala",
  postalCode: "676122",
  addressCountry: "IN",
};

export function breadcrumbSchema(items) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export function absoluteUrl(path) {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}
