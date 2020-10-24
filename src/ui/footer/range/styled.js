import styled from "styled-components";

const Div = styled.div`
  width: 50%;
  display: flex;
  margin: 0 2%;
  margin-right:20px;
  align-items: center;
  justify-content:center;
  color: #838383;
  font-size: 0.8em;
`;

const Span = styled.div`
  width:100px;
  display: flex;
  flex-wrap:none;
  margin: 0 2%;
  align-items: center;
  justify-content:space-between;
`;
const Back = styled.div`
  height: 10px;
  width: 100%;
  margin: 0 20px;
  box-shadow: 0 0 6px 2px inset #e6e6e6;
  background-color: ${(p) => (p.bg ? p.bg : "#f2f2f2")};
  max-width: 100%;
`;

const Thumb = styled.div`
  height: 100%;
  width: ${(p) => (p.w ? `${p.w}px` : "0px")};
  max-width: 100%;
  background-color: ${(p) => (p.bg ? p.theme.primary :  p.theme.primary )};
  position: relative;
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
  height:90vh;
  width:30vw;
  min-width:220px;
  max-width:320px;
  ${'' /* padding:10px 7px; */}
  display:flex;
  justify-content:center;
  padding:24px 14px;
  box-sizing:border-box;
z-index:-10;
;
  background-color:${p=>p.theme.primary};
  position:fixed;
  top:0;
  right:0;
  transform:translateX(${p=>p.move});
  transition:.5s;
`;

export { Back, Thumb, Container, Point, Div, Span, Play_list };

