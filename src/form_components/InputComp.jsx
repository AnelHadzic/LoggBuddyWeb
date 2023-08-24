import React, { useContext } from "react";
import { AppContext } from "./Form";
import FirstButtons from "./FirstButtons";

function SecondFormRow() {
  const { copyText, inputData } = useContext(AppContext);
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="inputNummer"
              placeholder="Nummer"
              ref={inputData}
            />
            <label htmlFor="floatingInput">Nummer</label>
          </div>
        </div>
        <div className="col">
          <FirstButtons />
        </div>
      </div>
    </>
  );
}

export default SecondFormRow;
