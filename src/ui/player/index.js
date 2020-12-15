import React, {  useContext } from "react";

import { MusicInfo } from "./MusicInfo";
import Time from "./range/index";
import { Main } from "./styled";
import Music_list from "./range/music_list";
import Icon from "../icon/index";

import {
  M_StateContext,
  M_DispatchContext,
  AudioContext,
} from "../../reducer/playMusic";

export default (props) => {
  const audioInfo = useContext(AudioContext);
  const { state: audioState, controls } = audioInfo;

  const state = useContext(M_StateContext);
  const { music } = state;
  const dispatch = useContext(M_DispatchContext);
  const song = music ? music.al : null;

  // console.log(music);
  // console.log(audioState);
  const move = React.useRef(false)
  const handleMove = () => move.current = move.current?false:true;
  return (
    <Main show={music}>
      {music ? (
        <>
          <MusicInfo
            name={!song ? null : music.name}
            picUrl={!song ? null : song.picUrl}
            ar={!song ? null : music.ar}
          />
          <Time music={music} audioState={audioState} controls={controls} />
        </>
      ) : (
        ":) 盒子里还没有音乐哦..."
      )}
      <Icon name="list"  onClick={()=>handleMove()}/>
      {/* <Music_list move={move} /> */}
    </Main>
  );
};
