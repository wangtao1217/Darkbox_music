import axios from '../assets/axios';

const getDiscover = async () => {
    const res = await axios({
        url:'/personalized',
        params: {
            limit: 20
        }})
    // }).then(response=>{
    //     console.log(response)
    //     // console.log(response.data.blocks[5])
    // })

    return res.result
}

export  {getDiscover};