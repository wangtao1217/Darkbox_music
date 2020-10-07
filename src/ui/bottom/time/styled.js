import styled from "styled-components";

const Div = styled.div`
  width: 56%;
  display: flex;
  margin: 0 2%;
  align-items: center;
  justify-content:space-between;
  color: #838383;
  font-size: 0.8em;
`;
const Line = styled.div`
  height: 10px;
  width: 100%;
  border-radius: 5px;
  background-color: #f1f3f8;
  position: relative;
  margin: 0 7px;
`;

const Timer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  width: ${(props) => props.long};
  border-radius: 5px;
  background-color: #393b44;
  cursor: pointer;
`;

export { Timer, Line, Div };
