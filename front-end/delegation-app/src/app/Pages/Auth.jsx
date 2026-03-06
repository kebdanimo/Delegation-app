import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={ <Login></Login>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Auth;
