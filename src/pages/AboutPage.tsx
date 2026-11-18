import { PageHero } from "../components/PageHero";
import { useLanguage } from "../i18n/LanguageContext";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.about.title} lead={t.about.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-intro">
          <figure className="about-portrait">
            <img src={`${import.meta.env.BASE_URL}photos/ademi.png`} alt={t.home.portraitAlt} />
            <figcaption>
              <strong>{t.home.portraitName}</strong>
              <span>{t.home.portraitRole}</span>
            </figcaption>
          </figure>
          <div className="prose">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="container prose about-rest">
          <h2>{t.about.valuesTitle}</h2>
          <div className="value-grid">
            {t.about.values.map((item) => (
              <article className="value-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <h2>{t.about.topicsTitle}</h2>
          <p>{t.about.topicsLead}</p>
          <ul className="topic-list">
            {t.about.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
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
