import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">KSAG Insurance</div>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footer.links}</h4>
            <a href="#services">{t.nav.services}</a>
            <a href="#why">{t.nav.why}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="footer-col">
            <h4>{t.footer.legal}</h4>
            <a href="#contact">{t.footer.privacy}</a>
            <a href="#contact">{t.footer.terms}</a>
            <a href="#contact">{t.footer.imprint}</a>
          </div>
        </div>
        <div className="footer-bottom">{t.footer.rights}</div>
      </div>
    </footer>
  );
}
