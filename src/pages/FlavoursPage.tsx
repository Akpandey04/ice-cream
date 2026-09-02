import { useEffect } from "react";
import { flavours } from "../data/flavours";

export default function FlavoursPage() {
  useEffect(() => {
    // Scroll to top when page mounts
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("touch-hover");
        } else {
          entry.target.classList.remove("touch-hover");
        }
      });
    }, { threshold: 0.6 });

    const cards = document.querySelectorAll(".flavour-page-card");
    cards.forEach(card => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="flavours-page-main">
      {/* Hero Section */}
      <section className="hero section-panel flavours-hero reveal">
        <div className="flavours-hero-content">
          <p className="eyebrow hero__eyebrow">Our Flavours</p>
          <h1>Explore Every Scoop</h1>
          <p className="hero__text">
            Every scoop tells a delicious story, thoughtfully crafted to deliver an unforgettable dessert experience.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-panel flavours-grid-section">
        <div className="flavours-page-grid">
          {flavours.map((f, i) => (
            <article key={i} className="product-card flavour-page-card reveal">
              <a href="#" className="card-click-area" aria-label={`Order ${f.name}`} onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('openOrderModal'));
              }}></a>
              <div 
                className="product-card__art"
                style={{ background: `linear-gradient(135deg, ${f.theme[0]} 0%, ${f.theme[1]} 100%)` }}
              >
                <img src={f.image} alt={f.name} />
              </div>
              <div className="product-card__body">
                <span>{f.tag}</span>
                <h3>{f.name}</h3>
                <p>{f.description}</p>
              <div className="product-card__button" onClick={() => window.dispatchEvent(new Event('openOrderModal'))} style={{cursor: 'pointer'}}>Order Now</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-panel flavours-cta-section reveal" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="section-heading" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" }}>
          <h2 style={{ maxWidth: "18ch", margin: "0 auto", color: "var(--ink)" }}>Discover Your Next Favourite Scoop</h2>
          <p style={{ margin: "1.5rem auto 2.5rem", maxWidth: "600px", fontSize: "1.15rem", lineHeight: 1.6, color: "var(--muted)" }}>
            From tropical fruits to rich chocolates and handcrafted specials, every flavour is made to create a memorable dessert experience.
          </p>
          <a href="#" className="button button--primary magnetic" style={{ alignSelf: "center", marginTop: "1rem" }} onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('openOrderModal'));
          }}>Order Now</a>
        </div>
      </section>
    </main>
  );
}
