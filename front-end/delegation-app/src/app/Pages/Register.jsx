import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// style
import "../Styles/register.css";

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

const Register = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [cin, setCin] = useState("");
  const [matricule, setMatricule] = useState("");
  const [email, setEmail] = useState("");
  const [tele, setTele] = useState("");

  const [errors, setErrors] = useState({});

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const store = await axios.post("http://127.0.0.1:8000/api/register", {
        matricule: matricule,
        nom: nom,
        prenom: prenom,
        cin: cin,
        email: email,
        tele: tele,
      });
      console.log(store.data);
      setOpen(true);
      setNom("");
      setEmail("");
      setMatricule("");
      setPrenom("");
      setCin("");
      setTele("");
    } catch (error) {
      // console.log(error.response.data.errors);
      setErrors(error.response.data.errors);
      console.log("bad");
    }
  };

  return (
    <div className="register">
      <div
        style={{
          width: "60%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 50px 50px 50px",
          filter: "drop-shadow(14px 12px 15px rgba(0, 0, 0, 0.15))",
          background: "white",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ borderBottom: "5px solid #376b91" }}>Creé compte : </h1>
        </div>

        <form>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Nom"
                variant="outlined"
                fullWidth
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Prenom"
                variant="outlined"
                fullWidth
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Cin"
                variant="outlined"
                fullWidth
                value={cin}
                onChange={(e) => setCin(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="outlined-basic"
                label="Matricule"
                variant="outlined"
                fullWidth
                type="number"
                value={matricule}
                onChange={(e) => setMatricule(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                id="outlined-basic"
                label="Tele"
                variant="outlined"
                type="number"
                fullWidth
                value={tele}
                onChange={(e) => setTele(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  onClick={register}
                  endIcon={<SendIcon />}
                  disabled={false}
                  style={{ backgroundColor: "#376b91" }}
                >
                  Envoyer Demand
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6} md={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p>
                  Vous avez deja une compte{" "}
                  <Link to="/app/" style={{ color: "#376b91" }}>
                    Connecter a votre compte
                  </Link>
                </p>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>

      <Snackbar
        style={{ position: "absolute", bottom: "10", left: "10" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Votre demande a été envoyée avec succès. Veuillez attendre un e-mail
          de confirmation avec votre mot de pass
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
