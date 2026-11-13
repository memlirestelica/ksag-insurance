import { useEffect, useRef, useState } from "react";
import { langs } from "../i18n";
import { useLanguage } from "../i18n/LanguageContext";
import { FlagIcon } from "./FlagIcon";

export function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = langs.find((item) => item.code === lang) ?? langs[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  return (
    <div className={`lang-switch${open ? " open" : ""}`} ref={ref}>
      <button
        type="button"
        className="lang-switch-btn"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Language: ${current.label}`}
        onClick={() => setOpen((value) => !value)}
      >
        <FlagIcon code={lang} className="lang-flag" />
        <span className="lang-code">{current.label}</span>
        <svg className="lang-caret" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open ? (
        <div className="lang-dropdown" role="listbox" aria-label="Language">
          {langs.map((item) => (
            <button
              key={item.code}
              type="button"
              role="option"
              aria-selected={lang === item.code}
              className={lang === item.code ? "active" : undefined}
              onClick={() => {
                setLang(item.code);
                setOpen(false);
              }}
            >
              <FlagIcon code={item.code} className="lang-flag" />
              <span className="lang-code">{item.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
