import React, { useContext, useState, useCallback, useRef } from "react";

import { MusicInfo } from "./MusicInfo";
import Time from "./range/index";
import { Main, Root, Span, Image } from "./styled";
import Icon from "../icon/index";
import { PlayRecord } from "./play_record/index";
import Lyric from "./lyric/index";
import like_music from "../../api/like_music";

import {
  M_StateContext,
  M_DispatchContext,
  AudioContext,
} from "../../reducer/playMusic";
import useClickAway from "../../hooks/useClickAway";

export default (props) => {
  const record_ref = useRef();
  const [move, setMove] = useState(false);
  const [screen, setScreen] = useState(false);
  const audioInfo = useContext(AudioContext);
  const { state: audioState, controls } = audioInfo;

  const state = useContext(M_StateContext);
  const { music, musicId } = state;
  const dispatch = useContext(M_DispatchContext);
  const song = music ? music.al : null;

  const handleMove = useCallback(() => setMove(!move), [move]);
  const handleScreen = useCallback(() => setScreen(!screen), [screen]);
  const handleLike = useCallback(() => {
    let code = like_music(musicId);
    if (code.code === 200) alert(":)");
  });

  return (
    <>
      <Root screen={screen} show={music} move={move}>
        <Main show={music} move={move}>
          {music ? (
            <>
              <MusicInfo
                name={!song ? null : music.name}
                picUrl={!song ? null : song.picUrl}
                ar={!song ? null : music.ar}
                show_lyric={screen}
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
          <Span flex={2} position="flex-start">
            <Icon name="like" m="0 7.5px 0 0" onClick={handleScreen} />
            <Icon name="album" m="0 7.5px 0 0" onClick={handleMove} />
            <Icon name="album" m="0 7.5px 0 0" onClick={handleLike} />
          </Span>
        </Main>
        <Lyric musicId={musicId} />
      </Root>
      {screen ? <Image src={ song.picUrl} /> : null}
      <PlayRecord move={move} />
    </>
  );
};
