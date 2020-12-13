import React from "react";

import { New_Container } from "../style";
import { MusicList } from "../../../contain/MusicList";

const New_songs = () => {
  const data = [
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
    <New_Container>
      <header>"header"</header>
      <section>
        <span className="image" />
        <MusicList data={data} column={column} />
      </section>
    </New_Container>
  );
};

export default New_songs;
