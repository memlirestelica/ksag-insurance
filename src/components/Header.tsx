import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

const primaryLinks = [
  { to: "/uber-uns", key: "about" as const },
  { to: "/privatkunden", key: "private" as const },
  { to: "/firmenkunden", key: "business" as const },
  { to: "/krankenkassenvergleich", key: "healthCompare" as const },
];

const moreLinks = [
  { to: "/steuerberatung", key: "tax" as const },
  { to: "/empfehlen", key: "recommend" as const },
];

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const moreActive = moreLinks.some((link) => location.pathname.startsWith(link.to));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!moreRef.current?.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [moreOpen]);

  const solid = scrolled || !isHome;

  return (
    <header className={`site-header${solid ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="logo" to="/">
          <span className="logo-mark">
            <span className="logo-text-ks">KS</span>
            <span />
          </span>
          KSAG
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {t.nav[link.key]}
            </NavLink>
          ))}

          <div className={`nav-more${moreOpen ? " open" : ""}`} ref={moreRef}>
            <button
              type="button"
              className={`nav-more-btn${moreActive ? " active" : ""}`}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              onClick={() => setMoreOpen((value) => !value)}
            >
              {t.nav.more}
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {moreOpen ? (
              <div className="nav-dropdown" role="menu">
                {moreLinks.map((link) => (
                  <NavLink key={link.to} to={link.to} role="menuitem">
                    {t.nav[link.key]}
                  </NavLink>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="header-actions">
          <LanguageSwitch />
          <Link className="btn btn-dark" to="/kontakt">
            {t.nav.cta}
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav${open ? " open" : ""}`}>
        <div className="container">
          {primaryLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {t.nav[link.key]}
            </NavLink>
          ))}
          {moreLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {t.nav[link.key]}
            </NavLink>
          ))}
          <Link className="btn btn-dark" to="/kontakt">
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
