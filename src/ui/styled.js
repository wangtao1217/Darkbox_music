import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  height: 100vh;
  width: 100vw;
  transition: 1s;
  #abc {
    display: flex;
    height: calc(100% - 60px);
    width: 100%;
    padding: 0 120px;
    box-sizing: border-box;
  }
`;

const Second = styled.div`
  transition: 1s;
  display: flex;
  background-color: ${(p) => p.theme.primary};
  flex-direction: column;
  width: 100vw;
  color: ${(p) => p.theme.text};
`;

const Top_container = styled.div`
  transition: 1s;
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  &::before {
    content: "";
    filter: blur(10px);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 200px;
    background: inherit;
    z-index: -1;
  }
`;

const Div = styled.div`
  padding: ${(props) => props.p || 0};
  display: ${(props) => props.display};
  align-items: center;
  flex-wrap: nowrap;
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  box-sizing: border-box;
  margin-right: 10px;
`;

const Icon = styled.div`
  font-size: ${(props) => (props.size ? props.size : "21px")};
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;

export { Div, Icon, Main, Top_container, Second };
