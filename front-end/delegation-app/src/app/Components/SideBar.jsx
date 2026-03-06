import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";

import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const SideBar = () => {
  const [links, setLinks] = useState([]);

  const id = localStorage.getItem("id");

  const navigate = useNavigate();

  const getLinks = async () => {
    try {
      const droits = await axios.post(
        "http://127.0.0.1:8000/api/utilisateur/getDroits",
        {
          target_id: id,
        }
      );
      // console.log(droits.data);
      setLinks(droits.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  const logout = () => {
    console.log("log out ");
    localStorage.clear();
    navigate("../");
  };

  const date = moment().format("D MMMM YYYY");
  const currentTime = moment().format("h:mm:ss A");

  const icon_display = (params) => {
    if (params == 1) return <InfoIcon fontSize="small" />;
    if (params == 2) return <NewspaperIcon fontSize="small" />;
    if (params == 8) return <PostAddIcon fontSize="small" />;
    if (params == 4) return <FilePresentIcon fontSize="small" />;
    if (params == 3) return <EventAvailableIcon fontSize="small" />;
    if (params == 7) return <PersonSearchIcon fontSize="small" />;
    if (params == 5) return <PlagiarismIcon fontSize="small" />;
    if (params == 6) return <CalendarMonthIcon fontSize="small" />;
  };

  return (
    <>
      <div
        style={{
          width: "90%",
          marginTop: "30px",
          borderBottom: "2px solid white",
        }}
      >
        <p style={{ color: "lightGray" }}>{date}</p>
        <h2
          style={{
            color: "rgb(250, 251, 253)",
            letterSpacing: "2px",
            fontSize: "30px",
          }}
        >
          {currentTime}
        </h2>
      </div>
      <ul className="sidebar-element">
        {links.map((link) => {
          return (
            <li key={link.droit_id}>
              <NavLink to={link.link}>
                <div
                  style={{
                    width: "calc(100% - 5px)",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    display: "flex",
                  }}
                >
                  {icon_display(link.droit_id)}
                  <h4 style={{ fontWeight: "400", marginLeft: "5px" }}>
                    {link.type}
                  </h4>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div
        style={{
          width: "100%",
          color: "white",
          margin: "0px 0px 30px 30px",
        }}
      >
        <Button
          style={{ borderColor: "#f2f3f0", color: "#f2f3f0" }}
          component="label"
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={logout}
        >
          Deconnecter
        </Button>
      </div>
    </>
  );
};

export default SideBar;

{
  /* <li>
          <Link to="">information</Link>
        </li>
        <li>
          <Link to="Evenement">Actualités</Link>
        </li>
        <li>
          <Link to="HistoryConge">Conge</Link>
        </li>
        <li>
          <Link to="HistoryAtest">Attestation</Link>
        </li>

        <li>
          <Link to="DemandsAtest">Gestion des atestation</Link>
        </li>
        <li>
          <Link to="DemandeConge">Gestion des Conges</Link>
        </li>
        <li>
          <Link to="JestionCompt">Gestion Compts</Link>
        </li>
        <li>
          <Link to="AjouterArticle">Ajouter Article</Link>
        </li> */
}
