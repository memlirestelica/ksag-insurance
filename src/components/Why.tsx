import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const WHY_IMG =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80";

export function Why() {
  const { t } = useLanguage();

  return (
    <section className="section why" id="why">
      <div className="container why-layout">
        <motion.div
          className="why-visual"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <img src={WHY_IMG} alt="" />
        </motion.div>

        <div>
          <p className="eyebrow">{t.why.eyebrow}</p>
          <h2 className="section-title">{t.why.title}</h2>
          <p className="section-sub">{t.why.sub}</p>
          <div className="why-points">
            {t.why.points.map((point) => (
              <article className="why-point" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
