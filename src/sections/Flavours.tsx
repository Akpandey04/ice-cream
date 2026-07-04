import { flavours } from "../data/flavours";

export default function Flavours() {
  return (
    <section className="flavours section-panel" id="flavours">
      <div className="flavour-stage reveal desktop-only">
        <p className="eyebrow">Signature Flavours</p>
        <h2 id="flavourTitle">{flavours[0].stageHeading}</h2>
        <p id="flavourText">{flavours[0].stageText}</p>
        <div className="flavour-pack" id="flavourPack">
          <img src="/assets/images/hero-product.png" alt="Animated signature flavour pint" />
        </div>
      </div>
      <div className="flavour-scroll">
        <p className="eyebrow mobile-only flavour-mobile-title">Signature Flavours</p>
        {flavours.map((f, i) => (
          <article key={f.id} className="flavour-chapter" data-flavour={f.id}>
            <h2 className="mobile-only">{f.stageHeading}</h2>
            <span>{f.number}</span>
            <div className="mobile-only mobile-flavour-image">
              <img src="/assets/images/hero-product.png" alt={f.name} />
            </div>
            <h3>{f.name}</h3>
            <p className="flavour-desc-main">{f.description}</p>
            <p className="mobile-only flavour-desc-stage">{f.stageText}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
