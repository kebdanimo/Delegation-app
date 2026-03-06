import React from "react";

import "../../styles/layout.css";
import "../../styles/stat.css";

import stat1 from "../../images/stat1.jpeg"
import stat2 from "../../images/stat2.jpeg"

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

const Statistics = () => {
  return (
    <div className="globale-container">
          <div className="global-content-container">
              <p className="stat-disc">Le tableau ci-dessous represente les statistique sur l'offre de soins de santé de l'année 2021 de la province de Taourirt : </p>
              <div className="stat-img">
                  <img src={stat1} alt="" />
                  <img src={stat2} alt="" />
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

export default Statistics;
