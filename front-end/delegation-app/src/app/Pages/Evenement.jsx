import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

import ContentLoader from "react-content-loader";

import Chip from "@mui/material/Chip";

import "../Styles/event.css";

const Evenement = () => {
  const [act, setAct] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/actulite")
      .then((response) => {
        setAct(response.data.data.actualites);
        // console.log(response.data.data.actualites);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (act) {
    const date = new Date("2023-04-07T14:42:52.000000Z");
    const date2 = moment("2023-04-07T14:42:52.000000Z").format(
      "DD-MM-YYYY h:m:s"
    );
    console.log(date2);
  }

  if (act) {
    return (
      <div className="app-event-container">
        <div className="add-event-title">
          <h1>Article</h1>
        </div>
        <div
          style={{
            width: "100%",
            height: "85%",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingRight: "10px",
          }}
        >
          {act.reverse().map((ev, index) => {
            return (
              <div className="event" key={index}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h2
                    style={{
                      fontWeight: "bold",
                      fontSize: "26px",
                      marginRight: "20px",
                    }}
                  >
                    {ev.titre}
                  </h2>
                  <Chip
                    label={ev.date}
                    size="small"
                    color="success"
                    variant="outlined"
                  />
                </div>

                <h3
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "rgb(48, 106, 147)",
                    marginBottom: "10px",
                  }}
                >
                  {ev.discription}
                </h3>
                <p>{ev.article.slice(0, 197)}</p>
                <p
                  style={{ fontSize: "13px", color: "gray", marginTop: "10px" }}
                >
                  {ev.nom} {ev.prenom}{" "}
                  {moment(ev.created_at).format("DD-MM-YYYY h:m:s")}
                </p>
                <div className="app-event-link">
                  <a
                    href={ev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderBottom: "1px solid" }}
                  >
                    Telecharger fichier
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="app-event-container">
        <div className="add-event-title">
          <h1>Article</h1>
        </div>
        <div
          style={{
            width: "100%",
            height: "85%",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingRight: "10px",
          }}
        ></div>
      </div>
    );
  }
};

export default Evenement;
