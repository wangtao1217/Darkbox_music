import axios from '../assets/axios';

 const getSongs = async (ids) => {
    const response = await axios({
        url: '/song/detail',
        params: {
            ids: ids.join(',')
        }
    })
    return response.songs;
};

export default getSongs
