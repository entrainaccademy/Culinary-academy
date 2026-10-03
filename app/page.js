import { HomePage } from "@/components/home-page";
import { siteUrl } from "@/lib/site";

export const metadata = {
  alternates: { canonical: null },
};

export default function Page() {
  return (
    <>
      <link rel="canonical" href={`${siteUrl}/`} />
      <HomePage />
    </>
  );
}
