import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import style from "./Modal.module.css";
import Overlay from "./Overlay";
import ReactDom from "react-dom";
import DataContext from "../Store/DataContext";

function Modal(props) {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("incomplete");
  const [enteredTaskValid, setEnteredTaskValid] = useState(true);
  const data = useContext(DataContext);

  const taskEnteredHandler = (event) => {
    setEnteredTask(event.target.value);
    setEnteredTaskValid(true);
  };

  const statusEnteredHandler = (event) => {
    setEnteredStatus(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTask.trim().length === 0) {
      setEnteredTaskValid(false);
      return;
    } else {
      const newItem = {
        id: Math.round(Math.random() * 1000000),
        name: enteredTask,
        status: enteredStatus,
      };

      data.HideModalHandler();
      data.addItem(newItem);
    }
  };
  return ReactDom.createPortal(
    <>
      <Overlay onHideModal={props.onHideModal}></Overlay>

      <form className={`${style.form} `} onSubmit={submitHandler}>
        <h2>ADD ToDo</h2>
        <div className={`${style.title}`}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className={`${!enteredTaskValid ? style["invalid"] : ""}`}
            onChange={taskEnteredHandler}
          />
        </div>
        <div className={style.status}>
          <label htmlFor="status">Status</label>
          <select name="status" id="" onChange={statusEnteredHandler}>
            <option value="incomplete" default>
              InComplete
            </option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <div>
          <Button type="submit">Add Task</Button>
          <Button
            type="button"
            className={style.cancelBtn}
            onClick={props.onHideModal}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>,
    document.getElementById("overlay")
  );
}

export default Modal;
