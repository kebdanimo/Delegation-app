import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import PendingIcon from "@mui/icons-material/Pending";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

import { Link } from "react-router-dom";
import axios from "axios";

import "../Styles/historyAtest.css";

import moment from "moment/moment";

const HistoryAtest = () => {
  const [atests, setAtests] = useState();
  const [list, setList] = useState();

  const id = localStorage.getItem("id");

  const getUtlisateurAtest = async () => {
    try {
      const atestations = await axios.post(
        "http://127.0.0.1:8000/api/atestation/getAtest",
        {
          matricule: id,
        }
      );
      console.log(atestations.data.data.spec_Atest);
      setAtests(atestations.data.data.spec_Atest);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUtlisateurAtest();
  }, []);

  useEffect(() => {
    if (atests) {
      const newList = atests.map((atest) => ({
        id: atest.atest_id,
        date: atest.date,
        dateDemmand: atest.date_demande,
        status: atest.status ? "Reçus" : "En attendant",
        type: atest.type,
        detail: atest.atest_id,
      }));
      setList(newList);
    }
  }, [atests]);

  function renderLinkCell(params) {
    return <Link to={`DetailAtest/${params.value}`}>Detail</Link>;
  }

  function chipParams(params) {
    if (params == "En attendant") {
      return (
        <Chip
          label={params}
          color="secondary"
          variant="outlined"
          size="small"
          icon={<AccessTimeIcon />}
        />
      );
    } else if (params == "Reçus") {
      return (
        <Chip
          label={params}
          color="success"
          variant="outlined"
          icon={<MarkAsUnreadIcon />}
          size="small"
        />
      );
    }
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "dateDemmand",
      type: "string",
      headerName: "Date demmand",
      width: 200,
      editable: false,
      renderCell: (params) => {
        return moment(params.row.dateDemmand).format("YYYY-MM-DD hh:mm");
      },
    },
    {
      field: "date",
      type: "string",
      headerName: "date reponse",
      width: 200,
      editable: false,
      renderCell: (params) => {
        return moment(params.row.date).format("YYYY-MM-DD hh:mm");
      },
    },
    {
      field: "type",
      headerName: "type",
      type: "string",
      width: 130,
    },
    {
      field: "status",
      headerName: "status",
      width: 180,
      renderCell: (params) => chipParams(params.value),
    },
    {
      field: "detail",
      headerName: "detail",
      width: 130,
      renderCell: renderLinkCell,
    },
  ];

  if (list) {
    return (
      <div className="app-atest-container">
        <div className="add-event-title">
          <h1>Attestation</h1>
        </div>
        <div className="demand-atest">
          <Link to="AjouterAtest">
            <h3> + Demand attestation</h3>
          </Link>
        </div>

        <div className="new-atest-p">
          <div className="new-atest-title">
            <h2>Hystorique des Demandes</h2>
          </div>
          <div className="table-container">
            <div
              style={{
                height: 500,
                width: "100%",
              }}
            >
              <DataGrid
                rows={list}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                isableRowSelectionOnClick
                hideFooter={false}
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
        </div>
      </div>
    );
  }
};

export default HistoryAtest;
