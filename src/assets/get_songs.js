const axios = require("axios");

export default async function get_songs(song_id) {
  const response = await axios.get(`http://localhost:3000/song/url?id=${song_id}`
   ).then((res) => {
    console.log(res)
      return res.data;
    });
  return response
}
