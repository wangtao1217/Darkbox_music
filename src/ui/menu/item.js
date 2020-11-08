import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Li } from "./asset/styles";
import { MyContext, Provider } from "./asset/MenuContext";
import Icon from "../icon/index"

const Item = (props) => {
  const { index, val, name, route } = props;
  const { active, onClick } = useContext(MyContext);

  const history = useHistory();

  const handleClick = () => history.push(route);
  return (
    <Provider>
      <Li focus={active === index} onClick={() =>{ 
        handleClick()
        onClick(index)}}>
        {val}
      </Li>
    </Provider>
  );
};

export default Item;
