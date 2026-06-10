import Link from "next/link";
import { categories } from "@/utils/site";
import CategoryIcon from "./category-icon";

export default function Categories() {
  return (
    <section className="py-20 md:py-28" id="categories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <div className="section-eyebrow" data-aos="fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            What we make
          </div>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay={100}>
            Everything a great school needs,
            <br className="hidden md:block" /> under one roof
          </h2>
          <p
            className="mt-5 text-lg text-slate-600"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Six specialised product lines — designed, manufactured and installed
            by one accountable partner.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/products#${cat.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Hover gradient wash */}
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${cat.accent} opacity-80`}
                aria-hidden="true"
              />
              <div
                className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-linear-to-br ${cat.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15`}
                aria-hidden="true"
              />

              <div
                className={`mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br ${cat.accent} text-white shadow-lg`}
              >
                <CategoryIcon slug={cat.slug} />
              </div>
              <h3 className="font-nacelle text-xl font-semibold text-ink">
                {cat.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-400">
                {cat.short}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {cat.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600">
                View range
                <svg
                  className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 12 12"
                >
                  <path d="M6.7 1 6 1.7 9.6 5.4H1v1.2h8.6L6 10.3l.7.7L11.5 6 6.7 1Z" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
