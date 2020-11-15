import styled from "styled-components";

const size = 32;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 10px 7px;
  box-sizing: border-box;
  user-select: none;
  width: 100%;
  
    
  ${'' /* <span className="avatar">
        </span> */}
  .user{
    display:flex;
    align-items:center;
    height: 100%;
    width: auto;
    margin-right:10px;
   ${'' /* background-color: white;  */}

   .avatar {
      display:flex;
      height: ${size}px;
      width:${size}px;
      border-radius:${size/2}px;
      ${'' /* padding:0 16px; */}
      ${"" /* background-color: white; */}
      background-image:url(${(p) => p.url});
      background-size:cover;
      margin-right:7px;
  }
  p{
    font-size:.9em;
    opacity:.6;
  }
  }
  .log_in {
    font-size: 1.1rem;
    letter-spacing: 12px;
    font-family: arial;
    color: ${(p) => p.theme.text};
    transition: 0.1s;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;

const Span = styled.div`
  display: flex;
  ${"" /* .input {
    z-index:10;
    float: left;
    position: ${(p) => (p.focus ? "absolute" : null)};
    color: ${(p) => p.theme.primary};
    height: 36px;
    display: flex;
    flex-wrap: nowrap;
    height: ${(p) => (p.focus ? "300px" : "auto")};
    width: ${(p) => (p.focus ? "300px" : "auto")};
    background-color: ${(p) => (p.focus ? p.theme.compare : null)};
    transition: 0.6s;
  } */}
  input {
    display: flex;
    ${"" /* align-items: center; */}
    height: 36px;
    padding: 5px 16px;
    min-width: 220px;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 0 15px;
    outline: none;
    border: none;
    font-size: 1.2em;
    color: ${(props) => props.theme.text};
    transition: 0.4s;
    background-color: ${(p) => p.theme.compare};
  }
`;

export { Top, Span };
