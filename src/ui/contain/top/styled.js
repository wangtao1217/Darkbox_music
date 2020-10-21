import styled from "styled-components";

import { Div } from "../../styled";

const Search = styled.input`
  display: flex;
  align-items: center;
  height: 40px;
  width: 20%;
  padding: 5px 10px;
  min-width:220px;
  box-sizing: border-box;
  margin: 0 15px;
  outline: none;
  border: none;
  font-size: 1.2em;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bgColor};
`;

const Avater = styled.div`
  height: 40px;
  width: 40px;
  margin-right:10px;
  background-color: tomato;
  border-radius: 50%;
`;

const Topdiv = styled(Div)`
  justify-content: space-between;
`;

export { Search, Avater, Topdiv };
