import React from "react";

import {
  Head,
  Task,
  Row,
  Container,
  Body,
  Cell,
  ImagContainer,
} from "./styled";
import { Div } from "../styled";
// import Imag from "../image/index"
import Icon from "../icon/index";

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
                  <Cell flex={cell.flex}>{cell.render({ item, key })}</Cell>
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

// <Head>
// <Cell flex="1"></Cell>
// <Cell flex="1">{"#"}</Cell>
// <Cell flex=".8"></Cell>
// <Cell flex="3">{"Name"}</Cell>
// <Cell flex="2">{"Author"}</Cell>
// <Cell flex="2">{"Time"}</Cell>
// </Head>

// <Body>
// {list.map((val, key) => {
// const { name, time, author } = val
// return (
//   <Row key={key} onDoubleClick={()=>{
//     alert('Hello...')
//   }}>

//     <Cell flex="1">
//       <ImagContainer>
//       </ImagContainer>
//     </Cell>
//     <Cell flex="1">{key}</Cell>
//     <Cell flex=".8"><Icon name='like'/></Cell>
//     <Cell flex="3">{name}</Cell>
//     <Cell flex="2">{time}</Cell>
//     <Cell flex="2">{author}</Cell>
//   </Row>
// );
// })}
// </Body>
