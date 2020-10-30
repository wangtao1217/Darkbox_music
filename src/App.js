import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Global } from "../src/assets/global_state.js";
import song from "./api/song";
import { logReducer, LogContext, LogDispatch, initial } from './reducer/log';

import Menu from "./ui/menu/index";
import Top from "./ui/contain/top/index";
import Player from "./ui/player/index";
import { Main, Top_container, Second } from "./ui/styled";


import Discover from "./ui/contain/discover";
import Like from "./ui/contain/discover";
import Search from "./ui/contain/search_result";


const App = (props) => {
 const [ logstate, logDispatch ] = useReducer(logReducer, initial)
  return (
    <Router>
      <Global>
      <LogDispatch.Provider value={logDispatch}>
        <LogContext.Provider value={logstate}>
          <Main
            onClick={() => {
              console.log("result");
            }}
          >
            <Top_container>
              <Menu />
              <Second className="body">
                <Top />
                <section id="abc">
                  <Switch>
                    <Route path={"/discover"}>
                      <Discover />
                    </Route>
                    <Route path={"/like"}>
                      <Like />
                    </Route>
                    <Route exac path={`/search`}>
                      <Search />
                    </Route>
                  </Switch>
                </section>
              </Second>
            </Top_container>
            <Player />
          </Main>
        </LogContext.Provider>
        </LogDispatch.Provider>
      </Global>
    </Router>
  );
};

export default App;
