import styled from "styled-components";

const size = "270px";
const w = "260px";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  section {
    flex: 6.5;
  }
`;

const Info_Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 3.5;
  height: 80%;
  width: ${size};
  margin: 20px 0;
  box-sizing: border-box;
  .album_pic {
    background-image: url(${(p) => p.url});
    background-size: cover;
    border-radius: 7px;
    background-color: white;
    height: ${size};
    width: ${size};
  }
  .text {
    margin: 18px 0px 20px 0px;
    font-size: 1.2em;
    width: ${w};
    p {
      margin: 0;
    }
  }
  .description {
    width: ${w};
    font-size: 0.8em;
    opacity: 0.7;
    height: 100px;
    overflow: hidden;
    p {
      margin: 0;
    }
  }
  button {
    position: absolute;
    left: -30px;
    top: 10px;
    right: ${w};
    height: 33px;
    border-radius:50%;
    width: 36px;
    outline:none;
    opacity:.4;
    border-radius: 5px;
  }
`;
export { Container, Info_Container };
