import React from "react";

import "../../styles/layout.css";
import "../../styles/annonce.css";

import profile from "../../images/MINISTRE.jpg";

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

const AppelDoffres = () => {
  return (
    <div className="globale-container">
      <div className="global-content-container">
        <div className="annonce">
          <h3>Gestion des Gaz à Usage Médical (GUM) à l'hôpital</h3>
          <a href="#"> fichier pdf</a>
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

export default AppelDoffres;
