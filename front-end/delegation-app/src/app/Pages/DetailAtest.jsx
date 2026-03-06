import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "../Styles/detailAtest.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import Button from "@mui/material/Button";

const DetailAtest = () => {
  const [atests, setAtests] = useState();
  const [targtetAtest, setTargtetAtest] = useState();

  const { id } = useParams();
  const user_id = localStorage.getItem("id");

  const getUtlisateurAtest = async () => {
    try {
      const atestations = await axios.post(
        "http://127.0.0.1:8000/api/atestation/getAtest",
        {
          matricule: user_id,
        }
      );
      // console.log(atestations.data.data.spec_Atest);
      setAtests(atestations.data.data.spec_Atest);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUtlisateurAtest();
  }, []);

  useEffect(() => {
    if (atests) {
      const target = atests.find((atest) => atest.atest_id == id);
      setTargtetAtest(target);
    }
  }, [atests]);

  console.log(targtetAtest);

  if (targtetAtest) {
    return (
      <div className="detail-atest-container">
        <div className="add-atest-title">
          <h1>Detail Attestation :</h1>
        </div>
        <div className="detail-atest-mini-container">
          <Grid
            container
            spacing={5}
            rowSpacing={5}
            style={{ marginTop: "30px" }}
          >
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderLeft: "5px solid rgb(55, 107, 145)",
                  backgroundColor: "rgb(245, 245, 245)",
                  borderRadius: "5px",
                  filter: "drop-shadow(14px 12px 15px rgba(0, 0, 0, 0.15))",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>
                  Date de demande :
                </h3>
                <p>{targtetAtest.date_demande}</p>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderLeft: "5px solid rgb(55, 107, 145)",
                  backgroundColor: "rgb(245, 245, 245)",
                  borderRadius: "5px",
                  filter: "drop-shadow(14px 12px 15px rgba(0, 0, 0, 0.15))",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>
                  Type d'atestation :
                </h3>
                <p> Atestation de {targtetAtest.type} </p>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderLeft: "5px solid rgb(55, 107, 145)",
                  backgroundColor: "rgb(245, 245, 245)",
                  borderRadius: "5px",
                  filter: "drop-shadow(14px 12px 15px rgba(0, 0, 0, 0.15))",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>
                  Date de reception :
                </h3>
                <p>
                  {targtetAtest.status ? targtetAtest.date : "En attendant"}
                </p>
              </Box>
            </Grid>
            {targtetAtest.status ? (
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",

                    padding: "10px",
                  }}
                >
                  <Button
                    style={{ background: "#376b91", color: "white" }}
                    component="label"
                    variant="filled"
                    endIcon={<SimCardDownloadIcon />}
                  >
                    <a
                      href={targtetAtest.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white", fontWeight: "lighter" }}
                    >
                      <h3>Telecharget attestation</h3>
                    </a>
                  </Button>
                </Box>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          {/* 
              {targtetAtest.status ? (
                <a
                  href={targtetAtest.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Telecharget attestation {">"} </h3>
                </a>
              ) : (
                ""
              )}
             */}
        </div>
      </div>
    );
  }
};

export default DetailAtest;

// date: "2023-03-22";
// date_demande: "2023-03-25";
// lien: "http://127.0.0.1:8000/Atestations_uploads/25-03-2023-00-3947_Devoir Libre 1.pdf";

// status: 1;
// type: "Travail";
