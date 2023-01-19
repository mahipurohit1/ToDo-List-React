import React from "react";
import style from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${style.button} + ${props.className}`}
    >
      {props.children}{" "}
    </button>
  );
}

export default Button;
