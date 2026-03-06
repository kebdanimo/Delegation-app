import React, { useState, useEffect } from "react";
import Split from "react-split";
import { Link } from "react-router-dom";
import axios from "axios";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from "moment/moment";

const JestionCompt = () => {
  const [registred, setRegistred] = useState();
  const [unregistred, setUnregistred] = useState();

  const [registredrow, setRegistredrow] = useState();
  const [unregistredrow, setUnregistredrow] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/utilisateur/getallUnregistredUtilisateur")
      .then((response) => {
        setUnregistred(response.data.data.unregistredUtlisateur);
        // console.log(response.data.data.unregistredUtlisateur);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/utilisateur/getallUtilisateur")
      .then((response) => {
        setRegistred(response.data.data.user);
        // console.log(response.data.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (unregistred) {
      const tempU = unregistred.map((l, index) => ({
        id: index + 1,
        matricule: l.matricule,
        nomPrenom: l.prenom + " " + l.nom,
        dateDemmand: l.created_at,
        email: l.email,
        detail: l.matricule,
      }));

      setUnregistredrow(tempU);
    }
  }, [unregistred]);

  useEffect(() => {
    if (registred) {
      const tempR = registred.map((l, index) => ({
        id: index + 1,
        matricule: l.matricule,
        nomPrenom: l.prenom + " " + l.nom,
        fonction: l.fonction_libelle,
        affectation: l.affectation_libelle,
        detail: l.matricule,
      }));

      setRegistredrow(tempR);
    }
  }, [registred]);

  function renderLinkCell(params) {
    return <Link to={`DetailFonc/${params.value}/valid`}>Detail</Link>;
  }

  function UnrenderLinkCell(params) {
    return <Link to={`DetailFonc/${params.value}/unvalid`}>Detail</Link>;
  }

  const ReColumns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "matricule",
      headerName: "Matricule",
      width: 130,
    },
    {
      field: "nomPrenom",
      type: "string",
      headerName: "Nom / Prenom",
      width: 180,
    },
    {
      field: "fonction",
      type: "string",
      headerName: "Fonction",
      width: 200,
    },
    {
      field: "affectation",
      type: "string",
      headerName: "Affectation",
      width: 180,
    },
    {
      field: "detail",
      headerName: "detail",
      width: 100,
      renderCell: renderLinkCell,
    },
  ];

  const UnColumns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "matricule",
      headerName: "Matricule",
      width: 130,
    },
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
      field: "email",
      headerName: "Email",
      type: "string",
      width: 250,
    },
    {
      field: "detail",
      headerName: "detail",
      width: 60,
      renderCell: UnrenderLinkCell,
    },
  ];

  if (registredrow && unregistredrow) {
    return (
      <div className="app-atest-container">
        <Split
          direction="vertical"
          style={{ height: "100%", width: "100%", zIndex: "10" }}
        >
          <div className="new-atest">
            <div className="new-atest-title">
              <h2>Demande en instances</h2>
            </div>
            <div className="table-container">
              <DataGrid
                rows={unregistredrow}
                columns={UnColumns}
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
                rows={registredrow}
                columns={ReColumns}
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
        <Split direction="vertical" style={{ height: "100%", width: "100%" }}>
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

export default JestionCompt;
