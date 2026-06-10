import { clients } from "@/utils/site";

export default function ClientsMarquee() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-slate-200/70 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Proudly serving institutions of every kind
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 pr-4">
          {row.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-slate-200 bg-cream px-5 py-2.5 text-sm font-medium text-slate-600"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-orange-400"
                aria-hidden="true"
              />
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
