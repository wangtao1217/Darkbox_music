import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.size};
  color: ${(props) => props.theme.primary};
  /* margin: 0 5px; */
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5% 0 0;
`;

export { Icon, IconContainer };
