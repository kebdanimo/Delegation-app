import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "../Styles/info.css";

import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Info = () => {
  const infos = useSelector((state) => state.infos);

  const [open, setOpen] = useState(false);

  const [isVisibale, setIsVisibale] = useState(false);
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const myRef = useRef(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const reset = (e) => {
    e.preventDefault();
    setNewPass("");
    setPass("");
    setOpen(true);
  };

  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  }, [isVisibale]);

  return (
    <div className="info-container">
      <div className="add-conge-title">
        <h1>Information personnel</h1>
      </div>
      <div
        style={{ width: "100%", height: "600px", overflowY: "scroll" }}
        ref={myRef}
      >
        <div>
          {infos[0] ? (
            <Grid
              container
              spacing={10}
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
                    Nom et Prenom :
                  </h3>
                  <p>
                    {infos[0].nom} {infos[0].prenom}
                  </p>
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
                  <p>{infos[0].matricule}</p>
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
                  <h3 style={{ color: "rgb(55, 107, 145)" }}>Grade :</h3>
                  <p>{infos[0].grade_libelle}</p>
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
                  <p>{infos[0].status_libelle}</p>
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
                  <h3 style={{ color: "rgb(55, 107, 145)" }}>Fonction :</h3>
                  <p> {infos[0].fonction_libelle}</p>
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
                  <h3 style={{ color: "rgb(55, 107, 145)" }}>Affectation :</h3>
                  <p> {infos[0].affectation_libelle}</p>
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
                    Date de pris de service :
                  </h3>
                  <p> {infos[0].date_prise_dervice}</p>
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
                    Date de recrutement :
                  </h3>
                  <p>{infos[0].date_recrutement}</p>
                </Box>
              </Grid>
              {/* <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    padding: "10px",
                  }}
                >
                  <h4
                    style={{
                      color: "rgb(55, 107, 145)",
                      borderBottom: "2px solid ",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsVisibale(true)}
                  >
                    Changer mot de pass
                  </h4>
                </Box>
              </Grid> */}
            </Grid>
          ) : (
            <></>
          )}
          {/* <Grid
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
                  borderBottom: "2px solid rgb(55, 107, 145)",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>Nom et Prenom :</h3>
                <p>
                  {infos[0].nom} {infos[0].prenom}
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderBottom: "2px solid rgb(55, 107, 145)",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>Matricule :</h3>
                <p>{infos[0].matricule}</p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderBottom: "2px solid rgb(55, 107, 145)",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>Grade :</h3>
                <p>{infos[0].grade_libelle}</p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderBottom: "2px solid rgb(55, 107, 145)",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>Status :</h3>
                <p>{infos[0].status_libelle}</p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderBottom: "2px solid rgb(55, 107, 145)",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>Fonction :</h3>
                <p> {infos[0].fonction_libelle}</p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderBottom: "2px solid rgb(55, 107, 145)",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>Affectation :</h3>
                <p> {infos[0].affectation_libelle}</p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderBottom: "2px solid rgb(55, 107, 145)",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>
                  Date de pris de service :
                </h3>
                <p> {infos[0].date_prise_dervice}</p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  borderBottom: "2px solid rgb(55, 107, 145)",
                  padding: "10px",
                }}
              >
                <h3 style={{ color: "rgb(55, 107, 145)" }}>
                  Date de recrutement :
                </h3>
                <p>{infos[0].date_recrutement}</p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  padding: "10px",
                }}
              >
                <h4
                  style={{
                    color: "rgb(55, 107, 145)",
                    borderBottom: "2px solid ",
                    cursor: "pointer",
                  }}
                  onClick={show}
                >
                  Changer mot de pass
                </h4>
              </Box>
            </Grid>
          </Grid> */}
        </div>
        {isVisibale ? (
          <form style={{ width: "100%", marginTop: "30px" }} onSubmit={reset}>
            <Grid container spacing={5} rowSpacing={3}>
              <Grid item xs={7}>
                <Box sx={{}}>
                  <TextField
                    style={{ backgroundColor: "rgb(245, 245, 245)" }}
                    id="outlined-basic"
                    label="Neveau password"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={7}>
                <Box sx={{}}>
                  <TextField
                    style={{ backgroundColor: "rgb(245, 245, 245)" }}
                    id="outlined-basic"
                    label="Confirme password"
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{}}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    disabled={false}
                    style={{ backgroundColor: "#376b91" }}
                  >
                    Changer
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        ) : (
          <></>
        )}
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Votre mot de pass a été réinitialisé avec succès!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Info;
