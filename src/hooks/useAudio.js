import React, { useState, useReducer, useContext, useRef } from "react";

import { Mycontext } from "../assets/global_state";
import song from "../api/song";

const useAudio = () => {
  const [state, setState] = useState({
    buffered: [],
    time: 0,
    duration: 0,
    paused: true,
    volumn: 1,
  });

  const audio = useRef(null);

  const Event = () => {
    return {
      Play: () => setState({ paused: state.paused ? false : true }),
      // update current time
      onTime: () => {
        const el = audio.current;
        if(!el) return ;

        setState({ time: el.currentTime });
      },
      // update music time
      onDuration: () => {
        const el = audio.current;
        if(!el) return ;

        const { duration } = el
        setState({duration});
      },
    };
  };

  const element = 'text'
  // React.createElement("audio", {
  //   controls: false,
  //   Play: Event().Play(),
  //   // ChangeVolumn: Event().ChangeVolumn(),
  // });

  return [element, state, Event, audio];
};

export default useAudio;
