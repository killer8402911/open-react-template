import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2.5"
      aria-label="Aeduplay home"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400 to-orange-600 shadow-lg shadow-orange-600/30">
        {/* Abstract swing/play mark */}
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 4l3 11M20 4l-3 11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="5.5" y="13.5" width="13" height="3.5" rx="1.75" fill="white" />
          <circle cx="12" cy="6.5" r="2.5" fill="white" fillOpacity="0.85" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-nacelle text-xl font-semibold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Aedu<span className="text-orange-500">play</span>
        </span>
        <span
          className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] ${
            light ? "text-slate-400" : "text-slate-500"
          }`}
        >
          by Navshilp
        </span>
      </span>
    </Link>
  );
}
