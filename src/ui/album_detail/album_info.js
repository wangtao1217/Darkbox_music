import React, { useRef, useState, useCallback } from "react";

import { del_playList, col_playList } from "../../api/getAlbum";

import { Info_Container } from "./style";
import useHover from "../../hooks/useHover";

import Icon from "../icon/index";

const Album_info = ({ data }) => {
  // console.log(data)
  const pic_ref = useRef();
  const [enter, setEnter] = useState(false);
  const {
    id,
    name,
    description,
    coverImgUrl,
    playCount,
    tags,
    subscribed,
  } = data;


  
  const hovered = useHover(pic_ref);

  console.log(data);
  return (
    <Info_Container hovered={hovered} url={coverImgUrl}>
      <span ref={pic_ref} className="album_pic">
        <span>
          <Icon
            name="like"
            onClick={() => {
              alert("...");
              subscribed ? del_playList(id) : col_playList(id);
            }}
          />
        </span>
      </span>
      <span className="text">
        <p>{name}</p>
      </span>
      <span className="description">
        <p>{description}</p>
      </span>
      <span className="tags">
        {tags?.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </span>
    </Info_Container>
  );
};

export default Album_info;
