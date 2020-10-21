import React, { useContext } from "react";

import { Li } from "./asset/styles";
import { MyContext, Provider } from "./asset/MenuContext";
import Icon from "../icon/index"

const Item = (props) => {
  const { index, val, name } = props;
  const { active, onClick } = useContext(MyContext);
  return (
    <Provider>
      <Li focus={active === index} onClick={() => onClick(index)}>
      {/* <Icon name={name} /> */}
        {val}
      </Li>
    </Provider>
  );
};

export default Item;
