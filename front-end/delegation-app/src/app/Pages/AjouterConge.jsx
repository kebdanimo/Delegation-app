import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import axios from "axios";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import "../Styles/ajouterConge.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AjouterConge = () => {
  const infos = useSelector((state) => state.infos);

  const [open, setOpen] = useState(false);

  const [type, setType] = useState([]);
  const [errors, setErrors] = useState({});

  const [congeId, setCongeId] = useState();

  const [congeAdm, setCongeAdm] = useState([]);
  const [tcongeAdm, setTcongeAdm] = useState([]);

  // controll the display of the detail form
  const [visibility, setVisibility] = useState(false); // false default

  // form detail
  const [titre, setTitre] = useState();
  const [duree, setDuree] = useState();

  // store input
  const [currDate, setCurrDate] = useState("");
  const [begDate, setBegDate] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [dure, setDure] = useState("");
  const [typeConge, setTypeConge] = useState("");

  const [listDet, setListDet] = useState([]);

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const id = localStorage.getItem("id");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/typeConge").then((Response) => {
      setType(Response.data.data.conge);
    });
  }, []);

  const add = async (e) => {
    e.preventDefault();
    try {
      const conge = await axios.post("http://127.0.0.1:8000/api/store_conge", {
        // date_debut: begDate.format("DD-MM-YYYY"),
        date_debut: begDate.format("YYYY-MM-DD"),
        date_fin: endDate,
        duree_global: dure,
        Matricule: id,
        type_conge_id: typeConge,
      });
      console.log(conge.data.data);
      // console.log(conge.data.data.conge.conge_id);
      setCongeId(conge.data.data.conge.conge_id);
      setVisibility(true);
      setOpen(true);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.errors);
    }
  };

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  }, [visibility]);

  const add_detail = async (e) => {
    e.preventDefault();
    try {
      const detail_conge = await axios.post(
        "http://127.0.0.1:8000/api/store_detail_conge",
        {
          conge_id: congeId,
          titre: titre,
          duree: duree,
        }
      );
      setTitre("");
      setDure("");
      // console.log(detail_conge.data.data.conge);
      setListDet([...listDet, detail_conge.data.data.conge]);
    } catch (error) {
      // console.log(error.response.data.errors);
      setErrors(error.response);
      console.log("bad");
    }
  };
  // console.log(listDet);
  useEffect(() => {
    const today = new Date().toISOString().substr(0, 10);
    setCurrDate(today);
  });
  const holidays = [
    "2023-01-01", // New Year's Day
    "2023-01-11", // Anniversary of the Manifesto of Independence
    "2023-05-01", // Labour Day
    "2023-05-14", // Eid al-Fitr (End of Ramadan)
    "2023-05-15", // Eid al-Fitr (End of Ramadan)
    "2023-05-16", // Eid al-Fitr (End of Ramadan)
    "2023-07-30", // Throne Day
    "2023-08-14", // Allegiance Day
    "2023-08-20", // Youth Day
    "2023-08-21", // King Mohammed VI's Birthday
    "2023-08-31", // Hijri New Year
    "2023-11-06", // Green March Day
    "2023-11-18", // Independence Day
    "2023-12-12", // National Day
    "2023-12-25", // Christmas Day
  ];
  function calculateEndDate(startDate, daysToAdd) {
    let currentDate = moment(startDate); // Convert startDate to a moment object
    let daysAdded = 0;

    while (daysAdded < daysToAdd) {
      // Check if the current date is a weekend or a holiday
      if (
        currentDate.day() === 0 ||
        currentDate.day() === 6 ||
        holidays.includes(currentDate.format("YYYY-MM-DD"))
      ) {
        currentDate.add(1, "days"); // Skip weekend or holiday
        continue;
      }

      currentDate.add(1, "days"); // Add one day to the current date
      daysAdded++;
    }
    setEndDate(currentDate.format("YYYY-MM-DD"));
    return currentDate.format("YYYY-MM-DD"); // Convert moment object back to string format
  }
  const getDate = (dur) => {
    setDure(dur);
    calculateEndDate(begDate, dur);
  };

  // Admenistratif
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/detail_conge", {
        target_matricule: id,
      })
      .then((response) => {
        // console.log(response.data.data.conges);
        setCongeAdm(response.data.data.conges);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // tanble Admenistratif
  useEffect(() => {
    if (congeAdm.length > 0) {
      const consolidatedConges = congeAdm.reduce((acc, cur) => {
        const existingConge = acc.find((c) => c.titre === cur.titre);
        if (existingConge) {
          existingConge.duree += cur.duree;
        } else {
          acc.push(cur);
        }
        return acc;
      }, []);
      setTcongeAdm(consolidatedConges);
    }
  }, [congeAdm]);

  const calcRest = () => {
    const date = moment().format("YYYY");
    const currY = tcongeAdm.find((t) => t.titre == date);
    if (currY) {
      const rest = 22 - currY.duree;
      return rest;
    }
  };

  return (
    <div className="add-conge-container" ref={myRef}>
      <div className="add-conge-title">
        <h1>Demande de conge</h1>
      </div>
      {infos[0] ? (
        <div className="add-conge-info">
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
        <div className="add-conge-info">
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
      <h3 className="mini-title">Conge : </h3>
      {/* <form action="" className="add-conge-form">
        <div className="add-conge-form-section">
          <div className="field">
            <label htmlFor="">Type de Conge:</label>

            <select onClick={(e) => setTypeConge(e.target.value)}>
              {type.map((t, index) => {
                return (
                  <option value={t.type_conge_id} key={index}>
                    {t.type}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="field">
            <label> Date de debut de congé :</label>
            <input type="date" onChange={(e) => setBegDate(e.target.value)} />
          </div>

          <div className="field">
            <label> Date de reprise :</label>
            <input type="date" value={endDate} disabled />
          </div>
          <div className="field">
            <button onClick={add}>Envoyer</button>
          </div>
        </div>

        <div className="add-conge-form-section">
          {" "}
          <div className="field">
            <label> Date de la demande :</label>

            <input type="date" value={currDate} disabled />
          </div>
          <div className="field">
            <label> Durée :</label>
            <input
              type="number"
              disabled={begDate ? false : true}
              onChange={(e) => getDate(e.target.value)}
            />
          </div>
        </div>
      </form> */}
      <form
        style={{ width: "100%", padding: "20px", margin: "30px 0px 20px 0px" }}
        onSubmit={add}
      >
        <Grid container spacing={10} rowSpacing={4}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Type de conge
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type de conge"
                value={typeConge}
                onChange={(e) => setTypeConge(e.target.value)}
              >
                {type.map((t, index) => {
                  return (
                    <MenuItem value={t.type_conge_id} key={index}>
                      {t.type}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <DatePicker
              label="Date de la demande"
              value={dayjs()}
              readOnly
              size="small"
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={6}>
            <DatePicker
              label="Date de debut de conge"
              fullWidth
              size="small"
              slotProps={{ textField: { fullWidth: true } }}
              onChange={(data) => setBegDate(data)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Durée de conge"
              type="number"
              fullWidth
              variant="outlined"
              disabled={begDate ? false : true}
              onChange={(e) => getDate(e.target.value)}
              value={dure}
              helperText={
                tcongeAdm && typeConge == 1
                  ? " Il vous rest " + calcRest() + "jours"
                  : ""
              }
              error={dure > calcRest() ? true : false}
              // onChange={(e) => setTire(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              label="Date de reprise"
              fullWidth
              size="small"
              readOnly
              value={endDate ? dayjs(endDate) : null}
              slotProps={{ textField: { fullWidth: true } }}
              // onChange={(data) => setdate(data)}
            />
          </Grid>
          <Grid item xs={6}></Grid>
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
      {visibility && typeConge == 1 ? (
        <>
          <h3 className="mini-title">Detail conge : </h3>

          {/* <form action="" className="add-detail-conge">
            <div className="add-detail-conge-section">
              <div className="field">
                <label>Année</label>
                <input
                  type="number"
                  onChange={(e) => setTitre(e.target.value)}
                />
              </div>
              <div className="field">
                <button type="submit" onClick={add_detail}>
                  Ajouter annee
                </button>
              </div>
            </div>
            <div className="add-detail-conge-section">
              <div className="field">
                <label>Dure</label>
                <input
                  type="number"
                  onChange={(e) => setDuree(e.target.value)}
                />
              </div>
            </div>
          </form> */}

          <form
            style={{
              width: "100%",
              padding: "20px",
              margin: "30px 0px 20px 0px",
            }}
            onSubmit={add_detail}
          >
            <Grid container spacing={10} rowSpacing={4}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Année"
                  type="number"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setTitre(e.target.value)}

                  // value={titre}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Nombre de jours"
                  type="number"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setDuree(e.target.value)}

                  // value={titre}
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
          {listDet.length > 0 ? (
            <table className="conge-detail-table" cellSpacing={0}>
              <thead>
                <tr>
                  <td>Année</td>
                  <td>Duree</td>
                </tr>
              </thead>
              <tbody>
                {listDet.map((l) => {
                  return (
                    <tr key={l.titre}>
                      <td>{l.titre}</td>
                      <td>{l.duree}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Votre demade a été envoyer avec succès!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AjouterConge;

// import moment from "moment";

// const holidays = ["2023-04-01", "2023-04-02", "2023-04-03"]; // Array of holidays to exclude

// function calculateEndDate(startDate, daysToAdd) {
//   let currentDate = moment(startDate); // Convert startDate to a moment object
//   let daysAdded = 0;

//   while (daysAdded < daysToAdd) {
//     // Check if the current date is a weekend or a holiday
//     if (
//       currentDate.day() === 0 ||
//       currentDate.day() === 6 ||
//       holidays.includes(currentDate.format("YYYY-MM-DD"))
//     ) {
//       currentDate.add(1, "days"); // Skip weekend or holiday
//       continue;
//     }

//     currentDate.add(1, "days"); // Add one day to the current date
//     daysAdded++;
//   }

//   return currentDate.format("YYYY-MM-DD"); // Convert moment object back to string format
// }
