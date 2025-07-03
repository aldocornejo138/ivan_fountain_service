import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./Reviews.css";
import reviewsData from "./reviewsData";

const ReviewCard = ({ review, inView, delay }) => {
  return (
    <div
      className={`review-card ${inView ? "animate-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="review-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < review.rating ? "star-filled" : "star-empty"}
          />
        ))}
      </div>

      <p className="review-comment">"{review.comment}"</p>

      <div className="reviewer-info">
        <div className="avatar-placeholder">{review.name.charAt(0)}</div>
        <div>
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
  const containerRef = useRef(null);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
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

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleReviews = () => {
    const visibleReviews = [];
    const totalReviews = reviewsData.length;

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % totalReviews;
      visibleReviews.push(reviewsData[index]);
    }

    return visibleReviews;
  };

  return (
    <section
      className="reviews-section"
      ref={sectionRef}
      style={{ background: "#000" }}
    >
      <div className={`section-header ${sectionInView ? "visible" : ""}`}>
        <h2>Client Testimonials</h2>
        <p>See what our customers say about Ivan Fountain Service</p>
      </div>

      <div className="reviews-container">
        <button
          className="nav-btn prev"
          onClick={handlePrev}
          aria-label="Previous reviews"
        >
          <FaChevronLeft />
        </button>

        <div className="review-cards" ref={containerRef}>
          {getVisibleReviews().map((review, index) => (
            <ReviewCard
              key={`${review.id}-${index}`}
              review={review}
              inView={sectionInView}
              delay={index * 200}
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

      <div className="pagination-dots">
        {reviewsData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToReview(index)}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
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
