import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { useLanguage } from "../i18n/LanguageContext";

type ProductDetailPageProps = {
  kind: "private" | "business";
};

export function ProductDetailPage({ kind }: ProductDetailPageProps) {
  const { slug } = useParams();
  const { t } = useLanguage();
  const data = kind === "private" ? t.private : t.business;
  const base = kind === "private" ? "/privatkunden" : "/firmenkunden";
  const product = data.products.find((item) => item.slug === slug);

  if (!product) return <Navigate to={base} replace />;

  return (
    <>
      <PageHero title={product.title} lead={product.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <Link className="back-link" to={base}>
            ← {t.common.back} · {data.title}
          </Link>
          {product.sections.map((section) => (
            <article className="content-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.body ? <p>{section.body}</p> : null}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {section.note ? <p className="note">{section.note}</p> : null}
            </article>
          ))}
          <Link className="btn btn-primary" to="/kontakt">
            {t.common.contactUs}
          </Link>
        </div>
      </section>
    </>
  );
}
