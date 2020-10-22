import styled from "styled-components";

const Ul = styled.div`
  width: 100%;
  user-select: none;
  ${'' /* box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.2); */}
  min-width:200px;
`;

const Li = styled.li`
  display: flex;
  box-sizing: border-box;
  padding: 0 10%;
  list-style: none;
  color: black;
  font-size: 1.1em;
  padding: 16px 24px;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  &:hover {
    background-color: #f4f4f4;
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 4px;
    background-color: ${(props) => (props.focus ? props.theme.primary: null)};
    top: 0;
    left: 0;
  }
`;
const Div = styled.div`
  width:20%;
  border-right:2px solid #f6f6f6;
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
