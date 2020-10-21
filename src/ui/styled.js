import styled from "styled-components";

const Div = styled.div`
  ${'' /* position: relative; */}
  padding: ${(props) => props.p || 0};
  display: ${(props) => props.display};
  align-items: center;
  flex-wrap: nowrap;
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  box-sizing: border-box;
  ${'' /* background-color:#e6e6e6; */}
  /* background-color:rgba(127,127,200,.2); */
  margin-right:10px;
`;

const Icon = styled.div`
  font-size: ${(props) => (props.size ? props.size : "21px")};
  color: ${(props) => props.color};
  /* margin: 0 5px; */
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;



const Main = styled.div`
position:relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  z-index:1;
`;

export { Div, Icon, Main };
