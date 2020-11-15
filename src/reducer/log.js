import React from "react";

import { sessionStorage } from "../assets/session";

const session = sessionStorage.getItem();

export const initial = {
  islogged: !!session.userId,
  user: session,
  show: false,
};

export const logReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
        sessionStorage.setItem(action.load.user);

      return {
        ...state,
        islogged: true,
        user: action.load.user,
      };
    case "LOG_OUT":
      session.removeItem();

      return {
        ...state,
        islogged: false,
        user: {},
      };
    case "SHOW":
      return { ...state, show: state.show ? false : true };
    default:
      return null;
  }
};

export const LogContext = React.createContext(initial);
export const LogDispatch = React.createContext(() => {});
