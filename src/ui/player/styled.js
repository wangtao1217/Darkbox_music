import styled from "styled-components";

const width = "200px";

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
  transition: 0.6s;
  background: rgba(40, 40, 40, 0.5);
  backdrop-filter: blur(20px);
  color: white;
  span{
    margin: 0 10px;
  }
`;

const Container = styled.div`
${'' /* position: ${(p) => (p.move ? "fixed" : "static")}; */}
${"" /* ${p => p.move?transform: translateX(-200)} */}
position: static;
user-select:none;
cursor:pointer;
width: ${width};
height:100%;
display:flex;
align-items:center;
.pic{
  height:60px;
  width:60px;
  background-image:url(${(p) => p.picUrl});
  background-size:100%;
}
.text{
  height:60px;
  width:calc(${width} - 60px);
  padding:6px 0;
  margin-left:10px;
  box-sizing:border-box;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  p{
    margin:0px;
    font-size:10px;
  }
  .name{
      margin-bottom:5px;
      font-size:18px;
    }
  
`;
export { Main, Container,  };
