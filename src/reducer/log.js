import React from 'react'

import { session } from "../assets/session";

export const initial = {
    islogged: session.userId,
    user: session, 
};

export const logReducer = (state, action) => {
    
    switch(action.type){
        case "LOG_IN":
            session.setItem(action.payload.user)

            return {
                ...state,
                islogged: true,
                user: action.plaload.user
                
            }
        case "LOG_OUT":
            session.removeItem()

            return {
                ...state,
                islogged: false,
                user: {}
            }
        default:
            return null;
    }

}


export const LogContext = React.createContext(initial);
export const LogDispatch = React.createContext(() => {});