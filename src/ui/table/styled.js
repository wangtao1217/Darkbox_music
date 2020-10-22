import styled from "styled-components";

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 10px;
`;

const Task = styled.li``;

const Table = styled.div`
  width: 100%;
`;

const ImagContainer = styled.div`
  width:36px;
  height: 36px;
  display: flex;
  background-color:tomato;
  border-radius:2px;
`;
const Body = styled.div`
  ${'' /* overflow: scroll; */}
`;
const Row = styled.div`
  display: flex;
  height: 40px;
  color: ${(p) => p.theme.primary};
  ${'' /* background-color: ${(p) => p.theme.bgColor}; */}

  padding: 7px 10px;
  margin-bottom: 5px;
  align-items: center;
  transition: .3s;
  &:hover{
    box-shadow:0 0 12px 0px rgba(120,120,150,.2);
  }
`;

const Cell = styled.span`
  display: flex;
  flex: ${(p) => p.flex?p.flex:"1"};
`;
export { Head, Task, Table, Row, Body, Cell, ImagContainer };
