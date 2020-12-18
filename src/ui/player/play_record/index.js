import React, { useState, useContext, useCallback } from "react";

import { Container } from "./styles";
import { MusicList } from "../../contain/MusicList";

import { M_StateContext } from '../../../reducer/playMusic'
import { playList as PlayListStorage, playHistory } from '../../../assets/play'



export const PlayRecord = ({ move }) => {
    const active = useState(0)
    const state = useContext(M_StateContext)
    const play_list =  PlayListStorage.getItem()
    const play_history = playHistory.getItem()



    const column = [
        {
          flex: "0.2",
          render: ({ item, key }) => {
              console.log(item)
              return item.musicId === state.musicId?'#':key
          },
        },
        {
          flex: "1",
          render: ({ item }) => item.name,
        },
      ];



    return (
    <Container move={move}>
      {"Hello"}
      <section>
        {active ? <MusicList  data={play_list} s_column={column} /> : "hello"}
      </section>
    </Container>
  );
};
