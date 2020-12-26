import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import { MusicList } from "../contain/MusicList";
import getAlbum from "../../api/getAlbum";
import getSongs from "../../api/getSongs";
import Album_info from "./album_info";
import author from "../../helper/author";
import { formatTime } from "../../helper/time";

import { M_StateContext } from "../../reducer/playMusic";


import { Container } from "./style";

function Album_Detail(data) {
  const [songs, setSongs] = useState([]);
  const [info, setInfo] = useState({});
  const params = useParams();
  const { album_id } = params;

  const state = useContext(M_StateContext);
  const { music, musicId } = state;

  
  const column = [
    {
      title: '#',
      flex: "0.1",
      render: ({ item, key }) => {
          console.log(item)
          return key
      },
    },
    {
      title: '歌曲名',
      flex: "2",
      render: ({ item }) => item.name,
    },
    {
      title: "歌手",
      flex: "1",
      render: ({ item }) => author(item.ar),
    },
    {
      title: '...',
      flex: "0.5",
      render: ({ item }) => {
        const { min, sec } = formatTime(item.dt/1000)
        const res = `${min}:${sec}`
        return res
      }
    },
  ];

  useEffect(() => {
    getAlbum(album_id).then((response) => {
      const ids = [];
      if (!response) return null;
      setInfo(response);
      response.trackIds.map((item) => {
        ids.push(item.id);
      });
      getSongs(ids).then((res) => setSongs(res));
    });
  }, [album_id]);
  return (
    <>
      <Container>
        <Album_info data={info} />
        <section>
          <MusicList data={songs} s_column={column}/>
        </section>
      </Container>
    </>
  );
}

export default Album_Detail;
