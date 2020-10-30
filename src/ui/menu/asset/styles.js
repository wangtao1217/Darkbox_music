import styled from "styled-components";


const Div = styled.div`
  width:18vw;
  display:flex;
  flex-direction:column;
  color:white;
  transition: 0.3s;
  background-color:${p=>p.theme.primary};
  color:${p=>p.theme.text};
  min-width:200px;
  padding:20px 10px;
  box-sizing: border-box;
`;

const Ul = styled.div`
  width: 100%;
  user-select: none;
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
