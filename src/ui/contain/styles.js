import styled from "styled-components";

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  overflow: scroll;
  h1 {
    font-size: 1.6em;
    margin-left: 10px;
    letter-spacing: 6px;
  }
  h3 {
    display: block;
    margin: 10px 0 40px 0;
  }
    .load_more{
        display: flex;
        cursor: pointer;
        width: 120px;
        height: 48px;
        font-size: 14px;
        color: white;
        margin: 0  auto;
        margin-bottom: 90px;
        opacity: .5;
        border: 2px solide rgba(50,50,50,.5);
        border-radius: 10px;
        &:hover{
          color: white;
          opacity: .7;
        }

`;

export default Container;
