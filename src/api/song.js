import axios from '../assets/axios';

export default async function song(song_id) {
  const response = await axios({
    url: `/song/url?id=${song_id}`,
    // params: {
    //   id: song_id
    // }
  }
   ).then((res) => {
    console.log(res)
      return res;
    });
  return response
}
