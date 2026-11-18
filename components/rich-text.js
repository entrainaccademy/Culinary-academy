import Link from "next/link";

const tokenPattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
const linkPattern = /^\[([^\]]+)\]\(([^)]+)\)$/;
const linkClass = "font-semibold text-primary underline decoration-accent underline-offset-4 transition hover:text-accent";

// Renders a string with **bold** and [label](href) markup.
export function RichText({ text }) {
  return text.split(tokenPattern).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-bold text-primary">{part.slice(2, -2)}</strong>;
    }
    const link = part.match(linkPattern);
    if (link) {
      const [, label, href] = link;
      return href.startsWith("/")
        ? <Link key={index} href={href} className={linkClass}>{label}</Link>
        : <a key={index} href={href} className={linkClass} target="_blank" rel="noopener noreferrer">{label}</a>;
    }
    return part;
  });
}
