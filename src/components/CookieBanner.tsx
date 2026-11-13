import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const STORAGE_KEY = "ksag-cookie-consent";

export function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const choose = (value: "all" | "essential") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label={t.cookies.title}>
      <div className="cookie-banner-inner">
        <div>
          <strong>{t.cookies.title}</strong>
          <p>
            {t.cookies.body}{" "}
            <Link to="/datenschutz">{t.cookies.link}</Link>
          </p>
        </div>
        <div className="cookie-actions">
          <button
            type="button"
            className="btn btn-ghost-dark"
            onClick={() => choose("essential")}
          >
            {t.cookies.essential}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => choose("all")}
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
