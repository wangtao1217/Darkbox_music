import React from "react";


import { Mycontext } from "../../assets/global_state";
import useAudio from '../../hooks/useAudio'
import song from "../../api/song"

import Container from "./styles";
import { Head, Table, Body, Row, Cell } from "../table/styled";


export default (props) => {
  const { result, setResult, ref } = React.useContext(Mycontext)
  const { Event } = useAudio();
  return (
    <Container>
      <Table>
        <Head>
          <Cell>{"#."}</Cell>
          <Cell flex="2">{"Name"}</Cell>
          <Cell flex="2">{"Time"}</Cell>
          <Cell flex="2">{"Artist"}</Cell>
          <Cell flex="2">{"Album"}</Cell>
        </Head>
        <Body>
          {result.map((val, key) => {
            return (
              <Row key="" onDoubleClick={e=>{
                // console.log(ref)
                // console.log(val.id)
                Event.DobleClike(val.id)}}>
                <Cell>{key}</Cell>
                <Cell flex="3">{val.name}</Cell>
                <Cell flex="2">{val.duration}</Cell>
                <Cell flex="2">{"#"}</Cell>
                <Cell flex="2">{val.album.name}</Cell>
              </Row>
            );
          })}
        </Body>
      </Table>
    </Container>
  );
};
