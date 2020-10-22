import React, { useState } from "react";

import { Li, Subcontain } from "./asset/styles";

const Subitem = (props) => {
  const [select, setSelect] = useState();
  const { children, val, icon } = props;
  return (
    <Subcontain open={select}>
      <Li onClick={(el) => setSelect(select ? 0 : 1)}>
        {val}
        {icon}
        {select ? "👍" : "👌"}
      </Li>
      {select ? children : null}
    </Subcontain>
  );
};

export default Subitem;
