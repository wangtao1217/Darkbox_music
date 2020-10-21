import React, { useState } from "react";

// import { reducer } from "./reducer";

const Mycontext = React.createContext({
  move: false,
  setMove: () => {},
});

const Global = (props) => {
  // const [state, dispatch] = React.useReaducer(reducer, initial_data);
  const [move, setMove] = useState(false);
  return (
    <Mycontext.Provider
      value={{
        move,
        setMove,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
};

export { Mycontext, Global };
