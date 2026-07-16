import Image from "next/image";

export function CrestLogo({ compact = false, light = false }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden ${compact ? "h-12 w-12" : "h-14 w-[190px]"} ${light ? "bg-background px-1" : ""}`}
      aria-label="Entrain Culinary Academy"
    >
      <Image
        src="/images/logo.PNG"
        alt="Entrain Academy shield-and-laurel crest"
        width={2048}
        height={2048}
        priority
        className={`absolute max-w-none ${compact ? "-left-[57px] -top-[52px] size-[150px]" : "left-0 -top-[65px] size-[190px]"}`}
      />
    </div>
  );
}
