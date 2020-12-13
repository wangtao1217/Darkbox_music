import styled from "styled-components";

const width = 26;

const Div = styled.div`
  position: absolute;
  z-index: 100;
  width: 300px;
  height: 100%;
  left:0px;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  background-color: ${(p) => p.theme.bgColor};
  transform: translateX(${(p) => p.show?0:-300}px);
  padding: 20px 16px;
  box-sizing: border-box;

  .link {
    text-decoration: none;
  }

  span {
    position: absolute;
    top: 0;
    bottom: 0;
    right: -10px;
    width: 10px;
    background-color: red;
    z-index: 100;
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
  color: ${(p) => p.theme.text};

  font-size: 1.1em;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  &:hover {
    color: black;
    background-color: #f4f4f4;
    border-radius: 2px;
  }
`;

const Icon = styled.div`
  height: 40px;
  width: 4px;
  background-color: black;
`;

const Subcontain = styled.div`
  width: 100%;
`;

export { Ul, Li, Div, Icon, Subcontain };
