import React from "react";



import { Link } from "react-router-dom";
import '../../../styles/dossier-thematique.css'

const DocumentTable = () => {
  return (
    <div className="dossier-thematique">
      {" "}
      <div className="element-title">
        <h1>Dossiers thematiques {">"} </h1>
      </div>
      <div className="element-container">
        <table cellSpacing={0}>
          <tr>
            <td className="active">
              <Link to="Article">
                <h3>Enquet National sur la nutritim</h3>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="Article">
                <h3>Enquet national sur la population et la sante familial</h3>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="active">
              <Link to="Article">
                <h3>Covid 19</h3>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DocumentTable;
