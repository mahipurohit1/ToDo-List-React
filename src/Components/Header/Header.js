import React from "react";
import style from "./Header.module.css";
import Button from "../UI/Button";
import Form from "./Form";

function Header(props) {
  const selectHandler = (data) => {
    props.onSelectOption(data);
  };
  return (
    <header className={style.header}>
      <Button type="button" onClick={props.onShowModal}>
        Add task
      </Button>
      <div>
        <Form onSelectHandler={selectHandler} />
      </div>
    </header>
  );
}

export default Header;
