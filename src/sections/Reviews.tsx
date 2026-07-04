import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="reviews section-panel" id="reviews">
      <div className="section-heading reveal">
        <p className="eyebrow">Customer Reviews</p>
        <h2>Sweet notes from the first spoonful.</h2>
      </div>
      <div className="review-stack">
        {reviews.map(r => (
          <article key={r.id} className={`review-card ${r.lift ? 'review-card--lift' : ''} reveal`}>
            <div className={`avatar avatar--${r.variant}`}>{r.avatar}</div>
            <div className="stars" aria-label="5 out of 5 stars">*****</div>
            <p>{r.text}</p>
            <span>{r.author}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
