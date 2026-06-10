export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-80 w-80 animate-blob rounded-full bg-amber-300/25 blur-3xl" />
        <div className="absolute -top-10 -right-24 h-80 w-80 animate-blob rounded-full bg-sky-300/25 blur-3xl [animation-delay:5s]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.3]" aria-hidden="true">
          <defs>
            <pattern
              id="pagehero-dots"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" className="fill-slate-300/60" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pagehero-dots)" />
        </svg>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-cream" />
      </div>

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <div className="section-eyebrow" data-aos="fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          {eyebrow}
        </div>
        <h1
          className="mx-auto max-w-3xl font-nacelle text-4xl font-semibold tracking-tight text-ink md:text-5xl"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {title}{" "}
          {highlight && (
            <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-orange-600),var(--color-amber-500),var(--color-rose-500),var(--color-orange-600))] bg-[length:200%_auto] bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
