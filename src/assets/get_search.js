import { useContext } from "react";
import { Mycontext } from "./global_state";

const axios = require("axios");

export default  function get_search(val) {
  return new Promise((resolve,reject)=>{
    axios({
        url: `http://localhost:3000/search?keywords=`,
        params: {
          keywords: val,
        },
  })
  .then(res=>resolve(res.data.result))
  .catch(err=>reject(err.data))
  })
}