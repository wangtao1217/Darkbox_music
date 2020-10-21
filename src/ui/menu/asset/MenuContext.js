import React, { createContext, useState } from "react";
import data from "./data";

export const MyContext = createContext({ active: "", setActive: () => {} });

export const Provider = (props) => {
  const [active, setActive] = useState(data[0].name);
  const value = {
    active,
    setActive,
    onClick: (e) => {
      setActive(e);
    }
  };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};
