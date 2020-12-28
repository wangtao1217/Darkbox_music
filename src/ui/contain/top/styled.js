import styled from "styled-components";

const size = 28;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 7px;
  box-sizing: border-box;
  user-select: none;
  width: 100%;
  button{
    cursor: pointer;
    outline: none;
    display: flex;
    right: 10px;
    top: 10px;
    width:40px;
    height:30px;
    justify-content:center;
    align-items:center;
    border: none;
    color: white;
    background-color: rgba(90,90,120,.5); 
    padding: 4px;
    transition: .2s;
    &:hover{
    transform: scale(1.1);
    }
  }
  .user {
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;
    margin-right: 10px;
    position: relative;

    .avatar {
      display: flex;
      height: ${size}px;
      width: ${size}px;
      border-radius: ${size / 2}px;
      background-image: url(${(p) => p.url});
      background-size: cover;
      margin-left: 7px;
    }
    p {
      margin-left:5px;
      font-size: 0.9em;
      opacity: 0.6;
    }
    .drop_menu {
      cursor: pointer;
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      width: 84px;
      height: 30px;
      padding: 10px 8px;
      color: #f6f6f6;
      background-color: ${p => p.theme.warning};
      left: 0;
      font-size: 14px;
      top: -50px;
      transition: .3s;
      transform: translateY(${p => p.drop?50:0}px);
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

const Input = styled.input`
  display: flex;
  width: 60%;
  height: 30px;
  padding: 10px 16px;
  box-sizing: border-box;
  margin: 0 12px;
  margin-right: 0;
  outline: none;
  border: none;
  color: white;
  ${'' /* background-color: ${(a) => (a.focus ? "white" : "rgba(0,0,0,0)")}; */}
  background-color: rgba(90,90,120,.5); 

  transition: 0.4s;
`;

export { Top, Input };
