import { useState, type FormEvent } from "react";
import { PageHero } from "../components/PageHero";
import { useLanguage } from "../i18n/LanguageContext";

export function RecommendPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <PageHero title={t.recommend.title} lead={t.recommend.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split-layout">
          <div className="prose">
            <p className="reward-callout">{t.recommend.reward}</p>
            <h2>{t.recommend.stepsTitle}</h2>
            <ol className="step-list">
              {t.recommend.steps.map((step, index) => (
                <li key={step}>
                  <span>0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="note">{t.recommend.important}</p>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <h2 className="mini-title">{t.recommend.formTitle}</h2>
            <div className="field">
              <label htmlFor="yourName">{t.recommend.yourName}</label>
              <input id="yourName" name="yourName" required />
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="yourEmail">{t.recommend.yourEmail}</label>
                <input id="yourEmail" name="yourEmail" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="yourPhone">{t.recommend.yourPhone}</label>
                <input id="yourPhone" name="yourPhone" type="tel" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="friendName">{t.recommend.friendName}</label>
              <input id="friendName" name="friendName" required />
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="friendPhone">{t.recommend.friendPhone}</label>
                <input id="friendPhone" name="friendPhone" type="tel" required />
              </div>
              <div className="field">
                <label htmlFor="friendEmail">{t.recommend.friendEmail}</label>
                <input id="friendEmail" name="friendEmail" type="email" />
              </div>
            </div>
            {sent && <p className="form-success">{t.common.success}</p>}
            <button className="btn btn-primary" type="submit">
              {t.recommend.submit}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
