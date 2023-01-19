import React from "react";
import style from "./Overlay.module.css";
function Overlay(props) {
  return (
    <div
      onClick={props.onHideModal || props.onHideUpdateModal}
      className={style.overlay}
    >
      {props.children}
    </div>
  );
}

export default Overlay;
