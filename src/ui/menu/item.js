import React, { useContext,useCallback } from "react";
import { useHistory } from "react-router-dom";

import { Li } from "./asset/styles";
import { MyContext, Provider } from "./asset/MenuContext";
import Icon from "../icon/index";

const Item = (props) => {
  const { index, val, name, route, id } = props;
  const { active, onClick } = useContext(MyContext);

  const history = useHistory();

  const handleClick = useCallback(() => history.push(`${route}/${id}`), []);
  return (
    <Provider>
      <Li
        focus={active === index}
        onClick={() => {
          handleClick();
          onClick(index);
        }}
      >
        <section>{val}</section>
      </Li>
    </Provider>
  );
};

export default Item;
