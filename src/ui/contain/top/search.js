import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Input, Span } from "./styled";
import Icon from "../../icon/index";
import search from "../../../api/search";

import { Mycontext } from "../../../assets/global_state";

export default (props) => {
  const { result, setResult } = React.useContext(Mycontext);
  const history = useHistory();
  const ref = React.useRef();
  
  console.log(result);
  return (
    <>
      <Span>
        <Input
          ref={ref}
          placeholder="find music..."
          onChange={(e) => {}}
          onKeyPress={(e) => {
            if (e.charCode == 13) {
              window.location.hash = "search";
              // song(e.target.value).then(res=>setResult(res.songs))
              history.push("/search");
              console.log(ref.current.value)
              search(ref.current.value).then(res=>{
                setResult(res.songs)
              })
              console.log(search(ref.current.value))
            }
          }}
        />
        <Icon name="search" />
      </Span>
    </>
  );
};
