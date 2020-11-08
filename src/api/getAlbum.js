import axios from '../assets/axios';

 const getAlbum = async (id) => {
    const response = await axios({
        url: '/playlist/detail',
        params: {
            id
        }
    })
    return response.privileges;
};

export default getAlbum
