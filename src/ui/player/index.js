import React, { useContext, useState, useRef, useCallback } from "react";

import { MusicInfo } from "./MusicInfo";
import Time from "./range/index";
import { Main } from "./styled";
import Icon from "../icon/index";
import { PlayRecord } from "./play_record/index";

import {
  M_StateContext,
  M_DispatchContext,
  AudioContext,
} from "../../reducer/playMusic";

export default (props) => {
  const [move, setMove] = useState(false);
  const [screen, setScreen] = useState(false);
  const audioInfo = useContext(AudioContext);
  const { state: audioState, controls } = audioInfo;

  const state = useContext(M_StateContext);
  const { music, musicId } = state;
  const dispatch = useContext(M_DispatchContext);
  const song = music ? music.al : null;

  // console.log(music);
  // console.log(audioState);
  const handleMove = useCallback(() => setMove(!move), [move]);
  const handleScreen = useCallback(() => setScreen(!screen), [screen]);
  return (
    <div>
      <Main show={music} move={move}>
        {music ? (
          <>
            <MusicInfo
              name={!song ? null : music.name}
              picUrl={!song ? null : song.picUrl}
              ar={!song ? null : music.ar}
              move={move}
              onClick={handleScreen}
            />
            <Time
              music={music}
              musicId={musicId}
              audioState={audioState}
              controls={controls}
              dispatch={dispatch}
            />
          </>
        ) : (
          ":) 盒子里还没有音乐哦..."
        )}
        <span className='icon'>
          <Icon name="like" onClick={handleScreen} />
        </span>
        <span className='icon'>
          <Icon name="album" onClick={handleMove} />
        </span>
      </Main>
      <PlayRecord move={move} />
    </div>
  );
};
