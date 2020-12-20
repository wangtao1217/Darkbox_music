import styled from "styled-components";

const width = 26;

const Div = styled.div`
  position: absolute;
  z-index: 100;
  width: 300px;
  height: 100%;
  left: 0px;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  background-color: ${(p) => p.theme.secondary};
  transform: translateX(${(p) => (p.show ? 0 : -300)}px);
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
    ${'' /* background-color: red; */}
    z-index: 100;
  }
`;

const Ul = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 20px 30px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  user-select: none;
  overflow-y: scroll;
`;

const Li = styled.li`
  display: flex;
  position: relative;
  width: 240px;
  box-sizing: border-box;
  padding: 18px 15px;
  ${"" /* margin: ; */}
  list-style: none;
  color: ${(p) => p.focus?p.theme.text:p.theme.sec_text};
  font-size: 0.9em;
  cursor: pointer;
  transition: 0.3s;


  section {
    display: inline;
    width: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    color: white;
    ${'' /* background-color: #f4f4f4; */}
    ${'' /* border-radius: 2px; */}
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
