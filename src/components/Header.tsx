import { useEffect, useState } from "react";
import { langs } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#why", label: t.nav.why },
    { href: "#process", label: t.nav.process },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="logo" href="#top" onClick={close}>
          <span className="logo-mark-wrap">
            <span className="logo-mark">
              KS
              <span />
            </span>
          </span>
          KSAG
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            {langs.map((item) => (
              <button
                key={item.code}
                type="button"
                className={lang === item.code ? "active" : ""}
                onClick={() => setLang(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <a className="btn btn-dark" href="#contact">
            {t.nav.cta}
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav${open ? " open" : ""}`}>
        <div className="container">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-dark" href="#contact" onClick={close}>
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
