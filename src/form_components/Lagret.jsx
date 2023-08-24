import React, { useContext } from "react";
import { AppContext } from "./Form";

function Lagret() {
  const { savedLogItems, deleteSave, checkText } = useContext(AppContext);
  const loggInfo = savedLogItems.map((item, index) => (
    <tr key={index}>
      <th scope="row">{item.date}</th>
      <td>
        <button
          onClick={() => checkText(item)}
          className="btn btn-outline-primary"
        >
          <i className="bi bi-binoculars"></i>
        </button>
      </td>
      <td>
        <button
          onClick={() => deleteSave(item)}
          className="btn btn-outline-danger"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <div className="lagret-wrapper">
        <div className="card">
          <div className="card-header">Lagret logger</div>
          <div className="card-body">
            {/*Bruker ternary conditional operator for å sjekke om lista er tom eller ikke */}
            {savedLogItems.length === 0 ? (
              <p>Ingen arkiverte logger</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Tid</th>
                    <th scope="col">Vis</th>
                    <th scope="col">Slett</th>
                  </tr>
                </thead>
                <tbody>{loggInfo}</tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lagret;
