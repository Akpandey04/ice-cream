import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import "./styles/global.css";
import { initLegacyScript } from "./utils/legacyScript";

import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Collections from "./sections/Collections";
import Flavours from "./sections/Flavours";
import Values from "./sections/Values";
import Story from "./sections/Story";
import Reviews from "./sections/Reviews";
import Instagram from "./sections/Instagram";
import Footer from "./components/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <Flavours />
      <Values />
      <Story />
      <Reviews />
      <Instagram />
    </main>
  );
}

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

    const cleanupLegacy = initLegacyScript();

    return () => {
      lenis.destroy();
      if (cleanupLegacy) cleanupLegacy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Cursor />
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
