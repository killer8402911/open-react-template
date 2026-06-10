export const metadata = {
  title: "Contact Us — Get a Free Quote | Aeduplay, Chennai",
  description:
    "Contact Aeduplay (Navshilp Enterprises) for school furniture, writing boards, play equipment and flooring. Call +91 98418 39582 or visit us in George Town, Chennai.",
};

import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import Faq from "@/components/faq";
import { site } from "@/utils/site";

const contactCards = [
  {
    title: "Call us",
    lines: [site.phone[0], site.phone[1]],
    href: `tel:${site.phoneHref}`,
    cta: "Call now",
    accent: "from-sky-500 to-indigo-600",
    icon: (
      <svg className="h-6 w-6 fill-current" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3.6 1.3 5.5 1a1 1 0 0 1 1 .6L7.6 4a1 1 0 0 1-.3 1.2l-1 .8a9.5 9.5 0 0 0 3.7 3.7l.8-1a1 1 0 0 1 1.2-.3l2.4 1.1a1 1 0 0 1 .6 1l-.3 1.9a1 1 0 0 1-1 .8A12.8 12.8 0 0 1 2.8 2.3a1 1 0 0 1 .8-1Z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    lines: ["Fastest response", "9 AM – 8 PM, Mon–Sat"],
    href: `https://wa.me/${site.whatsapp}`,
    cta: "Chat on WhatsApp",
    accent: "from-emerald-500 to-teal-600",
    icon: (
      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a14 14 0 0 1-1.5-.5c-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.2.5.1.7-.1l1-1.1c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4 0 .2 0 .7-.2 1.3Z" />
      </svg>
    ),
  },
  {
    title: "Email us",
    lines: [site.email, "Replies within 24–48 hrs"],
    href: `mailto:${site.email}`,
    cta: "Write to us",
    accent: "from-amber-500 to-orange-600",
    icon: (
      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.4L20 7.2V7H4v.2l8 5.2Z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's plan your"
        highlight="dream campus"
        description="A free consultation, a site visit if you're nearby, and a transparent quotation — that's how every great learning space we've built has started."
      />

      {/* Contact cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card, i) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div
                  className={`mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br ${card.accent} text-white shadow-lg`}
                >
                  {card.icon}
                </div>
                <h3 className="font-nacelle text-lg font-semibold text-ink">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-slate-600">
                    {line}
                  </p>
                ))}
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600">
                  {card.cta}
                  <svg
                    className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 12 12"
                  >
                    <path d="M6.7 1 6 1.7 9.6 5.4H1v1.2h8.6L6 10.3l.7.7L11.5 6 6.7 1Z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + address */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7" data-aos="fade-right">
              <ContactForm />
            </div>
            <div className="space-y-6 lg:col-span-5" data-aos="fade-left">
              {/* Address card */}
              <div className="overflow-hidden rounded-3xl bg-ink text-slate-300 shadow-xl">
                <div className="h-1.5 bg-linear-to-r from-amber-400 via-orange-500 to-rose-500" />
                <div className="p-8">
                  <h3 className="font-nacelle text-lg font-semibold text-white">
                    Visit our showroom & works
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed">{site.address}</p>
                  <div className="mt-5 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-white">Hours:</span>{" "}
                      Mon–Sat, 9:30 AM – 7:30 PM
                    </p>
                    <p>
                      <span className="font-semibold text-white">Landmark:</span>{" "}
                      Near Kondithope, opposite Tansi Godown
                    </p>
                  </div>
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm mt-6 inline-flex border border-white/25 bg-white/10 text-white hover:bg-white/20"
                  >
                    <svg
                      className="mr-2 h-4 w-4 fill-amber-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a5 5 0 0 0-5 5c0 3.8 5 9 5 9s5-5.2 5-9a5 5 0 0 0-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                    </svg>
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Service area card */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
                <h3 className="font-nacelle text-lg font-semibold text-ink">
                  We serve
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Chennai",
                    "Kancheepuram",
                    "Tiruvallur",
                    "Chengalpattu",
                    "Tambaram",
                    "All Tamil Nadu",
                    "Bengaluru",
                    "Hyderabad",
                    "Kochi",
                    "Pan-India projects",
                  ].map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
