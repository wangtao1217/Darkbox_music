import axios from "../assets/axios";

import { createMusic } from "../assets/createMusic";

const getAlbum = async (id) => {
  const response = await axios({
    url: "/playlist/detail",
    params: {
      id,
    },
  });

  const songs = [];

  // console.log(response);

  return response.playlist;
};

const del_playList = (id) => {
  const response = axios({
    url: "/playlist/subscribe",
    params: {
      id,
      t: 2
    },
  });

};

const col_playList = (id) => {
  const response = axios({
    url: "/playlist/subscribe",
    params: {
      t: 1,
      id,
    },
  });

};

export default getAlbum;
export { del_playList, col_playList }
