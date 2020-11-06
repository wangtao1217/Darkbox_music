import axios from '../assets/axios';

 const getAlbum = async (id) => {
    const response = await axios({
        url: '/album',
        params: id
    });
    console.log(id)
    console.log(response)
    return response;
};

export default {
    getAlbum
}