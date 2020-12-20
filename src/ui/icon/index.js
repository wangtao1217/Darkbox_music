import React from "react";
import styled from "styled-components";

const Item = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${a => a.m?a.m:0};
  i{
    font-size:  14px;
  ${'' /* color: ${(props) => props.theme.text}; */}
  color: white};
  }
`;

export default (props) => {
  const { name, m } = props;
  const icon = {
    like:"fas fa-star",
    album: "fas fa-record-vinyl",
    play: "fas fa-play" ,
    stop: "fas fa-pause" ,
    pre: "fas fa-step-backward" ,
    next: "fas fa-step-forward" ,
    search: "fad fa-repeat" ,
  };
  return <Item m={m} onClick={()=>{
   props.onClick()
  }}>
    <i className={icon[name]}></i>
  </Item>;
};
