import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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
        <a className="brand" href="#hero" aria-label="Sundae Atelier home">
          <span className="brand__scoop"></span>
          <span>Sundae Atelier</span>
        </a>
      </div>

      <nav className="nav-links desktop-only" aria-label="Primary navigation">
        <a href="#collection">Collection</a>
        <a href="#flavours">Flavours</a>
        <a href="#story">Story</a>
        <a href="#reviews">Reviews</a>
      </nav>

      <a className="nav-cta magnetic" href="#newsletter">Reserve a Box</a>

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
                <a className="brand" href="#hero" onClick={closeMenu} aria-label="Sundae Atelier home">
                  <span className="brand__scoop"></span>
                  <span>Sundae Atelier</span>
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
                <a href="#collection" onClick={closeMenu}>Collection</a>
                <a href="#flavours" onClick={closeMenu}>Flavours</a>
                <a href="#story" onClick={closeMenu}>Story</a>
                <a href="#reviews" onClick={closeMenu}>Reviews</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
