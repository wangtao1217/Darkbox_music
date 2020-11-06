import React, { useState, useContext } from "react";

import { MusicInfo } from "./MusicInfo";
import Time from "./range/index";
import { Main } from "./styled";

import {
  M_StateContext,
  M_DispatchContext,
  AudioContext,
} from "../../reducer/playMusic";

export default (props) => {
  const audioInfo = useContext(AudioContext);
  const { state: audioState, controls } = audioInfo;

  const state = useContext(M_StateContext);
  const dispatch = useContext(M_DispatchContext);
  const { music } = state
  console.log("-----------")
  console.log(music)
  console.log(audioState)
  console.log("-----------")

  return (
    <Main>
      <MusicInfo name={!music?null:music.name} picUrl={!music?null:music.picUrl}/>
      <Time audioState={audioState} controls={controls} />
    </Main>
  );
};
