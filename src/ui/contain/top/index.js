import React from "react";

import { Div } from "../../styled.js";
import { Search, Avater, Topdiv } from "./styled.js";

export default (props) => {
  return (
    <Topdiv h="60px" w="100%" display="flex" p="12px 45px">
      <Search placeholder="find music..." />
      <Div w="200px" h="60px" display="flex">
        <Avater />
        <Div h="60px" w="90px" display="flex">
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Using_CSS_gradients">
            <p3>{"冷叔"}</p3>
          </a>
        </Div>
      </Div>
    </Topdiv>
  );
};
