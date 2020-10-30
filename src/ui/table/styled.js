import styled from "styled-components";

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
`;

const Task = styled.li``;

const Table = styled.div`
  width: 100%;
  height:100%;
  box-sizing: border-box;
  color:${p=>p.theme.text};
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
  box-sizing:border-box;
  color: ${(p) => p.theme.text};
  ${'' /* background-color: ${(p) => p.theme.bgColor}; */}

  padding: 7px 20px;
  margin-bottom: 5px;
  align-items: center;
  transition: .3s;
  &:hover{
    background-color:${p=>p.theme.text};
    color:black;
  }
`;

const Cell = styled.span`
  display: flex;
  flex: ${(p) => p.flex?p.flex:"1"};
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
`;
export { Head, Task, Table, Row, Body, Cell, ImagContainer };
