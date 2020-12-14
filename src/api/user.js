import axios from "../assets/axios";

const getSongs = async (ids) => {
  const response = await axios({
    url: "/song/detail",
    params: {
      ids: ids.join(","),
    },
  });
  return response.songs;
};

const get_user_album = async (uid) => {
  const response = await axios({
    url: '/user/playlist',
    params: {
      uid,
      limit: 20,
    },
  })

  const playlist = response.playlist || []
  const create = playlist.filter(({ creator }) => uid === creator.userId)
  const collect = playlist.filter(({ creator }) => uid !== creator.userId)

  return {
    create,
    collect,
  }
}
export { getSongs, get_user_album };
