import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = "https://entraincullinaryschool.com";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Entrain Academy | Culinary School in Manjeri, Kerala",
    template: "%s | Entrain Culinary Academy",
  },
  description:
    "Entrain Culinary Academy in Manjeri, Kerala offers practical chef-led culinary courses, bakery training and food business workshops.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  applicationName: "Entrain Culinary Academy",
  keywords: [
    "Entrain Academy",
    "Entrain Culinary Academy",
    "culinary school Manjeri",
    "culinary courses Kerala",
    "cooking classes Manjeri",
    "bakery course Kerala",
  ],
  authors: [{ name: "Entrain Culinary Academy", url: siteUrl }],
  creator: "Entrain Culinary Academy",
  publisher: "Entrain Culinary Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Entrain Culinary Academy",
    title: "Entrain Academy | Culinary School in Manjeri, Kerala",
    description:
      "Practical chef-led culinary courses, bakery training and food business workshops in Manjeri, Kerala.",
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
    title: "Entrain Academy | Culinary School in Manjeri, Kerala",
    description:
      "Practical chef-led culinary courses, bakery training and food business workshops in Manjeri, Kerala.",
    images: ["/images/cooking.webp"],
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: "Entrain Culinary Academy",
    alternateName: ["Entrain Academy", "Entrain Culinary School"],
    url: siteUrl,
    logo: `${siteUrl}/images/logo.webp`,
    image: `${siteUrl}/images/cooking.webp`,
    description:
      "Practical culinary and food business training institute in Manjeri, Kerala.",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Noufal K Keedath",
    },
    telephone: "+91-7593841013",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Veemboor - Mariyad School Road",
      addressLocality: "Manjeri",
      addressRegion: "Kerala",
      postalCode: "676122",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [
      "https://www.instagram.com/entrain_academy/",
      "https://www.facebook.com/p/Entrain-academy-61582002569465/",
      "https://www.google.com/maps/place/Entrain+academy/data=!4m2!3m1!1s0x0:0xa4b9b37a9b1fe363",
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
