import Link from "next/link";
import Logo from "./logo";
import { site, categories } from "@/utils/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-slate-400">
      {/* Decorative top gradient line */}
      <div
        className="h-1 w-full bg-linear-to-r from-amber-400 via-orange-500 to-rose-500"
        aria-hidden="true"
      />
      {/* Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-200 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 py-14 md:grid-cols-12 md:py-20">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.legalName} — Chennai&apos;s trusted, ISO-certified
              manufacturer of writing boards, school furniture, play equipment
              and playground flooring. Building joyful learning spaces since{" "}
              {site.since}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-orange-500 hover:text-white"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H8v3h2.3v7h3.2Z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-emerald-500 hover:text-white"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a14 14 0 0 1-1.5-.5c-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.2.5.1.7-.1l1-1.1c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4 0 .2 0 .7-.2 1.3Z" />
                </svg>
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-sky-500 hover:text-white"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.4L20 7.2V7H4v.2l8 5.2Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <h3 className="mb-4 font-nacelle text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products#${cat.slug}`}
                    className="transition hover:text-amber-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="mb-4 font-nacelle text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="transition hover:text-amber-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-amber-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="transition hover:text-amber-400"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-amber-400"
                >
                  Contact & Quotes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="mb-4 font-nacelle text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Reach Us
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 fill-amber-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a5 5 0 0 0-5 5c0 3.8 5 9 5 9s5-5.2 5-9a5 5 0 0 0-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                </svg>
                <span className="leading-relaxed">{site.address}</span>
              </li>
              <li className="flex gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 fill-amber-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.6 1.3 5.5 1a1 1 0 0 1 1 .6L7.6 4a1 1 0 0 1-.3 1.2l-1 .8a9.5 9.5 0 0 0 3.7 3.7l.8-1a1 1 0 0 1 1.2-.3l2.4 1.1a1 1 0 0 1 .6 1l-.3 1.9a1 1 0 0 1-1 .8A12.8 12.8 0 0 1 2.8 2.3a1 1 0 0 1 .8-1Z" />
                </svg>
                <span>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="transition hover:text-amber-400"
                  >
                    {site.phone[0]}
                  </a>
                  <br />
                  {site.phone[1]}
                </span>
              </li>
              <li className="flex gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 fill-amber-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 5.5L14 4.4V4H2v.4L8 8.5Z" />
                </svg>
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-amber-400"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName} · {site.name}. All
            rights reserved.
          </p>
          <p>
            Serving schools, preschools & institutions across South India since{" "}
            {site.since}.
          </p>
        </div>
      </div>
    </footer>
  );
}
