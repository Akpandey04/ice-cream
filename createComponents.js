const fs = require('fs');

const heroContent = import { heroData } from "../data/hero";

export default function Hero() {
  return (
    <section className="hero section-panel" id="hero" data-theme="vanilla">
      <div className="hero-bg">
        <video className="hero-bg__video" src="/assets/videos/VN20260703_213731.mp4" autoPlay muted loop playsInline></video>
        <div className="hero-bg__overlay"></div>
      </div>
      <div className="hero__copy reveal">
        <p className="eyebrow">{heroData.eyebrow}</p>
        <h1>{heroData.heading}</h1>
        <p className="hero__text">
          {heroData.description}
        </p>
        <div className="hero__actions">
          <a className="button button--primary magnetic" href={heroData.primaryButton.link}>{heroData.primaryButton.label}</a>
          <a className="button button--ghost magnetic" href={heroData.secondaryButton.link}>{heroData.secondaryButton.label}</a>
        </div>
        <a className="scroll-cue" href="#collection" aria-label="Scroll to collection">
          <span></span>
        </a>
      </div>
    </section>
  );
};

const collectionsContent = import { products } from "../data/products";

export default function Collections() {
  return (
    <section className="collection section-panel" id="collection">
      <div className="section-heading reveal">
        <p className="eyebrow">Featured Collection</p>
        <h2>Best sellers with a little stage presence.</h2>
      </div>
      <div className="product-grid">
        {products.map(p => (
          <article key={p.id} className={\product-card \ reveal\}>
            <div className={\product-card__art product-card__art--\\}>
              <img src={\/\\} alt={p.name} />
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
};

const flavoursContent = import { flavours } from "../data/flavours";

export default function Flavours() {
  return (
    <section className="flavours section-panel" id="flavours">
      <div className="flavour-stage reveal">
        <p className="eyebrow">Signature Flavours</p>
        <h2 id="flavourTitle">{flavours[0].stageHeading}</h2>
        <p id="flavourText">{flavours[0].stageText}</p>
        <div className="flavour-pack" id="flavourPack">
          <img src="/assets/images/hero-product.png" alt="Animated signature flavour pint" />
        </div>
      </div>
      <div className="flavour-scroll">
        {flavours.map(f => (
          <article key={f.id} className="flavour-chapter" data-flavour={f.id}>
            <span>{f.number}</span>
            <h3>{f.name}</h3>
            <p>{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const valuesContent = import { values } from "../data/values";

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
};

const storyContent = export default function Story() {
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
};

const reviewsContent = import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="reviews section-panel" id="reviews">
      <div className="section-heading reveal">
        <p className="eyebrow">Customer Reviews</p>
        <h2>Sweet notes from the first spoonful.</h2>
      </div>
      <div className="review-stack">
        {reviews.map(r => (
          <article key={r.id} className={\eview-card \ reveal\}>
            <div className={\vatar avatar--\\}>{r.avatar}</div>
            <div className="stars" aria-label="5 out of 5 stars">*****</div>
            <p>{r.text}</p>
            <span>{r.author}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

const instagramContent = export default function Instagram() {
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
};

const footerContent = import { footer } from "../data/footer";

export default function Footer() {
  return (
    <footer className="site-footer" id="newsletter">
      <div className="footer-inner">
        <div className="footer-grid">
          <section className="footer-brand-column" aria-label="Brand information">
            <a className="brand footer-brand" href="#hero" aria-label="Sundae Atelier home">
              <span className="brand__scoop"></span>
              <span>Sundae Atelier</span>
            </a>
            <p>{footer.brandText}</p>
          </section>

          <nav className="footer-column" aria-label="Quick links">
            <h2>Quick Links</h2>
            <ul>
              {footer.quickLinks.map((link, i) => (
                <li key={i}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>

          <section className="footer-column" aria-label="Contact details">
            <h2>Contact</h2>
            <address>
              <span>Email</span>
              <a href={\mailto:\\}>{footer.contact.email}</a>
              <span>Phone</span>
              <a href={\	el:\\}>{footer.contact.phone}</a>
              <span>Address</span>
              <p>
                {footer.contact.address.map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </address>
          </section>

          <section className="footer-column footer-social-column" aria-label="Social links">
            <h2>Follow Us</h2>
            <p>{footer.socialText}</p>
            <div className="social-links" aria-label="Social media links">
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="X Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </section>
        </div>

        <section className="footer-newsletter" aria-label="Newsletter subscription">
          <div>
            <h2>Join Our Sweet Community</h2>
            <p>
              Subscribe to receive exclusive offers, new flavour launches,
              seasonal collections, and exciting updates.
            </p>
          </div>
          <form className="footer-signup-form" id="signupForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email">Email address</label>
            <div className="footer-signup-form__row">
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">Subscribe</button>
            </div>
            <p className="form-message" id="formMessage" role="status"></p>
          </form>
        </section>

        <div className="footer-bottom">
          <p>&copy; 2026 Your Brand. All Rights Reserved.</p>
          <nav className="policy-links" aria-label="Legal links">
            {footer.legal.map((link, i) => (
              <a key={i} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

fs.writeFileSync('src/sections/Hero.tsx', heroContent);
fs.writeFileSync('src/sections/Collections.tsx', collectionsContent);
fs.writeFileSync('src/sections/Flavours.tsx', flavoursContent);
fs.writeFileSync('src/sections/Values.tsx', valuesContent);
fs.writeFileSync('src/sections/Story.tsx', storyContent);
fs.writeFileSync('src/sections/Reviews.tsx', reviewsContent);
fs.writeFileSync('src/sections/Instagram.tsx', instagramContent);
fs.writeFileSync('src/components/Footer.tsx', footerContent);

console.log('Components created successfully!');
