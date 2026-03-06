import React from "react";
import { Link } from "react-router-dom";

import "../../styles/layout.css";
import "../../styles/caravan.css";

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

import caravan1 from "../../images/caravane1.jpg";
import caravan2 from "../../images/caravane2.jpg";
import caravan3 from "../../images/caravane3.jpg";

const Caravane = () => {
  const articls = [
    {
      img: caravan1,
      title: "COMMUNIQUE DE LA CARAVANE MEDICALE DE TAOURIRT",
    },
    {
      img: caravan3,
      title:
        "Taourirt : 235 bénéficiaires d’une caravane médicale en faveur des personnes en situation d’handicap",
    },
    {
      img: caravan2,
      title: "Plus de 1.000 consultations pour les démunis à Taourirt",
    },
  ];

  return (
    <div className="globale-container">
      <div className="global-content-container">
        <Link to="/article">
          <div className="main-artical">
            <div className="main-artical-img">
              <img src={caravan1} alt="" />
            </div>
            <h1>
              Taourirt: Plus de 2.500 bénéficiaires d’une caravane médicale
              multidisciplinaire
            </h1>
          </div>
        </Link>

        <div className="other-articals">
          {articls.map((articl) => {
            return (
              <div className="artical">
                <Link to="/article">
                  <div className="other-artical-img">
                    <img src={articl.img} alt="" />
                  </div>

                  <h2> {articl.title} </h2>
                </Link>
              </div>
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

export default Caravane;
