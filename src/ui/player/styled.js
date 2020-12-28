import styled from "styled-components";

const width = "200px";
const apart = -20;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  position: fixed;
  bottom: 0;
  z-index: 700;
  left: 0;
  right: 0;
  height: ${(p) => (p.screen ? "100vh" : "80px")};
  width: 100vw;
  background: rgba(36, 36, 36, 0.5);
  backdrop-filter: blur(36px);
  transform: translateY(${(p) => (p.show ? 0 : 80)}px);
  transition: 0.5s;
  overflow: hidden;
`;
const Main = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  height: 80px;
  width: 100vw;
  padding: 0 10px;
  box-sizing: border-box;
  transform: translateY(${(p) => (p.show ? 0 : 80)}px);
  transition: 0.5s;
  color: white;
`;

const Container = styled.div`
position: static;
user-select:none;
cursor:pointer;
height:100%;
display:flex;
flex: 1;
width: 0;

align-items:center;
img{
  height:60px;
  width:60px;
  background-size:100%;
}
.text{
  height:60px;
  padding:6px 0;
  margin-left:10px;
  box-sizing:border-box;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  p{
    margin:0px;
    font-size:10px;
    color: rgba(200,200,200,.7);
  }
  .name{
      margin-bottom:5px;
      font-size:16px;
      color: white;
    }
  
`;

const Span = styled.span`
  display: flex;
  flex: ${(i) => (i.flex ? i.flex : 1)};
  width: 0;

  align-items: center;
  justify-content: ${(a) => (a.position ? a.position : "center")};
  height: 100%;
`;

const Info_Span = styled.span`
  display: flex;
  flex: 1;
  width: 0;
`;

const Image = styled.img`
  position: fixed;
  z-index: 600;
  width: 100vw;
  transform: translateY(${(p) => (p.screen ? "100vh" : 0)});
  transition: 0.5s;
`;
export { Main, Container, Root, Span, Info_Span, Image };
