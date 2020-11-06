import styled from "styled-components";

const Div = styled.div`
  padding: ${(props) => props.p || 0};
  display: ${(props) => props.display};
  align-items: center;
  flex-wrap: nowrap;
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  box-sizing: border-box;
  margin-right:10px;
`;

const Icon = styled.div`
  font-size: ${(props) => (props.size ? props.size : "21px")};
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;

const Main = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  ${'' /* z-index: 1; */}
  #abc {
    height: calc(100% - 60px);
    width: 100%;
    display: flex;
  }
`;
const Second = styled.div`
  background-color: ${(p) => p.theme.primary};
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: ${(p) => p.theme.text};
`;

const Top_container = styled.div`
  display: flex;
  width:100vw;
  height: 90vh;
`;

export { Div, Icon, Main, Top_container, Second };
