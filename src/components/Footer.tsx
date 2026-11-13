import { Link } from "react-router-dom";
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
            <p className="footer-contact">
              {t.common.address}
              {"\n"}
              <a href={`tel:${t.common.phone.replace(/\s/g, "")}`}>{t.common.phone}</a>
              {"\n"}
              <a href={`mailto:${t.common.email}`}>{t.common.email}</a>
            </p>
          </div>
          <div className="footer-col">
            <h4>{t.footer.privateTitle}</h4>
            {t.private.products.map((product) => (
              <Link key={product.slug} to={`/privatkunden/${product.slug}`}>
                {product.title}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>{t.footer.legal}</h4>
            <Link to="/datenschutz">{t.footer.privacy}</Link>
            <Link to="/impressum">{t.footer.imprint}</Link>
            <Link to="/kontakt">{t.nav.contact}</Link>
          </div>
        </div>
        <div className="footer-bottom">{t.footer.rights}</div>
      </div>
    </footer>
  );
}
