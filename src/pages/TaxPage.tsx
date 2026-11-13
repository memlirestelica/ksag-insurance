import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useLanguage } from "../i18n/LanguageContext";

export function TaxPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.tax.title} lead={t.tax.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          {t.tax.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h2>{t.tax.pricingTitle}</h2>
          <div className="pricing-table">
            {t.tax.pricing.map((row) => (
              <div className="pricing-row" key={row.label}>
                <span>{row.label}</span>
                <strong>{row.price}</strong>
              </div>
            ))}
          </div>
          <p className="note">{t.tax.pricingNote}</p>
          <p className="note">{t.tax.exclusion}</p>

          <h2>{t.tax.stepsTitle}</h2>
          <ol className="step-list">
            {t.tax.steps.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>

          <Link className="btn btn-primary" to="/kontakt">
            {t.common.contactUs}
          </Link>
        </div>
      </section>
    </>
  );
}
