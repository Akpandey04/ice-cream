import { products } from "../data/products";

export default function Collections() {
  return (
    <section className="collection section-panel" id="collection">
      <div className="section-heading reveal">
        <p className="eyebrow">Featured Collection</p>
        <h2>Best sellers with a little stage presence.</h2>
      </div>
      <div className="product-grid">
        {products.map((p) => (
          <article key={p.id} className={`product-card ${p.wide ? 'product-card--wide' : ''} reveal`}>
            <div className={`product-card__art product-card__art--${p.variant}`}>
              <img src={`/${p.image}`} alt={p.name} />
            </div>
            <div className="product-card__body">
              <span>{p.type}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <a className="product-card__button" href="#flavours">View Details</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
