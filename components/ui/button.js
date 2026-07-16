import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap px-5 text-sm font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-[#0f1f30] shadow-[0_8px_24px_rgba(184,134,63,0.22)] hover:scale-[1.025] hover:bg-[#c39653] hover:shadow-[0_12px_30px_rgba(184,134,63,0.3)]",
        outline: "border border-primary/20 bg-transparent text-primary hover:scale-[1.02] hover:border-primary hover:bg-primary hover:text-background",
        light: "bg-background text-primary hover:scale-[1.02] hover:bg-[#eee7dc]",
      },
      size: {
        default: "h-11",
        lg: "h-13 px-7 text-[0.82rem]",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
