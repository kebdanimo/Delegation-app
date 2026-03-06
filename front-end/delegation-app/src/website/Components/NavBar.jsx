import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// logo
import logo1 from "../../images/logo-armoires.png";
import logo2 from "../../images/logo-ministere-sante1.png";

// icons
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const showDropDown1 = () => {
    setState1(true);
  };
  const hideDropDown1 = () => {
    setState1(false);
  };
  const showDropDown2 = () => {
    setState2(true);
  };
  const hideDropDown2 = () => {
    setState2(false);
  };
  const showDropDown3 = () => {
    setState3(true);
  };
  const hideDropDown3 = () => {
    setState3(false);
  };

  return (
    <>
      <nav>
        <div className="logo logo1">
          <img src={logo1} alt="logo" />
        </div>

        <div className="nav-element">
          <div className="nav-up">
            <div className="searchBar">
              <AiOutlineSearch className="search" />
              <input type="text" placeholder="recherche" />
            </div>
          </div>
          <div className="nav-down">
            <ul>
              <li>
                <Link to="/">
                  <h3>Acceuil</h3>
                </Link>
              </li>

              <li>
                <div className="dropdown">
                  <h3 onMouseEnter={showDropDown1} onMouseLeave={hideDropDown1}>
                    Délégation
                  </h3>

                  {state1 ? (
                    <div
                      className="dropdown-menu"
                      onMouseEnter={showDropDown1}
                      onMouseLeave={hideDropDown1}
                    >
                      <h3>
                        <Link to="/MotDeDelegation">Mot du délégué</Link>
                      </h3>
                      <h3>
                        <Link to="/Organigramme">Organigramme</Link>
                      </h3>
                      <h3>
                        <Link to="/Services">Mission</Link>
                      </h3>
                      <h3>
                        <Link to="/Statistics">Statistiques</Link>
                      </h3>
                    </div>
                  ) : null}
                </div>
              </li>

              <li>
                <div className="dropdown">
                  <h3 onMouseEnter={showDropDown2} onMouseLeave={hideDropDown2}>
                    Evènements
                  </h3>

                  {state2 ? (
                    <div
                      className="dropdown-menu"
                      onMouseEnter={showDropDown2}
                      onMouseLeave={hideDropDown2}
                    >
                      <h3>
                        <Link to="/Seminaire">Seminaire</Link>
                      </h3>
                      <h3>
                        <Link to="/Vaccination">Companie de vaccination</Link>
                      </h3>
                      <h3>
                        <Link to="/Caravane">Caravane medicale</Link>
                      </h3>
                    </div>
                  ) : null}
                </div>
              </li>

              <li>
                <div className="dropdown">
                  <h3 onMouseEnter={showDropDown3} onMouseLeave={hideDropDown3}>
                    Annonces
                  </h3>

                  {state3 ? (
                    <div
                      className="dropdown-menu"
                      onMouseEnter={showDropDown3}
                      onMouseLeave={hideDropDown3}
                    >
                      <h3>
                        <Link to="/Annonces">Annonces</Link>
                      </h3>
                      <h3>
                        <Link to="/AppelDoffres">Appel d'offres</Link>
                      </h3>
                    </div>
                  ) : null}
                </div>
              </li>
              <li>
                <h3>
                  <Link to="/contact">Contact</Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link to="/app">Acées fonctionnaires</Link>
                </h3>
              </li>
            </ul>
          </div>
        </div>

        <div className="logo logo2">
          <img src={logo2} alt="" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
