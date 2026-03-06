import React from "react";
import { Link } from "react-router-dom";

import "../../styles/layout.css";
import "../../styles/caravan.css";

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

import simi1 from "../../images/simi1.jpg";
import simi2 from "../../images/simi2.jpg";
import simi3 from "../../images/simi3.gif";

const Seminaire = () => {
  const articls = [
    {
      img: simi1,
      title: "2ème CONFÉRENCE INTERNATIONALE SUR LA SANTÉ PUBLIQUE EN AFRIQUE",
    },
    {
      img: simi2,
      title:
        "Marrakech accueille le sommet international de la communication pour le changement social du comportement",
    },

  ];

  return (
    <div className="globale-container">
      <div className="global-content-container">
        <Link to="/article">
          <div className="main-artical">
            <div className="main-artical-img">
              <img src={simi3} alt="" />
            </div>
            <h1>
              1ère Conférence Africaine sur la Réduction des Risques en Santé
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

export default Seminaire;
