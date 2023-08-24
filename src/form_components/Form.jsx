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
    const number = inputData.current.value;
    if (number != 0) {
      const url =
        "https://sales.allente.no/forhandler/montor/work-order-details/?workorderid=" +
        number;
      window.open(url, "_blank");
    } else {
      alert("Ikke gyldig");
    }
  };

  const redirectContract = () => {
    const number = inputData.current.value;
    if (number.toString().startsWith("16")) {
      const url =
        "https://sales.allente.no/forhandler/cdadmin/ordere-arkiv/orderDetails?agreementNr=" +
        number;
      window.open(url, "_blank");
    } else {
      alert("Ikke gyldig kontraktsnr");
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
    if (selected === "AutoDetect") {
      if (number.toString().startsWith("16")) {
        return "Avtalenummer ";
      } else if (
        number.toString().startsWith("9") ||
        number.toString().startsWith("4")
      ) {
        return "Mobilnummer ";
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
