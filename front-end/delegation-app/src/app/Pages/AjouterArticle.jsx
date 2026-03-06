import React, { useState } from "react";
import axios from "axios";

// importing @MUI material
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import SendIcon from "@mui/icons-material/Send";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AjouterArticle = () => {
  const id = localStorage.getItem("id");

  const [open, setOpen] = useState(false);

  // input elements
  const [file, setFile] = useState();
  const [titre, setTire] = useState("");
  const [disc, setDisc] = useState("");
  const [article, setArticle] = useState("");
  const [date, setdate] = useState(null);

  console.log(date);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("discription", disc);
    formData.append("article", article);
    formData.append("date", date.format("YYYY-MM-DD"));
    formData.append("link", file);
    formData.append("matricule", id);
    axios
      .post("http://127.0.0.1:8000/api/actulite", formData)
      .then((response) => {
        console.log(response.data);
        setOpen(true);
        setTire("");
        setDisc("");
        setArticle("");
        setdate(null);
        setFile();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="valide-compt-cont" style={{ overflow: "hidden" }}>
      <div className="add-conge-title">
        <h1>Ajouter Actualité</h1>
      </div>

      <form
        encType="multipart/form-data"
        onSubmit={submitHandler}
        style={{
          width: "100%",
          height: "100%",
          padding: "80px 60px",
        }}
      >
        <Grid container spacing={3} rowSpacing={4}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Titre"
              fullWidth
              variant="outlined"
              value={titre}
              onChange={(e) => setTire(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              label="Date"
              fullWidth
              size="small"
              value={date}
              slotProps={{ textField: { fullWidth: true } }}
              onChange={(data) => setdate(data)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Discription"
              variant="outlined"
              fullWidth
              value={disc}
              onChange={(e) => setDisc(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Article"
              fullWidth
              multiline
              rows={5}
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{ borderColor: "#376b91", color: "#376b91" }}
              component="label"
              variant="outlined"
              endIcon={<SimCardDownloadIcon />}
            >
              Ajouter fichier
              <input
                hidden
                accept="*.pdf"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Button>
            {file ? <p> {file.name} </p> : <></>}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={false}
              style={{ backgroundColor: "#376b91" }}
            >
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Votre article a été publié avec succès!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AjouterArticle;
