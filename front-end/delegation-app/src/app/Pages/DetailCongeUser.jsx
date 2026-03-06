import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

const DetailCongeUser = () => {
  const [conge, setConge] = useState([]);
  const [rows, setRows] = useState([]);
  const id = localStorage.getItem("id");
  const { type } = useParams();

  const getUtlisateurconge = async () => {
    try {
      const conges = await axios.post(
        "http://127.0.0.1:8000/api/all_conge_one_user_detail",
        {
          target_matricule: id,
          type: type,
        }
      );
      console.log(conges.data.data.conges);
      setConge(conges.data.data.conges);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUtlisateurconge();
  }, []);

  function renderLinkCell(params) {
    return <Link to={`ExtraDetailCongeUser/${params.value}`}>Detail</Link>;
  }

  function chipParams(params) {
    if (params == "0") {
      return (
        <Chip
          label="En attendant"
          color="secondary"
          variant="outlined"
          size="small"
          icon={<AccessTimeIcon />}
        />
      );
    } else if (params == "1") {
      return (
        <Chip
          label="Accepter"
          color="success"
          variant="outlined"
          icon={<MarkAsUnreadIcon />}
          size="small"
        />
      );
    } else if (params == -1) {
      <Chip
        label="Refuser"
        color="error"
        variant="outlined"
        icon={<MarkAsUnreadIcon />}
        size="small"
      />;
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
      field: "dateDebut",
      type: "string",
      headerName: "date debut",
      width: 200,
      editable: false,
      renderCell: (params) => {
        return moment(params.row.date).format("YYYY-MM-DD hh:mm");
      },
    },
    {
      field: "dure",
      headerName: "duree",
      width: 130,
    },
    {
      field: "status",
      headerName: "status",
      width: 200,
      renderCell: (params) => chipParams(params.value),
    },
    {
      field: "detail",
      headerName: "detail",
      width: 130,
      renderCell: renderLinkCell,
    },
  ];

  useEffect(() => {
    if (conge.length > 0) {
      const list = conge.map((c) => ({
        id: c.conge_id,
        dateDemmand: c.created_at,
        dateDebut: c.date_debut,
        dure: c.duree_global + " jour",
        status: c.status,
        detail: c.conge_id,
      }));
      setRows(list);
    }
  }, [conge]);

  console.log(rows);

  return (
    <div className="app-atest-container">
      <div className="add-event-title">
        <h1>Congé</h1>
      </div>
      <div className="demand-atest">
        <Link to="../HistoryConge/AjouterConge">
          <h3> + Demand conge</h3>
        </Link>
      </div>

      <div className="new-atest-p">
        <div className="new-atest-title">
          <h2>Hystorique des Demandes</h2>
        </div>
        <div className="table-container">
          <div style={{ height: 500, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
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
};

export default DetailCongeUser;

{
  /* <Link to="../ExtraDetailCongeUser">detail</Link>; */
}
