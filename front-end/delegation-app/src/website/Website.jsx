import React from "react";


import NavBar from "./Components/NavBar";
import RoutesW from "./Components/Routes";
import Footer from "./Components/Footer";


const Website = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <RoutesW />
      </div>

      <Footer />
    </>
  );
};

export default Website;
