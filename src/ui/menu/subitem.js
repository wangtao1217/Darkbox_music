import React, { useState } from "react";

import { Li, Subcontain } from "./asset/styles";

const Subitem = (props) => {
  const [select, setSelect] = useState();
  const { children, val } = props;
  return (
    <Subcontain open={select}>
      <Li onClick={(el) => setSelect(select ? 0 : 1)}>
        {val}
      </Li>
      {select ? children : null}
      {select ? "👇" :  "👍"}
    </Subcontain>
  );
};

export default Subitem;
