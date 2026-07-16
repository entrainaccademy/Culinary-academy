import { Manrope, Playfair_Display } from "next/font/google";
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
  title: {
    default: "Entrain Culinary Academy | Practical Culinary Training",
    template: "%s | Entrain Culinary Academy",
  },
  description:
    "Practical, commercial culinary training led by expert chefs in Manjeri, Kerala. Learn skills for food businesses and hospitality careers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
