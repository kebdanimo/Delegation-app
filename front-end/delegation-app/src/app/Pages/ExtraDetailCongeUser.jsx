import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import Button from "@mui/material/Button";

const ExtraDetailCongeUser = () => {
  const [detail, setDetail] = useState();

  const { id } = useParams();

  const getCongeDetail = async () => {
    try {
      const Con_detail = await axios.post(
        "http://127.0.0.1:8000/api/get_One_Conge",
        {
          conge_id: id,
        }
      );
      // console.log(Con_detail.data.data.conge[0]);
      setDetail(Con_detail.data.data.conge[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCongeDetail();
  }, []);

  const render_status = (param) => {
    if (param == 1) {
      return "Accepter";
    }
    if (param == 0) {
      return "En atendant";
    }
    if (param == -1) {
      return "Refuser";
    }
  };

  if (detail) {
    return (
      <div className="detail-atest-container">
        <div className="add-atest-title m-b">
          <h1>Detail Conge :</h1>
        </div>

        <Grid container spacing={10} rowSpacing={5} style={{}}>
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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Date de debut :</h3>
              <p> {detail.date_debut} </p>
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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Date de reprise :</h3>
              <p> {detail.date_fin} </p>
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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Durée :</h3>
              <p> {detail.duree_global} jours </p>
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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Status :</h3>
              <p> {render_status(detail.status)} </p>
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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Date de demande :</h3>
              <p> {detail.created_at} </p>
            </Box>
          </Grid>
          {detail.status == -1 ? (
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
                  Motife de refus :
                </h3>
                <p> {detail.cs_refus} </p>
              </Box>
            </Grid>
          ) : (
            <></>
          )}

          {detail.status == 1 ? (
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
                    href={detail.link}
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
            <></>
          )}
        </Grid>
      </div>
    );
  }
};

export default ExtraDetailCongeUser;
