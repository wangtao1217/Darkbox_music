import React from "react";

import { Ul } from "./asset/styles";
import { Provider } from "./asset/MenuContext";

const Menu = (props) => {
  return (
    <Provider>
      <Ul>{props.children}</Ul>
    </Provider>
  );
};

export default Menu;
