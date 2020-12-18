import React, { useState, useCallback } from "react";

import { Container } from "./styled";

export const MusicInfo = ({ name, picUrl, ar, move }) => {
  const [loaded, setLoaded] = useState(true);

  const author = (arr) => {
    if (!arr) return null;
    if (arr.length === 1) return arr[0].name;
    let list = [];
    arr.map((i) => list.push(i.name));

    return list.join("/");
  };

  return (
    <Container picUrl={picUrl} move={move}>
      <>
        <span className="pic" />
        <span className="text">
          <p className="name">{name}</p>
          <p>{author(ar)}</p>
        </span>
      </>
    </Container>
  );
};
