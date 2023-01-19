import React, { useContext } from "react";
import Card from "../UI/Card";
import styles from "./ListItem.module.css";
import Task from "./Task";
import DataContext from "../Store/DataContext";

function ListItem() {
  const data = useContext(DataContext);
  const len = data.items.length;
  return (
    <Card>
      <Task />
      {!(len > 0) && <h2 className={styles["sec-heading"]}>No Item Found</h2>}
    </Card>
  );
}

export default ListItem;
