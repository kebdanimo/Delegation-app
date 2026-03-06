import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/validerCompt.css";
import { useParams, useNavigate } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const ValiderCompt = () => {
  const [fonctions, setFonctions] = useState();
  const [affectation, setAffectation] = useState();
  const [status, setStatus] = useState();
  const [grade, setGrade] = useState();

  const [fonctionInput, setFonctionInput] = useState("");
  const [affectationInput, setAffectationInput] = useState("");
  const [statuInput, setStatuInput] = useState("");
  const [gradeInput, setGradeInput] = useState("");
  const [observ, setObserv] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const validateUser = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("matricule", id);
    formData.append("affect", affectationInput);
    formData.append("status", statuInput);
    formData.append("fonction", fonctionInput);
    formData.append("grade", gradeInput);
    axios
      .post("http://127.0.0.1:8000/api/utilisateur/validate", formData)
      .then((response) => {
        console.log(response.data);
        navigate("../JestionCompt");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/utilisateur/getValidationInfo")
      .then((response) => {
        // console.log(response.data);

        setFonctions(response.data.fonctions);
        setAffectation(response.data.affectation);
        setGrade(response.data.grade);
        setStatus(response.data.status);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (fonctions && affectation && grade && status) {
    return (
      <div className="valide-compt-cont">
        <div className="add-conge-title">
          <h1>Valider compt</h1>
        </div>

        {/* <form className="add-conge-form valider-cmpt" onSubmit={validateUser}>
          <div className="add-conge-form-section">
            <div className="field">
              <label htmlFor="">Fonction :</label>
              <select onClick={(e) => setFonctionInput(e.target.value)}>
                {fonctions.map((f, index) => {
                  return (
                    <option key={index} value={f.fonction_id}>
                      {" "}
                      {f.libelle}{" "}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="field">
              <label> Afectation :</label>
              <select
                name=""
                id=""
                onClick={(e) => setAffectationInput(e.target.value)}
              >
                {affectation.map((f, index) => {
                  return (
                    <option key={index} value={f.affect_id}>
                      {" "}
                      {f.libelle}{" "}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="field">
              <label> Observation :</label>

              <textarea cols="5" rows="20" className="txt"></textarea>
            </div>
            <div className="field">
              <button>Envoyer</button>
            </div>
          </div>

          <div className="add-conge-form-section">
            {" "}
            <div className="field">
              <label> Status :</label>

              <select
                name=""
                id=""
                onClick={(e) => setStatuInput(e.target.value)}
              >
                {status.map((f, index) => {
                  return (
                    <option key={index} value={f.statu_id}>
                      {" "}
                      {f.libelle}{" "}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="field">
              <label> Grade :</label>

              <select
                name=""
                id=""
                onClick={(e) => setGradeInput(e.target.value)}
              >
                {grade.map((f, index) => {
                  return (
                    <option key={index} value={f.grade_id}>
                      {" "}
                      {f.libelle}{" "}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </form> */}

        <form
          style={{
            width: "100%",
            padding: "20px",
            margin: "80px 0px 20px 0px",
          }}
          onSubmit={validateUser}
        >
          <Grid container spacing={10} rowSpacing={4}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Fonction</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Fonction"
                  value={fonctionInput}
                  onChange={(e) => setFonctionInput(e.target.value)}
                >
                  {fonctions.map((f, index) => {
                    return (
                      <MenuItem value={f.fonction_id} key={index}>
                        {f.libelle}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Affectation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Affectation"
                  value={affectationInput}
                  onChange={(e) => setAffectationInput(e.target.value)}
                >
                  {affectation.map((f, index) => {
                    return (
                      <MenuItem value={f.affect_id} key={index}>
                        {f.libelle}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Status"
                  value={statuInput}
                  onChange={(e) => setStatuInput(e.target.value)}
                >
                  {status.map((f, index) => {
                    return (
                      <MenuItem value={f.statu_id} key={index}>
                        {f.libelle}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Grad</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Grad"
                  value={gradeInput}
                  onChange={(e) => setGradeInput(e.target.value)}
                >
                  {grade.map((f, index) => {
                    return (
                      <MenuItem value={f.grade_id} key={index}>
                        {f.libelle}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Article"
                fullWidth
                multiline
                rows={5}
                value={observ}
                onChange={(e) => setObserv(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                disabled={false}
                fullWidth
                style={{ backgroundColor: "#376b91" }}
              >
                Envoyer
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
};

export default ValiderCompt;
