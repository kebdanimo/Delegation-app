import React from "react";

import "../../styles/layout.css";
import "../../styles/annonce.css";

import pdf from "../../tep.pdf";

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

const Annonces = () => {
  return (
    <div className="globale-container">
      <div className="global-content-container">
        <div className="annonce">
          <h3>
            Relance de l'Appel à consultation : Enquête Nationale sur
            l’implication des Médecins du Secteur Privé, dans la Lutte Contre le
            VIH-SIDA au Maroc
          </h3>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            fichier pdf
          </a>
        </div>
        <div className="annonce">
          <h3>
            Relance de l'Appel à consultation : Elaboration d’une Note sur les
            Mécanismes de Recours et d’Outils pour le Traitement Des Plaintes en
            cas de Discrimination et Violation des Droits Humains en lien avec
            le VIH
          </h3>
          <a href="#"> fichier pdf</a>
        </div>
        <div className="annonce">
          <h3>
            Concours d'Admission au Cycle de Spécialisation en Santé Publique et
            en Management de la Santé
          </h3>
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

export default Annonces;
