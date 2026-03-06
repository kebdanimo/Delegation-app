import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// logo
import logo1 from "../../images/logo-armoires.png";
import logo2 from "../../images/logo-ministere-sante1.png";

// icons
import { AiOutlineSearch } from "react-icons/ai";

// import redux
import { login, logout } from "../../redux/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const v = localStorage.getItem("token");

  const logout = () => {
    console.log("log out ");
    localStorage.clear();
    // dispatch(logout())
  };

  return (
    <>
      <nav>
        <div className="logo logo1">
          <img src={logo1} alt="logo" />
        </div>

        <div className="nav-element">
          <div className="nav-up">
            {/* <div className="searchBar">
              <AiOutlineSearch className="search" />
              <input type="text" placeholder="recherche" />
            </div> */}
          </div>
          <div className="login-nav" style={{ marginTop: "10px" }}>
            <ul>
              <li>
                <Link to="/">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <ArrowBackIosIcon />
                    <h3 style={{ color: "black" }}>Retourner au site web</h3>
                  </div>
                </Link>
              </li>

              {/* {v ? (
                <li>
                  <Link to="/" onClick={logout}>
                    <h3> Logout </h3>
                  </Link>
                </li>
              ) : (
                <></>
              )} */}
            </ul>
          </div>
        </div>

        <div className="logo logo2">
          <img src={logo2} alt="" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
