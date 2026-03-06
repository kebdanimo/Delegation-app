import React from "react";

const ImportAtest = () => {
  return (
    <div className="add-atest-container">
      <div className="add-atest-title m-b">
        <h1>Importer Atestation :</h1>
      </div>

      <form action="" className="add-atest-form">
        <div className="add-atest-input-field">
          <label>Date de realisation : </label>
          <input type="date" />
        </div>
        <div className="add-atest-input-field">
          <label>Importer l'atestation : </label>
          <input type="file" />
        </div>

        <button>Envoyer Atestation</button>
      </form>
    </div>
  );
};

export default ImportAtest;
