import { heroData } from "../data/hero";
import heroImage from "../assets/images/hero2.png";

export default function Hero() {
  return (
    <section className="hero section-panel" id="hero" data-theme="vanilla">
      {/* Background gradient decoupled from parallax */}
      <div className="hero-bg-gradient"></div>
      
      <div className="hero-grid">
        {/* LEFT SIDE - CONTENT */}
        <div className="hero-content-left reveal">
          <p className="eyebrow hero__eyebrow">Blossom of Natural Scoop</p>
          <h1>{heroData.heading}</h1>
          <p className="hero__text">
            {heroData.description}
          </p>
          
          <div className="hero__actions">
            <a className="button button--primary magnetic" href={heroData.primaryButton.link}>{heroData.primaryButton.label}</a>
            <a className="button button--ghost magnetic" href={heroData.secondaryButton.link}>{heroData.secondaryButton.label}</a>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
              <div>
                <h4>Natural Ingredients</h4>
                <p>Made with real fruits & nuts.</p>
              </div>
            </div>
            <div className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <div>
                <h4>Irresistible Flavours</h4>
                <p>Unique combinations to delight.</p>
              </div>
            </div>
            <div className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <div>
                <h4>Made with Love</h4>
                <p>Every scoop made with passion.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - MEDIA */}
        <div className="hero-media-right">
          <div className="hero-glow"></div>
          
          <div className="hero-cup-wrapper">
            <img src={heroImage} alt="ScoopyBloom Hero Cup" className="hero-cup" />
            <div className="hero-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
