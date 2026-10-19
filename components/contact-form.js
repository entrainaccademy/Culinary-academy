"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courseDetails } from "@/lib/courses";

const fieldClassName = "mt-2 w-full rounded-md border border-border-subtle bg-[#f2ece3] px-4 font-normal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function submitEnquiry(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setSubmitting(true);
    setError("");
    setSent(false);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn't send your enquiry. Please try again.");
      formElement.reset();
      setSent(true);
    } catch (submissionError) {
      setError(submissionError.message || "We couldn't send your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submitEnquiry} className="space-y-5">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Website <input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
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
      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending..." : "Send enquiry"} <Send className="size-4" />
      </Button>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      {sent && (
        <p role="status" className="flex items-start gap-2 text-sm leading-6 text-muted">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          Your enquiry was sent. Our team will contact you soon.
        </p>
      )}
    </form>
  );
}
