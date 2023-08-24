import React, { useContext } from "react";
import { AppContext } from "./Form";

function FifthFormRow() {
  const { finishedText } = useContext(AppContext);
  return (
    <>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2Disabled"
          ref={finishedText}
          style={{ height: "100px" }}
          disabled
        ></textarea>
        <label htmlFor="floatingTextarea2Disabled">Resultat</label>
      </div>
    </>
  );
}

export default FifthFormRow;
