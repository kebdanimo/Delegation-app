import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Split from "react-split";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from "moment/moment";
import axios from "axios";

const DemandsConge = () => {
  const [conge, setConge] = useState([]);
  const [history, setHistory] = useState([]);
  const [demande, setDemande] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/all_conge_all_users")
      .then((response) => {
        setConge(response.data.data.conges);
        // console.log(response.data.data.conges);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const dem = conge
      .filter((c) => c.status == 0)
      .map((c) => ({
        id: c.conge_id,
        nomPrenom: c.prenom + " " + c.nom,
        dateDemmand: c.creayed_at,
        duree: c.duree_global + " jours",
        type: c.type,
        detail: c.conge_id,
      }));

    setDemande(dem);
    const his = conge
      .filter((c) => c.status != 0)
      .map((c) => ({
        id: c.conge_id,
        nomPrenom: c.prenom + " " + c.nom,
        dateDemmand: c.creayed_at,
        status: c.status == -1 ? "Refuser" : "Accpeter",
        type: c.type,
        detail: c.conge_id,
      }));
    setHistory(his);
  }, [conge]);

  console.log(history);

  function renderLinkCell(params) {
    return <Link to={`DetailConge/${params.value}`}>Detail</Link>;
  }

  const demColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "nomPrenom",
      type: "string",
      headerName: "Nom / Prenom",
      width: 180,
    },
    {
      field: "dateDemmand",
      type: "string",
      headerName: "Date demmand",
      width: 180,
      editable: false,
      renderCell: (params) => {
        return moment(params.row.dateDemmand).format("YYYY-MM-DD hh:mm");
      },
    },
    {
      field: "duree",
      headerName: "Duree",
      width: 130,
    },
    {
      field: "type",
      headerName: "type",
      type: "string",
      width: 180,
    },
    {
      field: "detail",
      headerName: "detail",
      width: 130,
      renderCell: renderLinkCell,
    },
  ];

  const hisColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "nomPrenom",
      type: "string",
      headerName: "Nom / Prenom",
      width: 180,
    },
    {
      field: "dateDemmand",
      type: "string",
      headerName: "Date demmand",
      width: 180,
      editable: false,
      renderCell: (params) => {
        return moment(params.row.dateDemmand).format("YYYY-MM-DD hh:mm");
      },
    },
    {
      field: "status",
      type: "string",
      headerName: "Status",
      width: 130,
    },
    {
      field: "type",
      headerName: "type",
      type: "string",
      width: 180,
    },
    {
      field: "detail",
      headerName: "detail",
      width: 130,
      renderCell: renderLinkCell,
    },
  ];

  return (
    <div className="app-atest-container">
      <Split
        direction="vertical"
        gutterSize={10}
        style={{
          height: "100%",
          width: "100%",
          zIndex: "10",
        }}
      >
        <div className="new-atest">
          <div className="new-atest-title">
            <h2>Demande en instances</h2>
          </div>
          {demande && demColumns ? (
            <div className="table-container">
              <DataGrid
                rows={demande}
                columns={demColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                initialState={{
                  sorting: {
                    sortModel: [{ field: "dateDemmand", sort: "desc" }],
                  },
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                slots={{ toolbar: GridToolbar }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="old-atest">
          <div className="new-atest-title">
            <h2>Hystorique des demande </h2>
          </div>

          {hisColumns && history ? (
            <div className="table-container">
              <DataGrid
                style={{ height: "100%" }}
                rows={history}
                columns={hisColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                initialState={{
                  sorting: {
                    sortModel: [{ field: "dateDemmand", sort: "desc" }],
                  },
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                slots={{ toolbar: GridToolbar }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </Split>
    </div>
  );
};

export default DemandsConge;

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
