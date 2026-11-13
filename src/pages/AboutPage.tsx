import { PageHero } from "../components/PageHero";
import { useLanguage } from "../i18n/LanguageContext";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.about.title} lead={t.about.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          {t.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="section testimonials" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">{t.about.partnersTitle}</h2>
          <div className="quotes">
            {t.about.quotes.map((item, index) => (
              <blockquote
                className={`quote${index === 0 ? " featured" : ""}`}
                key={item.quote}
              >
                <p>{item.quote}</p>
                <footer>
                  <strong>{item.name}</strong> · {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
