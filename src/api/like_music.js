import axios from '../assets/axios';

 const like_music = async (id) => {
    const response = await axios({
        url: '/like',
        params: { id }
    })
    console.log(response);
    return response
};

export default like_music
