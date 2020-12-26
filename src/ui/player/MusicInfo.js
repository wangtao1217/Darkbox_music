import React, { useState, useCallback } from "react";

import { Container, Span } from "./styled";
import author from "../../helper/author"


export const MusicInfo = ({ name, picUrl, ar, show_lyric  }) => {
  const [loaded, setLoaded] = useState(true);


  return (
    
    <Container picUrl={picUrl} >
      {show_lyric ? null : (
        <>
          <span className="pic" />
          <span className="text">
            <p className="name">{name}</p>
            <p>{author(ar)}</p>
          </span>
        </>
      )}
    </Container>
  );
};
