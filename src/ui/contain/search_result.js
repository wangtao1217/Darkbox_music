import React from "react";
import { Link } from "react-router-dom";

// import { Mycontext } from "../../../assets/global_state";

import Container from "./styles";
import { Head, Table, Body, Row, Cell } from "../table/styled";


const data = [{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },]

export default (props) => {
  // const { result, setResult } = React.useContext(Mycontext)
  return (
    <Container>
      <Table>
        <Head>
          <Cell>{"#."}</Cell>
          <Cell flex="2">{"Name"}</Cell>
          <Cell flex="2">{"Time"}</Cell>
          <Cell flex="2">{"Artist"}</Cell>
        </Head>
        <Body>
          {data.map((val, key) => {
            return (
              <Row key="">
                <Cell>{key}</Cell>
                <Cell flex="2">{val.name}</Cell>
                <Cell flex="2"></Cell>
                <Cell flex="2"></Cell>
              </Row>
            );
          })}
        </Body>
      </Table>
    </Container>
  );
};
