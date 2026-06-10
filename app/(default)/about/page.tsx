export const metadata = {
  title: "About Us — Aeduplay by Navshilp Enterprises | Chennai",
  description:
    "Since 1999, Navshilp Enterprises has manufactured school boards, furniture and play equipment in Chennai. Discover the story, values and people behind the Aeduplay brand.",
};

import PageHero from "@/components/page-hero";
import Stats from "@/components/stats";
import Cta from "@/components/cta";
import { milestones, site } from "@/utils/site";

const values = [
  {
    title: "Safety before everything",
    text: "If a product isn't safe enough for our own children, it doesn't leave our factory. Every edge, weld, finish and floor is designed around that test.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3 4 6v6c0 4.5 3.4 7.6 8 9 4.6-1.4 8-4.5 8-9V6l-8-3Z" />
        <path d="m8.5 12 2.5 2.5 4.5-4.5" />
      </svg>
    ),
  },
  {
    title: "Built to outlast trends",
    text: "Schools buy for decades, not seasons. We choose materials and construction methods that survive generations of students.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="8" width="18" height="13" rx="2" />
        <path d="M8 8V5a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    title: "Honest pricing, honest timelines",
    text: "Direct-from-manufacturer quotes with no hidden costs, and delivery dates we actually keep. Trust is our best salesperson.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Play is serious learning",
    text: "We believe playgrounds are classrooms. Every product we design starts from how children actually learn — through movement, joy and curiosity.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${site.name}`}
        title="A quarter century of building"
        highlight="joyful classrooms"
        description={`${site.legalName} began in ${site.since} with a simple promise: make school infrastructure that educators can rely on. Today, the ${site.name} brand equips over a thousand institutions across South India.`}
      />

      {/* Story */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div data-aos="fade-right">
              <div className="section-eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Our story
              </div>
              <h2 className="section-title">
                From a boards workshop in George Town to South India&apos;s
                learning-space partner
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
                <p>
                  {site.legalName} was founded in {site.since} in George Town,
                  Chennai, as a specialist manufacturer of school writing
                  boards. Word travelled the way it does among educators —
                  quietly, and through results. Boards that didn&apos;t warp.
                  Deliveries that arrived on time. A phone that got answered.
                </p>
                <p>
                  As our school partners grew, so did their needs — and so did
                  we. Classroom furniture followed, then laboratory and library
                  fittings. In {site.brandSince} we launched{" "}
                  <strong className="font-semibold text-ink">{site.name}</strong>,
                  a brand dedicated to play-based learning: outdoor play
                  systems, soft-play zones, preschool furniture and safety
                  flooring.
                </p>
                <p>
                  Today we are an ISO-certified manufacturer serving schools,
                  preschools, colleges, IT parks, hospitals and townships across
                  Tamil Nadu and South India — still family-run, still in
                  Chennai, and still answering the phone.
                </p>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative" data-aos="fade-left">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-amber-100 via-orange-50 to-sky-100 p-10 shadow-xl shadow-slate-900/5">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    ["1999", "Founded in Chennai"],
                    ["2010", `${site.name} brand launched`],
                    ["ISO", "Certified manufacturer"],
                    ["1000+", "Institutions equipped"],
                  ].map(([big, small], i) => (
                    <div
                      key={small}
                      className={`rounded-3xl bg-white/90 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-sm ${
                        i % 2 === 1 ? "translate-y-5" : ""
                      }`}
                    >
                      <div className="font-nacelle text-3xl font-semibold text-orange-600">
                        {big}
                      </div>
                      <div className="mt-1.5 text-sm text-slate-600">{small}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="section-eyebrow" data-aos="fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Milestones
            </div>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay={100}>
              The journey so far
            </h2>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div
              className="absolute top-0 bottom-0 left-5 w-px bg-linear-to-b from-amber-400 via-orange-400 to-rose-400 md:left-1/2"
              aria-hidden="true"
            />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:pr-10 md:text-right"
                      : "md:ml-auto md:flex-row-reverse md:pl-10 md:text-left"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div
                    className={`absolute top-1 left-5 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-auto ${
                      i % 2 === 0
                        ? "md:right-0 md:translate-x-1/2"
                        : "md:left-0 md:-translate-x-1/2"
                    }`}
                  >
                    <span className="h-4 w-4 rounded-full border-3 border-cream bg-orange-500 shadow" />
                  </div>
                  <div className="ml-12 flex-1 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm md:ml-0">
                    <div className="font-nacelle text-sm font-semibold tracking-wide text-orange-600">
                      {m.year}
                    </div>
                    <h3 className="mt-1 font-nacelle text-lg font-semibold text-ink">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-cream via-orange-50/60 to-cream"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="section-eyebrow" data-aos="fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              What we stand for
            </div>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay={100}>
              The values behind every product
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-600 text-white shadow-lg">
                  {v.icon}
                </div>
                <h3 className="font-nacelle text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
