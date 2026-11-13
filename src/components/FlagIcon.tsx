import type { Lang } from "../i18n";

type FlagIconProps = {
  code: Lang;
  className?: string;
};

export function FlagIcon({ code, className }: FlagIconProps) {
  if (code === "de") {
    return (
      <svg className={className} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" rx="2" fill="#000" />
        <rect y="5.33" width="24" height="5.34" fill="#D00" />
        <rect y="10.67" width="24" height="5.33" fill="#FFCE00" />
      </svg>
    );
  }

  if (code === "fr") {
    return (
      <svg className={className} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" rx="2" fill="#fff" />
        <rect width="8" height="16" fill="#002395" />
        <rect x="16" width="8" height="16" fill="#ED2939" />
      </svg>
    );
  }

  if (code === "it") {
    return (
      <svg className={className} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" rx="2" fill="#fff" />
        <rect width="8" height="16" fill="#009246" />
        <rect x="16" width="8" height="16" fill="#CE2B37" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" rx="2" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2.5" />
    </svg>
  );
}
