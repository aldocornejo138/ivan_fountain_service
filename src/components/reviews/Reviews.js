import React, { useState, useEffect, useRef } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import "./Reviews.css";
import reviewsData from "./reviewsData";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(14, 119, 199, 0.6)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      className="review-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="review-header">
        <FaQuoteLeft className="quote-icon" />
        <div className="review-rating">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <FaStar
                className={i < review.rating ? "star-filled" : "star-empty"}
              />
            </motion.span>
          ))}
        </div>
      </div>

      <motion.p
        className="review-comment"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {review.comment}
      </motion.p>

      <motion.div
        className="reviewer-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="reviewer-details">
          <h3 className="reviewer-name">{review.name}</h3>
          <div className="review-meta">
            <span className="review-city">{review.city}</span>
            <span className="review-date">{review.date}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [direction, setDirection] = useState(0); // 0: right, 1: left
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
    setDirection(1);
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const handleNext = () => {
    setDirection(0);
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const goToGroup = (index) => {
    setDirection(index > currentIndex ? 0 : 1);
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
      handleNext();
    } else if (touchEnd - touchStart > 50) {
      handlePrev();
    }
  };

  return (
    <section className="reviews-section" ref={sectionRef}>
      <motion.div
        className={`section-header ${sectionInView ? "visible" : ""}`}
        variants={headerVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        <h2>Client Testimonials</h2>
        <p>See what our customers say about Ivan Fountain Service</p>
      </motion.div>

      <div
        className="reviews-carousel"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            className="carousel-inner"
            custom={direction}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        <motion.button
          className="nav-btn prev"
          onClick={handlePrev}
          aria-label="Previous reviews"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaChevronLeft />
        </motion.button>

        <div className="pagination-dots">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <motion.button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToGroup(index)}
              aria-label={`Go to review group ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <motion.button
          className="nav-btn next"
          onClick={handleNext}
          aria-label="Next reviews"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaChevronRight />
        </motion.button>
      </div>

      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.a
          href="https://www.yelp.com/biz/ivan-fountain-service-murrieta"
          className="cta-link"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -3,
            boxShadow: "0 5px 15px rgba(14, 119, 199, 0.4)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          View all 100+ 5 star reviews on Yelp
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Reviews;
