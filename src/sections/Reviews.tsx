import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "../data/reviews";

// Clone array twice to create 3 identical sets for infinite scrolling
const clonedReviews = [...reviews, ...reviews, ...reviews].map((r, i) => ({
  ...r,
  uniqueId: `review-${i}`
}));

const getVisibleCards = (width: number) => {
  if (width >= 1024) return 3; // Desktop
  if (width >= 768) return 2;  // Tablet
  return 1; // Mobile
};

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(reviews.length); // Start at middle set
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [activeReview, setActiveReview] = useState<typeof reviews[0] | null>(null);

  const visibleCards = getVisibleCards(windowWidth);
  const itemWidth = 100 / visibleCards;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideNext = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  const slidePrev = useCallback(() => {
    setActiveIndex((prev) => prev - 1);
  }, []);

  useEffect(() => {
    // Only pause on desktop hover. On mobile, touch won't trigger hover state effectively, but drag triggers isDragging.
    if ((isHovering && windowWidth >= 1024) || isDragging) return;
    const timer = setInterval(slideNext, 3000); // 2s pause + 1s transition = ~3s interval
    return () => clearInterval(timer);
  }, [isHovering, isDragging, slideNext, windowWidth]);

  // Handle jump for infinite loop
  useEffect(() => {
    if (activeIndex >= reviews.length * 2) {
      // Reached the end of the second set, jump back to first set
      setTimeout(() => {
        setActiveIndex(activeIndex - reviews.length);
      }, 700); // Wait for transition to complete
    } else if (activeIndex <= 0) {
      // Reached the beginning, jump forward
      setTimeout(() => {
        setActiveIndex(activeIndex + reviews.length);
      }, 700);
    }
  }, [activeIndex]);

  const handleDragEnd = (_e: any, info: any) => {
    setIsDragging(false);
    if (info.offset.x < -50) slideNext();
    else if (info.offset.x > 50) slidePrev();
  };

  const openModal = (review: typeof reviews[0]) => {
    setActiveReview(review);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveReview(null);
  };

  return (
    <section className="reviews section-panel" id="reviews">
      <div className="section-heading reveal">
        <p className="eyebrow">Customer Reviews</p>
        <h2>Sweet notes from the first spoonful.</h2>
      </div>
      
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="carousel-track-wrapper">
          <motion.div 
            className="carousel-track"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${activeIndex * itemWidth}%` }}
            transition={{ type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.7 }}
          >
            {clonedReviews.map((r) => {
              const isLong = r.text.length > 85;
              const displayText = isLong ? r.text.substring(0, 85) + "..." : r.text;
              
              return (
                <article key={r.uniqueId} className="review-card" style={{ flex: `0 0 ${itemWidth}%` }}>
                  <div className={`avatar avatar--${r.variant}`}>{r.avatar}</div>
                  <div className="stars" aria-label="5 out of 5 stars">?????</div>
                  <div className="review-card__content">
                    <p>{displayText}</p>
                    {isLong && (
                      <button className="view-more-btn" onClick={() => openModal(r)}>
                        View More
                      </button>
                    )}
                  </div>
                  <span className="review-author">{r.author}</span>
                </article>
              );
            })}
          </motion.div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-arrow" onClick={slidePrev} aria-label="Previous review">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="carousel-arrow" onClick={slideNext} aria-label="Next review">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && activeReview && (
          <>
            <motion.div 
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div 
              className="review-modal"
              initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
            >
              <button className="modal-close" onClick={closeModal} aria-label="Close review">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className={`avatar avatar--${activeReview.variant}`}>{activeReview.avatar}</div>
              <div className="stars" aria-label="5 out of 5 stars">?????</div>
              <p className="modal-text">{activeReview.text}</p>
              <span className="review-author">{activeReview.author}</span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}


