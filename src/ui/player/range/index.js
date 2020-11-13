import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useReducer,
} from "react";

import { Div, Span } from "./styled";
import Music_list from "./music_list";
import Icon from "../../icon/index";
import Range from "./range";

import { Global, Mycontext } from "../../../assets/global_state";

// {

// }

const Time = ({ audioState, controls }) => {
  const [move, setMove] = useState(false);
  const { time, duration, playing } = audioState;

  // document.body.addEventListener('click',()=>{
  //   setMove(false)
  // })
  const togPlay = useCallback(() => {
    console.log(playing);
    !playing ? controls.play() : controls.Pause();
  }, [audioState, controls]);

  const shift = useCallback((type) => {
    switch (type) {
      case "pre":
        alert("place music to pre");
      case "nex":
        alert("place music to next");
      default:
        return null;
    }
  }, []);



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
          <section>{time}</section>
          <Range value="30" min={0} max={0} />
          <section>{duration}</section>
        </Div>
        <Icon name="list" onClick={(e) => setMove(move ? false : true)} />
        <Music_list move={move} />
      </Global>
    </>
  );
};

export default Time;
