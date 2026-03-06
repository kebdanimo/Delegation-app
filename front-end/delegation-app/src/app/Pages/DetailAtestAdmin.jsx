import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DetailAtestAdmin = () => {
  const [detail, setDetail] = useState();

  const [value, setValue] = React.useState(dayjs());
  // console.log(value.format("YYYY-MM-DD"));

  const [file, setFile] = useState();

  const [open, setOpen] = useState(false);

  const { id } = useParams();

  const getAttest = async () => {
    try {
      const attest_detail = await axios.post(
        "http://127.0.0.1:8000/api/atestation/get_one_attest",
        {
          id: id,
        }
      );
      console.log(attest_detail.data.data.attestation[0]);
      setDetail(attest_detail.data.data.attestation);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    getAttest();
  }, []);

  const repondAtest = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("atest_id", id);
    formData.append("date", value.format("YYYY-MM-DD"));
    // formData.append("date", "2023-04-28");
    formData.append("lien", file);
    axios
      .post("http://127.0.0.1:8000/api/atestation/answer", formData)
      .then((response) => {
        console.log(response.data);
        setOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="detail-atest-container">
      <div className="add-atest-title m-m-b">
        <h1>Detail Attestation :</h1>
      </div>

      <div className="detail-atest-mini-container">
        {detail ? (
          <Grid
            container
            spacing={10}
            rowSpacing={5}
            style={{ marginBottom: "30px" }}
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
                <p>
                  {detail[0].nom} {detail[0].prenom}
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
                <h3 style={{ color: "rgb(55, 107, 145)" }}>Type :</h3>
                <p>{detail[0].type}</p>
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
                  Date de demande :
                </h3>
                <p>{detail[0].date_demande}</p>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </div>

      <div className="add-atest-title m-m-b">
        <h1>Importer Atestation :</h1>
      </div>

      <form
        className="add-atest-form"
        onSubmit={repondAtest}
        encType="multipart/form-data"
      >
        <div className="add-atest-input-field">
          <label>Date de realisation : </label>
        </div>
        <div className="add-atest-input-field">
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Choisire la date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </div>

        <div className="add-atest-input-field fileimp">
          <label>Importer l'atestation : </label>
          {/* <input type="file" onChange={(e) => setFile(e.target.files[0])} /> */}
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
        </div>

        <button className="sendAtest">Envoyer Atestation</button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Attestation importer avec succée!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DetailAtestAdmin;
