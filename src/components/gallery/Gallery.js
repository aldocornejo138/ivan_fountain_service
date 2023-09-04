import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Gallery.css";
import "swiper/css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useInView } from "react-intersection-observer";

let sliderImg1 =
  "https://s3-media0.fl.yelpcdn.com/bphoto/r5qohIuvuipAPasSoL1Yjg/348s.jpg";
let sliderImg2 =
  "https://s3-media0.fl.yelpcdn.com/bphoto/UKUX1C0wY_aR04MSzAZ5Qg/348s.jpg";
let sliderImg3 =
  "https://s3-media0.fl.yelpcdn.com/bphoto/x68_neEUwZB9-kLxmpXO3w/348s.jpg";
let sliderImg4 =
  "https://s3-media0.fl.yelpcdn.com/bphoto/nvk0cSO5fLv7l4wPxH_l-g/348s.jpg";
let sliderImg5 =
  "https://s3-media0.fl.yelpcdn.com/bphoto/TDEaxHnCyMPs0DKSD3HamQ/348s.jpg";
let sliderImg6 =
  "https://s3-media0.fl.yelpcdn.com/bphoto/PAbnMPT6E_hQ3VbNsUUPjA/348s.jpg";
let sliderImg7 =
  "https://s3-media0.fl.yelpcdn.com/bphoto/lYZq2H9YMGy91mtpbyRcIA/348s.jpg";
let sliderImg8 =
  "https://s3-media0.fl.yelpcdn.com/bphoto/sLXJ5RpQiCOvWeIUF7rGUQ/348s.jpg";

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <section id="gallery">
      <div className="gallery-wrapper">
        <div ref={ref} className={`title ${inView ? "zoomIn" : "zoomOut"}`}>
          <h1>Gallery</h1>
          <p>Explore Our Wide Range of Projects throughout Socal</p>
        </div>
        <div
          ref={ref}
          className={`galleryContainer ${inView ? "zoom-in" : "zoom-out"}`}
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
              <img src={sliderImg1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg7} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg8} alt="slide_image" />
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
        </div>
      </div>
    </section>
  );
};
export default Gallery;
