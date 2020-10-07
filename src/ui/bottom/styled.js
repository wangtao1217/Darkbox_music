import styled from "styled-components";

const Main = styled.div`
  /* position:static; */
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 100px;
  width: 100vw;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0px -6px 12px 0px #f6f6f6;
`;

const Imag = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  background: url(${(props) => props.jpg}) center 100%;
  margin-right: 10px;
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
`;

export { Main, Imag, Text, TextDiv };
