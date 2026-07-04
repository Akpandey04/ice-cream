import { flavours } from "../data/flavours";

export default function Flavours() {
  return (
    <section className="flavours section-panel" id="flavours">
      <div className="flavour-stage reveal">
        <p className="eyebrow">Signature Flavours</p>
        <h2 id="flavourTitle">{flavours[0].stageHeading}</h2>
        <p id="flavourText">{flavours[0].stageText}</p>
        <div className="flavour-pack" id="flavourPack">
          <img src="/assets/images/hero-product.png" alt="Animated signature flavour pint" />
        </div>
      </div>
      <div className="flavour-scroll">
        {flavours.map(f => (
          <article key={f.id} className="flavour-chapter" data-flavour={f.id}>
            <span>{f.number}</span>
            <h3>{f.name}</h3>
            <p>{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
