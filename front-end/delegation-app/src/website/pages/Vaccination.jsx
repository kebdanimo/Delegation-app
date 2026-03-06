import React from "react";
import { Link } from "react-router-dom";

import "../../styles/layout.css";
import "../../styles/caravan.css";

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

import caravan1 from "../../images/caravane1.jpg";
import caravan2 from "../../images/download.jfif";
import caravan3 from "../../images/download1.jfif";
import caravan4 from "../../images/download2.jfif";
import caravan5 from "../../images/download3.jfif";

const Vaccination = () => {
  const articls = [
    {
      img: caravan2,
      title: "Invitation pour la participation à la campagne",
    },
    {
      img: caravan3,
      title: "Enregistrement au site de vaccination",
    },
    {
      img: caravan4,
      title: "Vaccination 1ère dose",
    },
    {
      img: caravan5,
      title: "Vaccination 2ème dose",
    },
  ];

  return (
    <div className="globale-container">
      <div className="global-content-container">
        <Link to="/article">
          <div className="main-artical">
            <div className="main-artical-img">
              <img src={caravan4} alt="" />
            </div>
            <h1>Taourirt: Vaccination 1ère dose</h1>
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

export default Vaccination;
