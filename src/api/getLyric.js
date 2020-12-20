
import axios from '../assets/axios';

 const getLyric = async (id) => {
    const response = await axios({
        url: '/lyric',
        params: { id }
    })
    const lyric = response?.lrc?.lyric
    return lyric;
};

export default getLyric
