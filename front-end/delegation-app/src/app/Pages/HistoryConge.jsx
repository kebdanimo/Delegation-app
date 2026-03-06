import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../Styles/historyConge.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";

const HistoryConge = () => {
  const [congeMal, setCongeMal] = useState([]);
  const [tcongeMal, setTcongeMal] = useState([]);

  const [congeMat, setCongeMat] = useState([]);
  const [tcongeMat, setTcongeMat] = useState([]);

  const [congePat, setCongePat] = useState([]);
  const [tcongePat, setTcongePat] = useState([]);

  const [congeExc, setCongeExc] = useState([]);
  const [tcongeExc, setTcongeExc] = useState([]);

  const [congeAdm, setCongeAdm] = useState([]);
  const [tcongeAdm, setTcongeAdm] = useState([]);

  const [adrows, setAdrows] = useState();
  const [malrows, setMalrows] = useState([]);
  const [excrows, setExcrows] = useState([]);
  const [patrows, setPatrows] = useState([]);

  const id = localStorage.getItem("id");
  const year = new Date().getFullYear();

  //***fetching data ****/

  // maladie
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/all_conge_one_user", {
        target_matricule: id,
        type: 2,
      })
      .then((response) => {
        console.log(response.data.data.conges);
        setCongeMal(response.data.data.conges);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // maternite
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/all_conge_one_user", {
        target_matricule: id,
        type: 3,
      })
      .then((response) => {
        // console.log(response.data.data.conges);
        setCongeMat(response.data.data.conges);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // paternite
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/all_conge_one_user", {
        target_matricule: id,
        type: 4,
      })
      .then((response) => {
        // console.log(response.data.data.conges);
        setCongePat(response.data.data.conges);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Exceptionel
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/all_conge_one_user", {
        target_matricule: id,
        type: 5,
      })
      .then((response) => {
        // console.log(response.data.data.conges);
        setCongeExc(response.data.data.conges);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  //***** tables *****/

  // tanble maladie
  useEffect(() => {
    if (congeMal.length > 0) {
      const newlist = congeMal.reduce((acc, { date_debut, duree_global }) => {
        const year = new Date(date_debut).getFullYear();
        acc[year] = (acc[year] || 0) + duree_global;
        return acc;
      }, {});

      const latestYear = new Date().getFullYear();
      const reversedResult = {};

      for (
        let year = latestYear;
        year >= Math.min(...Object.keys(newlist));
        year--
      ) {
        reversedResult[year] = newlist[year] || 0;
      }
      const reversedList = Object.entries(reversedResult).reverse();
      // reversedList.map(l => console.log(l))
      setTcongeMal(reversedList);
    }
  }, [congeMal]);

  // tanble materniter
  useEffect(() => {
    if (congeMat.length > 0) {
      const newlist = congeMat.reduce((acc, { date_debut, duree_global }) => {
        const year = new Date(date_debut).getFullYear();
        acc[year] = (acc[year] || 0) + duree_global;
        return acc;
      }, {});
      const latestYear = new Date().getFullYear();
      const reversedResult = {};

      for (
        let year = latestYear;
        year >= Math.min(...Object.keys(newlist));
        year--
      ) {
        reversedResult[year] = newlist[year] || 0;
      }
      const reversedList = Object.entries(reversedResult).reverse();
      // reversedList.map(l => console.log(l))
      setTcongeMat(reversedList);
    }
  }, [congeMat]);

  // tanble paterniter
  useEffect(() => {
    if (congePat.length > 0) {
      const newlist = congePat.reduce((acc, { date_debut, duree_global }) => {
        const year = new Date(date_debut).getFullYear();
        acc[year] = (acc[year] || 0) + duree_global;
        return acc;
      }, {});

      const latestYear = new Date().getFullYear();
      const reversedResult = {};

      for (
        let year = latestYear;
        year >= Math.min(...Object.keys(newlist));
        year--
      ) {
        reversedResult[year] = newlist[year] || 0;
      }
      const reversedList = Object.entries(reversedResult).reverse();
      setTcongePat(reversedList);
    }
  }, [congePat]);

  // tanble materniter
  useEffect(() => {
    if (congeExc.length > 0) {
      const newlist = congeExc.reduce((acc, { date_debut, duree_global }) => {
        const year = new Date(date_debut).getFullYear();
        acc[year] = (acc[year] || 0) + duree_global;
        return acc;
      }, {});
      const latestYear = new Date().getFullYear();
      const reversedResult = {};

      for (
        let year = latestYear;
        year >= Math.min(...Object.keys(newlist));
        year--
      ) {
        reversedResult[year] = newlist[year] || 0;
      }
      const reversedList = Object.entries(reversedResult).reverse();
      // reversedList.map(l => console.log(l))
      setTcongeExc(reversedList);
    }
  }, [congeExc]);

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

  // test *******

  const columns = [
    { field: "id", headerName: "Année", width: 200 },
    {
      field: "duree",
      headerName: "Consomation",
      width: 200,
      editable: true,
    },
  ];

  // ******** Row admenistratif *************
  useEffect(() => {
    const kk = tcongeAdm.map((l) => ({ id: l.titre, duree: l.duree }));
    setAdrows(kk);
  }, [tcongeAdm]);

  // ******** Row admenistratif *************
  useEffect(() => {
    const gg = tcongeMal.map((l) => ({ id: l[0], duree: l[1] }));
    setMalrows(gg);
  }, [tcongeMal]);

  // ******** Row Exceptionnel *************
  useEffect(() => {
    const gg = tcongeExc.map((l) => ({ id: l[0], duree: l[1] }));
    setExcrows(gg);
  }, [tcongeExc]);

  // ******** Row Paternite *************
  useEffect(() => {
    const gg = tcongePat.map((l) => ({ id: l[0], duree: l[1] }));
    setPatrows(gg);
  }, [tcongePat]);

  const restmal = () => {
    // Calculate the current date and the date 365 days ago
    const today = new Date();
    const oneYearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);

    // Filter the data to only include entries in the last 365 days
    const filteredData = congeMal.filter(
      (item) => new Date(item.date_debut) >= oneYearAgo
    );

    // Calculate the total number of days taken in the last 365 days
    const totalDays = filteredData.reduce(
      (acc, curr) => acc + curr.duree_global,
      0
    );

    console.log(totalDays);
    return totalDays;
  };

  restmal();

  return (
    <div className="history-conge">
      <div className="add-event-title">
        <h1>Congés</h1>
      </div>
      <Link to="AjouterConge">
        <h3 className="add-cong">+ Demander congé</h3>
      </Link>

      <div
        style={{
          width: "100%",
          height: "550px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                height: "265px",
                boxShadow: "14px 12px 15px rgba(0, 0, 0, 0.10)",
                borderRadius: "5px",
                backgroundColor: "rgb(255, 255, 255)",
              }}
            >
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 10px 0px 10px",
                }}
              >
                <h3 style={{ borderBottom: "5px solid rgb(69, 146, 201)" }}>
                  Administartif
                </h3>
                <div>
                  Reste :
                  <Chip
                    style={{ margin: "0px 5px 0px 5px" }}
                    label={
                      (adrows && adrows.length > 0
                        ? adrows[adrows.length - 1].id
                        : " ... ") +
                      " : " +
                      (adrows && adrows.length > 0
                        ? 22 - adrows[adrows.length - 1].duree
                        : " ... ") +
                      "j"
                    }
                    variant="filed"
                    size="small"
                    color="warning"
                  />
                  <Chip
                    label={
                      (adrows && adrows.length > 0
                        ? adrows[adrows.length - 2].id
                        : " ... ") +
                      " : " +
                      (adrows && adrows.length > 0
                        ? 22 - adrows[adrows.length - 2].duree
                        : " ... ") +
                      "j"
                    }
                    variant="outlined"
                    size="small"
                    color="warning"
                  />
                </div>
              </div>

              <div style={{ height: "65%" }}>
                <DataGrid
                  rows={adrows ? adrows : []}
                  columns={columns}
                  hideFooter={true}
                  rowHeight={38}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                    sorting: {
                      sortModel: [{ field: "id", sort: "desc" }],
                    },
                  }}
                  pageSizeOptions={[5]}
                />
              </div>
              <div
                style={{
                  height: "15%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "0px 10px 0px 10px",
                }}
              >
                <Link to="DetailCongeUser/1">Detail...</Link>
              </div>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                height: "265px",
                boxShadow: "14px 12px 15px rgba(0, 0, 0, 0.10)",
                borderRadius: "5px",
                backgroundColor: "rgb(255, 255, 255)",
              }}
            >
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 10px 0px 10px",
                }}
              >
                <h3 style={{ borderBottom: "5px solid rgb(69, 146, 201)" }}>
                  Maladie
                </h3>
                <div>
                  Consommé dans 365j:
                  <Chip
                    style={{ margin: "0px 5px 0px 5px" }}
                    label={restmal() + "j"}
                    variant="filed"
                    size="small"
                    color="warning"
                  />
                </div>
              </div>

              <div style={{ height: "65%" }}>
                <DataGrid
                  rows={malrows}
                  columns={columns}
                  hideFooter={true}
                  rowHeight={38}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                />
              </div>
              <div
                style={{
                  height: "15%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "0px 10px 0px 10px",
                }}
              >
                <Link to="DetailCongeUser/2">Detail...</Link>
              </div>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                height: "265px",
                boxShadow: "14px 12px 15px rgba(0, 0, 0, 0.10)",
                borderRadius: "5px",
                backgroundColor: "rgb(255, 255, 255)",
              }}
            >
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 10px 0px 10px",
                }}
              >
                <h3 style={{ borderBottom: "5px solid rgb(69, 146, 201)" }}>
                  Exceptionnel
                </h3>
                <div>
                  Reste :
                  <Chip
                    style={{ margin: "0px 5px 0px 5px" }}
                    label={
                      new Date().getFullYear() +
                      " : " +
                      (excrows.length > 0
                        ? 10 - excrows.find((t) => t.id == year).duree
                        : " ... ") +
                      "j"
                    }
                    variant="filed"
                    size="small"
                    color="warning"
                  />
                </div>
              </div>

              <div style={{ height: "65%" }}>
                <DataGrid
                  rows={excrows}
                  columns={columns}
                  hideFooter={true}
                  rowHeight={38}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                />
              </div>
              <div
                style={{
                  height: "15%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "0px 10px 0px 10px",
                }}
              >
                <Link to="DetailCongeUser/5">Detail...</Link>
              </div>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                height: "265px",
                boxShadow: "14px 12px 15px rgba(0, 0, 0, 0.10)",
                borderRadius: "5px",
                backgroundColor: "rgb(255, 255, 255)",
              }}
            >
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 10px 0px 10px",
                }}
              >
                <h3 style={{ borderBottom: "5px solid rgb(69, 146, 201)" }}>
                  Maternité / Paternité
                </h3>
                {/* <div>
                  Reste :
                  <Chip
                    style={{ margin: "0px 5px 0px 5px" }}
                    label={
                      new Date().getFullYear() +
                      " : " +
                      (excrows.length > 0
                        ? 10 - excrows.find((t) => t.id == year).duree
                        : " ... ") +
                      "j"
                    }
                    variant="filed"
                    size="small"
                    color="warning"
                  />
                </div> */}
              </div>

              <div style={{ height: "65%" }}>
                <DataGrid
                  rows={patrows}
                  columns={columns}
                  hideFooter={true}
                  rowHeight={38}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                />
              </div>
              <div
                style={{
                  height: "15%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "0px 10px 0px 10px",
                }}
              >
                <Link to="DetailCongeUser/4">Detail...</Link>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HistoryConge;

// const data = [
//   { date: "2022-01-01", amount: 10 },
//   { date: "2022-02-15", amount: 15 },
//   { date: "2022-03-25", amount: 5 },
//   { date: "2023-01-10", amount: 20 },
//   { date: "2023-02-22", amount: 30 },
// ];

// const result = data.reduce((acc, { date, amount }) => {
//   const year = new Date(date).getFullYear();
//   acc[year] = (acc[year] || 0) + amount;
//   return acc;
// }, {});
