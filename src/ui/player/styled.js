import styled from "styled-components";

const Main = styled.div`
  /* position:static; */
  position: flex;
  bottom: 0;
  float:left;
  left: 0;
  right:0;
  display: flex;
  flex:1;
  align-items: center;
  ${'' /* justify-content:space-between; */}
  height: 10vh;
  width: 100vw;
  padding: 0 20px;
  z-index:10;
  box-sizing:border-box;
  ${'' /* background: #e2e2e2; */}
  overflow:hidden;
  ${'' /* backdrop-filter:blur(20px); */}
  &::before{
    content:'';
    top:0;left:0;right:0;bottom:0;
    background-color: rgba(100,100,100);
    z-index:-1;
 }
`;



const Text = styled.div`
  font-size: ${(props) => props.size};
  color: ${(props) => {
    return (props.text = "music" ? props.theme.primary: "#f6f6f6");
  }};
`;

const TextDiv = styled.div`
  height: 60px;
  width: 70px;
  padding: 6px 0;
  font-family:fantasy;
  line-height:30px;
  letter-spacing:0.3em;
  ${'' /* margin-right:4%; */}
`;
const Div = styled.div`
z-index:2;
`;
export { Main, Text, TextDiv, Div };
