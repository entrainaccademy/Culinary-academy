"use client";

import { useRef } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappNumber = "9539637133";

export function CourseApplication({ courseTitle }) {
  const dialogRef = useRef(null);

  function openForm() {
    dialogRef.current?.showModal();
  }

  function closeForm() {
    dialogRef.current?.close();
  }

  function sendToWhatsApp(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Entrain Academy, I would like to apply for a course.",
      "",
      `Course: ${courseTitle}`,
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Location: ${form.get("location")}`,
      form.get("message") ? `Message: ${form.get("message")}` : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    closeForm();
  }

  return (
    <>
      <Button type="button" size="lg" onClick={openForm}>
        Apply now <Send className="size-4" />
      </Button>

      <dialog
        ref={dialogRef}
        onClick={(event) => event.target === event.currentTarget && closeForm()}
        className="m-auto w-[min(92vw,34rem)] rounded-xl border border-border-subtle bg-background p-0 text-primary shadow-[0_24px_80px_rgba(15,31,48,.3)] backdrop:bg-dark-section/70 backdrop:backdrop-blur-sm"
      >
        <div className="border-b border-border-subtle px-6 py-5 sm:px-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="eyebrow">Course application</p>
              <h2 className="mt-2 font-serif text-2xl font-bold">Apply for {courseTitle}</h2>
            </div>
            <button type="button" onClick={closeForm} className="grid size-10 shrink-0 place-items-center rounded-full border border-border-subtle text-muted transition hover:border-accent hover:text-accent" aria-label="Close application form">
              <X className="size-5" />
            </button>
          </div>
        </div>

        <form onSubmit={sendToWhatsApp} className="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-sm leading-6 text-muted">Enter your details and continue to WhatsApp. Your selected course will be included automatically.</p>
          <label className="block text-sm font-bold">
            Full name
            <input name="name" required autoComplete="name" className="mt-2 h-12 w-full rounded-md border border-border-subtle bg-[#f2ece3] px-4 font-normal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
          </label>
          <label className="block text-sm font-bold">
            Phone number
            <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="mt-2 h-12 w-full rounded-md border border-border-subtle bg-[#f2ece3] px-4 font-normal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
          </label>
          <label className="block text-sm font-bold">
            City / location
            <input name="location" required autoComplete="address-level2" className="mt-2 h-12 w-full rounded-md border border-border-subtle bg-[#f2ece3] px-4 font-normal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
          </label>
          <label className="block text-sm font-bold">
            Message <span className="font-normal text-muted">(optional)</span>
            <textarea name="message" rows="3" className="mt-2 w-full resize-y rounded-md border border-border-subtle bg-[#f2ece3] px-4 py-3 font-normal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
          </label>
          <Button type="submit" size="lg" className="w-full">
            Continue to WhatsApp <Send className="size-4" />
          </Button>
        </form>
      </dialog>
    </>
  );
}
