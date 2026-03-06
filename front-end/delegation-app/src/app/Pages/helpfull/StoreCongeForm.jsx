import React from "react";

const StoreCongeForm = () => {
  return (
    <form action="" className="form-ajouter-conge">
      <div className="section-one">
        <div className="field">
          Type de Conge:
          {/* <select name="" id="">
            {type.map((t, index) => {
              return (
                <option value={t.type_conge_id} key={index}>
                  {t.type}
                </option>
              );
            })}
          </select> */}
        </div>

        <div className="field">
          Date de debut de congé :
          <input type="date" />
        </div>

        <div className="field">
          Date de reprise :
          <input type="date" />
        </div>
      </div>

      <div className="section-two">
        {" "}
        <div className="field">
          Date de la demande :
          <input type="date" />
        </div>
        <div className="field">
          Jours d’année dernière :
          <input type="numero" />
        </div>
        <div className="field">
          Durée :
          <input type="numero" />
        </div>
        <div className="field">
          <button onClick={add}>Valider</button>
        </div>
      </div>
    </form>
  );
};

export default StoreCongeForm;
