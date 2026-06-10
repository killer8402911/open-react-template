"use client";

import { useState } from "react";
import { categories, site } from "@/utils/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const institution = data.get("institution");
    const interest = data.get("interest");
    const message = data.get("message");

    const body = encodeURIComponent(
      `Hi Aeduplay,\n\nName: ${name}\nPhone: ${phone}\nInstitution: ${institution}\nInterested in: ${interest}\n\n${message}`,
    );
    const subject = encodeURIComponent(
      `Quotation enquiry from ${name} — ${institution}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 16 16">
            <path d="M6.5 12 2 7.5l1.4-1.4 3.1 3.1 6.1-6.1L14 4.5 6.5 12Z" />
          </svg>
        </span>
        <h3 className="mt-5 font-nacelle text-xl font-semibold text-ink">
          Your email draft is ready!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
          We&apos;ve opened your email app with the enquiry pre-filled — just
          hit send. Prefer instant replies? Reach us on{" "}
          <a
            className="font-semibold text-emerald-700 underline"
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>{" "}
          or call {site.phone[0]}.
        </p>
        <button
          className="btn-sm btn-ghost mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xl shadow-slate-900/5 md:p-9"
    >
      <h2 className="font-nacelle text-xl font-semibold text-ink">
        Request a quotation
      </h2>
      <p className="mt-1.5 text-sm text-slate-500">
        Tell us what you need — we respond within 24–48 hours.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Your name <span className="text-orange-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="form-input w-full"
            placeholder="A. Educator"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Phone <span className="text-orange-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="form-input w-full"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label
            htmlFor="institution"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            School / institution
          </label>
          <input
            id="institution"
            name="institution"
            type="text"
            className="form-input w-full"
            placeholder="Sunshine Public School"
          />
        </div>
        <div>
          <label
            htmlFor="interest"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            I&apos;m interested in
          </label>
          <select id="interest" name="interest" className="form-select w-full">
            {categories.map((cat) => (
              <option key={cat.slug}>{cat.name}</option>
            ))}
            <option>Complete campus setup</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Your requirement
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-textarea w-full"
            placeholder="E.g. We need a multi-play station and EPDM flooring for a 1,200 sq ft play area in Chennai…"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-7 w-full text-base">
        Send Enquiry
        <svg className="ml-2 h-4 w-4 fill-current" viewBox="0 0 12 12">
          <path d="M6.7 1 6 1.7 9.6 5.4H1v1.2h8.6L6 10.3l.7.7L11.5 6 6.7 1Z" />
        </svg>
      </button>
      <p className="mt-4 text-center text-xs text-slate-400">
        Submitting opens your email app with the enquiry pre-filled — no data
        is stored on this website.
      </p>
    </form>
  );
}
