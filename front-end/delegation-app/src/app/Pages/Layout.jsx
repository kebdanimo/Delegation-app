import React, {useState} from 'react'
import SideBar from "../Components/SideBar";
import Routes from '../Components/Routes';

import { useDispatch } from 'react-redux';
import { storeInfo } from '../../redux/userInfoSlice';

import axios from 'axios';


const Layout = () => {

  const id = localStorage.getItem("id");
  
  const dispatch = useDispatch()

    const getUtlisateurInfo = async () => {
      try {
        const infos = await axios.post(
          "http://127.0.0.1:8000/api/utilisateur/getInfo",
          {
            target_matricule: id,
          }
        );
        // console.log(infos.data.data.user);
        dispatch(storeInfo(infos.data.data.user));
        
      } catch (error) {
        console.log(error);
      }

    };

    getUtlisateurInfo()


  return (
    <div className="applic-container">
      <div className="sideBar">
        <SideBar></SideBar>
      </div>

      <div className="main-content">
          <Routes></Routes>
      </div>
    </div>
  );
}

export default Layout
