import styled from "styled-components";


const Div = styled.div`
  position: ${p => p.fit?'static':'absolute'};
  z-index:100;
  width: 260px;
  height: 100%;
  left: 0px;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  background-color: ${(p) => p.theme.secondary};
  transform: translateX(${(p) => p.fit||(p.show ? 0 : -260)}px);
  box-sizing: border-box;

  .link {
    text-decoration: none;
  }
  button{
    cursor: pointer;
    outline: none;
    display: flex;
    margin: 20px 0 2px 30px;
    right: 10px;
    top: 10px;
    width:50px;
    justify-content:center;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: rgba(0,0,0,.5); 
    padding: 4px;
    transition: .2s;
    &:hover{
    background-color: rgba(90,90,120,.5); 
    transform: scale(1.1);
    }
  }
  span {
    position: absolute;
    top: 0;
    bottom: 0;
    right: -20px;
    width: 20px;
    z-index: 200;
  }
`;

const Ul = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 20px 30px;
  padding-top:0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  user-select: none;
  overflow-y: scroll;
`;

const Li = styled.li`
  display: flex;
  position: relative;
  width: 200px;
  box-sizing: border-box;
  padding: 18px 0;
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
