const steps = [
  {
    step: "01",
    title: "Consult & survey",
    text: "Share your requirement — we visit your campus, measure the space and understand your budget, age groups and vision.",
  },
  {
    step: "02",
    title: "Design & quote",
    text: "Receive a tailored layout, product selection and transparent quotation — with 3D visualisation for larger projects.",
  },
  {
    step: "03",
    title: "Manufacture & deliver",
    text: "Your order is built in our Chennai facility under ISO-certified processes and delivered on the committed schedule.",
  },
  {
    step: "04",
    title: "Install & support",
    text: "Our trained crew installs, tests and hands over — then stays available for service, spares and future expansion.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <div className="section-eyebrow" data-aos="fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            How it works
          </div>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay={100}>
            From first call to first recess, in four steps
          </h2>
        </div>

        <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Connector line */}
          <div
            className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-[linear-gradient(to_right,var(--color-orange-300),var(--color-rose-300))] md:block"
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="relative text-center md:px-2"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-amber-500 to-orange-600 font-nacelle text-lg font-semibold text-white shadow-lg shadow-orange-600/30 ring-6 ring-cream">
                {s.step}
              </div>
              <h3 className="font-nacelle text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
