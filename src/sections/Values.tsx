import { useEffect, useRef } from "react";
import { values } from "../data/values";

export default function Values() {
  const trackRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const resumeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => window.innerWidth <= 768;
    if (!checkMobile()) return;

    const animate = () => {
      if (!isDragging.current && trackRef.current) {
        // Increased movement speed: ~0.9px per frame
        currentX.current -= 0.9;
        
        const totalScrollWidth = trackRef.current.scrollWidth;
        const singleSetWidth = totalScrollWidth / 3; // 3 identical sets
        
        // Seamless loop reset
        if (currentX.current <= -singleSetWidth) {
          currentX.current += singleSetWidth;
        } else if (currentX.current > 0) {
          currentX.current -= singleSetWidth;
        }

        trackRef.current.style.transform = `translateX(${currentX.current}px)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const handleTouchStart = (clientX: number) => {
    if (window.innerWidth > 768) return;
    isDragging.current = true;
    startX.current = clientX;
    lastX.current = currentX.current;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchMove = (clientX: number) => {
    if (!isDragging.current || window.innerWidth > 768 || !trackRef.current) return;
    const dx = clientX - startX.current;
    currentX.current = lastX.current + dx;
    
    const totalScrollWidth = trackRef.current.scrollWidth;
    const singleSetWidth = totalScrollWidth / 3;
    
    // Loop during manual drag
    if (currentX.current <= -singleSetWidth) {
      currentX.current += singleSetWidth;
      lastX.current += singleSetWidth;
    } else if (currentX.current > 0) {
      currentX.current -= singleSetWidth;
      lastX.current -= singleSetWidth;
    }
    
    trackRef.current.style.transform = `translateX(${currentX.current}px)`;
  };

  const handleTouchEnd = () => {
    if (window.innerWidth > 768) return;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    // Auto-resume after 2 seconds
    resumeTimeoutRef.current = setTimeout(() => {
      isDragging.current = false;
    }, 2000);
  };

  const tripleValues = [...values, ...values, ...values];

  return (
    <section className="values section-panel" id="values">
      <div className="section-heading reveal">
        <p className="eyebrow">Why Choose Us</p>
        <h2>Premium where it matters, playful where it shines.</h2>
      </div>
      <div className="value-carousel-wrapper">
        <div 
          className="value-grid"
          ref={trackRef}
          onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleTouchMove(e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
          onMouseDown={(e) => handleTouchStart(e.clientX)}
          onMouseMove={(e) => handleTouchMove(e.clientX)}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
          {tripleValues.map((v, i) => {
            const isOriginal = i < values.length;
            return (
              <article 
                key={`${v.id}-${i}`} 
                className={`value-card ${!isOriginal ? 'mobile-duplicate' : 'reveal'}`}
              >
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
