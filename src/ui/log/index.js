import React, { useState, useRef, useContext } from "react";

import { LogDispatch } from "../../reducer/log";
import Log_container from './styles';



const account = useRef()
const passwords = useRef()
const Log = () => {
    const state = useContext(LogState);
    const dispatch = useContext(LogDispatch);

    return <Log_Container>
    {/* {state.islogged?
    <>
    } */}
        {/* <input type='text' ref={account} placehoder='account...'/>
        <input type='text' ref={passwords} placehoder='passwords...'/>
         */}
    </Log_Container>
}

export default Log;