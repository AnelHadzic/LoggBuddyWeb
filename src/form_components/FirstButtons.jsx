import React, { useContext } from "react";
import { AppContext } from "./Form";

function FirstButtons() {
  const { copyText, redirectOrder, redirectContract } = useContext(AppContext);
  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button onClick={copyText} type="button" className="btn btn-primary">
          <i className="bi bi-clipboard-check"></i> Kopier
        </button>
        <button
          onClick={redirectOrder}
          type="button"
          className="btn btn-outline-primary"
        >
          <i className="bi bi-box-arrow-up-right"></i> WO
        </button>
        <button
          onClick={redirectContract}
          type="button"
          className="btn btn-outline-primary"
        >
          <i className="bi bi-box-arrow-up-right"></i> K.ARKIV
        </button>
      </div>
    </>
  );
}

export default FirstButtons;
