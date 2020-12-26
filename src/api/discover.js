import axios from '../assets/axios';

const getDiscover = async (limit) => {
    const res = await axios({
        url:'/personalized',
        params: {
            limit
        }})
    // }).then(response=>{
    //     console.log(response)
    //     // console.log(response.data.blocks[5])
    // })

    return res.result
}

export  {getDiscover};