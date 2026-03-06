import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/authSlice";

import axios from "axios";

import "../Styles/login.css";

// import Alert from "@mui/material/Alert";
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

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  // login inputs
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const [matMsg, setMatMsg] = useState({ state: false, msg: "" });

  const [passMsg, setPassMsg] = useState({ state: false, msg: "" });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const getin = async (e) => {
    e.preventDefault();

    if (!matricule) {
      setMatMsg({ state: true, msg: "Entrer votre matricule" });
    }
    if (!password) {
      setPassMsg({ state: true, msg: "Entrer votre mot de pass" });
    }
    if (matricule && password) {
      try {
        const user = await axios.post("http://127.0.0.1:8000/api/login", {
          matricule: matricule,
          pass: password,
        });
        // console.log(user.data.data.user);
        localStorage.setItem("token", user.data.data.token);
        localStorage.setItem("id", user.data.data.user.matricule);
        setOpen(true);
        window.location.href = "/app/info";
      } catch (error) {
        console.log(error.response.data.message);
        setErrorMsg(error.response.data.message);
      }
    }
  };

  const mat_controll = (param) => {
    setMatricule(param);
    setMatMsg((prev) => ({ ...prev, state: false }));
    setErrorMsg("");
  };
  const pass_controll = (param) => {
    setPassword(param);
    setPassMsg((prev) => ({ ...prev, state: false }));
    setErrorMsg("");
  };

  return (
    <div className="login">
      <div
        className="form-cont"
        style={{
          // border: "1px solid black",
          width: "40%",
          height: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 50px",
          filter: "drop-shadow(14px 12px 15px rgba(0, 0, 0, 0.15))",
          background: "white",
        }}
      >
        {errorMsg ? (
          <Alert severity="error" style={{ width: "100%" }}>
            {errorMsg}
          </Alert>
        ) : (
          <></>
        )}
        <div
          style={{
            width: "100%",
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ borderBottom: "5px solid #376b91" }}>Connecter</h1>
        </div>

        <form style={{ width: "100%", height: "100%" }}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={12}>
              <TextField
                type="number"
                label="Matricule"
                variant="outlined"
                fullWidth
                required
                error={matMsg.state}
                helperText={matMsg.msg}
                onChange={(e) => mat_controll(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                id="outlined-basic"
                label="mod de pass"
                variant="outlined"
                type="password"
                fullWidth
                required
                error={passMsg.state}
                helperText={passMsg.msg}
                onChange={(e) => pass_controll(e.target.value)}
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
                  onClick={getin}
                  endIcon={<SendIcon />}
                  disabled={false}
                  style={{ backgroundColor: "#376b91" }}
                >
                  Connecter
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
                  Vous n'avez pas une compt{" "}
                  <Link to="/app/register" style={{ color: "#376b91" }}>
                    Demand créer une compte
                  </Link>
                </p>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Bienvenue
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
