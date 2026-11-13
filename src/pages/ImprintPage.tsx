import { PageHero } from "../components/PageHero";
import { useLanguage } from "../i18n/LanguageContext";

export function ImprintPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.imprint.title} lead={t.imprint.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose legal-page">
          {t.imprint.sections.map((section) => (
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
