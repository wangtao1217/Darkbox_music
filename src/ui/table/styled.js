import styled from "styled-components";

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  box-sizing:border-box;
`;

const Task = styled.li``;

const Container = styled.div`
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
`;
const Row = styled.div`
  display: flex;
  height: 40px;
  box-sizing:border-box;
  color: ${(p) => p.theme.text};
  ${'' /* border-bottom: 1px solid #1b1b1b; */}
  padding: 7px 20px;
  margin-bottom: 5px;
  align-items: center;
  transition: .3s;
  &:hover{
    color: #1b1b1b;
  }
`;

const Cell = styled.span`
  display: flex;
  flex: ${(p) => p.flex?p.flex:"1"};
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
`;
export { Head, Task, Container, Row, Body, Cell, ImagContainer };
