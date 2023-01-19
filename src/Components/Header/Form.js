import React from "react";
import styles from "./Form.module.css";
function Form(props) {
  const selectChangeHandler = (event) => {
    props.onSelectHandler(event.target.value);
  };

  return (
    <form className={styles.form}>
      <select name="task" id="" onChange={selectChangeHandler}>
        <option value="all">All</option>
        <option value="incomplete">InComplete</option>
        <option value="complete">Complete</option>
      </select>
    </form>
  );
}

export default Form;
