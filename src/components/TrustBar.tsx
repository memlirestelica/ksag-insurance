import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="trust-bar" aria-label={t.trust.label}>
      <div className="container">
        <div className="trust-inner">
          <p className="trust-label">{t.trust.label}</p>
          <ul className="trust-stats">
            {t.trust.stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="trust-list">
          {t.trust.items.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
