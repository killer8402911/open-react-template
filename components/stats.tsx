"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/utils/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 shadow-2xl shadow-ink/30 md:px-12 md:py-16"
          data-aos="fade-up"
        >
          {/* Decorative glows */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="font-nacelle text-4xl font-semibold text-white md:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
