import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import "../Styles/AjouterAtest.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AjouterAtest = () => {
  const infos = useSelector((state) => state.infos);

  const [open, setOpen] = useState(false);

  const [typeAtest, setTypeAtest] = useState([]);
  const [typeDem, setTypeDem] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/typeatest")
      .then((response) => {
        setTypeAtest(response.data.data.type_Atest);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(typeAtest);

  const id = localStorage.getItem("id");

  const demandAtest = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("matricule", id);
    formData.append("type_atest", typeDem);
    axios
      .post("http://127.0.0.1:8000/api/atestation", formData)
      .then((response) => {
        console.log(response.data);
        setOpen(true);
        setTypeDem("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(typeDem);

  return (
    <div className="add-atest-container">
      <div className="add-atest-title">
        <h1>Demander Attestation :</h1>
      </div>

      {infos[0] ? (
        <div className="add-conge-info m-b">
          <div className="add-conge-info-section">
            <div className="add-conge-info-mini-section">
              <h3>Nom :</h3>
              <p>{infos[0].nom}</p>
            </div>
            <div className="add-conge-info-mini-section">
              <h3>Prenom :</h3>
              <p>{infos[0].prenom}</p>
            </div>
          </div>
          <div className="add-conge-info-section">
            <div className="add-conge-info-mini-section">
              <h3>Matricule :</h3>
              <p>{infos[0].matricule}</p>
            </div>
            <div className="add-conge-info-mini-section">
              <h3>Cin : </h3>
              <p>{infos[0].cin}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="add-conge-info m-b">
          <div className="add-conge-info-section">
            <div className="add-conge-info-mini-section">
              <h3>Nom :</h3>
              <p></p>
            </div>
            <div className="add-conge-info-mini-section">
              <h3>Prenom :</h3>
              <p></p>
            </div>
          </div>
          <div className="add-conge-info-section">
            <div className="add-conge-info-mini-section">
              <h3>Matricule :</h3>
              <p></p>
            </div>
            <div className="add-conge-info-mini-section">
              <h3>Cin : </h3>
              <p></p>
            </div>
          </div>
        </div>
      )}

      <form action="" className="add-atest-form" onSubmit={demandAtest}>
        <div
          className="add-atest-input-field"
          style={{ display: "flex", alignItems: "center" }}
        >
          <label>Selectioner le type de l'atestation : </label>

          <FormControl sx={{ ml: 3, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">
              Type attestation
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeDem}
              label="Type attestation"
              onChange={(e) => setTypeDem(e.target.value)}
            >
              {typeAtest ? (
                typeAtest.map((type, index) => {
                  return (
                    <MenuItem value={type.type_atest_id} key={index}>
                      {" "}
                      {type.type}{" "}
                    </MenuItem>
                  );
                })
              ) : (
                <></>
              )}
            </Select>
          </FormControl>
        </div>

        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          disabled={false}
          style={{ backgroundColor: "#376b91" }}
        >
          Envoyer Demande
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Votre demade a été envoyer avec succès!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AjouterAtest;
