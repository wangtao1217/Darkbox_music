import React from "react";

import { Div } from "../styled";

export const Task = (props) => {
  return (
    <Div>
      <section>{props.name}</section>
      <section></section>
      <section></section>
    </Div>
  );
};
