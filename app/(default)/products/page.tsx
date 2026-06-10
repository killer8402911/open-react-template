export const metadata = {
  title: "Products — Writing Boards, School Furniture & Play Equipment | Aeduplay",
  description:
    "Explore Aeduplay's full range: ceramic-steel writing boards, school & preschool furniture, outdoor play equipment, indoor soft play and certified playground flooring.",
};

import Link from "next/link";
import PageHero from "@/components/page-hero";
import CategoryIcon from "@/components/category-icon";
import Cta from "@/components/cta";
import { categories } from "@/utils/site";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Six product lines, one"
        highlight="standard of quality"
        description="Every product below is manufactured in our Chennai facility under ISO-certified processes, delivered and installed by our own crew, and backed by genuine after-sales support."
      />

      {/* Quick category nav */}
      <section className="pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className="flex flex-wrap justify-center gap-3"
            data-aos="fade-up"
          >
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
              >
                <span className="text-orange-500">
                  <CategoryIcon slug={cat.slug} className="h-4 w-4" />
                </span>
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category sections */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 md:space-y-24">
          {categories.map((cat, i) => (
            <article
              key={cat.slug}
              id={cat.slug}
              className="scroll-mt-36 lg:scroll-mt-44"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual card */}
                <div data-aos={i % 2 === 1 ? "fade-left" : "fade-right"}>
                  <div
                    className={`relative overflow-hidden rounded-[2.5rem] bg-linear-to-br ${cat.accent} p-10 shadow-2xl md:p-14`}
                  >
                    <div
                      className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/15 blur-2xl"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-black/10 blur-2xl"
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                        {cat.badge}
                      </span>
                      <div className="mt-8 flex items-center justify-center">
                        <div className="flex h-36 w-36 animate-float items-center justify-center rounded-[2rem] bg-white/15 text-white shadow-inner backdrop-blur-sm md:h-44 md:w-44">
                          <CategoryIcon
                            slug={cat.slug}
                            className="h-20 w-20 md:h-24 md:w-24"
                          />
                        </div>
                      </div>
                      <p className="mt-8 text-center font-nacelle text-xl font-semibold text-white">
                        {cat.short}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div data-aos={i % 2 === 1 ? "fade-right" : "fade-left"}>
                  <h2 className="font-nacelle text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    {cat.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {cat.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${cat.accent}`}
                        >
                          <svg
                            className="h-3 w-3 fill-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 12 2 7.5l1.4-1.4 3.1 3.1 6.1-6.1L14 4.5 6.5 12Z" />
                          </svg>
                        </span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/contact" className="btn btn-dark">
                      Enquire About This Range
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
