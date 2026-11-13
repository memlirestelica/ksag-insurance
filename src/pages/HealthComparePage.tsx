import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useLanguage } from "../i18n/LanguageContext";

export function HealthComparePage() {
  const { t } = useLanguage();
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDone(true);
  };

  return (
    <>
      <PageHero title={t.healthCompare.title} lead={t.healthCompare.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split-layout">
          <div>
            <h2 className="mini-title">{t.healthCompare.stepsTitle}</h2>
            <ol className="step-list">
              {t.healthCompare.steps.map((step, index) => (
                <li key={step}>
                  <span>0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="muted">{t.common.mockNote}</p>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <h2 className="mini-title">{t.healthCompare.formTitle}</h2>
            <div className="form-row">
              <div className="field">
                <label htmlFor="zip">{t.healthCompare.zip}</label>
                <input id="zip" name="zip" required />
              </div>
              <div className="field">
                <label htmlFor="year">{t.healthCompare.year}</label>
                <input id="year" name="year" type="number" min="1920" max="2026" required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="franchise">{t.healthCompare.franchise}</label>
                <select id="franchise" name="franchise" defaultValue="2500">
                  {["300", "500", "1000", "1500", "2000", "2500"].map((value) => (
                    <option key={value} value={value}>
                      CHF {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="accident">{t.healthCompare.accident}</label>
                <select id="accident" name="accident" defaultValue="yes">
                  <option value="yes">{t.healthCompare.accidentYes}</option>
                  <option value="no">{t.healthCompare.accidentNo}</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="insurer">{t.healthCompare.currentInsurer}</label>
              <input id="insurer" name="insurer" />
            </div>
            <div className="field">
              <label htmlFor="model">{t.healthCompare.model}</label>
              <select id="model" name="model" defaultValue={t.healthCompare.models[0]}>
                {t.healthCompare.models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
            {done ? (
              <div className="form-success">
                <strong>{t.healthCompare.resultTitle}</strong>
                <p>{t.healthCompare.resultBody}</p>
                <Link className="btn btn-dark" to="/kontakt">
                  {t.common.contactUs}
                </Link>
              </div>
            ) : (
              <button className="btn btn-primary" type="submit">
                {t.healthCompare.submit}
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
