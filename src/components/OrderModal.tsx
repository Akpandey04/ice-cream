import { useEffect, useRef, useState } from "react";
import collageImage from "../assets/images/collage.png";
import logoImage from "../assets/images/logo.png";
import { footer } from "../data/footer";

export default function OrderModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLAnchorElement>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // 300ms animation
  };

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      e.preventDefault();
      setIsOpen(true);
      setIsClosing(false);
    };

    window.addEventListener("openOrderModal", handleOpenModal);
    return () => window.removeEventListener("openOrderModal", handleOpenModal);
  }, []);

  useEffect(() => {
    if (isOpen && !isClosing) {
      const originalStyle = window.getComputedStyle(document.body).overflow;  
      document.body.style.overflow = "hidden";
      
      setTimeout(() => whatsappRef.current?.focus(), 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      document.addEventListener("keydown", handleKeyDown);
      
      return () => {
        document.body.style.overflow = originalStyle;
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, isClosing]);

  if (!isOpen && !isClosing) return null;

  const whatsappMessage = encodeURIComponent(
    "Hi ScoopyBloom! 🍨\n\nI would like to place an order.\n\nCould you please share today's available flavours and pricing?"
  );
  const phoneClean = footer.contact.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${phoneClean}?text=${whatsappMessage}`;

  return (
    <div 
      className={`order-modal-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
      aria-hidden="true"
    >
      <div 
        className={`order-modal ${isClosing ? "closing" : ""}`}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        {/* Header - Logo + Close Button */}
        <div className="om-top-bar">
          <div className="om-brand">
            <img src={logoImage} alt="ScoopyBloom Logo" className="om-logo" />
            <div className="om-brand-text">
              <span className="om-brand-title">ScoopyBloom</span>
              <span className="om-brand-subtitle">Blossom of Natural Scoop</span>
            </div>
          </div>
          
          <button 
            className="om-close-btn" 
            onClick={handleClose}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="om-content-wrapper">
          {/* Heading */}
          <div className="om-header">
            <h2 id="order-modal-title">Order ScoopyBloom</h2>
            <p>Choose your favourite flavour and connect with us instantly.</p>
          </div>

          {/* Collage Image */}
          <div className="om-gallery">
            <img src={collageImage} alt="ScoopyBloom Flavours Collage" className="om-gallery-img" />
          </div>

          {/* Description */}
          <div className="om-desc">
            <p>Explore all our handcrafted flavours and place your order directly with our team.</p>
          </div>

          {/* CTAs */}
          <div className="om-actions">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="om-btn om-btn-wa"
              ref={whatsappRef}
            >
              <div className="om-btn-icon-wrapper wa-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#25D366" stroke="#25D366" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div className="om-btn-text">
                <span className="om-btn-title">Order on WhatsApp</span>
                <span className="om-btn-subtitle">Chat with us and place your order instantly.</span>
              </div>
            </a>

            <a href={`tel:${footer.contact.phone.replace(/\s/g, '')}`} className="om-btn om-btn-call">
              <div className="om-btn-icon-wrapper call-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="om-btn-text">
                <span className="om-btn-title">Call Us</span>
                <span className="om-btn-subtitle">Prefer talking? Give us a call.</span>
                <span className="om-btn-phone">{footer.contact.phone}</span>
              </div>
            </a>
          </div>

          {/* Bottom Info Cards */}
          <div className="om-info-cards">
            <div className="om-info-card">
              <div className="om-icard-icon wa-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="om-icard-content">
                <h4>Fast WhatsApp Ordering</h4>
                <p>Share your favourite flavour and quantity. We'll confirm your order instantly.</p>
              </div>
            </div>

            <div className="om-info-card">
              <div className="om-icard-icon headset-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 0-10 10v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H4"></path>
                  <path d="M20 12v-2a10 10 0 0 0-10-10"></path>
                  <path d="M20 12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 22a8 8 0 0 0 8-8"></path>
                </svg>
              </div>
              <div className="om-icard-content">
                <h4>Need Help Choosing?</h4>
                <p>Our team is happy to recommend flavours and answer your questions before you order.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
