import { heroData } from "../data/hero";
import heroImage from "../assets/images/hero2.png";
import heroImageMobile from "../assets/images/hero3.png";

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


        </div>

        {/* RIGHT SIDE - MEDIA */}
        <div className="hero-media-right">
          <div className="hero-glow"></div>
          
          <div className="hero-cup-wrapper">
            <picture>
              <source media="(max-width: 1024px)" srcSet={heroImageMobile} />
              <img src={heroImage} alt="ScoopyBloom Hero Cup" className="hero-cup" />
            </picture>
            {/* <div className="hero-shadow"></div> */ }
          </div>
        </div>
      </div>
    </section>
  );
}
