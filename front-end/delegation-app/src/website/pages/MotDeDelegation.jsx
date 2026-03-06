import React from "react";

import "../../styles/layout.css";
import "../../styles/motDelegue.css";

import profile from "../../images/MINISTRE.jpg";

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

const MotDeDelegation = () => {
  return (
    <div className="globale-container">
      
      <div className="global-content-container">
        <div className="delege-profile">
          <img src={profile} alt="" />
        </div>

        <h1 className="nom-delegue">Pr Khalid AIT TALEB ​ </h1>

        <h3 className="title-delegue">
          ​​​Ministre de la Santé et ​de la Protection Sociale
        </h3>

        <p className="disc-delegue">
          Après l'obtention de son doctorat en médecine de la faculté de
          médecine et de pharmacie de Rabat, son parcours a été décoré par
          plusieurs postes et responsabilités : ​​​​ - Professeur de
          l'Enseignement Supérieur à la Faculté de Médeci​ne de Fès. - Chef du
          Service de Chirurgie viscérale au Centre Hospitalier Universitaire
          Hassan II de Fès. - Directeur du Centre Hospitalier Universitaire
          Hassan II Fès depuis le 13 septembre 2004. - Membre du Comité
          d'experts au Ministère de la Santé 2008.​ - Représentant Régional de
          la Fondation Lalla Salma –Prévention et Traitement des Cancers.
          Président de l'alliance des centres hospitaliers universitaire, du
          Maroc depuis le 06 Janvier 2016. - Président du conseil
          d'administration de l'IRC (Institut de Recherche sur le -Cancer). Le
          professeur Ait Taleb est le premier à intégrer le système informatique
          dans les hôpitaux du Maroc, et le système de distribution automatique
          des médicaments au sein de l'hôpital. De plus, il est le premier à
          acquérir le robot chirurgical au niveau du Centre Hospitalier
          U​niversitaire de Fès. Pr Ait Taleb est actif dans les manifestations
          scientifiques et les congrès nationaux et internationaux de médecine,
          possédant ainsi une grande expertise dans l'encadrement des
          conférences et des formations. Né le 08 juillet 1966 à Rabat, il est
          père de trois enfants.​
        </p>
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

export default MotDeDelegation;
