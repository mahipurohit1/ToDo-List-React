import React, { useContext } from "react";
import Card from "../UI/Card";
import styles from "./ListItem.module.css";
import Task from "./Task";
import DataContext from "../Store/DataContext";

function ListItem(props) {
  const data = useContext(DataContext);
  const len = data.items.filter(function (item) {
    if (props.selectOptionValue === "all") {
      return true;
    } else {
      return item.status === props.selectOptionValue;
    }
  }).length;
  return (
    <Card>
      <Task selectOptionValue={props.selectOptionValue} />
      {!(len > 0) && <h2 className={styles["sec-heading"]}>No Item Found</h2>}
    </Card>
  );
}

export default ListItem;
