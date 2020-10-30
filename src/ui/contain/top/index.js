import React from "react";

import Search from './search'
import {  Top } from "./styled.js";
import Avater from "../../avater/index";

export default (props) => {
  return (
    <Top>
      <Search  />
      <Avater/>    
    </Top>
  );
};
