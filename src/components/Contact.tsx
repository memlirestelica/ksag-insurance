import { useState, type FormEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const WHATSAPP =
  "https://wa.me/41791234567?text=Hallo%20KSAG%20Insurance";

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-sub">{t.contact.sub}</p>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">{t.contact.name}</label>
                <input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">{t.contact.email}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">{t.contact.phone}</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="topic">{t.contact.topic}</label>
                <select id="topic" name="topic" defaultValue={t.contact.topics[0]}>
                  {t.contact.topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">{t.contact.message}</label>
              <textarea id="message" name="message" required />
            </div>
            {sent && <p className="form-success">{t.contact.success}</p>}
            <button className="btn btn-primary" type="submit">
              {t.contact.submit}
            </button>
          </form>

          <aside className="contact-info">
            <div>
              <h3>{t.contact.infoTitle}</h3>
              <p>{t.contact.address}</p>
            </div>
            <div>
              <p>
                <a href="mailto:hello@ksag-insurance.ch">hello@ksag-insurance.ch</a>
              </p>
              <p>
                <a href="tel:+41441234567">+41 44 123 45 67</a>
              </p>
              <p>{t.contact.hours}</p>
            </div>
            <a className="btn btn-dark" href={WHATSAPP} target="_blank" rel="noreferrer">
              {t.contact.whatsapp}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
