import React, { useState, useEffect } from "react";
import "./Reviews.css";
import { useInView } from "react-intersection-observer";

const Reviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const [reviewsPerPage, setReviewsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 769) {
        setReviewsPerPage(1);
      } else {
        setReviewsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initialize the value based on initial width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Cinder P.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/ZKBD8b7k6E87U5gwROPGNw/60s.jpg",
      city: "FallBrook, CA",
      rating: 4,
      date: "July 26, 2023",
      comment:
        "Ivan is amazing! We have been working together for years at The Madd Potter. We him to all of our customers in need of fountain services. The feedback is always positive. Very friendly and professional. When in need call Ivan indeed!",
    },
    {
      id: 2,
      name: "David H.",
      image:
        "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
      city: "Murrieta, CA",
      rating: 5,
      date: "July 13, 2023",
      comment:
        "I couldn't be happier.  Ivan was prompt, courteous and clearly knew what he was doing.  In less than an hour, he cleaned the pondless waterfall sump and  replaced the defective pump.  I was expecting an estimate of the damage and he had solved the problem in the same amount of time.",
    },
    {
      id: 3,
      name: "Ken W.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/Si3XijDEDNT-Q6nXH-m7MA/60s.jpg",
      city: "San Diego",
      rating: 5,
      date: "August 13, 2023",
      comment:
        "The large fountain in our courtyard stopped working  so we called Ivan. He quickly diagnosed the problem that the existing pump is made to be above ground, and any dampness near the pump would trip the GFI. He quickly replaced the pump with a sealed pump and it is now functioning as it should be. Ivan was responsive, professional, confidence-inspiring, and his prices were reasonable. Thank you Ivan!",
    },
    {
      id: 1,
      name: "Gabe.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/ZKBD8b7k6E87U5gwROPGNw/60s.jpg",
      city: "FallBrook, CA",
      rating: 4,
      date: "July 26, 2023",
      comment:
        "Ivan is amazing! We have been working together for years at The Madd Potter. We him to all of our customers in need of fountain services. The feedback is always positive. Very friendly and professional. When in need call Ivan indeed!",
    },
    {
      id: 2,
      name: "Robert H.",
      image:
        "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
      city: "Murrieta, CA",
      rating: 5,
      date: "July 13, 2023",
      comment:
        "I couldn't be happier.  Ivan was prompt, courteous and clearly knew what he was doing.  In less than an hour, he cleaned the pondless waterfall sump and  replaced the defective pump.  I was expecting an estimate of the damage and he had solved the problem in the same amount of time.",
    },
    {
      id: 3,
      name: "Kim W.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/Si3XijDEDNT-Q6nXH-m7MA/60s.jpg",
      city: "San Diego",
      rating: 5,
      date: "August 13, 2023",
      comment:
        "The large fountain in our courtyard stopped working  so we called Ivan. He quickly diagnosed the problem that the existing pump is made to be above ground, and any dampness near the pump would trip the GFI. He quickly replaced the pump with a sealed pump and it is now functioning as it should be. Ivan was responsive, professional, confidence-inspiring, and his prices were reasonable. Thank you Ivan!",
    },
    {
      id: 1,
      name: "Cinder P.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/ZKBD8b7k6E87U5gwROPGNw/60s.jpg",
      city: "FallBrook, CA",
      rating: 4,
      date: "July 26, 2023",
      comment:
        "Ivan is amazing! We have been working together for years at The Madd Potter. We him to all of our customers in need of fountain services. The feedback is always positive. Very friendly and professional. When in need call Ivan indeed!",
    },
    {
      id: 2,
      name: "David H.",
      image:
        "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
      city: "Murrieta, CA",
      rating: 5,
      date: "July 13, 2023",
      comment:
        "I couldn't be happier.  Ivan was prompt, courteous and clearly knew what he was doing.  In less than an hour, he cleaned the pondless waterfall sump and  replaced the defective pump.  I was expecting an estimate of the damage and he had solved the problem in the same amount of time.",
    },
    {
      id: 3,
      name: "Ken W.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/Si3XijDEDNT-Q6nXH-m7MA/60s.jpg",
      city: "San Diego",
      rating: 5,
      date: "August 13, 2023",
      comment:
        "The large fountain in our courtyard stopped working  so we called Ivan. He quickly diagnosed the problem that the existing pump is made to be above ground, and any dampness near the pump would trip the GFI. He quickly replaced the pump with a sealed pump and it is now functioning as it should be. Ivan was responsive, professional, confidence-inspiring, and his prices were reasonable. Thank you Ivan!",
    },

    // Add more review objects as needed
  ];

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;

  const handlePreviousClick = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <section id="reviews" className="reviews-container">
      <div ref={ref} className={`title ${inView ? "zoomIn" : "zoomOut"}`}>
        <h1>Reviews</h1>
        <p>Look at What Clients Say About Us</p>
      </div>
      <div
        ref={ref}
        className={`reviews-container ${inView ? "zoomIn" : "zoomOut"}`}
      >
        <a
          href="https://www.yelp.com/biz/ivan-fountain-service-murrieta"
          className="link-style"
        >
          <h2>
            All Reviews straight out of Yelp. Click here to see all of our 55+ 5
            Star Reviews!
          </h2>
        </a>
      </div>

      <div
        ref={ref}
        className={`reviews-list ${inView ? "zoomIn" : "zoomOut"}`}
      >
        {reviews.slice(startIndex, endIndex).map((review) => (
          <div key={review.id} className="review">
            <div className="review-content">
              <div
                ref={ref}
                className={`review-profile ${
                  inView ? "zoomInLeft" : "zoomOutLeft"
                }`}
              >
                <img src={`${review.image}`} alt={`${review.name}'s profile`} />
              </div>
              <div
                ref={ref}
                className={`review-header ${
                  inView ? "zoomInRight" : "zoomOutRight"
                }`}
              >
                <h2>{review.name}</h2>
                <p className="review-city">{review.city}</p>
                <div className="review-rating">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <span key={index} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <div className="review-details">
              <p className="review-comment">" {review.comment} "</p>
            </div>
          </div>
        ))}
      </div>
      <div ref={ref} className={`pagination ${inView ? "zoomIn" : "zoomOut"}`}>
        <button onClick={handlePreviousClick} disabled={currentPage === 1}>
          Previous
        </button>
        <div className="pagination-status">
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={`circle ${index + 1 === currentPage ? "filled" : ""}`}
            />
          ))}
        </div>
        <button
          onClick={handleNextClick}
          disabled={currentPage * reviewsPerPage >= reviews.length}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Reviews;
