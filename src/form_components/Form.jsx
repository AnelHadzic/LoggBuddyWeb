import React, { createContext, useRef, useState } from "react";
import ProsjektComp from "./ProsjektComp";
import InputComp from "./InputComp";
import LoggComp from "./LoggComp";
import ButtonsComp from "./ButtonsComp";
import PreviewComp from "./PreviewComp";
import savedLogs from "../data/savedLogs";

import Logger from "./Logger";
import Lagret from "./Lagret";

export const AppContext = createContext(null);

function Form() {
  // USEREF HOOKS - Bruker for å holde styr på content innhold.
  const projectRef = useRef(null);
  const selectedData = useRef(null);
  const inputData = useRef(null);
  const inputText = useRef(null);
  const finishedText = useRef(null);

  // USESTATE HOOKS
  const [saveState, changeSaveState] = useState(false);
  const [savedLogItems, setNewLog] = useState(savedLogs);
  const [status, setStatus] = useState("");

  // USESTATE FUNCTIONS
  function checkTextLengthPreview() {
    const previewText = finishedText.current.value;
    if (previewText != "") {
      changeSaveState(true);
    } else {
      changeSaveState(false);
    }
  }
  // COPY, REDIRECT TO ORDER AND CONTRACT

  const copyText = () => {
    const number = inputData.current.value;
    navigator.clipboard.writeText(number).then(() => {
      console.log("Value copied to clipboard:", number);
    });
  };

  const redirectOrder = () => {
    const REGEX_WORKORDER = /^1\d{6}$/;
    const number = inputData.current.value;
    if (REGEX_WORKORDER.test(number)) {
      const url =
        "https://sales.allente.no/forhandler/montor/work-order-details/?workorderid=" +
        number;
      window.open(url, "_blank");
    } else {
      setStatus("Ikke gyldig WO nummer");
    }
  };

  const redirectContract = () => {
    const REGEX_KONTRAKT = /^16\d{8}$/;
    const number = inputData.current.value;
    if (REGEX_KONTRAKT.test(number)) {
      const url =
        "https://sales.allente.no/forhandler/cdadmin/ordere-arkiv/orderDetails?agreementNr=" +
        number;
      window.open(url, "_blank");
    } else {
      setStatus("Ikke gyldig Kontraksnummer");
    }
  };

  // PREVIEW TEXT, SAVE AND DELETE ALL

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}.${month}.${year}`;
  }

  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const showTime = hours + ":" + minutes;

  function getSelected() {
    const selected = selectedData.current.value;
    const number = inputData.current.value;

    const REGEX_KONTRAKT = /^16\d{8}$/;
    const REGEX_MOBIL = /^[245689]\d{7}$/;
    const REGEX_KORTNR = /^(011|017|021|37|0132|8947)/; //SMARTCARD, VCB, HD-BASIC, KORT, A1, OP/SMART, FWA SIM
    const REGEX_SERIENR = /^(036|0381|064|0611|028|022|086|S210|06817|DCSS)/;
    const REGEX_KUNDENR = /^3\d{7}$/;
    const REGEX_WORKORDER = /^1\d{6}$/;

    if (selected === "AutoDetect") {
      if (REGEX_KONTRAKT.test(number)) {
        return "Avtalenummer ";
      } else if (REGEX_MOBIL.test(number)) {
        return "Mobilnummer ";
      } else if (REGEX_KORTNR.test(number)) {
        return "Kortnr ";
      } else if (REGEX_SERIENR.test(number)) {
        return "Serienr ";
      } else if (REGEX_KUNDENR.test(number)) {
        return "Kundenr ";
      } else if (REGEX_WORKORDER.test(number)) {
        return "WorkOrder ";
      } else {
        return " ";
      }
    } else if (selected === "Kundenr") {
      return "Kundenr ";
    } else if (selected === "WorkOrder") {
      return "WorkOrder ";
    } else if (selected === "Avtalenummer") {
      return "Avtalenummer ";
    } else if (selected === "Serienr") {
      return "Serienr";
    } else if (selected === "Kortnr") {
      return "Kortnr";
    }
  }

  const previewText = () => {
    const project = projectRef.current.value;
    const number = inputData.current.value;
    const loggText = inputText.current.value;
    const theText = (finishedText.current.value =
      getDate() +
      "//MAS//" +
      project +
      "//" +
      getSelected() +
      number +
      "\n" +
      loggText);

    checkTextLengthPreview();

    navigator.clipboard.writeText(theText).then(() => {
      console.log("Value copied to clipboard:", theText);
    });
  };

  const saveText = () => {
    const project = projectRef.current.value;
    const input = inputData.current.value;
    const finishedText = inputText.current.value;
    const newItem = {
      id: savedLogItems.length + 1,
      project: project,
      date: showTime,
      number: input,
      log: finishedText,
    };
    setNewLog([...savedLogItems, newItem]);
  };

  const deleteSave = (item) => {
    const newSavedList = savedLogItems.filter((logg) => logg.id !== item.id);
    setNewLog(newSavedList);
  };

  const checkText = (item) => {
    projectRef.current.value = item.project;
    inputData.current.value = item.number;
    inputText.current.value = item.log;
  };

  const deleteText = () => {
    inputData.current.value = "";
    inputText.current.value = "";
    finishedText.current.value = "";
    checkTextLengthPreview();
  };

  return (
    <AppContext.Provider
      value={{
        projectRef,
        selectedData,
        inputData,
        inputText,
        finishedText,
        copyText,
        redirectOrder,
        redirectContract,
        previewText,
        saveText,
        deleteText,
        saveState,
        savedLogItems,
        deleteSave,
        checkText,
      }}
    >
      <div className="form-wrapper">
        <div className="card">
          <div className="card-header">LoggBuddy</div>
          <div className="card-body">
            {status ? (
              <div className="alert alert-danger" role="alert">
                <i class="bi bi-exclamation-octagon-fill"></i> <p>{status}</p>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            ) : null}
            <form className="logg_form" action="" autocomplete="off">
              <ProsjektComp />
              <InputComp />
              <LoggComp />
              <ButtonsComp />
              <PreviewComp />
            </form>
          </div>
        </div>
      </div>
      <Logger />
      <Lagret />
    </AppContext.Provider>
  );
}

export default Form;
