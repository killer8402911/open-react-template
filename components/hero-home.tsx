import Link from "next/link";
import { site } from "@/utils/site";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-40">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-96 w-96 animate-blob rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute top-40 -right-32 h-105 w-105 animate-blob rounded-full bg-sky-300/30 blur-3xl [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-rose-300/20 blur-3xl [animation-delay:9s]" />
        {/* Dot grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.35]" aria-hidden="true">
          <defs>
            <pattern id="dotgrid" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" className="fill-slate-300/60" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
        </svg>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-cream" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 pb-16 md:pb-24 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="section-eyebrow" data-aos="fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              ISO-certified · Chennai · Since {site.since}
            </div>
            <h1
              className="font-nacelle text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              We build spaces where{" "}
              <span className="relative whitespace-nowrap">
                <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-orange-600),var(--color-amber-500),var(--color-rose-500),var(--color-orange-600))] bg-[length:200%_auto] bg-clip-text text-transparent">
                  learning
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9c50-7 146-7 196 0"
                    stroke="url(#underline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="underline" x1="0" x2="200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              feels like play
            </h1>
            <p
              className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              From ceramic-steel writing boards to complete playgrounds — {site.name}{" "}
              designs, manufactures and installs everything a great school needs.
              Trusted by 1000+ schools, preschools and institutions across South India.
            </p>
            <div
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <Link href="/products" className="btn btn-primary text-base">
                Explore Our Products
                <svg className="ml-2 h-4 w-4 fill-current" viewBox="0 0 12 12">
                  <path d="M6.7 1 6 1.7 9.6 5.4H1v1.2h8.6L6 10.3l.7.7L11.5 6 6.7 1Z" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-ghost text-base">
                Request a Free Quote
              </Link>
            </div>

            {/* Trust row */}
            <div
              className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-slate-200"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              {[
                ["25+ yrs", "Manufacturing legacy"],
                ["1000+", "Institutions served"],
                ["ISO", "Certified quality"],
              ].map(([big, small]) => (
                <div key={small} className="px-4 first:pl-0">
                  <div className="font-nacelle text-2xl font-semibold text-ink">
                    {big}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">{small}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden lg:col-span-5 lg:block" data-aos="zoom-in" data-aos-delay={300}>
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Big circle backdrop */}
              <div className="absolute inset-4 rounded-full bg-linear-to-br from-amber-100 via-orange-50 to-rose-100 shadow-inner" />

              {/* Playground SVG scene */}
              <svg viewBox="0 0 400 400" className="relative h-full w-full" aria-hidden="true">
                {/* Sun */}
                <circle cx="305" cy="95" r="30" className="fill-amber-400" />
                <circle cx="305" cy="95" r="42" className="fill-amber-400/25" />
                {/* Hills */}
                <path d="M30 305c60-50 130-50 180-18 55-36 115-30 160 18v60H30v-60Z" className="fill-emerald-200" />
                <path d="M10 330c70-44 150-44 200-14 50-28 120-22 180 14v40H10v-40Z" className="fill-emerald-300" />
                {/* Slide */}
                <path d="M150 160l60 0 0 14-60 0z" className="fill-sky-500" transform="rotate(38 180 167)" />
                <path d="M132 152h28v100h-28z" className="fill-sky-600" rx="6" />
                <rect x="128" y="140" width="36" height="22" rx="6" className="fill-sky-700" />
                <path d="M218 230h30v8h-30z" className="fill-sky-500" />
                {/* Swing frame */}
                <path d="M255 150l30 130M335 150l-30 130" stroke="#f97316" strokeWidth="10" strokeLinecap="round" fill="none" />
                <path d="M250 150h90" stroke="#ea580c" strokeWidth="10" strokeLinecap="round" />
                <path d="M283 155l4 80M307 155l-4 80" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                <rect x="276" y="232" width="38" height="10" rx="5" className="fill-rose-500" />
                {/* Ball */}
                <circle cx="105" cy="300" r="22" className="fill-rose-400" />
                <path d="M85 292c12 8 28 8 40 0M85 308c12-8 28-8 40 0" stroke="white" strokeWidth="3" fill="none" />
                {/* Blocks */}
                <rect x="180" y="290" width="34" height="34" rx="6" className="fill-violet-400" />
                <rect x="197" y="256" width="34" height="34" rx="6" className="fill-amber-400" />
                <text x="190" y="315" fontSize="20" fontWeight="700" fill="white" fontFamily="sans-serif">A</text>
                <text x="207" y="281" fontSize="20" fontWeight="700" fill="white" fontFamily="sans-serif">B</text>
              </svg>

              {/* Floating chips */}
              <div className="absolute -left-6 top-10 animate-float rounded-2xl bg-white px-4 py-3 shadow-xl shadow-slate-900/10">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                    <svg className="h-4 w-4 fill-emerald-600" viewBox="0 0 16 16">
                      <path d="M6.5 12 2 7.5l1.4-1.4 3.1 3.1 6.1-6.1L14 4.5 6.5 12Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-ink">Safety certified</div>
                    <div className="text-[11px] text-slate-500">Fall-height rated flooring</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-16 animate-float-slow rounded-2xl bg-white px-4 py-3 shadow-xl shadow-slate-900/10">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                    <svg className="h-4 w-4 fill-amber-600" viewBox="0 0 16 16">
                      <path d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8 3.8 14l.8-4.7L1.2 6l4.7-.7L8 1Z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-ink">1000+ happy schools</div>
                    <div className="text-[11px] text-slate-500">Across South India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
