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

  console.log(response);

  return response.playlist;
};

export default getAlbum;
