import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import "../Styles/detailConge.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DetailConge = () => {
  const [open, setOpen] = useState(false);

  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);

  const [file, setFile] = useState();
  const [motif, setMotif] = useState("");

  const [conge, setConge] = useState({});
  const [detailconge, setDetailConge] = useState([]);

  const [rws, setRws] = useState([]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // get the data
  const { id } = useParams();
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/get_One_Conge", {
        conge_id: id,
      })
      .then((response) => {
        // console.log(response.data.data.conge);
        setConge(response.data.data.conge[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/detail_one_conge", {
        conge_id: id,
      })
      .then((response) => {
        // console.log(response.data.data.conge);
        setDetailConge(response.data.data.conge);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // actions
  const myRef = useRef(null);
  const validate = () => {
    setVisibility(false);
    setVisibility2(true);
    myRef.current.scrollTop = myRef.current.scrollHeight;
  };
  const refus = () => {
    setVisibility(true);
    setVisibility2(false);
    myRef.current.scrollTop = myRef.current.scrollHeight;
  };

  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  }, [visibility, visibility2]);

  const repondConge = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("conge_id", id);
    formData.append("link", file);
    axios
      .post("http://127.0.0.1:8000/api/validate_conge", formData)
      .then((response) => {
        console.log(response.data);
        setFile();
        setOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const refuseConge = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("conge_id", id);
    formData.append("cs_refus", motif);
    axios
      .post("http://127.0.0.1:8000/api/refuse_conge", formData)
      .then((response) => {
        console.log(response.data);
        setMotif("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // fill the detail table:
  useEffect(() => {
    const tmp = detailconge.map((dc) => ({
      id: dc.titre,
      consomation: dc.duree,
    }));
    setRws(tmp);
  }, [detailconge]);

  const columns = [
    { field: "id", headerName: "Année", width: 150 },
    { field: "consomation", headerName: "Jours consomer", width: 130 },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "30px 60px",
        overflowY: "scroll",
      }}
      ref={myRef}
    >
      <div className="add-atest-title m-m-b">
        <h1>Detail Conge :</h1>
      </div>
      <Grid container spacing={5} rowSpacing={2} style={{ marginTop: "30px" }}>
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
              {" "}
              {conge.nom && conge.prenom
                ? conge.nom + " " + conge.prenom
                : "wait..."}{" "}
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
            <p>{conge.Matricule ? conge.Matricule : "wait..."}</p>
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
            <h3 style={{ color: "rgb(55, 107, 145)" }}>Date de Debut :</h3>
            <p> {conge.date_debut ? conge.date_debut : "wait..."} </p>
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
            <h3 style={{ color: "rgb(55, 107, 145)" }}>Date fin :</h3>
            <p> {conge.date_fin ? conge.date_fin : "wait..."} </p>
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
            <h3 style={{ color: "rgb(55, 107, 145)" }}>Duree globale :</h3>
            <p> {conge.duree_global ? conge.duree_global : "wait..."} </p>
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
            <h3 style={{ color: "rgb(55, 107, 145)" }}>Type de conge : </h3>
            <p> {conge.type ? conge.type : "wait..."} </p>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              // borderLeft: "5px solid rgb(55, 107, 145)",
              // backgroundColor: "rgb(245, 245, 245)",
              // borderRadius: "5px",
              // filter: "drop-shadow(14px 12px 15px rgba(0, 0, 0, 0.15))",
              padding: "10px",
            }}
          >
            <h3 style={{ color: "rgb(55, 107, 145)" }}>Detail de conge : </h3>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              // borderBottom: "2px solid rgb(55, 107, 145)",
              padding: "10px",
              height: "211px",
              padding: "0px 200px 0px 200px",
            }}
          >
            <DataGrid
              rows={rws}
              rowHeight={50}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              slots={{
                pagination: false,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              // borderBottom: "2px solid rgb(55, 107, 145)",
              padding: "10px",
              height: "40px",
              padding: "0px 200px 0px 200px",
            }}
          >
            {conge.status == 0 ? (
              <>
                {" "}
                <Button
                  style={{ backgroundColor: "rgb(55, 107, 145)" }}
                  variant="contained"
                  onClick={validate}
                >
                  Valider conge
                </Button>
                <Button
                  style={{ color: "rgb(55, 107, 145)" }}
                  variant="outlined"
                  onClick={refus}
                >
                  Refuser conge
                </Button>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {visibility2 ? (
              <form onSubmit={repondConge} encType="multipart/form-data">
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                      padding: "10px",
                      height: "70px",
                      width: "100%",
                      padding: "0px 200px 0px 200px",
                    }}
                  >
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
                    {file ? <p> {file.name} </p> : <>No file yet!</>}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "40px",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      disabled={false}
                      style={{ backgroundColor: "#376b91" }}
                    >
                      Envoyer
                    </Button>
                  </Box>
                </Grid>
              </form>
            ) : (
              <></>
            )}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {visibility ? (
              <form onSubmit={refuseConge}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "30px",
                      padding: "10px",
                      height: "150px",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="motife de refus"
                      fullWidth
                      multiline
                      rows={5}
                      value={motif}
                      onChange={(e) => setMotif(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                      padding: "10px",
                      height: "40px",
                      padding: "0px 200px 0px 200px",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      disabled={false}
                      style={{ backgroundColor: "#376b91" }}
                    >
                      Envoyer
                    </Button>
                  </Box>
                </Grid>
              </form>
            ) : (
              <></>
            )}
          </Box>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Congé valider avec succès!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DetailConge;

{
  /* 

        <div className="add-conge-info-mini-section">
          <table className="conge-detail-table" cellSpacing={0}>
            <thead>
              <tr>
                <td>Année</td>
                <td>Duree</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023</td>
                <td>12</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>07</td>
              </tr>
            </tbody>
          </table>
        </div>
 */
}
