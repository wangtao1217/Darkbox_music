import React, { useState, useRef, useEffect } from "react";
import ReactDom from 'react-dom'


import { Div, Span } from "./styled";
import Music_list from './music_list'
import Icon from "../../icon/index";
import Range from "./range";

import { Global, Mycontext } from "../../../assets/global_state";
import music from "../../../assets/get_songs";



const Time = (props) => {
  const source = React.useContext(Mycontext);
  const [state, setState] = useState(false);
  const Music = useRef();
  const { currentTime, duration } = Music;
  const song = music();
  console.log(source.move);
  console.log(song)
  return (
    <>
      <audio src={song.url} ref={Music} />
      <Global>
        <Span>
          <Icon size="19px" name={"next"} />
          <Icon
            size={"24px"}
            name={state ? "play" : "stop"}
            onClick={() => {
              // state?Music.current.pause(): Music.current.play();
              // console.log(Music.current)
              Music.current.play();
              setState(state ? false : true);
            }}
          />
          <Icon size="19px" name={"pre"} />
        </Span>
        <Div>
          <section>{currentTime ? currentTime : "00:00"}</section>
          <Range value="30" min={currentTime} max={duration} />
          <section>{duration ? duration : "00:00"}</section>
        </Div>
        <Icon
          name="list"
          onClick={(e) => {
            source.setMove(source.move ? false : true);
            // console.log(source.move)
          }}
        />
          <Music_list move={source.move} />
        {/* {show ? ReactDOM.createPortal(<Play_list />, document.body) : null} */}
      </Global>
    </>
  );
};

export default Time;
