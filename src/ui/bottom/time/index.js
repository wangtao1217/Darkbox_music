import React, { useState, useRef, useEffect } from "react";
import { Timer, Line, Div } from "./styled";
import { Icon, IconContainer } from "../../icon/index";

import music from "../../../assets/suspention.mp3";

function play(state) {
  return state === false ? (
    <i class="fas fa-play" />
  ) : (
    <i class="fas fa-headphones-alt" />
  );
}

const Time = (props) => {
  const [state, setState] = useState(false);
  const Music = useRef();
  return (
    <>
      <audio src={music} ref={Music} />
      <Div>
        <IconContainer>
          <Icon size="19px">
            <i class="fas fa-backward"></i>
          </Icon>
          <Icon
            onClick={() => {
              if (state) Music.current.pause();
              if (state === false) Music.current.play();
              setState(() => (state === true ? false : true));
            }}
            size="24px"
          >
            {play(state)}
          </Icon>
          <Icon size="19px">
            <i class="fas fa-forward" />
          </Icon>
        </IconContainer>
        <section>{'Music.current'}</section>
        <Line>
          <Timer long={"20px"} />
        </Line>
        <section>{'Music.current'}</section>
      </Div>
    </>
  );
};
export default Time;
