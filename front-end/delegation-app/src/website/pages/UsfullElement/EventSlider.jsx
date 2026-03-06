import React from "react";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper";

import img3 from "../../../images/img3.jpg";
import img2 from "../../../images/img2.jpg";
import img1 from "../../../images/img1.jpg";
import img4 from "../../../images/chef-bg.jpg";

const EventSlider = () => {
  return (
    <div className="dossier-thematique">
      <div className="element-title">
        <h1>Gallery {">"} </h1>
      </div>
      <div className="test-container">
        <Swiper
          navigation={true}
          rewind={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="gallery-container">
              <img src={img2} alt="" />
              <div className="overlay">
                <h1>CARAVANE MEDICALE</h1>
                <p>
                  235 bénéficiaires d’une caravane médicale en faveur des
                  personnes en situation d’handicap{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="gallery-container">
              <img src={img3} alt="" />
              <div className="overlay">
                <h1>1ERE CONFERENCE AFRICAINE</h1>
                <p>
                  1ère Conférence Africaine sur la Réduction des Risques en
                  Santé{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery-container">
              <img src={img1} alt="" />
              <div className="overlay">
                <h1>CONFÉRENCE INTERNATIONALE SUR LA SANTÉ</h1>
                <p>
                  2ème CONFÉRENCE INTERNATIONALE SUR LA SANTÉ PUBLIQUE EN
                  AFRIQUE{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EventSlider;
