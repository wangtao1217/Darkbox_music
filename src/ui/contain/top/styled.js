import styled from "styled-components";

const Input = styled.input`
  display: flex;
  align-items: center;
  height: 36px;
  width: 240px;
  padding: 5px 16px;
  min-width:220px;
  box-sizing: border-box;
  border-radius:6px;
  margin: 0 15px;
  outline: none;
  border: none;
  font-size: 1.2em;
  color: ${(props) => props.theme.text};
  transition:.4s;
  background-color:rgba(0,0,0,.3);
  ${'' /* &:focus{
    border-bottom:2px solid #e6e6e6;
  } */}
`;


const Top = styled.div`
  height:60px;
  width:100%;
  display:flex;
  padding:10px 12px;
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
