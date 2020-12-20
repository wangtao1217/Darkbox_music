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
  left: 0;
  right: 0;
  height: ${p=> p.screen?'100vh':'80px'};
  width: 100vw;
  background: rgba(40, 40, 40, 0.5);
  backdrop-filter: blur(20px);
  transform: translateY(${(p) => (p.show ? 0 : 80)}px);
  transition: 0.5s;
  overflow: hidden;
  ${'' /* &::before{
    content: '';
    position: absolute;
    top: ${apart}px;
    bottom: ${apart}px;
    right: ${apart}px;
    left: ${apart}px;
    filter: blur(10px);
    background-image: url(https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
    background-size: cover;
    background-repeat: no-repeat; 
  } */}
`
const Main = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  align-items:center;
  height: 80px;
  width: 100vw;
  padding: 0 10px;
  z-index: 100;
  box-sizing: border-box;
  transform: translateY(${(p) => (p.show ? 0 : 80)}px);
  transition: 0.5s;
  ${'' /* background: rgba(40, 40, 40, 0.5); */}
  ${'' /* backdrop-filter: blur(20px); */}
  color: white;
`;

const Container = styled.div`
position: static;
user-select:none;
cursor:pointer;
height:100%;
display:flex;
flex: 1;
align-items:center;
.pic{
  height:60px;
  width:60px;
  background-image:url(${(p) => p.picUrl});
  background-size:100%;
}
.text{
  height:60px;
  ${'' /* width:calc(${width} - 60px); */}
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
    flex: ${ i => i.flex?i.flex:1}; 
    align-items: center;
    justify-content: ${a => a.position?a.position:'center'};
    height: 100%;
   
    
`
export { Main, Container, Root, Span };
