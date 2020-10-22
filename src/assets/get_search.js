const axios = require("axios");

export default async function get_search(val) {
 
const result = await axios
    .get(`http://localhost:3000/search?keywords=${val}`)
    .then((res) => {
      return res.data;
      // console.log(res.data.result)
    })
    .catch((rej) => {
      return "error";
    });

  return await JSON.parse(JSON.stringify(result))
 
}
