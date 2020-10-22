const axios = require("axios");

export default async function get_songs(id) {
  let result = "";
  const music = await axios
    .get(`http://localhost:3000/song/url?id=33894312`)
    .then((res) => {
      // console.log(res.data.data[0]);
      return res.data.data[0];
    });
  return  await music;
}
