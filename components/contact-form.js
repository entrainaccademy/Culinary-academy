"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappNumber } from "@/lib/site";
import { courseDetails } from "@/lib/courses";

const fieldClassName = "mt-2 w-full rounded-md border border-border-subtle bg-[#f2ece3] px-4 font-normal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function sendToWhatsApp(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Entrain Academy, I have an enquiry.",
      "",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Location: ${form.get("location")}`,
      `Interested in: ${form.get("course")}`,
      form.get("message") ? `Message: ${form.get("message")}` : null,
    ].filter((line) => line !== null).join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={sendToWhatsApp} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-primary">
          Full name
          <input name="name" required autoComplete="name" className={`${fieldClassName} h-12`} />
        </label>
        <label className="block text-sm font-bold text-primary">
          Phone number
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={`${fieldClassName} h-12`} />
        </label>
      </div>
      <label className="block text-sm font-bold text-primary">
        City / location
        <input name="location" required autoComplete="address-level2" className={`${fieldClassName} h-12`} />
      </label>
      <label className="block text-sm font-bold text-primary">
        Course of interest
        <select name="course" defaultValue="Not sure yet" className={`${fieldClassName} h-12`}>
          <option>Not sure yet</option>
          {courseDetails.map((course) => <option key={course.slug}>{course.title}</option>)}
        </select>
      </label>
      <label className="block text-sm font-bold text-primary">
        Message <span className="font-normal text-muted">(optional)</span>
        <textarea name="message" rows={4} className={`${fieldClassName} resize-y py-3`} />
      </label>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send on WhatsApp <Send className="size-4" />
      </Button>
      {sent && (
        <p role="status" className="flex items-start gap-2 text-sm leading-6 text-muted">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          WhatsApp has opened with your message ready. Press send there and our team will reply soon.
        </p>
      )}
    </form>
  );
}
