import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Input, Span } from "./styled";
import Icon from "../../icon/index";
import get_songs from "../../../assets/get_search";

import { Mycontext } from "../../../assets/global_state";

export default (props) => {
  const { result, setResult } = React.useContext(Mycontext);
  const history = useHistory();
  const search = React.useRef();
  
  console.log(result);
  return (
    <>
      <Span>
        <Input
          ref={search}
          placeholder="find music..."
          onChange={(e) => {}}
          onKeyPress={(e) => {
            if (e.charCode == 13) {
              window.location.hash = "search";
              get_songs(e.target.value).then(res=>setResult(res.songs))
              history.push("/search");
            }
          }}
        />
        <Icon name="search" />
      </Span>
    </>
  );
};
