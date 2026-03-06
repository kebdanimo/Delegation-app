import React from "react";

import "../../styles/layout.css";
import "../../styles/motDelegue.css";

import Side from "./UsfullElement/EventSlider";
import Side2 from "./UsfullElement/DocumentTable";

import simi1 from "../../images/simi1.jpg";
import simi2 from "../../images/simi2.jpg";

const Article = () => {
  return (
    <div className="globale-container">
      <div className="global-content-container">
        <h1>1ère Conférence Africaine sur la Réduction des Risques en Santé</h1>
        <div className="image-article"></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta est
          quo commodi quisquam reiciendis ipsum nihil doloribus, architecto
          aliquid laboriosam reprehenderit enim eaque quam nisi, facere cum
          repellat in culpa nesciunt porro corrupti quia impedit ea aspernatur.
          Nostrum molestias nihil nam illo debitis. Aperiam tempora illum
          ducimus facilis rem corporis?
        </p>
        <br />
        <div className="image-article">
          <img src={simi1} alt="" />
        </div>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          fuga. Commodi odit architecto modi impedit beatae, molestias labore
          numquam voluptas minus porro ducimus est quod dolor. Qui natus ducimus
          doloribus sequi, deleniti optio non officiis! Veritatis rem ex harum
          eligendi, dolorem illo asperiores commodi nulla adipisci
          necessitatibus corporis sequi pariatur alias, culpa qui hic magnam
          vitae recusandae magni neque natus suscipit. Impedit quia temporibus,
          omnis sint aliquid quod nobis a pariatur veniam quae asperiores
          aperiam iure rem culpa repellat animi i optio non officiis! Veritatis
          rem ex harum eligendi, dolorem illo asperiores commodi nulla adipisci
          necessitatibus corporis sequi pariatur alias, culpa qui hic magnam
          vitae recusandae magni neque natus suscipit. Impedit quia temporibus,
          omnis sint aliquid quod nobis a pariatur veniam quae asperiores
          aperiam iure rem culpa repellat animi..
        </p>
        <br />
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          voluptates possimus maiores consequuntur quasi eaque labore enim ex
          vitae consequatur.
        </p>
        <div className="image-article">
          <img src={simi2} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          fuga. Commodi odit architecto modi impedit beatae, molestias labore
          numquam voluptas minus porro ducimus est quod dolor. Qui natus ducimus
          doloribus sequi, deleniti optio non officiis! Veritatis rem ex harum
          eligendi, dolorem illo asperiores commodi nulla adipisci
          necessitatibus corporis sequi pariatur alias, culpa qui hic magnam
          vitae recusandae magni neque natus suscipit. Impedit quia temporibus,
          omnis sint aliquid quod nobis a pariatur veniam quae asperiores
          aperiam iure rem culpa repellat animi i optio non officiis! Veritatis
          rem ex harum eligendi, dolorem illo asperiores commodi nulla adipisci
          necessitatibus corporis sequi pariatur alias, culpa qui hic magnam
          vitae recusandae magni neque natus suscipit. Impedit quia temporibus,
          omnis sint aliquid quod nobis a pariatur veniam quae asperiores
          aperiam iure rem culpa repellat animi..
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

export default Article;
