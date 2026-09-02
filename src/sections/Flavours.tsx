import { useEffect, useState, useRef } from "react";
import { flavours } from "../data/flavours";

export default function Flavours() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveIndex(index);
        }
      });
    }, { threshold: 0.5 });

    chapterRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Also observe the stage to persist the .is-visible class across React renders
    const revealObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        revealObserver.disconnect();
      }
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

    if (stageRef.current) {
      revealObserver.observe(stageRef.current);
    }

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const homeFlavours = flavours.slice(0, 6);
  const activeFlavour = homeFlavours[activeIndex] || homeFlavours[0];

  const themeStyle = {
    '--flavour-one': activeFlavour.theme?.[0],
    '--flavour-two': activeFlavour.theme?.[1],
    '--flavour-three': activeFlavour.theme?.[2],
    '--flavour-width': (activeFlavour as any).customWidth || 'min(29rem, 65%)'
  } as React.CSSProperties;

  return (
    <section className="flavours section-panel" id="flavours" style={themeStyle}>
      <div ref={stageRef} className={`flavour-stage reveal desktop-only ${isVisible ? 'is-visible' : ''}`}>
        <div className="flavour-fixed-heading">
          SIGNATURE FLAVOURS
          <hr className="premium-divider-tiny" />
        </div>
        
        {/* Hidden elements for legacyScript compatibility */}
        <h2 id="flavourTitle" style={{ display: 'none' }}>{activeFlavour.stageHeading}</h2>
        <p id="flavourText" style={{ display: 'none' }}>{activeFlavour.stageText}</p>
        
        {/* Actual visible image */}
        <div className="flavour-pack" id="flavourPack">
          <img src={activeFlavour.image} alt={activeFlavour.name} className="square-flavour-image" />
        </div>
      </div>
      <div className="flavour-scroll">
        <div className="mobile-only flavour-mobile-heading">
          SIGNATURE FLAVOURS
          <hr className="premium-divider-tiny" />
        </div>
        {homeFlavours.map((f, i) => (
          <article 
            key={i} 
            className={`flavour-chapter ${activeIndex === i ? 'is-active' : ''}`}
            data-flavour={f.id} 
            data-index={i}
            ref={el => { chapterRefs.current[i] = el; }}
            style={{
              '--flavour-one': f.theme?.[0],
              '--flavour-two': f.theme?.[1],
              '--flavour-three': f.theme?.[2],
            } as React.CSSProperties}
          >
            <span className="premium-flavour-number">{f.number}</span>
            <h3 className="premium-right-title">
              {f.name}
              {f.tag && (
                <span style={{
                  fontSize: '1rem',
                  padding: '0.2rem 0.6rem',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '12px',
                  marginLeft: '0.8rem',
                  verticalAlign: 'middle',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 'normal'
                }}>
                  {f.tag}
                </span>
              )}
            </h3>
            <p className="premium-desc-main">{f.description}</p>
            
            <div className="mobile-only mobile-flavour-image">
              <div className="flavour-pack mobile-flavour-pack">
                <img src={f.image} alt={f.name} className="square-flavour-image" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
