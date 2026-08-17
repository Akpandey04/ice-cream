import { useEffect } from "react";
import heroImage from "../assets/images/Rose Litchi Ice cream.png";
import storyImage from "../assets/images/mango bloom.png";
import promiseImage from "../assets/images/pistachio kunafa dream cup.png";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page-main">
      {/* Hero Section */}
      <section className="section-panel about-hero reveal">
        <div className="about-split-layout">
          <div className="about-hero-content">
            <p className="eyebrow hero__eyebrow">ABOUT SCOOPYBLOOM</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--ink)' }}>Crafting Happiness, One Scoop at a Time</h1>
            <p className="hero__text" style={{ marginBottom: '2.5rem' }}>
              ScoopyBloom was created with one simple belief — every scoop should bring joy. We blend premium ingredients, handcrafted recipes, and unforgettable flavours to create desserts that become memories.
            </p>
          </div>
          <div className="about-hero-image">
            <div className="product-card__art" style={{ background: 'linear-gradient(135deg, #e487a0 0%, #d15b7c 100%)', borderRadius: '1.5rem', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={heroImage} alt="ScoopyBloom Ice Cream" style={{ width: '100%', maxWidth: '450px', objectFit: 'contain', margin: '0 auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Our Story */}
      <section className="section-panel reveal" id="our-story">
        <div className="about-split-layout">
          <div className="about-split-image">
            <div className="product-card__art" style={{ background: 'linear-gradient(135deg, #FFB347 0%, #FFCC33 100%)', borderRadius: '1.5rem', padding: '2rem', height: '100%', minHeight: '300px' }}>
              <img src={storyImage} alt="Our Story" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
          <div className="about-split-content">
            <h2 style={{ marginBottom: '2rem', color: 'var(--ink)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Why We Started ScoopyBloom</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--muted)' }}>
              We started ScoopyBloom because almost everything we eat today contains artificial colours and unnecessary additives.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--muted)' }}>
              That's why we believe in keeping our ice creams as natural as possible.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--ink)', fontWeight: 600, fontStyle: 'italic' }}>
              Pure ingredients. Honest flavours. Just the way ice cream should be. 🌸
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Why ScoopyBloom */}
      <section className="section-panel reveal">
        <div className="section-heading" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2>Why Choose ScoopyBloom?</h2>
        </div>
        <div className="value-grid about-scrollable-grid">
          <article className="value-card reveal">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>No Artificial Colours</h3>
            <p>We keep our ice creams 100% natural, without any artificial dyes.</p>
          </article>
          <article className="value-card reveal">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>No Preservatives</h3>
            <p>Enjoy the authentic taste of ice cream, made fresh without chemical preservatives.</p>
          </article>
          <article className="value-card reveal">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>Wide Sugar-Free Range</h3>
            <p>Indulge guilt-free with our carefully crafted selection of sugar-free delights.</p>
          </article>
          <article className="value-card reveal">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>Premium Ingredients</h3>
            <p>Crafted with premium, natural ingredients for an unforgettable experience.</p>
          </article>
        </div>
      </section>

      {/* Section 3 — Our Promise */}
      <section className="section-panel reveal">
        <div className="about-split-layout">
          <div className="about-split-content">
            <h2 style={{ marginBottom: '2rem', color: 'var(--ink)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Our Promise</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--muted)' }}>
              From sourcing the finest ingredients to perfecting every flavour, our commitment is to deliver premium quality, exceptional taste, and moments worth sharing. Every cup is prepared with care because our customers deserve nothing less.
            </p>
          </div>
          <div className="about-split-image">
            <div className="product-card__art" style={{ background: 'linear-gradient(135deg, #a8d5ba 0%, #d4ebd0 100%)', borderRadius: '1.5rem', padding: '2rem', height: '100%', minHeight: '300px' }}>
              <img src={promiseImage} alt="Our Promise" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>




      {/* Section 5 — Call to Action */}
      <section className="section-panel flavours-cta-section reveal">
        <div className="section-heading" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" }}>
          <h2 style={{ maxWidth: "22ch", margin: "0 auto", color: "var(--ink)" }}>Ready to Discover Your Favourite Scoop?</h2>
          <p style={{ margin: "1.5rem auto 2.5rem", maxWidth: "600px", fontSize: "1.15rem", lineHeight: 1.6, color: "var(--muted)" }}>
            Explore our handcrafted collection and experience flavours made with passion, premium ingredients, and unforgettable taste.
          </p>
          <a className="button button--primary magnetic" href="/flavours" style={{ alignSelf: "center", marginTop: "1rem" }}>Explore Flavours</a>
        </div>
      </section>
    </main>
  );
}
