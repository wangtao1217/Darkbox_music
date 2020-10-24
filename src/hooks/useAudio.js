import React, { useState, useReducer, useContext } from "react";

import { Mycontext } from "../assets/global_state";
import get_songs from "../assets/get_songs";

const useAudio = () => {
  const { state, dispatch, ref } = useContext(Mycontext);
  return {
    Event: {
      DobleClike: (id) => {
        // get_songs(id)
        alert(ref.src);
        ref.play();
        get_songs(id).then((res) => {
          dispatch({})
        });
        // dispatch({type:"_play",id:id,url})
      },
      Click: (e) => {},
    },
  };
};

export default useAudio;
