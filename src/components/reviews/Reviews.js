import React, { useState, useEffect, useRef } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./Reviews.css";
import reviewsData from "./reviewsData";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <FaQuoteLeft className="quote-icon" />
        <div className="review-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < review.rating ? "star-filled" : "star-empty"}
            />
          ))}
        </div>
      </div>

      <p className="review-comment">{review.comment}</p>

      <div className="reviewer-info">
        <div className="reviewer-details">
          <h3 className="reviewer-name">{review.name}</h3>
          <div className="review-meta">
            <span className="review-city">{review.city}</span>
            <span className="review-date">{review.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const carouselRef = useRef(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalGroups = Math.ceil(reviewsData.length / visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const goToGroup = (index) => {
    setCurrentIndex(index);
  };

  // Get current group of reviews
  const startIndex = currentIndex * visibleCount;
  const visibleReviews = reviewsData.slice(
    startIndex,
    startIndex + visibleCount
  );

  // Touch scrolling setup
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    } else if (touchEnd - touchStart > 50) {
      // Swipe right
      handlePrev();
    }
  };

  return (
    <section className="reviews-section" ref={sectionRef}>
      <div className={`section-header ${sectionInView ? "visible" : ""}`}>
        <h2>Client Testimonials</h2>
        <p>See what our customers say about Ivan Fountain Service</p>
      </div>

      <div
        className="reviews-carousel"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="carousel-controls">
        <button
          className="nav-btn prev"
          onClick={handlePrev}
          aria-label="Previous reviews"
        >
          <FaChevronLeft />
        </button>

        <div className="pagination-dots">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToGroup(index)}
              aria-label={`Go to review group ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="nav-btn next"
          onClick={handleNext}
          aria-label="Next reviews"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="cta-container">
        <a
          href="https://www.yelp.com/biz/ivan-fountain-service-murrieta"
          className="cta-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all 100+ 5 star reviews on Yelp
        </a>
      </div>
    </section>
  );
};

export default Reviews;
