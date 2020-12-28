import styled from "styled-components";

const Div = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1;
  height: 70vh;
  width: 600px;
  margin: 80px;
  overflow: scroll;
  span {
    user-select: none;
    cursor: pointer;
    display: flex;
    color: rgba(70, 70, 70, 0.7);
    justify-content: center;
    height: ${(i) => i.height}px;
    p {
      display: flex;
    }
  }
  .emphasis {
    color: rgba(220, 220, 220, 0.8);
  }
`;

export { Div };
