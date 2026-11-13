import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const HERO_IMG =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero-media" aria-hidden="true">
        <motion.img
          src={HERO_IMG}
          alt=""
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <motion.p
          className="hero-brand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.hero.brand}
        </motion.p>
        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.hero.headline}
        </motion.h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.hero.sub}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="btn btn-primary" href="#contact">
            {t.hero.primary}
          </a>
          <a className="btn btn-ghost" href="#services">
            {t.hero.secondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
