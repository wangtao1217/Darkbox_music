import React, { useState, useCallback } from "react";

import { Container, Span } from "./styled";
import author from "../../helper/author"


export const MusicInfo = ({ name, picUrl, ar, show_lyric  }) => {
  const authors = author(ar)
  return (
    
    <Container picUrl={picUrl} >
      {show_lyric ? null : (
        <>
          <img src={picUrl} alt={name}/>
          <span className="text">
            <p className="name">{name}</p>
            <p>{authors}</p>
          </span>
        </>
      )}
    </Container>
  );
};
