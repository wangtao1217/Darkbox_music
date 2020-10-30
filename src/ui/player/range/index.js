import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
  useReducer,
} from "react";

import { Div, Span } from "./styled";
import Music_list from "./music_list";
import Icon from "../../icon/index";
import Range from "./range";

import { Global, Mycontext } from "../../../assets/global_state";
import useAudio from "../../../hooks/useAudio";
import { musicReducer, initialState, ACTION } from "../../../reducer/playMusic";
// import { LocalStorageFactory } from "../../../assets/localstorage";
import { playList as playListLocalStorage, MODE } from "../../../assets/play";

const Time = (props) => {
  const context = useContext(Mycontext);
  const { move, setMove } = context;

  const [state, dispatch] = useReducer(musicReducer, initialState);
  const { musicId, musicUrl, playMode } = state;

  const playList = playListLocalStorage.getItem();

  const [audio, audioState, audioControls, audioRef] = useAudio({
    url: musicUrl,
    finish: () => playNext(),
  });

  const playMusic = useCallback(
    (index) => {
      dispatch({
        type: ACTION.PLAY,
        load: {
          musicId: playList[index].id,
          music: playList[index],
        },
      });
    },
    [playList]
  );

  const playNext = useCallback(() => {
    switch (playMode) {
      case MODE.REPEAT:
    }
  }, [playMode,MODE]);
  return (
    <>
      {/* <audio src={state.song_url} ref={Music} /> */}
      {audio}
      <Global>
        <Span>
          <Icon size="19px" name={"next"} />
          <Icon
            size={"24px"}
            name={state.play ? "play" : "stop"}
            onClick={(e) => Event.Click()}
          />
          <Icon size="19px" name={"pre"} />
        </Span>
        <Div>
          {/* <section>{currentTime ? currentTime : "00:00"}</section> */}
          <Range value="30" min={0} max={100} />
          {/* <section>{duration ? duration : "00:00"}</section> */}
        </Div>
        <Icon name="list" onClick={(e) => setMove(move ? false : true)} />
        <Music_list move={move} />
      </Global>
    </>
  );
};

export default Time;
