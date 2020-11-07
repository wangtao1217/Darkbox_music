import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Input, Span } from "./styled";
import Icon from "../../icon/index";
import search from "../../../api/search";

import { Mycontext } from "../../../assets/global_state";

export default (props) => {
  const { result, setResult } = React.useContext(Mycontext);
  const history = useHistory();
  const ref = React.useRef();
  const [ focus, setFocus ] = useState(false)
  console.log(focus)

  const getSearch = (e) => {
    if (e.charCode == 13) {
      window.location.hash = "search";
      history.push("/search");
      // console.log(ref.current.value)
      search(ref.current.value).then(res=>{
        setResult(res.songs)
      })
      // console.log(search(ref.current.value))
    }
  }
  
  return (
    <>
      <Span focus={focus}>
        <input
          ref={ref}
          placeholder="find music..."
          // onChange={(e) => {}}
          onFocus={(e)=>setFocus(true)}
          onBlur={(e)=>setFocus(false)}
          onKeyPress={(e) => getSearch(e)}
        />
     
        {/* {focus? <span className='input' />:null} */}
        <Icon name="search" />
      </Span>
    </>
  );
};
