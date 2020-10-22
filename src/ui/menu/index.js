import React from "react";
import { Link } from "react-router-dom";

import Subitem from "./subitem";
import Item from "./item";
import Menu from "./menu";
import data from "./asset/data";
import Icon from "../icon/index";
import Avater from "../avater/index";
import { Div } from "./asset/styles"

const Creator = (props) => {
  return props.map((item, key) => {
    if (item.type === "item") {
      return (
        <Link to={item.name}>
          <Item key={key} val={item.name} index={item.name} />
        </Link>
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
  return (
    <Div>
      <Avater />
      <Menu>{Creator(data)}</Menu>
    </Div>
  );
};

export default App;
