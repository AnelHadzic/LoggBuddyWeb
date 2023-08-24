import React, { useContext } from "react";
import { AppContext } from "./Form";

function SecondButtons() {
  const { previewText, saveText, deleteText, saveState } =
    useContext(AppContext);

  const isSaveTrue =
    saveState === true
      ? "btn btn-outline-primary"
      : "btn btn-secondary disabled";
  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          onClick={previewText}
          type="button"
          className="btn btn-outline-primary"
        >
          <i className="bi bi-clipboard-check"></i> Vis og Kopier
        </button>
        <button onClick={saveText} type="button" className={isSaveTrue}>
          <i className="bi bi-box-arrow-down"></i> Lagre
        </button>
        <button
          onClick={deleteText}
          type="button"
          className="btn btn-outline-danger"
        >
          <i className="bi bi-trash"></i> Slett
        </button>
      </div>
    </>
  );
}

export default SecondButtons;
