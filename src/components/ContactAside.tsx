import { useLanguage } from "../i18n/LanguageContext";

const WHATSAPP = "https://wa.me/41791234567?text=Hallo%20KSAG%20Insurance";

export function ContactAside() {
  const { t } = useLanguage();

  return (
    <aside className="contact-info">
      <div>
        <h3>{t.contact.infoTitle}</h3>
        <p>{t.common.address}</p>
      </div>
      <div>
        <p>
          <a href={`mailto:${t.common.email}`}>{t.common.email}</a>
        </p>
        <p>
          <a href={`tel:${t.common.phone.replace(/\s/g, "")}`}>{t.common.phone}</a>
        </p>
        <p className="hours-block">
          <strong>{t.common.hoursLabel}</strong>
          <br />
          {t.common.hours.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <a className="btn btn-light" href={WHATSAPP} target="_blank" rel="noreferrer">
        {t.whatsappLabel}
      </a>
    </aside>
  );
}
