import { values } from "../data/values";

export default function Values() {
  return (
    <section className="values section-panel" id="values">
      <div className="section-heading reveal">
        <p className="eyebrow">Why Choose Us</p>
        <h2>Premium where it matters, playful where it shines.</h2>
      </div>
      <div className="value-grid">
        {values.map(v => (
          <article key={v.id} className="value-card reveal">
            <span className="value-icon">{v.icon}</span>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
