import React from "react";
import styled from "styled-components";

const Item = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  i{
    font-size:  14px;
  ${'' /* color: ${(props) => props.theme.text}; */}
  color: white};
  }
`;

export default (props) => {
  const { name } = props;
  const icon = {
    // home: ,
    like:"fas fa-star",
    album: "fas fa-record-vinyl",
    play: "fas fa-play" ,
    stop: "fas fa-pause" ,
    pre: "fas fa-step-backward" ,
    next: "fas fa-step-forward" ,
    search: "fad fa-repeat" ,
    // mode:{repeat:,},
  };
  return <Item onClick={()=>{
   props.onClick()
  }}>
    <i className={icon[name]}></i>
  </Item>;
};
