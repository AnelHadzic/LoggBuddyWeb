import React, { useContext } from "react";
import { AppContext } from "./Form";

function ThirdFormRow() {
  const { inputText, checkTextLengthLogg } = useContext(AppContext);
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              ref={inputText}
              onChange={checkTextLengthLogg}
            ></textarea>
            <label htmlFor="floatingTextarea2">Loggtext</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdFormRow;
