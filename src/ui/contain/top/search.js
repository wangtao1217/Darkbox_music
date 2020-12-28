import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { Input } from "./styled";
import Icon from "../../icon/index";
import search from "../../../api/search";

import { Mycontext } from "../../../assets/global_state";

export default (props) => {
  const { result, setResult } = useContext(Mycontext);
  const history = useHistory();
  const ref = useRef();
  const [focus, setFocus] = useState(false);

  const getSearch = (e) => {
    if (e.charCode == 13) {
      window.location.hash = "search";
      history.push("/search");
      search(ref.current.value).then((res) => {
        setResult(res.songs);
      });
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    if (!focus) {
      ref.current.value = null;
    }
  }, [focus]);
  return (
    <>
      <Input
        focus={focus}
        ref={ref}
        placeholder="find music..."
        onFocus={(e) => setFocus(true)}
        onBlur={(e) => setFocus(false)}
        onKeyPress={(e) => getSearch(e)}
     />
      
    </>
  ); 
};
