import React from "react";
import styled from "styled-components";

const Imag = styled.image`
  display: flex;
  height: 100%;
  width: 100%;
  background: url(${(props) => props.jpg}) center;
  background-size: cover;
  margin-right: 10px;
`;


export default props =>{
    return (
        <Imag src={props.src} height={props.h}/>
    )
}