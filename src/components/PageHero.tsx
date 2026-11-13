type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="section-title">{title}</h1>
        {lead ? <p className="section-sub">{lead}</p> : null}
      </div>
    </section>
  );
}
