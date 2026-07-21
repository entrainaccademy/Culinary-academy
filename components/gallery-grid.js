"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";

export function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {images.map((item, index) => (
          <Reveal key={item.src} delay={(index % 6) * 0.035}>
            <motion.button
              type="button"
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className={`group relative w-full overflow-hidden rounded-xl bg-dark-section shadow-sm transition-shadow hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${item.aspectClassName || "aspect-3/2"} ${item.wide ? "md:col-span-2" : ""}`}
              aria-label={`Open image: ${item.alt}`}
            >
              <Image src={item.src} alt={item.alt} fill sizes={item.wide ? "100vw" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
              <span className="absolute inset-0 bg-dark-section/0 transition-colors group-hover:bg-dark-section/10" />
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div className="fixed inset-0 z-100 grid place-items-center bg-dark-section/92 p-4 backdrop-blur-sm sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveIndex(null)}>
            <motion.div className="relative h-[82vh] w-full max-w-6xl" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} onClick={(event) => event.stopPropagation()}>
              <Image src={images[activeIndex].src} alt={images[activeIndex].alt} fill sizes="100vw" className="object-contain" priority />
              <button type="button" onClick={() => setActiveIndex(null)} className="absolute right-0 top-0 grid size-11 place-items-center rounded-full bg-background text-primary shadow-lg" aria-label="Close gallery image"><X className="size-5" /></button>
              <button type="button" onClick={showPrevious} className="absolute left-0 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background text-primary shadow-lg" aria-label="Previous image"><ChevronLeft className="size-5" /></button>
              <button type="button" onClick={showNext} className="absolute right-0 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background text-primary shadow-lg" aria-label="Next image"><ChevronRight className="size-5" /></button>
              <p className="absolute inset-x-0 bottom-0 text-center text-xs font-semibold text-background/75">{activeIndex + 1} / {images.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
