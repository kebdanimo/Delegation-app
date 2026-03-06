import React from "react";

import "../../styles/acceuil.css";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper";

import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";

import img3 from "../../images/img3.jpg";
import img2 from "../../images/simi2.jpg";
import img1 from "../../images/simi1.jpg";
import img4 from "../../images/caravane1.jpg";

import link1 from "../../images/sehatilogo.png";
import link2 from "../../images/logo.png";
import link3 from "../../images/illustration-s2.png";
import link4 from "../../images/Fichier-14.png";
import link5 from "../../images/logo-(1).png";
import link6 from "../../images/cropped-logo-anam.png";

import video1 from "../../videos/video.mp4";
import video2 from "../../videos/video2.mp4";

const Home = () => {
  const mainSlider = [
    {
      image: slide1,
      link: "",
    },
    {
      image: slide2,
      link: "",
    },
    {
      image: slide3,
      link: "",
    },
    {
      image: slide1,
      link: "",
    },
    {
      image: slide2,
      link: "",
    },
  ];

  const agenda = [
    {
      day: "07",
      month: "avr",
      title: "Inagoration de centre de santé Molay Ali Shrif",
    },
    {
      day: "12",
      month: "avr",
      title: "Caravan medicale à l'hopitale de l'aioun-sidi Malouk",
    },
    {
      day: "21",
      month: "avr",
      title: "Rencontre regional sur la santé de la femme et de l'enfant",
    },
  ];

  const dossier = [
    {
      title: "Enquet National sur la nutritim",
      style: "active",
      link: "",
    },
    {
      title: "Enquet national sur la population et la sante familial",
      style: "active",
      link: "",
    },
    {
      title: "Covid 19",
      style: "active",
      link: "",
    },
  ];

  const links = [
    {
      lien: "https://sehati.gov.ma",
      image: link1,
      title: "sehati",
    },
    {
      lien: "http://www.egov.ma/fr",
      image: link2,
      title: "egov",
    },
    {
      lien: "https://www.liqahcorona.ma/fr",
      image: link3,
      title: "liqahcorona",
    },
    {
      lien: "http://www.covidmaroc.ma/Pages/AccueilAR.aspx",
      image: link4,
      title: "covidmaroc",
    },
    {
      lien: "https://www.data.gov.ma",
      image: link5,
      title: "data.gov",
    },
    {
      lien: "https://anam.ma/anam/",
      image: link6,
      title: "anam.ma",
    },
  ];

  return (
    <div>
      <div className="hero">
        <Swiper
          rewind={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {mainSlider.map((slide) => {
            return (
              <SwiperSlide>
                <img src={slide.image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* ----------------------------- section 1 -------------------------------------------- */}

      <div className="test">
        <div className="inner-test-one">
          <div className="element-title">
            <h1>Agenda {">"} </h1>
          </div>

          <div className="agenda-container">
            <table cellSpacing={0}>
              {agenda.map((event) => {
                return (
                  <tr>
                    <td className="date">
                      <h2>
                        {event.day} <br /> {event.month}
                      </h2>
                    </td>
                    <td className="event">
                      <h2>{event.title}</h2>
                      <p>
                        L’ouverture de bla bla par blabla de bla bla par blabla
                      </p>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        <div className="inner-test-one">
          <div className="dossier-thematique">
            {" "}
            <div className="element-title">
              <h1>Dossiers thematiques {">"} </h1>
            </div>
            <div className="element-container">
              <table cellSpacing={0}>
                <tr>
                  <td className="active">
                    <Link to="https://www.sante.gov.ma/Documents/2022/07/rapport%20ENN%202019-2020%20ajout%20preface%20(1).pdf">
                      <h2>Enquete National sur la nutrition</h2>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="Article">
                      <h2>
                        Enquete national sur la population et la sante familiale
                      </h2>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="active">
                    <Link to="Article">
                      <h2>Covid 19</h2>
                    </Link>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="inner-test-one">
          <div className="element-title">
            <h1>Evénements {">"} </h1>
          </div>
          <div className="test-container">
            <Swiper
              navigation={false}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              rewind={true}
              modules={[Autoplay, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="event-container">
                  <div className="event-img">
                    <img src={img4} alt="chef" />
                  </div>
                  <div className="event-disc">
                    <h2>CARAVANE MEDICALE</h2>
                    <p>
                      235 bénéficiaires d’une caravane médicale en faveur des
                      personnes en situation d’handicap
                    </p>
                    <a className="event-link" href="#">
                      more...
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-container">
                  <div className="event-img">
                    <img src={img1} alt="chef" />
                  </div>
                  <div className="event-disc">
                    <h2>1ERE CONFERENCE AFRICAINE</h2>
                    <p>
                      1ère Conférence Africaine sur la Réduction des Risques en
                      Santé
                    </p>
                    <a className="event-link" href="#">
                      more...
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-container">
                  <div className="event-img">
                    <img src={img2} alt="chef" />
                  </div>
                  <div className="event-disc">
                    <h2>CONFÉRENCE INTERNATIONALE SUR LA SANTÉ</h2>
                    <p>
                      2ème CONFÉRENCE INTERNATIONALE SUR LA SANTÉ PUBLIQUE EN
                      AFRIQUE
                    </p>
                    <a className="event-link" href="#">
                      more...
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* ----------------------------- section 2 -------------------------------------------- */}

      <div className="test">
        <div className="inner-test-one">
          <div className="element-title">
            <h1>Gallerie {">"} </h1>
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
        <div className="inner-test-two">
          <div className="element-title">
            <h1>Videos {">"} </h1>
          </div>
          <div className="test-container">
            {/*  */}

            <Swiper
              navigation={true}
              rewind={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <video
                  src={video1}
                  width="100%"
                  height="100%"
                  controls="controls"
                  // autoplay="false"
                />
              </SwiperSlide>
              <SwiperSlide>
                <video
                  src={video2}
                  width="100%"
                  height="100%"
                  controls="controls"
                  // autoplay="false"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* ----------------------------- section 3 -------------------------------------------- */}

      <div className="link-slider-container">
        <div className="link-slider-header">
          <h1>Links</h1>
        </div>
        <div className="link-slider">
          <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            {links.map((link) => {
              return (
                <SwiperSlide>
                  <a href={link.lien}>
                    <div className="link">
                      <div className="link-img">
                        <img src={link.image} alt="" />
                      </div>
                      <h2>{link.title}</h2>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Home;
