import React, { useState, useRef, useEffect, useContext } from "react";
import ReactDom from 'react-dom'


import { Div, Span } from "./styled";
import Music_list from './music_list'
import Icon from "../../icon/index";
import Range from "./range";

import { Global, Mycontext } from "../../../assets/global_state";
import music from "../../../assets/get_songs";



const Time = (props) => {
  const { state, dispatch, move, setMove, ref, setRef  } = useContext(Mycontext)
  const Music = useRef();
  const { currentTime, duration } = Music;
  const song = music(state.song_id?state.song_id:null);
  console.log(song)
  setRef(Music.current)
  console.log(state.song_id)
  return (
    <>
      <audio src={state.song_url} ref={Music} />
      <Global>
        <Span>
          <Icon size="19px" name={"next"} />
          <Icon
            size={"24px"}
            name={state.play ? "play" : "stop"}
            onClick={() => {
              dispatch({type:"_play"})
              if(state.play){
                ref.pause();
              }else{
                ref.play()
              }
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
          onClick={(e) => setMove(move ? false : true)}
        />
          <Music_list move={move} />
      </Global>
    </>
  );
};

export default Time;
