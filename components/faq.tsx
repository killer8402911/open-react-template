"use client";

import { useState } from "react";
import { faqs } from "@/utils/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="section-eyebrow" data-aos="fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              FAQ
            </div>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay={100}>
              Questions schools ask us most
            </h2>
            <p
              className="mt-4 text-slate-600"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Can&apos;t find your answer? Call us — a real person who knows the
              products will pick up.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200/80 bg-white px-6 shadow-sm md:px-8">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.q} data-aos="fade-up" data-aos-delay={i * 60}>
                    <button
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-nacelle text-base font-semibold transition-colors md:text-lg ${
                          isOpen ? "text-orange-600" : "text-ink"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-orange-300 bg-orange-50 text-orange-600"
                            : "border-slate-200 text-slate-500"
                        }`}
                      >
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 12 12">
                          <path d="M6.6 1H5.4v4.4H1v1.2h4.4V11h1.2V6.6H11V5.4H6.6V1Z" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] pb-5 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
