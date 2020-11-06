import React from "react";
import styled from "styled-components";

const Item = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.size ? props.size : "21px")};
  color: ${(props) => props.theme.primary};
  /* margin: 0 5px; */
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;

export default (props) => {
  const { name } = props;
  const icon = {
    // home: ,
    like:<i class="fas fa-star"></i>,
    album: <i class="fas fa-record-vinyl" />,
    play: <i class="fas fa-play" />,
    stop: <i class="fas fa-headphones-alt" />,
    search:<i class="fad fa-repeat"></i>,
    pre: <i class="fal fa-angle-left"></i>,
    next: <i class="fal fa-chevron-right"></i>,
    list:<i class="fas fa-stream"></i>,
    repeat_one:<i class="far fa-repeat-1-alt"/>,
    repeat:<i class="fad fa-repeat"></i>,
    // mode:{repeat:,},
  };
  return <Item onClick={()=>{
   props.onClick()
  }}>{icon[name]}</Item>;
};
