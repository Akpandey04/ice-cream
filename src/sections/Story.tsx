export default function Story() {
  return (
    <section className="story section-panel" id="story">
      <div className="story__visual reveal" aria-hidden="true">
        <div className="mixing-bowl">
          <span className="bowl-rim"></span>
          <span className="bowl-body"></span>
          <span className="cream-swirl"></span>
        </div>
        <span className="story-piece story-piece--berry"></span>
        <span className="story-piece story-piece--mint"></span>
        <span className="story-piece story-piece--cocoa"></span>
        <span className="story-piece story-piece--mango"></span>
        <img className="story-pack" src="/assets/images/hero-product.png" alt="" />
      </div>
      <div className="story__copy reveal">
        <p className="eyebrow">Ingredient Story</p>
        <h2>From market basket to frozen theatre.</h2>
        <p>
          Fresh fruit arrives at dawn. Cream is slow-churned until it turns satin-smooth.
          Every garnish is folded in only when the texture is ready.
        </p>
        <p>
          The final pint is sealed cold, dressed beautifully, and sent out with the
          kind of finish that makes dessert feel like an occasion.
        </p>
      </div>
    </section>
  );
}
