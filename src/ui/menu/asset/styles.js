import styled from "styled-components";

const width = 26;
const radius = 4;

const Div = styled.div`
z-index:100;
position:relative;
width:300px;
height:100%;
  display:flex;
  flex-direction:column;
  transition: 0.5s;
  background-color:${p=>p.theme.bgColor};
  ${'' /* background-color:${p=>p.theme.text}; */}
  ${'' /* color:${p=>p.theme.text}; */}

  padding:20px 10px;
  box-sizing: border-box;
  transform:translateX(-${p=>p.show});
  position:${p=>p.show?"absolute":null};
  .link{
    text-decoration:none;
  }

  .toggle{
    cursor:pointer;
    position:absolute;
    ${'' /* height:50px; */}
    padding:2px;
    box-sizing:border-box;
    width:${width}px;
    top:10px;
    right:-${width}px;
    background-color:${p=>p.theme.bgColor};
    border-radius:0 ${radius}px ${radius}px 0;
  }

  i{
    font-size:20px;
    line-height:24px;
    color:${p=>p.theme.primary};
  }
`;

const Ul = styled.div`
  width: 100%;
  user-select: none;
`;

const Li = styled.li`
  display: flex;
  box-sizing: border-box;
  padding: 10px 16px;
  list-style: none;
  color: ${p=>p.theme.text};
  
  font-size: 1.1em;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  &:hover {
    color:black;
    background-color: #f4f4f4;
    border-radius:2px;
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
