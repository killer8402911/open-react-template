"use client";

import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/utils/site";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActive((a) => (a + 1) % testimonials.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="relative py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-cream via-sky-50/50 to-cream"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <div className="section-eyebrow" data-aos="fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Testimonials
          </div>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay={100}>
            Educators who trusted us, in their own words
          </h2>
        </div>

        <div
          className="mx-auto max-w-3xl"
          data-aos="fade-up"
          data-aos-delay={200}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-900/5 md:p-12">
            {/* Quote mark */}
            <svg
              className="absolute -top-5 left-8 h-10 w-10 fill-orange-500"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <path d="M11 8C6 11 3 16 3 23c0 5 3 9 8 9 4 0 7-3 7-7s-3-7-6-7c1-3 3-5 6-7l-7-3Zm18 0c-5 3-8 8-8 15 0 5 3 9 8 9 4 0 7-3 7-7s-3-7-6-7c1-3 3-5 6-7l-7-3Z" />
            </svg>

            <div className="relative min-h-44 md:min-h-36" aria-live="polite">
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  className={`transition-all duration-500 ${
                    i === active
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 translate-y-2 opacity-0"
                  }`}
                >
                  <blockquote className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-amber-500 to-orange-600 font-nacelle text-sm font-semibold text-white">
                      {t.name
                        .replace(/^(Mrs?|Ms|Fr|Dr)\.\s*/i, "")
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-7 flex justify-center gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-orange-500"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
