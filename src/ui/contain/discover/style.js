import styled from "styled-components";

const margin = 20;
const padding = margin * 2;

const New_Container = styled.section`
box-sizing:border-box;
  padding:15px 15px;
  width: 100%;
  background-color:white;
  section{
   display:flex;
    height:200px;
    width:100%;
    background-color:black;
    .image{
    height:100px;
    width:100px;
  }
  }
  
}
`;

const Album_Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-evenly;
  column-gap: 20px;
  height: auto;
  .recommand {
    background-color: red;
    color: red;
  }
`;

const Span = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  margin-bottom: 27px;
  .card{
    display: flex;
  height: 0px;
  padding-bottom: calc(100% - ${padding}px);
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  margin: ${margin}px;
  margin-bottom: 12px;
  position: relative;
  background-image: url(${(p) => p.url});
  background-size: 100%;
  background-position: bottom 0px left 0px;
  transition: 0.4s;
  user-select: none;
  cursor: pointer;
  border-radius:7px;
  &:hover {
    box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.3);
    transform: scale(1.06);
  }
  }
.text{
  width:200px;
  padding: 2px 5px;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;}
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

  
`;

export { Span, Album_Container, New_Container };
