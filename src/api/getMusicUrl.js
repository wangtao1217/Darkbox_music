import axios from '../assets/axios';

// export default async function getMusicUrl(musicId) {
//   const response = await axios({
//     url: '/song/url',
//     params: {
//       id: musicId
//     }
//   }
//    )
//   return response
// }


export default function getMusicUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}