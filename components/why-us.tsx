const reasons = [
  {
    title: "Manufacturer, not middleman",
    text: "We make what we sell. Direct factory pricing, full control over quality, and no excuses passed down a supply chain.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21V9l6 4V9l6 4V5l6-2v18H3Z" />
        <path d="M7 17h2M12 17h2M17 17h2" />
      </svg>
    ),
  },
  {
    title: "Child-safety obsessed",
    text: "Rounded edges, non-toxic finishes, hot-dip galvanised structures and fall-height rated flooring — safety is engineered in, never bolted on.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3 4 6v6c0 4.5 3.4 7.6 8 9 4.6-1.4 8-4.5 8-9V6l-8-3Z" />
        <path d="m8.5 12 2.5 2.5 4.5-4.5" />
      </svg>
    ),
  },
  {
    title: "ISO-certified quality",
    text: "Documented processes, tested materials and consistent output — certification that backs up 25+ years of reputation.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="9" r="6" />
        <path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" />
        <path d="m9.8 9 1.5 1.5L14 7.8" />
      </svg>
    ),
  },
  {
    title: "End-to-end execution",
    text: "Site survey, layout design, manufacturing, delivery and installation by our own trained crew — one partner, one accountability.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 17 10 4l4 8 2-4 4 9" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    title: "Built for Indian conditions",
    text: "UV-stabilised plastics, rust-proofed steel and monsoon-ready materials — engineered for decades of Chennai summers, not showroom photos.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </svg>
    ),
  },
  {
    title: "After-sales that shows up",
    text: "Spare parts availability, service visits and a phone that gets answered. Most of our clients are repeat clients — that's the proof.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-9-9" />
        <path d="M21 3v6h-6" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Soft background band */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-cream via-orange-50/60 to-cream"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <div className="section-eyebrow" data-aos="fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Why Aeduplay
          </div>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay={100}>
            Why 1000+ institutions choose us — and stay
          </h2>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={reason.title} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-200 bg-white text-orange-600 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="font-nacelle text-lg font-semibold text-ink">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
