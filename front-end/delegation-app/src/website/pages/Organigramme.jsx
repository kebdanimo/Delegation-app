import React from "react";

import "../../styles/layout.css";
import "../../styles/motDelegue.css";

import organ from "../../images/organigramme.jpg";

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

const Organigramme = () => {
  return (

    <div className="globale-container">
      <div className="global-content-container">
        <p>
          la delegation de la santé et la et de la protection social est 
          organisée en service commedecrit dans l'organigramme ci-dessus 
        </p>
         <img className="org" src={organ} alt="" />
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

export default Organigramme;
