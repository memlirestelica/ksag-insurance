import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import type { Product } from "../i18n";
import { useLanguage } from "../i18n/LanguageContext";

type ProductsPageProps = {
  kind: "private" | "business";
};

export function ProductsPage({ kind }: ProductsPageProps) {
  const { t } = useLanguage();
  const data = kind === "private" ? t.private : t.business;
  const base = kind === "private" ? "/privatkunden" : "/firmenkunden";

  return (
    <>
      <PageHero title={data.title} lead={data.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container product-grid">
          {data.products.map((product: Product, index) => (
            <Link
              className="product-card"
              key={product.slug}
              to={`${base}/${product.slug}`}
            >
              <span>0{index + 1}</span>
              <h2>{product.title}</h2>
              <p>{product.short}</p>
              <em>{t.common.more}</em>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
