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
  const song = music?music.al:null;
  // console.log("-----------")
  // console.log(song)
  // console.log(state)
  // console.log(audioInfo)
  // console.log(audioState)
  // console.log("-----------")

  return (
    <Main>
      {music?<MusicInfo name={!song?null:music.name} picUrl={!song?null:song.picUrl} ar={!song?null:music.ar}/>:<MusicInfo/>}
      <Time audioState={audioState} controls={controls} />
    </Main>
  );
};
