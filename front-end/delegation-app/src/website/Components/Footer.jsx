import React from "react";

// icons
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">


        <div className="contact">
          <h1>Contact us</h1>
          <p>Email : test.test@gmail.com</p>
          <p>Tele : 06 666 666</p>
          <p>Taourirt, hay kadim</p>
          <p>Tele : 06 666 666</p>
          <div className="socials">
            <AiFillFacebook className="social"/>
            <AiFillTwitterSquare className="social"/>
            <AiFillInstagram className="social"/>
            <AiOutlineWhatsApp className="social"/>
            <AiFillYoutube className="social"/>
          </div>
        </div>

        <div className="contact">
          <h1>Mape de site</h1>
          
          <p>Delegation</p>
          <p>Evenement</p>
          <p>Annonce</p>
          <p>Contact</p>

        </div>

        <div className="map">
          <h1>Map</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2160.5395369304506!2d-6.857232173439799!3d33.991603180011026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76ceccc81e8ff%3A0xc71503cbeb892890!2sMinist%C3%A8re%20charg%C3%A9%20des%20Relations%20avec%20le%20Parlement!5e0!3m2!1sen!2sma!4v1677110207197!5m2!1sen!2sma"
            width="500"
            height="200"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;


