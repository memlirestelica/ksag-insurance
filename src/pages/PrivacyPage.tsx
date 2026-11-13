import { PageHero } from "../components/PageHero";
import { useLanguage } from "../i18n/LanguageContext";

export function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.privacy.title} lead={t.privacy.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose legal-page">
          <p className="muted">{t.privacy.updated}</p>
          <p className="note">{t.privacy.disclaimer}</p>
          {t.privacy.sections.map((section) => (
            <article className="content-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.body ? <p>{section.body}</p> : null}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
