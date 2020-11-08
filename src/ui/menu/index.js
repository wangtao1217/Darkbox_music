import React, { useState } from "react";

import Subitem from "./subitem";
import Item from "./item";
import Menu from "./menu";
import useData from "./asset/data";
import Icon from "../icon/index";
import { Div } from "./asset/styles"

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
  const [ show, setShow ] = useState(0)
  const data = useData();


  return (
    <Div show={show}>
      <span className="toggle" onClick={()=>setShow(show?0:"300px")}>
        <i class="fas fa-bars" />
      </span>
      <Menu>{Creator(data)}</Menu>
    </Div>
  );
};

export default App;
