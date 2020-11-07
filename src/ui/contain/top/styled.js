import styled from "styled-components";

const Top = styled.div`
  display:flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 10px 7px;
  box-sizing: border-box;
`;

const Span = styled.div`
  .input {
    z-index:10;
    float: left;
    position: ${(p) => (p.focus ? "absolute" : null)};
    color: ${(p) => p.theme.primary};
    height: 36px;
    display: flex;
    flex-wrap: nowrap;
    height: ${(p) => (p.focus ? "300px" : "auto")};
    width: ${(p) => (p.focus ? "300px" : "auto")};
    background-color: ${(p) => (p.focus ? p.theme.compare : null)};
    transition: 0.6s;
  }
  input {
    display: flex;
    align-items: center;
    height: 36px;
    padding: 5px 16px;
    min-width: 220px;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 0 15px;
    outline: none;
    border: none;
    font-size: 1.2em;
    color: ${(props) => props.theme.text};
    transition: 0.4s;
    background-color: ${(p) => p.theme.compare};
  }
`;

export { Top, Span };
