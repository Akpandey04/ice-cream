import { heroData } from "../data/hero";

export default function Hero() {
  return (
    <section className="hero section-panel" id="hero" data-theme="vanilla">
      <div className="hero-bg">
        <video className="hero-bg__video" src="/assets/videos/VN20260703_213731.mp4" autoPlay muted loop playsInline></video>
        <div className="hero-bg__overlay"></div>
      </div>
      <div className="hero__copy reveal">
        {/* <p className="eyebrow hero__eyebrow">{heroData.eyebrow}</p> */}
        <h1>{heroData.heading}</h1>
        <p className="hero__text">
          {heroData.description}
        </p>
        <div className="hero__actions">
          <a className="button button--primary magnetic" href={heroData.primaryButton.link}>{heroData.primaryButton.label}</a>
          <a className="button button--ghost magnetic" href={heroData.secondaryButton.link}>{heroData.secondaryButton.label}</a>
        </div>

      </div>
    </section>
  );
}
