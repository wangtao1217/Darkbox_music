import styled from "styled-components";

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  position: fixed;
  height: 100vh;
  width: 300px;
  right: 0;
  top: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: red;
  transform: translateX(${(p) => (p.move ? 0 : 300)}px);
  transition: 0.5s;
  flex-direction: column;
  justify-content: center;
  background-color: ${(p) => p.theme.secondary};
  overflow: scroll;
`;

export { Container };
