import React from "react";
import { Routes, Route } from "react-router-dom";

import Info from "../Pages/Info";
import AjouterAtest from "../Pages/AjouterAtest";
import AjouterConge from "../Pages/AjouterConge";
import DemandsAtest from "../Pages/DemandsAtest";
import DemandeConge from "../Pages/DemandsConge";
import Evenement from "../Pages/Evenement";
import HistoryAtest from "../Pages/HistoryAtest";
import HistoryConge from "../Pages/HistoryConge";
import JestionCompt from "../Pages/JestionCompt";
import DetailAtest from "../Pages/DetailAtest";
import ImportAtest from "../Pages/ImportAtest";
import DetailConge from "../Pages/DetailConge";
import ValiderConge from "../Pages/ValiderConge";
import DetailFonc from "../Pages/DetailFonc";
import ValiderCompt from "../Pages/ValiderCompt";
import AjouterArticle from "../Pages/AjouterArticle";
import DetailAtestAdmin from "../Pages/DetailAtestAdmin";
import DetailCongeUser from "../Pages/DetailCongeUser";
import ExtraDetailCongeUser from "../Pages/ExtraDetailCongeUser";
import axios from "axios";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/info" element={<Info />} />

        <Route path="/Evenement" element={<Evenement />} />

        <Route path="/HistoryAtest" element={<HistoryAtest />} />
        <Route path="HistoryAtest/AjouterAtest" element={<AjouterAtest />} />
        <Route path="HistoryAtest/DetailAtest/:id" element={<DetailAtest />} />

        <Route path="/HistoryConge" element={<HistoryConge />} />
        <Route path="HistoryConge/AjouterConge" element={<AjouterConge />} />
        <Route
          path="HistoryConge/DetailCongeUser/:type"
          element={<DetailCongeUser />}
        />
        <Route
          path="HistoryConge/DetailCongeUser/:type/ExtraDetailCongeUser/:id"
          element={<ExtraDetailCongeUser />}
        />

        {/* --------------------------------- admenistratife -------------------------------- */}

        <Route path="/DemandsAtest" element={<DemandsAtest />} />
        <Route
          path="DemandsAtest/DetailAtestAdmin/:id"
          element={<DetailAtestAdmin />}
        />

        <Route path="/JestionCompt" element={<JestionCompt />} />
        <Route
          path="JestionCompt/DetailFonc/:id/:state"
          element={<DetailFonc />}
        />
        <Route
          path="JestionCompt/DetailFonc/:id/:state/ValiderCompt/:id"
          element={<ValiderCompt />}
        />

        <Route path="/AjouterArticle" element={<AjouterArticle />} />

        <Route path="/DemandeConge" element={<DemandeConge />} />
        <Route path="DemandeConge/DetailConge/:id" element={<DetailConge />} />
      </Routes>
    </>
  );
};

export default routes;
