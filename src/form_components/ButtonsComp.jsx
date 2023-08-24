import React from "react";
import FirstButtons from "./FirstButtons";
import SecondButtons from "./SecondButtons";

function FourthFormRow() {
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <SecondButtons />
        </div>
      </div>
    </>
  );
}

export default FourthFormRow;
