import React from "react";
import styled from "styled-components";
import useHover from "../../hooks/useHover";

const Item = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(a) => (a.m ? a.m : 0)};
  i{
    font-size:  14px;
  color: white};
  transition: .3s;
  }
`;

export default (props) => {
  const { name, m } = props;
  const icon = {
    like: "fas fa-star",
    album: "fas fa-record-vinyl",
    play: "fas fa-play",
    stop: "fas fa-pause",
    pre: "fas fa-step-backward",
    next: "fas fa-step-forward",
    search: "fad fa-repeat",
  };

  const ref = React.useRef();
  const act = useHover(ref);
  return (
    <Item
      ref={ref}
      m={m}
      act={act}
      onClick={() => {
        props.onClick();
      }}
    >
      <i className={icon[name]}></i>
    </Item>
  );
};
