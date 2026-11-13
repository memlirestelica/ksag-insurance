import { useState, type FormEvent } from "react";
import { ContactAside } from "../components/ContactAside";
import { PageHero } from "../components/PageHero";
import { useLanguage } from "../i18n/LanguageContext";

export function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <PageHero title={t.contact.title} lead={t.contact.lead} />
      <section className="section contact" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          <form className="contact-form" onSubmit={onSubmit}>
            <h2 className="mini-title">{t.contact.formTitle}</h2>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">{t.contact.name}</label>
                <input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">{t.contact.email}</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
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
            {sent && <p className="form-success">{t.common.success}</p>}
            <button className="btn btn-primary" type="submit">
              {t.common.send}
            </button>
          </form>
          <ContactAside />
        </div>
      </section>
    </>
  );
}
