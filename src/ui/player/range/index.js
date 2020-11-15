import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
  useReducer,
} from "react";

import { Div, Span } from "./styled";
import Music_list from "./music_list";
import Icon from "../../icon/index";
import Range from "./range";

import { formatTime } from "../../../helper/time";
import { Global, Mycontext } from "../../../assets/global_state";

// {

// }

const Time = ({ music, audioState, controls }) => {
  const [move, setMove] = useState(false);
  const [curTime,setCurTime] = useState(0);

  const { playing, time } = audioState;
  const togPlay = useCallback(() => {
    // console.log(playing);
    !playing ? controls.play() : controls.Pause();
  }, [music, controls]);

  const shift = useCallback((type) => {}, []);

  if (!music) return null;
  const { duration } = music;

  const { min: curMin, sec: curSec } = formatTime(time); 
  const { min, sec } = formatTime(duration); 

  const handleClick = (time)=>{
    controls.seek(time)
  };
  return (
    <>
      <Global>
        <Span>
          <Icon size="19px" name={"next"} onClick={() => shift("pre")} />
          <Icon
            size={"24px"}
            name={playing ? "stop" : "play"}
            onClick={() => togPlay()}
          />
          <Icon size="19px" name={"pre"} onClick={() => shift("nex")} />
        </Span>
        <Div>
          <section>{`${curMin}:${curSec}`}</section>
          <Range time={time} value={Math.round(time)} min={0} max={duration} seek={handleClick}/>
          <section>{`${min}:${sec}`}</section>
        </Div>
        <Icon name="list" onClick={(e) => setMove(move ? false : true)} />
        <Music_list move={move} />
      </Global>
    </>
  );
};

export default Time;
