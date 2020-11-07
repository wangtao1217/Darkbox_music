import React from "react";
import { Link } from "react-router-dom"

import Album from "./album";
import { Album_Container } from "./style";

function Album_List({ data }) {
    console.log(data)
  return (
    <Album_Container>
      {data.map((item, ket) => {
        return (
          <Link to={'/album'}>
            <Album data={item}/>
          </Link>
        );
      })}
    </Album_Container>
  );
}

export default Album_List;
