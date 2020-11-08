import React, { useState, useEffect } from "react";

import { useHistory, useRouteMatch, useParams } from "react-router-dom";

import { MusicList } from "../contain/MusicList";
import getAlbum from "../../api/getAlbum";
import getSongs from "../../api/getSongs";
import Album_info from "./album_info";

import { Container } from "./style";

function Album_Detail(data) {
  const [songs, setSongs] = useState([]);
  const params = useParams();
  const { album_id } = params;

  console.log(data)
  useEffect(() => {
    getAlbum(album_id).then((response) => {
      const ids = [];
      response.map((item) => {
        ids.push(item.id);
      });
      getSongs(ids).then((res) => setSongs(res));
    });
  }, []);
  return (
    <>
      <Container>
        <Album_info data={data}/>
        <section>
          <MusicList data={songs} />
        </section>
      </Container>
    </>
  );
}

export default Album_Detail;
