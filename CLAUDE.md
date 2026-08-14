# Project Memory

Next.js (app router) landing site based on Cruip's open-react-template, with
Sanity Studio mounted at `/studio`. Package manager: pnpm.

## Memory: How backlinks work for website SEO

Full knowledge base with sources: `docs/seo/backlinks.md` (researched 2026-08-14).
Key facts to remember when doing any SEO work on this site:

- A backlink = a link from an external site to ours; Google treats each one as a
  vote of confidence. Links are one of Google's strongest ranking signals and also
  drive crawling/discovery, trust (E-E-A-T), and referral traffic.
- Value passed depends on: topical **relevance** of the linking page, its
  **authority**, being **editorially given**, **dofollow**, placed **in the main
  content** (not footer/sidebar), with **descriptive anchor text**, from a **new
  referring domain**. Unique referring domains matter more than raw link counts.
- Quality > quantity, always. A natural profile mixes dofollow/nofollow/
  sponsored/ugc links and varied anchors.
- Link attributes: no rel = dofollow (passes equity); `nofollow` = hint, mostly
  ignored; `sponsored` = required for paid links; `ugc` = user-generated. Paid
  dofollow links violate Google spam policy.
- Never: buy/sell dofollow links, excessive link exchanges, PBNs, automated/
  comment spam, mass guest posting with keyword anchors. Google's Penguin +
  SpamBrain neutralize these; manual actions cost 50–90% of traffic and 6–12
  months of recovery. Disavow tool only for manual actions — not for random spam
  links, which Google ignores automatically.
- Earning links: original research/statistics pages, free tools, definitive
  guides, digital PR, guest posts on reputable relevant sites, broken-link
  building, resource pages, unlinked-mention reclamation, expert quotes
  (Connectively/Qwoted), podcasts, partnerships.
- Timeline: a link takes ~4–12 weeks to affect rankings; campaigns show full
  effect in 3–6 months; new domains ramp slower.
- AI-search era: strong backlink profiles also increase citations in AI
  Overviews/answers; reputation and brand mentions matter more, bulk links less.
- Measurement: Google Search Console Links report (free, Google's own view);
  Ahrefs DR / Moz DA / Semrush AS for comparisons; KPI = growth in unique
  relevant referring domains, sane anchor distribution.
- Site-specific: use real `<a>`/Next `<Link>` for crawlable links, per-route
  `metadata`, `app/sitemap.ts` + `robots.ts` + JSON-LD; publish linkable content
  via Sanity; mark any paid placement `rel="sponsored"`.
