import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import SendIcon from "@mui/icons-material/Send";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DetailFonc = () => {
  const { id, state } = useParams();

  const [open, setOpen] = useState(false);

  const [valideUser, setValidUser] = useState();
  const [unvalideUser, setUnvalideUser] = useState();

  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const getUnregistredUtlisateurInfo = async () => {
    try {
      const infos = await axios.post(
        "http://127.0.0.1:8000/api/utilisateur/getUnregistredUtilisateurInfo",
        {
          target_matricule: id,
        }
      );
      setUnvalideUser(infos.data.data.user);
      // console.log(infos.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const getUtlisateurInfo = async () => {
    try {
      const infos = await axios.post(
        "http://127.0.0.1:8000/api/utilisateur/getInfo",
        {
          target_matricule: id,
        }
      );
      // console.log(infos.data.data.user);
      setValidUser(infos.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (state == "unvalid") {
      getUnregistredUtlisateurInfo();
    }
    if (state == "valid") {
      getUtlisateurInfo();
    }
  }, []);

  const deleteCompt = async () => {
    try {
      const deleteUser = await axios.post(
        "http://127.0.0.1:8000/api/utilisateur/delete",
        {
          target_matricule: id,
        }
      );
      console.log(deleteUser.data.data);
      navigate("../JestionCompt");
    } catch (error) {
      console.log(error);
    }
  };

  const genererMdp = async () => {
    try {
      const User = await axios.post(
        "http://127.0.0.1:8000/api/utilisateur/genererMdp",
        {
          target_matricule: id,
        }
      );
      console.log(User.data.data);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (state == "unvalid" && unvalideUser) {
    return (
      <div className="detail-atest-container">
        <div className="add-atest-title m-s-b">
          <h1>Detail fonctionnaire :</h1>
        </div>

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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Nom et Prenom :</h3>
              <p>{unvalideUser.nom + " " + unvalideUser.prenom}</p>
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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Matricule :</h3>
              <p>{unvalideUser.matricule}</p>
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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Cin :</h3>
              <p>{unvalideUser.cin}</p>
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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Tél :</h3>
              <p>{unvalideUser.tele}</p>
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
              <p> {unvalideUser.created_at} </p>
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
              <h3 style={{ color: "rgb(55, 107, 145)" }}>Email :</h3>
              <p> {unvalideUser.email} </p>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                padding: "10px",
              }}
            >
              <Link to={`ValiderCompt/${id}`}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  disabled={false}
                  style={{ backgroundColor: "#376b91" }}
                >
                  valider compte
                </Button>
              </Link>

              <Button
                onClick={deleteCompt}
                variant="contained"
                endIcon={<SendIcon />}
                disabled={false}
                style={{ backgroundColor: "#376b91" }}
              >
                Refuser
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
  if (state == "valid" && valideUser) {
    console.log(valideUser);
    return (
      <div className="detail-atest-container">
        <div className="add-atest-title m-s-b">
          <h1>Detail fonctionnaire :</h1>
        </div>
        <div className="detail-atest-mini-container">
          <div className="add-conge-info-section">
            <div className="add-conge-info-mini-section">
              <h3>Nom et Prenom:</h3>
              <p> {valideUser.nom + " " + valideUser.prenom} </p>
            </div>
            <div className="add-conge-info-mini-section">
              <h3>Telé :</h3>
              <p>{valideUser.tele}</p>
            </div>
            <div className="add-conge-info-mini-section">
              <h3>Affectation :</h3>
              <p>{valideUser.affectation_libelle} </p>
            </div>
            <div className="add-conge-info-mini-section">
              <h3>Grade :</h3>
              <p>{valideUser.grade_libelle} </p>
            </div>
            <div className="add-conge-info-mini-section">
              <button className="repondre" onClick={genererMdp}>
                Generer motdepass
              </button>
              <button
                className="repondre"
                style={{ marginLeft: "20px" }}
                onClick={deleteCompt}
              >
                Suprimer compte
              </button>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Nouveau mot de pass a été generer!
              </Alert>
            </Snackbar>
          </div>

          <div className="add-conge-info-section">
            <div className="add-conge-info-mini-section">
              <h3>Matricule :</h3>
              <p> {valideUser.matricule} </p>
            </div>

            <div className="add-conge-info-mini-section">
              <h3>Email : </h3>
              <p> {valideUser.email} </p>
            </div>

            <div className="add-conge-info-mini-section">
              <h3>Fonction : </h3>
              <p> {valideUser.fonction_libelle} </p>
            </div>

            <div className="add-conge-info-mini-section">
              <h3>Status : </h3>
              <p> {valideUser.status_libelle} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailFonc;

// "affectation_libelle": "Delegation",
// "status_libelle": "Titulaire",
// "fonction_libelle": "Responsable de ressource humaines",
// "grade_libelle": "Ingenieur 2em grade"
