import React from "react";

import { Play_list } from "./styled";
import { Table, Body, Row, Cell } from "../../table/styled";

const play_list = [
  {
    id: "121232",
    name: "dwdew",
    time: "2:10",
    author: "no body",
  },
  {
    id: "121232",
    name: "dwdew",
    time: "2:10",
    author: "no body",
  },
  {
    id: "121232",
    name: "dwdew",
    time: "2:10",
    author: "no body",
  },
];

export default (props) => {
  return (
    <Play_list move={ props.move? "50vw" : "0px"}>
      <Table>
        <Body>
          {play_list.map((val, key) => {
            return (
              <Row key={key}>
                <Cell flex="1" />
                <Cell flex="1">{val.name}</Cell>
              </Row>
            );
          })}
        </Body>
      </Table>
    </Play_list>
  );
};
