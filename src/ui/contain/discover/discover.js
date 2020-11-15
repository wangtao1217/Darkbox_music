import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { getDiscover } from "../../../api/discover";
import List from "../../table/index";
import Container from "../styles";
import Album_List from "./albumList";
import New_songs from "./new_ongs/index";
import { MusicList } from "../../contain/MusicList";

import { New_Container } from "./style";

const Discover = () => {
  const [data, setData] = useState([{ name: "---", picUrl: null }]);

  useEffect(() => {
    getDiscover().then((res) => setData(res));
  }, []);

  console.log(data);

  const list = [
    { name: "hello..." },
    { name: "hello..." },
    { name: "hello..." },
    { name: "hello..." },
    { name: "hello..." },
    { name: "hello..." },
    { name: "hello..." },
    { name: "hello..." },
    { name: "hello..." },
  ];

  const column = [
    { title: "name", render: () => "hello" },
    { title: "artist", render: () => "somebody" },
    { title: "time", render: () => "02:23" },
  ];

  return (
    <>
      <Container>
        <New_Container>
          <header>"header"</header>
          <section>
            <span className="image" />
           <span className="list">
           <MusicList data={list} column={column} />
           </span>
          </section>
        </New_Container>
        <section>
          <h1>{"推荐歌单"}</h1>
          <Album_List data={data} />
          <button>{"Get more"}</button>
        </section>
      </Container>
    </>
  );
};

export default Discover;
