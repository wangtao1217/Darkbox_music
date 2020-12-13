import React, { useState } from "react";

import Subitem from "./subitem";
import Item from "./item";
import Menu from "./menu";
import useData from "./asset/data";
import Icon from "../icon/index";
import { Div } from "./asset/styles";

const Creator = (props) => {
  return props.map((item, key) => {
    if (item.type === "item") {
      return (
        <Item key={key} val={item.name} index={item.name} route={item.route} />
      );
    } else if (item.type === "sub") {
      return (
        <Subitem val={item.name} icon={() => <Icon />}>
          {Creator(item.child)}
        </Subitem>
      );
    } else {
      return null;
    }
  });
};

const App = (props) => {
  const [show, setShow] = useState(false);
  const data = useData();

  return (
    <Div
      show={show}
      onMouseLeave={() => {
        console.log(show);
        setShow(false);
      }}
    >
      <Menu>{Creator(data)}</Menu>
      <span
        onClick={() => console.log("ww")}
        onMouseEnter={() => {
          console.log(show);
          setShow(true);
        }}
      ></span>
    </Div>
  );
};

export default App;
