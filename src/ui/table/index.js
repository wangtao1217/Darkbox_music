import React from "react";

import { Head, Task, Row, Table, Body, Cell, ImagContainer } from "./styled";
import { Div } from "../styled";
// import Imag from "../image/index"
import Icon from "../icon/index"

const list = [
  {
    id: "121232",
    name: "dwdew",
    time: "2:10",
    author:"no body"
  }, {
    id: "121232",
    name: "dwdew",
    time: "2:10",
    author:"no body"
  },{
    id: "121232",
    name: "dwdew",
    time: "2:10",
    author:"no body"
  },
];
export default function index() {

  return (
    <Table>
      <Head>
          <Cell flex="1"></Cell>
          <Cell flex="1">{"#"}</Cell>
          <Cell flex=".8"></Cell>
          <Cell flex="3">{"Name"}</Cell>
          <Cell flex="2">{"Author"}</Cell>
          <Cell flex="2">{"Time"}</Cell>
      </Head>

      <Body>
        {list.map((val, key) => {
          const { name, time, author } = val
          return (
            <Row key={key}>
              
              <Cell flex="1">
                <ImagContainer>
                </ImagContainer>
              </Cell>
              <Cell flex="1">{key}</Cell>
              <Cell flex=".8"><Icon name='like'/></Cell>
              <Cell flex="3">{name}</Cell>
              <Cell flex="2">{time}</Cell>
              <Cell flex="2">{author}</Cell>
            </Row>
          );
        })}
      </Body>
    </Table>
  );
}
