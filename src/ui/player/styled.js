import styled from "styled-components";

const width = '200px';


const Main = styled.div`
  position:static;
  display:flex;
  bottom: -80px;
  left: 0;
  right:0;
  align-items: center;
  height:80px;
  width: 100vw;
  padding: 0 10px;
  z-index:100;
  box-sizing:border-box;
  overflow:hidden;
  background-color: white;
  animation:1s;
`;



const Container = styled.div`
user-select:none;
cursor:pointer;
width: ${width};
height:100%;
display:flex;
align-items:center;
.pic{
  height:60px;
  width:60px;
  background-image:url(${p=>p.picUrl});
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
export { Main, Container };
