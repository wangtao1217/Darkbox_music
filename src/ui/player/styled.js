import styled from "styled-components";

const width = '200px';


const Main = styled.div`
position:static;
  display:flex;
  bottom: 0;
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
  ${'' /* &::before{
    content:'';
    z-index:100;
    top:0;left:0;right:0;bottom:0;
    background-color: rgba(100,100,100);
    filter:blur(20px);
 } */}
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
    font-size:12px;
  }
  .name{
      margin-bottom:5px;
      font-size:20px;
    }
`;
export { Main, Container };
