import React, { useContext } from "react";
import { AppContext } from "./Form";

function FirstFormRow() {
  const { selectedData, projectRef } = useContext(AppContext);
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              defaultValue="PS"
              ref={projectRef}
            />
            <label htmlFor="floatingInput">Prosjekt</label>
          </div>
        </div>
        <div className="col-7">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              ref={selectedData}
            >
              <option defaultValue value="AutoDetect">
                AutoDetect
              </option>
              <option value="WorkOrder">WorkOrder</option>
              <option value="Kundenr">Kundenr</option>
              <option value="Avtalenummer">Avtalenummer</option>
              <option value="Serienr">Serienr</option>
              <option value="Kortnr">Kortnr</option>
            </select>
            <label htmlFor="floatingSelect">Datatype</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstFormRow;
