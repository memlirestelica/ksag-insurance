import { useLanguage } from "../i18n/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <p className="eyebrow">{t.testimonials.eyebrow}</p>
        <h2 className="section-title">{t.testimonials.title}</h2>
        <div className="quotes">
          {t.testimonials.items.map((item) => (
            <blockquote className="quote" key={item.name}>
              <p>“{item.quote}”</p>
              <footer>
                <strong>{item.name}</strong> · {item.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
