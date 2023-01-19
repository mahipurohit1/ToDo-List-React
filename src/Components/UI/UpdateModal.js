import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import style from "./Modal.module.css";
import Overlay from "./Overlay";
import ReactDom from "react-dom";
import DataContext from "../Store/DataContext";

function UpdateModal(props) {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("incomplete");
  const [enteredTaskValid, setEnteredTaskValid] = useState(true);
  const data = useContext(DataContext);
  // const currentData = useContext(CurrentData);
  // console.log(currentData);
  // console.log(props.Data);

  // console.log(props.currentItemId);
  // const currentData = data.items.filter(
  //   (item) => item.id === props.currentItemId
  // );
  // console.log(currentData);
  // setEnteredTask(props.Data.name);
  // setEnteredStatus(props.Data.status);

  useEffect(() => {
    setEnteredTask(props.Data.name);
    setEnteredStatus(props.Data.status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        id: props.Data.id,
        name: enteredTask,
        status: enteredStatus,
      };

      data.HideUpdateModalHandler();

      data.updateItem(newItem, props.Data.id);
      // data.addItem(newItem);
    }
  };
  return ReactDom.createPortal(
    <>
      <Overlay onHideUpdateModal={props.onHideUpdateModal}></Overlay>

      <form className={`${style.form} `} onSubmit={submitHandler}>
        <h2>Update ToDo</h2>
        <div className={`${style.title}`}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className={`${!enteredTaskValid ? style["invalid"] : ""}`}
            onChange={taskEnteredHandler}
            value={enteredTask}
          />
        </div>
        <div className={style.status}>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id=""
            value={enteredStatus}
            onChange={statusEnteredHandler}
          >
            <option value="incomplete" default>
              InComplete
            </option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <div>
          <Button type="submit">Update Task</Button>
          <Button
            type="button"
            className={style.cancelBtn}
            onClick={props.onHideUpdateModal}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>,
    document.getElementById("overlay")
  );
}

export default UpdateModal;
