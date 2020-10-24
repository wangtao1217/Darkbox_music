import styled from "styled-components";

const Ul = styled.div`
  width: 100%;
  user-select: none;
  ${'' /* box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.2); */}
`;

const Li = styled.li`
  display: flex;
  box-sizing: border-box;
  padding: 10px 24px;
  list-style: none;
  color: ${p=>p.theme.text};
  font-size: 1.1em;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  &:hover {
    color:black;
    background-color: #f4f4f4;
  }
  ${'' /* &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 4px;
    background-color: ${(props) => (props.focus ? props.theme.primary: null)};
    top: 0;
    left: 0;
  } */}
`;
const Div = styled.div`
  width:20vw;
  display:flex;
  flex-direction:column;
  color:white;
  ${'' /* border-right:2px solid #334854; */}
  transition: 0.3s;
  background-color:${p=>p.theme.primary};
  color:${p=>p.theme.text};
`;
const Icon = styled.div`
  height: 40px;
  width: 4px;
  background-color: black;
`;

const Subcontain = styled.div`
  width:100%;
`;

export { Ul, Li, Div, Icon, Subcontain };
