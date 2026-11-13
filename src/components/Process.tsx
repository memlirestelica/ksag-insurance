import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function Process() {
  const { t } = useLanguage();

  return (
    <section className="section" id="process">
      <div className="container">
        <p className="eyebrow">{t.process.eyebrow}</p>
        <h2 className="section-title">{t.process.title}</h2>
        <p className="section-sub">{t.process.sub}</p>

        <div className="process-steps">
          {t.process.steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="process-step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
