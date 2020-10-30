import styled from 'styled-components'

const Contant = styled.div`
  display: flex;
  justify-content: start;
  align-items:center;
  height: 100%;
  width: 100%;
  ${'' /* padding: 10px 0;
  box-sizing: border-box; */}
  ${'' /* background-color: red; */}
  ${'' /* span{
    height:60px;
    width:60px;
    background-color: black;
    border-radius: 50%;
  } */}
  h4{
    color:${p=>p.theme.p_text};
  }
`;

export default Contant