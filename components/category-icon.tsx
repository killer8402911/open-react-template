export default function CategoryIcon({
  slug,
  className = "h-6 w-6",
}: {
  slug: string;
  className?: string;
}) {
  switch (slug) {
    case "writing-boards":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M7 9h7M7 12h4" />
          <path d="M12 17v3M8 20h8" />
        </svg>
      );
    case "school-furniture":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 10h18" />
          <path d="M5 10V20M19 10v10M5 14h14" />
          <path d="M7 10V5h10v5" />
        </svg>
      );
    case "preschool-furniture":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 19V9a6 6 0 0 1 12 0v10" />
          <path d="M6 13h12" />
          <circle cx="12" cy="6" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "outdoor-play":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 20 8 5h0M20 20 16 5" />
          <path d="M7 5h10" />
          <path d="M10 6l1 9M14 6l-1 9" />
          <rect x="9.5" y="15" width="5" height="2.4" rx="1.2" />
          <path d="M2.5 20h19" />
        </svg>
      );
    case "soft-play":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a16 16 0 0 0 0 18M12 3a16 16 0 0 1 0 18M3.5 9h17M3.5 15h17" />
        </svg>
      );
    case "playground-flooring":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
