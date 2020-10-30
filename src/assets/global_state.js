import React, { useState } from "react";

import {musicReducer} from "../reducer/playMusic";

const Mycontext = React.createContext({
  move: false,
  setMove: () => {},
  result: null,
  setResult: () => {},
  play: {
    playing: false,
    id: "",
  },
  state:{},
  dispatch:()=>{},
  ref:null,
});

const initial = {
  play: false,
  song_id: null,
  song_url: null
}

const Global = (props) => {
  // const [state, dispatch] = React.useReaducer(reducer, initial_data);
  const [move, setMove] = useState(false);
  const [ref, setRef] = useState(null);
  const [result, setResult] = useState([]);
  const [ state, dispatch ] = React.useReducer(musicReducer, initial)
  return (
    <Mycontext.Provider
      value={{
        move,
        setMove,
        result,
        setResult,
        state,
        dispatch,
        ref,
        setRef,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
};

export { Mycontext, Global };
