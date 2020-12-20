import styled from "styled-components";

const Div = styled.div`
  width: 50%;
  display: flex;
  flex: 6;
  margin: 0 10px;
  align-items: center;
  justify-content:center;
  color: white;
  font-size: 0.8em;
  ${'' /* justify-self: center; */}
`;

const Span = styled.div`
  width:100px;
  display: flex;
  flex-wrap:none;
  margin: 0 2%;
  align-items: center;
  justify-content:space-between;
  ${'' /* span{
   height: auto;
   width: auto;
    i{
    font-size: 14px;
    color: white;
  } */}
  }
`;
const Back = styled.div`
  height: 6px;
  width: 100%;
  margin: 0 10px;
  background-color: rgba(50,50,50,.2);
  max-width: 100%;
  border-radius: 3px;
`;

const Thumb = styled.div`
  height: 100%;
  width: ${(p) => (p.w ? `${p.w}px` : "0px")};
  max-width: 100%;
  background-color: white;
  position: relative;
  border-radius: 3px;
`;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  width: 90%;
  margin: 20px 0;
  position: relative;
  user-select: none;
`;

const Point = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  background-color: #ff4b5c;
  height: 20px;
  width: 20px;
  top: 0px;
  right: -10px;
  border-radius: 10px;
`;

const Play_list = styled.div`
  ${'' /* display:flex; */}
  position:fixed;
  height:90vh;
  width:30vw;
  flex-direction:column;
  justify-content:center;
  box-sizing:border-box;
  z-index:10;
  color:${p=>p.theme.text};
  background-color:${p=>p.theme.compare};
  top:0;
  right:0;
  transform:translateX(${p=>p.move});
  transition:.5s;
`;

export { Back, Thumb, Container, Point, Div, Span, Play_list };

