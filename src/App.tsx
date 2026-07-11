import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import "./styles/global.css";
import { initLegacyScript } from "./utils/legacyScript";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Collections from "./sections/Collections";
import Flavours from "./sections/Flavours";
import Values from "./sections/Values";
import Footer from "./components/Footer";
import FlavoursPage from "./pages/FlavoursPage";
import AboutPage from "./pages/AboutPage";

function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <Flavours />
      <Values />
    </main>
  );
}

import OrderModal from "./components/OrderModal";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,

      infinite: false,
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleLenisStop = () => lenis.stop();
    const handleLenisStart = () => lenis.start();
    window.addEventListener("lenisStop", handleLenisStop);
    window.addEventListener("lenisStart", handleLenisStart);

    const cleanupLegacy = initLegacyScript();
    document.body.classList.remove("is-loading");

    return () => {
      window.removeEventListener("lenisStop", handleLenisStop);
      window.removeEventListener("lenisStart", handleLenisStart);
      lenis.destroy();
      if (cleanupLegacy) cleanupLegacy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flavours" element={<FlavoursPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
      <OrderModal />
    </BrowserRouter>
  );
}

export default App;
