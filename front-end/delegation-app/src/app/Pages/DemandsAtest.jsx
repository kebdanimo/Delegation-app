import React, { useEffect, useState } from "react";
import Split from "react-split";

import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from "moment/moment";
import axios from "axios";

const DemandsAtest = () => {
  const [atests, setAtests] = useState();

  const [atten, setAtten] = useState();
  const [repon, setRepon] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/atestation")
      .then((response) => {
        setAtests(response.data.data.atestation);
        // console.log(response.data.data.atestation);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (atests) {
      const att = atests
        .filter((atest) => atest.status == 0)
        .map((atest) => ({
          id: atest.atest_id,
          nomPrenom: atest.prenom + " " + atest.nom,
          dateDemmand: atest.date_demande,
          type: atest.type,
          detail: atest.atest_id,
        }));

      const rep = atests
        .filter((atest) => atest.status == 1)
        .map((atest) => ({
          id: atest.atest_id,
          nomPrenom: atest.prenom + " " + atest.nom,
          dateDemmand: atest.date_demande,
          dateRepond: atest.date,
          type: atest.type,
          detail: atest.atest_id,
        }));

      setAtten(att);
      setRepon(rep);
    }
  }, [atests]);

  function renderLinkCell(params) {
    return <Link to={`DetailAtestAdmin/${params.value}`}>Detail</Link>;
  }

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "nomPrenom",
      type: "string",
      headerName: "Nom / Prenom",
      width: 230,
    },
    {
      field: "dateDemmand",
      type: "string",
      headerName: "Date demmand",
      width: 230,
      editable: false,
      renderCell: (params) => {
        return moment(params.row.dateDemmand).format("YYYY-MM-DD hh:mm");
      },
    },
    {
      field: "type",
      headerName: "type",
      type: "string",
      width: 200,
    },
    {
      field: "detail",
      headerName: "detail",
      width: 130,
      renderCell: renderLinkCell,
    },
  ];

  const columnsRep = [
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
      field: "dateRepond",
      type: "string",
      headerName: "Date de repondre",
      width: 180,
      editable: false,
      renderCell: (params) => {
        return moment(params.row.dateDemmand).format("YYYY-MM-DD hh:mm");
      },
    },
    {
      field: "type",
      headerName: "type",
      type: "string",
      width: 130,
    },
    {
      field: "detail",
      headerName: "detail",
      width: 130,
      renderCell: renderLinkCell,
    },
  ];

  if (atten && repon) {
    return (
      <div className="app-atest-container">
        <Split
          direction="vertical"
          gutterSize={10}
          style={{ height: "100%", width: "100%", zIndex: "10" }}
        >
          <div className="new-atest">
            <div className="new-atest-title">
              <h2>Demande en instances</h2>
            </div>
            <div className="table-container">
              <DataGrid
                rows={atten}
                columns={columns}
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
          </div>

          <div className="old-atest">
            <div className="new-atest-title">
              <h2>Hystorique des demande </h2>
            </div>
            <div className="table-container">
              <DataGrid
                rows={repon}
                columns={columnsRep}
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
          </div>
        </Split>
      </div>
    );
  } else {
    return (
      <div className="app-atest-container">
        <Split
          direction="vertical"
          gutterSize={10}
          style={{ height: "100%", width: "100%" }}
        >
          <div className="new-atest">
            <div className="new-atest-title">
              <h2>Demande en instances</h2>
            </div>
            <div className="table-container"></div>
          </div>

          <div className="old-atest">
            <div className="new-atest-title">
              <h2>Hystorique des demande </h2>
            </div>
            <div className="table-container"></div>
          </div>
        </Split>
      </div>
    );
  }
};

export default DemandsAtest;
