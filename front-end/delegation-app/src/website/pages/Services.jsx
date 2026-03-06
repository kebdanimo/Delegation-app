import React from "react";
import { Link } from "react-router-dom";

import "../../styles/layout.css";
import "../../styles/mission.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

import img1 from "../../images/soin.webp";
import img2 from "../../images/femeEnf.jpg";
import img3 from "../../images/santepublic.webp";
import img4 from "../../images/four.svg";

const Services = () => {
  const missions = [
    {
      img: img1,
      nom: "Accès aux soins",
    },
    {
      img: img2,
      nom: "Santé de la mère et de l'enfant",
    },
    {
      img: img3,
      nom: "Santé publique",
    },
    {
      img: img4,
      nom: "Surveillance épidémologique",
    },
    {
      img: img1,
      nom: "Maladies non Transmissibles",
    },
    {
      img: img2,
      nom: "Ressources de la santé",
    },
    {
      img: img3,
      nom: "Gouvernance du système de santé",
    },
  ];

  return (
    <div className="globale-container">
      <div className="global-content-container">
        <h1>Missions de la santé au maroc :</h1>
        <p className="intro">
          {" "}
          Dans son titre premier, le Décret n° 2-94-285 du 17 Joumada II 1415
          (21 novembre 1994) relatif aux attributions et à l'organisation du
          Ministère de la Santé Publique, précise dans son article premier que :
          •" <br></br> Le Ministère de la santé publique est chargé de
          l'élaboration et de la mise en oeuvre de la politique gouvernementale
          en matière de santé de la population.<br></br> •Il agit, en liaison
          avec les départements concernés, en vue de promouvoir le bien-être
          physique, mental et social des habitants.<br></br> •Il harmonise les
          orientations et coordonne les objectifs et les actions ou mesures qui
          concourent à l'élévation du niveau de santé dans le pays et intervient
          afin d'assurer, au niveau national, une meilleure allocation des
          ressources, en matière de prévention, de soins curatifs ou
          d'assistance. Il est chargé d'élaborer et de mettre en oeuvre la
          politique nationale en matière de médicaments et de produits
          pharmaceutiques sur les plans technique et réglementaire.<br></br> •Il
          suit la politique sanitaire internationale à laquelle le Maroc
          contribue, définit en concertation avec les départements concernés,
          les options de coopération dans le domaine de la santé, assure la mise
          en application et le suivi de réalisation des programmes convenus. •Il
          assure, conformément aux dispositions législatives et réglementaires
          en vigueur, le contrôle de l'exercice des professions médicales,
          paramédicales et pharma-ceutiques."<br></br> •Extrait du Décret N
          2-94-285 du 17 Joumada II 1415 (21 novembre 1994) relatif aux
          attributions et à l'organisation du ministère de la santé publique
        </p>
        <h1>OBJECTIFS DE LA SANTÉ AU MAROC :</h1>
        <p className="intro">
          {" "}
          La stratégie de développement du secteur, préconisée par le Ministère
          de la Santé pour la période 2012-2016 repose sur les 7 axes
          d’interventions suivants:<br></br>
          Axe 1: Amélioration de l’accès aux soins et de l’organisation des
          services<br></br>
          Axe 2: Renforcement de la santé de la mère et de l’enfant<br></br> Axe
          3: Promotion de la santé des populations à besoins spécifiques
          <br></br> Axe 4: Renforcement de la surveillance épidémiologique et
          développement des vigilances sanitaires<br></br> Axe 5: Développement
          du contrôle des maladies non transmissibles<br></br> Axe 6:
          Développement et maitrise des ressources stratégiques de la santé
          <br></br> Axe 7: Amélioration de la gouvernance du système de santé
          •Ces sept axes d’interventions ont été déclinés en 28 plans d’actions
          spécifiques, totalisant 168 mesures à mettre en oeuvre dans le cadre
          de la Stratégie.
        </p>

        <div className="sectoion-one">
          {missions.map((mission) => {
            return (
              <Link to="/Article">
                <div className="them">
                  <img src={mission.img} alt="" />
                  <div className="overlay">
                    <h1> {mission.nom} </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur, blanditiis.
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="globale-side-bar">
        <div className="global-table">
          <Side2></Side2>
        </div>
        <div className="global-events">
          <Side></Side>
        </div>
      </div>
    </div>
  );
};

export default Services;
