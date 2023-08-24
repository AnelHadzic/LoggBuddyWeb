import React, { useContext } from "react";
import { AppContext } from "./Form";

function Logger() {
  const { inputText } = useContext(AppContext);

  const installert_selv = () =>
    (inputText.current.value =
      "Reason for Rejection: Kunde har installert selv");

  const ombestemte_seg = () =>
    (inputText.current.value = "Reason for Rejection: Kunde ombestemt seg");

  const inselo_kansellert = () =>
    (inputText.current.value =
      "Reason for Rejection: Inselo kansellerte ordren");

  const ikke_tilgjengelig = () =>
    (inputText.current.value =
      "Montørselskap ikke tilgjengelig / Ingen kapasitet");

  const dobbel_wo = () => (inputText.current.value = "Dobbel WO kanselleres");

  const ingen_kontakt = () =>
    (inputText.current.value =
      "Reason for Rejection: Ikke mulig å oppnå kontakt med kunde");

  const kunde_ac = () =>
    (inputText.current.value = "Reason for Rejection: Kunde ønsker si opp");

  return (
    <>
      <div className="logger-wrapper">
        <div className="card" style={{ width: "15rem" }}>
          <div className="card-header">Ferdige tekster</div>
          <div className="card-body">
            <button
              onClick={installert_selv}
              type="button"
              className="btn btn-outline-primary mb-2"
            >
              Installert selv
            </button>
            <button
              onClick={ombestemte_seg}
              type="button"
              className="btn btn-outline-primary mb-2"
            >
              Kunde ombestemte seg
            </button>
            <button
              onClick={inselo_kansellert}
              type="button"
              className="btn btn-outline-primary mb-2"
            >
              Inselo kansellert
            </button>
            <hr />
            <button
              onClick={ikke_tilgjengelig}
              type="button"
              className="btn btn-outline-primary mb-2"
            >
              Ikke tilgjengelig
            </button>
            <button
              onClick={dobbel_wo}
              type="button"
              className="btn btn-outline-primary mb-2"
            >
              Dobbel WO
            </button>
            <button
              onClick={ingen_kontakt}
              type="button"
              className="btn btn-outline-primary mb-2"
            >
              Ingen kontakt
            </button>

            <button
              onClick={kunde_ac}
              type="button"
              className="btn btn-outline-primary mb-2"
            >
              Kunde sier opp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logger;
