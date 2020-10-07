import React from "react";
import styled from "styled-components";

import { Line, Timer } from "../time/styled";
import { Icon } from "../../icon/index";
import { Div } from "../time/styled";

const SoundDiv = styled(Div)`
  width: 10%;
`;
const play_modle = [<i class="fas fa-repeat-1" />, <i class="fas fa-repeat" />];

export default (props) => {
  return (
    <SoundDiv>
      <Icon size="21px">
        <i class="fas fa-volume-down" />
      </Icon>
      <Line>
        <Timer />
      </Line>
      <Icon size="21px">
        <i class="fas fa-volume-down" />
      </Icon>
    </SoundDiv>
  );
};
