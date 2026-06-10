import Link from "next/link";
import { site } from "@/utils/site";

export default function Cta() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-orange-500 via-orange-600 to-rose-600 px-6 py-16 text-center shadow-2xl shadow-orange-600/30 md:px-16 md:py-20"
          data-aos="zoom-in"
        >
          {/* Decorations */}
          <div
            className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 -bottom-28 h-72 w-72 rounded-full bg-amber-300/20 blur-2xl"
            aria-hidden="true"
          />
          <svg
            className="pointer-events-none absolute top-8 right-10 h-16 w-16 animate-float text-white/20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 1l2.7 5.6 6.3.9-4.5 4.4 1 6.1-5.5-2.9L6.5 18l1-6.1L3 7.5l6.3-.9L12 1Z" />
          </svg>
          <svg
            className="pointer-events-none absolute bottom-10 left-12 h-10 w-10 animate-float-slow text-white/20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>

          <h2 className="relative mx-auto max-w-2xl font-nacelle text-3xl font-semibold text-white md:text-4xl">
            Ready to build a campus children run towards?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-orange-100">
            Tell us about your space — get a free consultation, layout
            suggestion and transparent quotation within 48 hours.
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn bg-white text-base font-semibold text-orange-700 shadow-lg hover:bg-orange-50 active:scale-[0.98]"
            >
              Get Your Free Quote
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              className="btn border border-white/40 bg-white/10 text-base text-white backdrop-blur-sm hover:bg-white/20 active:scale-[0.98]"
            >
              <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M3.6 1.3 5.5 1a1 1 0 0 1 1 .6L7.6 4a1 1 0 0 1-.3 1.2l-1 .8a9.5 9.5 0 0 0 3.7 3.7l.8-1a1 1 0 0 1 1.2-.3l2.4 1.1a1 1 0 0 1 .6 1l-.3 1.9a1 1 0 0 1-1 .8A12.8 12.8 0 0 1 2.8 2.3a1 1 0 0 1 .8-1Z" />
              </svg>
              {site.phone[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
