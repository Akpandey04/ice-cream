export default function Instagram() {
  return (
    <section className="instagram section-panel" id="instagram">
      <div className="section-heading reveal">
        <p className="eyebrow">Instagram Gallery</p>
        <h2>Moments made for another spoonful.</h2>
      </div>
      <div className="gallery-strip" aria-label="Gallery preview">
        <figure className="gallery-tile reveal"><img src="/assets/images/hero-product.png" alt="Ice cream pint closeup" /></figure>
        <figure className="gallery-tile gallery-tile--berry reveal"></figure>
        <figure className="gallery-tile gallery-tile--mint reveal"></figure>
        <figure className="gallery-tile gallery-tile--cocoa reveal"></figure>
        <figure className="gallery-tile reveal"><img src="/assets/images/hero-product.png" alt="Ice cream celebration product shot" /></figure>
      </div>
    </section>
  );
}
