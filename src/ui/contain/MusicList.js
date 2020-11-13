import React, { useContext } from "react";

import Album from "../../api/getAlbum";
import {
  M_StateContext,
  M_DispatchContext,
  AudioContext,
  ACTION,
} from "../../reducer/playMusic";
import Container from "./styles";
import Table from "../table/index";
import { Mycontext } from "../../assets/global_state"

import { createMusic } from "../../assets/createMusic";

export const MusicList = ({ data, s_column }) => {
  let column = [
    {
      title: "🚩",
      flex: null,
      width: "30px",
      render: ({ item, key }) => {
        return key;
      },
    },
    {
      title: "name",
      flex: 2,
      render: ({ item, key }) => {
        return item.name;
      },
    },
    {
      title: "artist",
      flex: 1,
      render: ({ item, key }) => {
        return null;
      },
    },
    {
      title: "time",
      flex: 1,
      render: () => {},
    },
  ];
  const { result } = useContext(Mycontext)

  const state = useContext(M_StateContext);
  const dispatch = useContext(M_DispatchContext);
  const audioInfo = useContext(AudioContext);
  if (s_column) {
    column = s_column;
  }

  const DoubleClick =  (item) => {
    let { picUrl } = item;
    // if (!picUrl) {
    //   const result = await Album.getAlbum(item.album.id);
    //   picUrl = result?.album.blurPicUrl;
    // }
    console.log(item)
    dispatch({
      type: ACTION.PLAY,
      load: {
        musicId: item.id,
        music: createMusic({
          ...item,
          picUrl,
          duration: item.duration / 1000,
        }),
      },
    });
  };
  // console.log(data)
  return (
    <Container>
      <Table
        data={data?data:result}
        DoubleClick={DoubleClick}
        column={column}
      />
    </Container>
  );
};
