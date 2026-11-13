import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq" style={{ paddingTop: "2rem" }}>
      <div className="container">
        <p className="eyebrow">{t.faq.eyebrow}</p>
        <h2 className="section-title">{t.faq.title}</h2>
        <div className="faq-list">
          {t.faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className={`faq-item${isOpen ? " open" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  {item.q}
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="answer">{item.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
