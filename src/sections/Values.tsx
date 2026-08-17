import { useEffect, useRef } from "react";
import { values } from "../data/values";

export default function Values({ title = "Premium where it matters, playful where it shines.", eyebrow = "Why Choose Us" }: { title?: string, eyebrow?: string | null }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const resumeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      if (!isDragging.current && trackRef.current) {
        // Increased speed as requested (~90px per second)
        currentX.current -= dt * 0.09;
        
        const card1 = trackRef.current.children[0] as HTMLElement;
        const card5 = trackRef.current.children[values.length] as HTMLElement;
        // The most accurate physical distance of one set, avoiding browser-specific gap/flex bugs
        const singleSetWidth = card5.offsetLeft - card1.offsetLeft;
        
        // Seamless loop reset
        if (currentX.current <= -singleSetWidth) {
          currentX.current += singleSetWidth;
        } else if (currentX.current > 0) {
          currentX.current -= singleSetWidth;
        }

        // Hardware acceleration for mobile
        trackRef.current.style.transform = `translate3d(${currentX.current}px, 0, 0)`;
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
    isDragging.current = true;
    startX.current = clientX;
    lastX.current = currentX.current;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchMove = (clientX: number) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = clientX - startX.current;
    currentX.current = lastX.current + dx;
    
    const card1 = trackRef.current.children[0] as HTMLElement;
    const card5 = trackRef.current.children[values.length] as HTMLElement;
    const singleSetWidth = card5.offsetLeft - card1.offsetLeft;
    
    // Loop during manual drag
    if (currentX.current <= -singleSetWidth) {
      currentX.current += singleSetWidth;
      lastX.current += singleSetWidth;
    } else if (currentX.current > 0) {
      currentX.current -= singleSetWidth;
      lastX.current -= singleSetWidth;
    }
    
    trackRef.current.style.transform = `translate3d(${currentX.current}px, 0, 0)`;
  };

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    // Auto-resume after 2 seconds
    resumeTimeoutRef.current = window.setTimeout(() => {
      isDragging.current = false;
    }, 2000);
  };

  const tripleValues = [...values, ...values, ...values];

  return (
    <section className="values section-panel" id="values">
      <div className="section-heading reveal" style={title === "Why Choose ScoopyBloom?" ? { textAlign: "center", marginBottom: "4rem" } : {}}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
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
