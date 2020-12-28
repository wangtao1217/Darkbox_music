import styled from "styled-components";


const margin = 10;
const padding = margin * 2;

const New_Container = styled.section`
  box-sizing:border-box;
  padding:10px 10px;
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
  grid-template-columns: repeat(${p => p.fit?4:5}, 1fr);
  column-gap: 15px;
  height: auto;
  .recommand {
    background-color: red;
    color: red;
  }
  @media screen and (max-width:1200px){
    &{
      grid-template-columns: repeat(${p => p.fit?3:4}, 1fr);
    }
  }
  @media screen and (max-width:900px){
    &{
      grid-template-columns: repeat(${p => p.fit?2:3}, 1fr);
    }
  }
  @media screen and (max-width:700px){
    &{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width:500px){
    &{
      grid-template-columns: repeat(1, 1fr);
    }
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
  transition: 0.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
  }
.text{
  width:210px;
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
  }

  
`;

export { Span, Album_Container, New_Container };
