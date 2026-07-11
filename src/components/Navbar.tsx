import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header" id="siteHeader">
      <div className="site-header__left">
        <button 
          className="mobile-menu-btn mobile-only" 
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <a className="brand" href="#hero" aria-label="ScoopyBloom home">
          <img src={logo} alt="ScoopyBloom Logo" style={{ width: '4.8rem', height: '4.8rem', marginTop: '-0.8rem', marginBottom: '-0.8rem', objectFit: 'contain' }} />
          <span>ScoopyBloom</span>
        </a>
      </div>

      <nav className="nav-links desktop-only" aria-label="Primary navigation">
        <a href="/" className={location.pathname === "/" ? "active" : ""}>Home</a>
        <a href="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</a>
        <a href="/flavours" className={location.pathname === "/flavours" ? "active" : ""}>Flavours</a>
      </nav>

      <a className="nav-cta magnetic" href="#newsletter">Order Now</a>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="drawer-backdrop mobile-only"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            <motion.div 
              className="drawer mobile-only"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
            >
              <div className="drawer-header">
                <a className="brand" href="#hero" onClick={closeMenu} aria-label="ScoopyBloom home">
                  <img src={logo} alt="ScoopyBloom Logo" style={{ width: '4.8rem', height: '4.8rem', marginTop: '-0.8rem', marginBottom: '-0.8rem', objectFit: 'contain' }} />
                  <span>ScoopyBloom</span>
                </a>
                <button 
                  className="drawer-close" 
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="drawer-links">
                <a href="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>Home</a>
                <a href="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMenu}>About Us</a>
                <a href="/flavours" className={location.pathname === "/flavours" ? "active" : ""} onClick={closeMenu}>Flavours</a>
                <a href="#newsletter" onClick={closeMenu}>Order Now</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
