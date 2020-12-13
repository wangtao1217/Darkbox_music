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
  }
`;

const Second = styled.div`
  transition: 1s;
  display: flex;
  background-color: ${(p) => p.theme.primary};
  flex-direction: column;
  width: 100vw;
  padding:0 140px;
  color: ${(p) => p.theme.text};
`;

const Top_container = styled.div`
  transition: 1s;
  display: flex;
  width:100vw;
  height: 90vh;
`;


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




export { Div, Icon, Main, Top_container, Second };
