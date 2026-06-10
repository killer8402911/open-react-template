"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { site } from "@/utils/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Top contact strip */}
      <div className="hidden bg-ink text-xs text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6">
          <p className="tracking-wide">
            ISO-certified manufacturer of school & play infrastructure — since{" "}
            {site.since}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-1.5 transition hover:text-amber-400"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 16 16">
                <path d="M3.6 1.3 5.5 1a1 1 0 0 1 1 .6L7.6 4a1 1 0 0 1-.3 1.2l-1 .8a9.5 9.5 0 0 0 3.7 3.7l.8-1a1 1 0 0 1 1.2-.3l2.4 1.1a1 1 0 0 1 .6 1l-.3 1.9a1 1 0 0 1-1 .8A12.8 12.8 0 0 1 2.8 2.3a1 1 0 0 1 .8-1Z" />
              </svg>
              {site.phone[0]}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1.5 transition hover:text-amber-400"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 16 16">
                <path d="M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 5.5L14 4.4V4H2v.4L8 8.5Z" />
              </svg>
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-3 md:h-[72px]">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-orange-100/80 text-orange-700"
                        : "text-slate-700 hover:bg-slate-900/5 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <Link href="/contact" className="btn-sm btn-primary px-5 py-2.5">
                Get a Quote
                <svg
                  className="ml-2 h-3.5 w-3.5 fill-current"
                  viewBox="0 0 12 12"
                >
                  <path d="M6.7 1 6 1.7 9.6 5.4H1v1.2h8.6L6 10.3l.7.7L11.5 6 6.7 1Z" />
                </svg>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-ink md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                {mobileOpen ? (
                  <path
                    d="M4 4l12 12M16 4 4 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 5h14M3 10h14M3 15h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t border-slate-200/70 bg-white/95 px-4 pb-6 pt-3 backdrop-blur-xl md:hidden">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/contact" className="btn btn-primary w-full">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
