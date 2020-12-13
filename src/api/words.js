
import axios from '../assets/axios';

 const getSongs = async (id) => {
    const response = await axios({
        url: '/lyric',
        params: { id }
    })
    return response.songs;
};

export default getSongs
