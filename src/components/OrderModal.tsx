import { useEffect, useRef, useState } from "react";
import collageImage from "../assets/images/collage.png";
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
      e.preventDefault(); // In case it's triggered from an <a> tag directly
      setIsOpen(true);
      setIsClosing(false);
    };

    window.addEventListener("openOrderModal", handleOpenModal);
    return () => window.removeEventListener("openOrderModal", handleOpenModal);
  }, []);

  useEffect(() => {
    if (isOpen && !isClosing) {
      // Body scroll lock
      const originalStyle = window.getComputedStyle(document.body).overflow;  
      document.body.style.overflow = "hidden";
      
      // Focus management
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
        <button 
          className="order-modal-close" 
          onClick={handleClose}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="order-modal-header">
          <h2 id="order-modal-title">Order ScoopyBloom</h2>
          <p>Choose your favourite flavour and connect with us instantly.</p>
        </div>

        <div className="order-modal-image-wrapper">
          <img src={collageImage} alt="ScoopyBloom Flavours" className="order-modal-image" />
        </div>

        <div className="order-modal-desc">
          <p>Explore all our handcrafted flavours and place your order directly with our team.</p>
        </div>

        <div className="order-modal-actions">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="order-modal-btn whatsapp-btn"
            ref={whatsappRef}
          >
            <div className="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <div className="btn-text">
              <span className="btn-title">Order on WhatsApp</span>
              <span className="btn-subtitle">Chat with us and place your order instantly.</span>
            </div>
          </a>

          <a href={`tel:${footer.contact.phone.replace(/\s/g, '')}`} className="order-modal-btn call-btn">
            <div className="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="btn-text">
              <span className="btn-title">Call Us</span>
              <span className="btn-subtitle">Prefer talking? Give us a call.</span>
            </div>
          </a>
        </div>

        <div className="order-modal-footer">
          <p className="help-text">Need help choosing?</p>
          <p className="help-subtext">Our team is happy to help you select the perfect flavour.</p>
        </div>
      </div>
    </div>
  );
}
