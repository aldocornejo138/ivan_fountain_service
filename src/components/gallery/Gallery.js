import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Gallery.css";
import "swiper/css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useInView } from "react-intersection-observer";
import { gallery1 } from "../../assets/index.js";
import { gallery2 } from "../../assets/index.js";
import { gallery3 } from "../../assets/index.js";
import { gallery4 } from "../../assets/index.js";
import { gallery5 } from "../../assets/index.js";
import { gallery6 } from "../../assets/index.js";
import { gallery7 } from "../../assets/index.js";
import { gallery8 } from "../../assets/index.js";
import { gallery9 } from "../../assets/index.js";
import { gallery10 } from "../../assets/index.js";

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="gallery">
      <div className="gallery-wrapper">
        <div ref={ref} className={`section-header ${inView ? "visible" : ""}`}>
          <h1>Gallery</h1>
          <p>Explore Our Wide Range of Projects throughout Socal</p>
        </div>
        <div
          ref={ref}
          className={`galleryContainer ${inView ? "zoomIn" : "zoomOut"}`}
        >
          <div>
            <br />
            <br />
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img
                src={gallery1}
                alt="Ivan Fountain Service"
                title="Ivan Fountain Service"
                width="750"
                height="1000"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery2}
                alt="Ivan Fountain Maintenance"
                title="Carlsbad Fountain Maintenance"
                width="348"
                height="348"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery3}
                alt="Ivan Fountain Delivery Services"
                title="Ivan Fountain Delivery Services"
                width="348"
                height="348"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery4}
                alt="Ivan Fountain Installation Services"
                title="Ivan Fountain Installation Services"
                width="348"
                height="348"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery5}
                alt="Ivan Fountain Emergency Services"
                title="Ivan Fountain Emergency Services"
                width="348"
                height="348"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery6}
                alt="Ivan Fountain Restoration Services"
                title="Ivan Fountain Restoration Services"
                width="750"
                height="1000"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery7}
                alt="Ivan Fountain PaintJob Services"
                title="Ivan Fountain PaintJob Services"
                width="348"
                height="348"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery8}
                alt="Ivan Fountain Renovation Services"
                title="Ivan Fountain Renovation Services"
                width="750"
                height="1000"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery9}
                alt="Ivan Fountain Cleaning Services"
                title="Ivan Fountain Cleaning Services"
                width="750"
                height="1000"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={gallery10}
                alt="Ivan Fountain California Services"
                title="Ivan Fountain California Services"
                width="750"
                height="1000"
                loading="lazy"
              />
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </Swiper>
          <button className="galleryButton">
            <a
              href="https://www.yelp.com/biz/ivan-fountain-service-murrieta"
              className="link-style"
            >
              <h2>Full Gallery</h2>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
