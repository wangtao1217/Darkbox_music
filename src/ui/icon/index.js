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
    like:<i className="fas fa-star"></i>,
    album: <i className="fas fa-record-vinyl" />,
    play: <i className="fas fa-play" />,
    stop: <i className="fas fa-headphones-alt" />,
    search:<i className="fad fa-repeat"></i>,
    next: <i className="fas fa-caret-left"></i>,
    pre: <i className="fas fa-caret-right"></i>,
    list:<i className="fas fa-stream"></i>,
    repeat_one:<i className="far fa-repeat-1-alt"/>,
    repeat:<i className="fad fa-repeat"></i>,
    // mode:{repeat:,},
  };
  return <Item onClick={()=>{
   props.onClick()
  }}>{icon[name]}</Item>;
};
