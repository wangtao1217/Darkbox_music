import React, { useState } from "react";

import { Li, Div } from "./asset/styles";

const Subitem = (props) => {
  const [select, setSelect] = useState();
  const { children, val, icon } = props;
  return (
    <Div open={select}>
      <Li onClick={(el) => setSelect(select ? 0 : 1)}>
        {val}
        {icon}
        {select ? "👍" : "👌"}
      </Li>
      {select ? children : null}
    </Div>
  );
};

export default Subitem;
