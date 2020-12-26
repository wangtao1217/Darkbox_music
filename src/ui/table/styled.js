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
  cursor: pointer;
  display: flex;
  height: 40px;
  box-sizing:border-box;
  color: ${(p) => p.theme.text};
  padding: 7px 20px;
  margin-bottom: 5px;
  align-items: center;
  transition: .3s;
  &:hover{
    background-color: rgba(50,50,50,.6);
    ${'' /* background-color: #1a1a1a; */}
  }
`;

const Cell = styled.span`
  display: flex;
  flex: ${(p) => p.flex?p.flex:"1"};
  margin: 0 10px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  font-size: 0.9rem;
  user-select: none;
`;
export { Head, Task, Container, Row, Body, Cell, ImagContainer };
