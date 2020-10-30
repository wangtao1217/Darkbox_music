import axios from '../assets/axios';

 const search = async (keywords) => {
  const response = await axios({
        url: '/search',
        params: {
          keywords
        },
  })
  return response.result
}

export default search