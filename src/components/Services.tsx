import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  return (
    <section className="section" id="services">
      <div className="container">
        <p className="eyebrow">{t.services.eyebrow}</p>
        <h2 className="section-title">{t.services.title}</h2>
        <p className="section-sub">{t.services.sub}</p>

        <div className="services-grid">
          {t.services.items.map((item, index) => (
            <motion.article
              key={item.title}
              className="service-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span className="service-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
