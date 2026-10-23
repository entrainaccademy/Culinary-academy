import { Manrope, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { siteUrl } from "@/lib/site";
import { organizationId, postalAddress, websiteId } from "@/lib/schema";
import "./globals.css";

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
    default: "Entrain Academy | Culinary School in Malappuram, Kerala",
    template: "%s | Entrain Culinary Academy",
  },
  description:
    "Entrain Culinary Academy in Malappuram, Kerala offers practical chef-led culinary courses, bakery training and food business workshops.",
  verification: {
    google: [
      "xAtyNQ_eFN056EQCvF-YQpWCQLA5zzOau9UnHyZOSaQ",
      "WDUlQO6zYxe-xsX1t5kX-G9WS89sMaOuGBBLamAt5wA",
    ],
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
    "culinary school Malappuram",
    "culinary courses Kerala",
    "cooking classes Malappuram",
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
    title: "Entrain Academy | Culinary School in Malappuram, Kerala",
    description:
      "Practical chef-led culinary courses, bakery training and food business workshops in Malappuram, Kerala.",
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
    title: "Entrain Academy | Culinary School in Malappuram, Kerala",
    description:
      "Practical chef-led culinary courses, bakery training and food business workshops in Malappuram, Kerala.",
    images: ["/images/cooking.webp"],
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": organizationId,
    name: "Entrain Culinary Academy",
    alternateName: ["Entrain Academy", "Entrain Culinary School"],
    url: siteUrl,
    logo: `${siteUrl}/images/logo.webp`,
    image: `${siteUrl}/images/cooking.webp`,
    description:
      "Practical culinary and food business training institute in Malappuram, Kerala.",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Noufal K Keedath",
    },
    telephone: "+91-7593841013",
    address: postalAddress,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [
      "https://www.instagram.com/entrain_academy/",
      "https://www.facebook.com/p/Entrain-academy-61582002569465/",
      "https://www.youtube.com/@EntrainAcademy",
      "https://www.google.com/maps/place/Entrain+academy/data=!4m2!3m1!1s0x0:0xa4b9b37a9b1fe363",
    ],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,
    name: "Entrain Culinary Academy",
    alternateName: "Entrain Academy",
    url: siteUrl,
    inLanguage: "en-IN",
    publisher: { "@id": organizationId },
  };

  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N8BB36LX');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8BB36LX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [organizationSchema, websiteSchema],
          }}
        />
        {children}
      </body>
    </html>
  );
}
