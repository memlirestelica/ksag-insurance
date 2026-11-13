import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrustBar } from "../components/TrustBar";
import { useLanguage } from "../i18n/LanguageContext";

const HERO_IMG =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=80";
const OFFICE_IMG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
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
            transition={{ duration: 0.7 }}
          >
            {t.home.heroBrand}
          </motion.p>
          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t.home.heroTitle}
          </motion.h1>
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            {t.home.heroSub}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link className="btn btn-primary" to="/krankenkassenvergleich">
              {t.home.heroPrimary}
            </Link>
            <Link className="btn btn-ghost" to="/privatkunden">
              {t.home.heroSecondary}
            </Link>
          </motion.div>
        </div>
      </section>

      <TrustBar />

      <section className="section welcome">
        <div className="container welcome-layout">
          <div className="welcome-visual">
            <img src={OFFICE_IMG} alt="" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">{t.home.welcomeEyebrow}</p>
            <h2 className="section-title">{t.home.welcomeTitle}</h2>
            {t.home.welcomeBody.map((paragraph) => (
              <p className="body-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <Link className="btn btn-dark" to="/uber-uns">
              {t.common.more}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t.home.servicesTitle}</h2>
          <div className="home-cards">
            <Link className="home-card" to="/privatkunden">
              <h3>{t.home.privateCardTitle}</h3>
              <p>{t.home.privateCardBody}</p>
              <span>{t.common.more}</span>
            </Link>
            <Link className="home-card" to="/firmenkunden">
              <h3>{t.home.businessCardTitle}</h3>
              <p>{t.home.businessCardBody}</p>
              <span>{t.common.more}</span>
            </Link>
            <Link className="home-card" to="/kontakt">
              <h3>{t.home.contactCardTitle}</h3>
              <p>{t.home.contactCardBody}</p>
              <span>{t.nav.contact}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section staff-band">
        <div className="container staff-layout">
          <div>
            <h2 className="section-title">{t.home.staffTitle}</h2>
            <p className="section-sub">{t.home.staffBody}</p>
            <ul className="staff-list">
              {t.home.staffItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn btn-primary" to="/firmenkunden">
              {t.common.more}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
