import React, { useReducer, useContext, useCallback, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Global } from "./assets/global_state.js";
import { logReducer, LogContext, LogDispatch, initial } from "./reducer/log";
import Routes from "./assets/routes"

import useAudio from "./hooks/useAudio";
import {
  musicReducer,
  initialState,
  ACTION,
  M_StateContext,
  M_DispatchContext,
  AudioContext,
} from "./reducer/playMusic";
import { playList as playListLocalStorage, MODE } from "./assets/play";

import Album_Detail from "./ui/album_detail/index"
import Menu from "./ui/menu/index";
import Top from "./ui/contain/top/index";
import Player from "./ui/player/index";
import Discover from "./ui/contain/discover/discover";
import { Main, Top_container, Second } from "./ui/styled";
import Like from "./ui/contain/like";
import { MusicList } from "./ui/contain/MusicList";

const App = (props) => {
  //  登录注册状态
  const [logstate, logDispatch] = useReducer(logReducer, initial);

  //  音乐状态
  const [state, dispatch] = useReducer(musicReducer, initialState);
  const { musicId, musicUrl, playMode } = state;

console.log(state)
  const playList = playListLocalStorage.getItem();

  const [audio, audioState, audioControls, audioRef] = useAudio({
    src: musicUrl,
    finish: () => playNext(),
  });


// console.log(state)
  const audioInfo = useMemo(() => {
    return {  
      audio,
      state: audioState,
      controls: audioControls,
      ref: audioRef
    }
  },[musicUrl,audio,audioState,audioControls,audioRef])


  const playMusic = useCallback(
    (index) => {
      dispatch({
        type: ACTION.PLAY,
        load: {
          musicId: playList[index].id,
          music: playList[index],
        },
      });
    },
    [playList]
  );

  const playNext = useCallback(() => {
    switch (playMode) {
      case MODE.REPEAT:
    }
  }, [playMode, MODE]);
  console.log(audio);

  return (
    <Router>
      <Global>
        <LogDispatch.Provider value={logDispatch}>
          <LogContext.Provider value={logstate}>
            <M_DispatchContext.Provider value={dispatch}>
              <M_StateContext.Provider value={state}>
                <AudioContext.Provider value={audioInfo}>
                  <Main>
                    <Top_container>
                      <Menu />
                      <Second className="body">
                        <Top />
                        {audio}
                        <section id="abc">
                          <Switch>
                            <Route path={Routes.discover}>
                              <Discover />
                            </Route>
                            <Route path={Routes.like}>
                              <Like />
                            </Route>
                            <Route exact path={Routes.search}>
                              <MusicList />
                            </Route>
                            <Route exact path={Routes.album_detail}>
                              <Album_Detail  />
                            </Route>
                            <Redirect from={'/'} to={Routes.discover}/>
                          </Switch>
                        </section>
                      </Second>
                    </Top_container>
                    <Player />
                  </Main>
                </AudioContext.Provider>
              </M_StateContext.Provider>
            </M_DispatchContext.Provider>
          </LogContext.Provider>
        </LogDispatch.Provider>
      </Global>
    </Router>
  );
};

export default App;
