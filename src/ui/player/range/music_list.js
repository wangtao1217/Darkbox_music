import React, { useContext, useEffect } from "react";

import {
  KEY,
  playList as playListLocalStorage,
  playHistory,
} from "../../../assets/play";
import { createMusic } from "../../../assets/createMusic";
import Table from "../../table/index";

import {
  ACTION,
  M_StateContext,
  M_DispatchContext,
  AudioContext,
} from "../../../reducer/playMusic";
import { Play_list } from "./styled";
import { Container, Body, Row, Cell } from "../../table/styled";
import { MusicList } from "../../contain/MusicList";


// {


// }

export default ({ move }) => {
  const state = useContext(M_StateContext);
  const { musicId, musicUrl } = state;

  const dispatch = useContext(M_DispatchContext);
  const playList = React.useMemo(() => playHistory.getItem(), [musicId]);
  let list = [];


  const column = [
    {
      flex: "0.2",
      render: ({ key }) => key,
    },
    {
      flex: "1",
      render: ({ item }) => item.name,
    },
  ];
  // useEffect(()=>{
  //   list.push(createMusic({musicId, musicUrl}));
  //   dispatch({
  //     type: ACTION.SET_PLAY_LIST,
  //     load: {
  //       playList: list
  //     }
  //   })
  // },[musicId])
  console.log(playList)
 
  
  return (
    <Play_list move={move ? "0px" : "40vw"}>
      <MusicList data={playList} s_column={column} />
    </Play_list>
  );
};
