import styled from "styled-components";

const Main = styled.div`
  /* position:static; */
  position: fixed;
  bottom: 0;
  left: 0;
  right:0;
  display: flex;
  align-items: center;
  justify-content:center;
  height: 10%;
  width: 100vw;
  padding: 0 10px;
  z-index:10;
  ${'' /* background-color: black; */}
  /* box-shadow: 0px -6px 12px 0px #f6f6f6; */
  ${'' /* filter:blur(40%); */}
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
