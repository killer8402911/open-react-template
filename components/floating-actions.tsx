"use client";

import { useEffect, useState } from "react";
import { site } from "@/utils/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${site.whatsapp}?text=Hi%20Aeduplay%2C%20I%27d%20like%20a%20quotation.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 left-6 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition hover:scale-105 hover:bg-emerald-600"
      >
        <svg className="h-6.5 w-6.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a14 14 0 0 1-1.5-.5c-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.2.5.1.7-.1l1-1.1c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4 0 .2 0 .7-.2 1.3Z" />
        </svg>
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-lg transition-all duration-300 hover:bg-slate-50 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 12 12">
          <path d="M6 1 1 6l.7.7L5.4 3v8h1.2V3l3.7 3.7L11 6 6 1Z" />
        </svg>
      </button>
    </>
  );
}
