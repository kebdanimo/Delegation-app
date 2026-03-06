import React, { useState, useEffect } from "react";

import Layout from "./Layout";
import Auth from "./Auth";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAccordionButton } from "react-bootstrap";

const Door = () => {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState("");

  const login = useSelector((state) => state.login.status);

  useEffect(() => {
    setUserToken(localStorage.getItem("token"));
  }, []);

  if (userToken) {
    return <Layout />;
  } else {
    return <Auth />;
  }
};

export default Door;



























// return <>{login ? <Layout /> : <Auth />}</>;
//  const Door = () => {
//   const [userToken, setUserToken] = useState("");
//   const login = useSelector((state) => state.login.status);

//   useEffect(() => {
//     const userToken = localStorage.getItem("token");
//     setUserToken(localStorage.getItem("token"));
//   }, []);

//   if (!userToken) {
//     return <>{login ? <Layout /> : <Auth />}</>;
//   } else {
//     return <Layout />;
//   }
// };
