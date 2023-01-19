import React from "react";
const DataContext = React.createContext({
  items: [],
  addItem: () => {},
  HideModalHandler: () => {},
  deleteItem: () => {},
  ShowUpdateModalHandler: () => {},
  HideUpdateModalHandler: () => {},
});

export default DataContext;
