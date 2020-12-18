import React, { useReducer } from "react";

import getMusicUrl from "../api/getMusicUrl";

import {
  playHistory,
  setPlayHistory,
  playList as playLocalList,
  setPlayList,
  MODE,
} from "../assets/play";

export const initialState = {
  musicId: Number,
  musicUrl: String,
  showLayout: false,
  playMode: MODE,
};

export const ACTION = {
  PLAY: "PLAY",
  SET_PLAY_LIST: "SET_PLAY_LIST",
  CLEAR_PLAY_LIST: "CLEANE_PLAY_LIST",
  SET_PLAY_MODE: "SET_PLAY_MODE",
  SHOW_LAYOUT: "SHOW_LAYOUT",
  HIDE_LAYOUT: "HIDE_LAYOUT",
};

export const musicReducer = (state, action) => {
  const { type, load } = action;

  switch (type) {
    case ACTION.PLAY:
      /* ??? */
      if (!load) {
        return { ...state };
      }
      
      setPlayHistory(load.music);
      setPlayList(load.playList);

      return {
        ...state,
        musicId: load.musicId,
        musicUrl: getMusicUrl(load.musicId),
        music: load.music,
      };
    //
    case ACTION.SET_PLAY_LIST:
      const playList = load.playList || [];
      playLocalList.setItem(playList);
      return state;
    //
    case ACTION.CLEAR_PLAY_LIST:
      playLocalList.removeItem();
      return state;
    //
    case ACTION.SHOW_LAYOUT:
      return {
        ...state,
        showLayout: true,
      };
    //
    case ACTION.SHOW_LAYOUT:
      return {
        ...state,
        showLayout: false,
      };
    //
    default:
      return null;
  }
};

export const M_StateContext = React.createContext(initialState);
export const M_DispatchContext = React.createContext(() => {});
export const AudioContext = React.createContext({
  audio: null,
  state: null,
  controls: null,
  ref: {
    current: null,
  },
});
