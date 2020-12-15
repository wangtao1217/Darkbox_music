import React from "react";

import {
  Head,
  Row,
  Container,
  Body,
  Cell,
} from "./styled";

const Table = ({ column, data, DoubleClick }) => {
  if(!data)return null;
  return (
    <Container>
      <Head>
        {column.map((val, key) => {
          return (
            <Cell key={key} flex={val.flex}>
              {val.title}
            </Cell>
          );
        })}
      </Head>
      <Body>
        {data.map((item, key) => {
          return (
            <Row key={key} onDoubleClick={() => DoubleClick(item)}>
              {column.map((cell, id) => {
                return (
                  <Cell key={id} flex={cell.flex}>{cell.render({ item, key })}</Cell>
                );
              })}
            </Row>
          );
        })}
      </Body>
    </Container>
  );
};

export default Table;

