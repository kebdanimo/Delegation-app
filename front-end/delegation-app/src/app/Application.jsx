import React from 'react'
import NavBar from '../app/Components/NavBar';
import Info from './Pages/Info.jsx'

import Layout from './Pages/Layout';
import Login from './Pages/Login';
import Door from './Pages/Door';

import './Styles/style.css'


const Application = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <Door />
      </div>
    </>
  );
}

export default Application
