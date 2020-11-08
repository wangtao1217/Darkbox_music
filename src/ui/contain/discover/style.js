import styled from "styled-components";

const margin = 12;
const padding = margin * 2;

const New_Container = styled.section`
box-sizing:border-box;
  padding:15px 15px;
  width: 100%;
  background-color:white;
  margin-bottom:20px;
}
`;

const Album_Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-evenly;
  height:auto;
`;

const Span = styled.div`
  display: flex;
  height: 0px;
  padding-bottom: calc(100% - ${padding}px);
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  margin: ${margin}px;
  margin-bottom: 36px;
  position: relative;
  background-image: url(${(p) => p.url});
  background-size: 100%;
  background-position: bottom 0px left 0px;
  transition: 0.4s;
  
  user-select: none;
  cursor: pointer;

  .clip {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 35%;
    overflow: hidden;
    z-index: 0;

    &::before {
      z-index: -1;
      content: "";
      position: absolute;
      left: -30px;
      right: -30px;
      bottom: -30px;
      top: -30px;
      filter: blur(15px);
      background-image: url(${(p) => p.url});
      background-position: bottom 0px left 0px;
      background-size: 100%;
    }

    section {
   
      display:block;
      height:100%;
      width:100%;
      margin: 5px;
      box-sizing:border-box;
      font-size:90%;
    }
  }

  &:hover {
    box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.3);
    transform: scale(1.06);
  }
`;

export { Span, Album_Container, New_Container };
