import React from 'react'

import "../../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image"></div>

      <form action="">
        <div className="form-container">
          <div className="input">
          <h3>Nom et Prenom</h3>
          <input type="text" />
        </div>
        <div className="input">
          <h3>Email</h3>
          <input type="email" />
        </div>
        <div className="input">
          <h3>Type</h3>
          <select name="" id="">
            <option value="">type1</option>
            <option value="">type2</option>
            <option value="">type3</option>
          </select>
        </div>
        <div className="input">
          <h3>message</h3>
          <textarea rows="10"></textarea>
        </div>
        <div className="input">
          <button>send</button>
        </div>
        </div>
        
        
      </form>
    </div>
  );
}

export default Contact
