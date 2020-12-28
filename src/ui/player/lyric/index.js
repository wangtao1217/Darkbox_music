import React, { useContext, useState, useEffect, useRef } from "react";

import getLyric from "../../../api/getLyric";
import format_lyric from "./formatLyric";

import { Div } from "./styles";

import { AudioContext } from "../../../reducer/playMusic";

const Lyric = ({ musicId }) => {
  const [lyric, setLyric] = useState([]);
  const [line, setLine] = useState(0);
  const { state } = useContext(AudioContext);
  const lyric_ref = useRef(null);
  const height = 50;

  // console.log(state)
  useEffect(() => {
    if (!musicId) return null;
    getLyric(musicId).then((res) => setLyric(() => format_lyric(res)));
  }, [musicId]);

  useEffect(() => {
    if (state.playing) {
      window.requestAnimationFrame(() => {
        const { time } = state;
        const line_index = lyric.findIndex(([lyr_time, words], index) => {
          const prev_time = index - 1 >= 0 ? lyric[index - 1][0] : lyr_time;
          const next_time =
            index + 1 < lyric.length ? lyric[index + 1][0] : lyr_time;

          if (prev_time <= time && next_time >= time) {
            return true;
          }
        });

        if (line_index > -1) {
          const scroll_top = height * line_index;
          if (lyric_ref.current) {
            lyric_ref.current.scrollTo({ top: scroll_top, behavior: "smooth" });
          }
          setLine(line_index);
        }
      });
    }
  }, [state, lyric]);

  return (
    <Div ref={(ref) => (lyric_ref.current = ref)} height={height}>
      {lyric.length > 0 ? (
        lyric.map(([time, lyr], index) => {
          return (
            <span key={index} className={index === line ? "emphasis" : "null"}>
              <p>{lyr}</p>
            </span>
          );
        })
      ) : (
        <span>
          <h3>{'🎧纯音乐...'}</h3>
        </span>
      )}
    </Div>
  );
};

export default Lyric;
