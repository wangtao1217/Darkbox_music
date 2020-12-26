import React, { useContext } from 'react'

export const toggle_initial = {
    fit: true,
}

export const toggle_reducer = (state, action) => {
    switch(action.type){
        case 'FIT':
            return { fit: !state.fit }
    }
}

export const ToggleState = React.createContext(toggle_initial)
export const ToggleDispatch = React.createContext(() => {})