import React, { useState } from "react";

// import { reducer } from "./reducer";

const Mycontext = React.createContext({
  move: false,
  setMove: () => {},
  result: null,
  setResult: () => {},
});

const Global = (props) => {
  // const [state, dispatch] = React.useReaducer(reducer, initial_data);
  const [move, setMove] = useState(false);
  const [result, setResult] = useState(null);
  return (
    <Mycontext.Provider
      value={{
        move,
        setMove,
        result,
        setResult,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
};

export { Mycontext, Global };
