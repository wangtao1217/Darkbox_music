import styled from "styled-components";

const Input = styled.input`
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
  border-bottom:2px solid #e6e6e6;
  color: ${(props) => props.theme.text};
  transition:.4s;
  &:focus{
    background-color: ${(props) => props.theme.bgColor};
  }
`;


const Top = styled.div`
  height:60px;
  width:100%;
  display:flex;
  padding:10px 12px;
  border-bottom:2px solid #e6e6e6;
  box-sizing: border-box;
`;

const Span = styled.div`
  span{
    float:left;
    color:${p=>p.theme.primary};
    display:flex;
    flex-wrap:nowrap;
  }
`;


export { Input, Top, Span };
