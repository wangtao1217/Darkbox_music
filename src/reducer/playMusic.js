import React, { useReducer } from "react";

import { playHistory, setPlayHistory, playList, MODE } from "../assets/play";


export const initialState = {
  musicId: Number,
  musicUrl: String,
  showLayout: false,
  playMode: MODE
};  

export const ACTION = {
  PLAY:'PLAY',
}

export const musicReducer = ( type, action ) => {

	switch(action.type){
		case 'PLAY':

		default:
			return null;
	}
};

export const M_StateContext = React.createContext(initialState);
export const M_DispatchContext = React.createContext(() => {});