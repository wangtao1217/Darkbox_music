import React, { useState, useEffect, useCallback, useRef } from "react";
import { Switch, Route } from "react-router-dom";

import { getDiscover } from "../../../api/discover";
import List from "../../table/index";
import Container from "../styles";
import Album_List from "./albumList";
import New_songs from "./new_ongs/index";
import { MusicList } from "../../contain/MusicList";

import { New_Container } from "./style";

const Discover = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(0);

  const loadMore = useCallback(() => {
    setLoad((i) => (i += 1));
  }, []);
  useEffect(() => {
    getDiscover(data.length + 21).then((res) => {
      setData((pre) => pre.concat(res.slice(data.length , res.length-1)));
    });
    console.log(data);
  }, [load, window.onload]);
  return (
    <>
      <Container>
        <section>
          <h1 className="recommand">{"推荐歌单"}</h1>
          {data ? <Album_List data={data} /> : <h3>{"音乐正在路上哦🙂"}</h3>}
          <div className="load_more" onClick={loadMore}>
            {"更多更多(☆▽☆)..."}
          </div>
        </section>
      </Container>
    </>
  );
};

export default Discover;
