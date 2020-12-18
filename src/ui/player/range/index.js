import React, { useState, useMemo, useCallback, useContext } from "react";

import { Div, Span } from "./styled";
import Icon from "../../icon/index";
import Range from "./range";
import { playList as playListLocalStorage, playHistory } from "../../../assets/play";

import { formatTime } from "../../../helper/time";
import { Global, Mycontext } from "../../../assets/global_state";
import { ACTION, M_DispatchContext } from "../../../reducer/playMusic";
// {

// }

const Time = ({ music,musicId, audioState, controls }) => {
  const [move, setMove] = useState(false);

  const { playing, time } = audioState;
  const dispatch = useContext(M_DispatchContext)
  const playList = useMemo(() => playListLocalStorage.getItem(), [
    musicId,
  ]);

  const togPlay = useCallback(() => {
    !playing ? controls.play() : controls.Pause();
  }, [controls, playing]);

  const play = useCallback((pre) => {
      const len = playList.length;
      if (!len) return;

      const index = playList.findIndex(({ id }) => id === musicId);
      let nextIndex = -1;
      if (index > -1) {
        nextIndex = pre ? (index - 1 + len) % len : (index + 1) % len;
      } else {
        nextIndex = 0;
      }
      dispatch({
        type: ACTION.PLAY,
        load: {
          playList: playList,
          musicId: playList[nextIndex].id,
          music: playList[nextIndex],
        },
      });
    },
    [music]
  );

  const pre = useCallback(() => play(true), [play]);
  const next = useCallback(() => play(), [play]);

  if (!music) return null;
  const { duration } = music;
  const { min: curMin, sec: curSec } = formatTime(time);
  const { min, sec } = formatTime(duration);

  const handleClick = (time) => controls.seek(time);

  return (
    <>
      <Global>
        <Span>
          <Icon name="pre" onClick={pre} />
          <Icon name={playing ? "stop" : "play"} onClick={() => togPlay()} />
          <Icon name="next" onClick={next} />
        </Span>
        <Div>
          <section>{`${curMin}:${curSec}`}</section>
          <Range
            time={time}
            value={Math.round(time)}
            min={0}
            max={duration}
            seek={handleClick}
          />
          <section>{`${min}:${sec}`}</section>
        </Div>
        {/* <Icon name="list" onClick={(e) => setMove(move ? false : true)} /> */}
      </Global>
    </>
  );
};

export default Time;

// const play = useCallback(
//   (prev?: boolean) => {
//     const len = playList.length
//     if (!len) {
//       return
//     }

//     const index = playList.findIndex(({ id }) => id === musicId)
//     let nextIndex = -1

//     if (index > -1) {
//       nextIndex = prev ? (index - 1 + len) % len : (index + 1) % len
//     } else {
//       nextIndex = 0
//     }

//     dispatch({
//       type: ACTIONS.PLAY,
//       payload: {
//         musicId: playList[nextIndex].id,
//         music: playList[nextIndex],
//       },
//     })

//   },
//   [playList, musicId, dispatch],
// )
