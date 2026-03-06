import React from 'react'
import { Routes, Route, Link, Outlet} from 'react-router-dom';

//pages
import Home from '../pages/Home';
import MotDeDelegation from '../pages/MotDeDelegation'
import Seminaire from '../pages/Seminaire'
import Vaccination from "../pages/Vaccination";
import Services from '../pages/Services'
import Annonces from "../pages/Annonces";
import AppelDoffres from "../pages/AppelDoffres";
import Caravane from "../pages/Caravane";
import Organigramme from "../pages/Organigramme";
import Contact from "../pages/Contact";
import Article from "../pages/Article";
import Statistics from "../pages/Statistics";



const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MotDeDelegation" element={<MotDeDelegation />} />
        <Route path="/Seminaire" element={<Seminaire />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Vaccination" element={<Vaccination />} />
        <Route path="/Annonces" element={<Annonces />} />
        <Route path="/AppelDoffres" element={<AppelDoffres />} />
        <Route path="/Caravane" element={<Caravane />} />
        <Route path="/Organigramme" element={<Organigramme />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Statistics" element={<Statistics />} />
      </Routes>
    </>
  );
};

export default routes;
