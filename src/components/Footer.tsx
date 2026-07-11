import { footer } from "../data/footer";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer" id="newsletter">
      <div className="footer-inner">
        <div className="footer-grid">
          <section className="footer-brand-column" aria-label="Brand information">
            <a className="brand footer-brand" href="#hero" aria-label="ScoopyBloom home">
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF6F2', borderRadius: '50%', padding: '0', boxShadow: '0 6px 16px rgba(67, 35, 29, 0.05)', border: '1px solid rgba(255, 255, 255, 0.6)' }}>
                <img src={logo} alt="ScoopyBloom Logo" style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} />
              </span>
              <span>ScoopyBloom</span>
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
              <a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
              <span>Phone</span>
              <a href={`tel:${footer.contact.phone.replace(/\s/g, '')}`}>{footer.contact.phone}</a>
              <span>Address</span>
              <p>
                {footer.contact.address.map((line, i) => [
                  line,
                  <br key={i} />
                ])}
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
}
