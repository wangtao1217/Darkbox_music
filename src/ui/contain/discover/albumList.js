import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useRouteMatch, useParams } from "react-router-dom";
import Routes from "../../../assets/routes";

import Album from "./album";
import { Album_Container, Span } from "./style";



function Album_List({ data }) {
  const date = new Date()

  return (
    <Album_Container>
      <Span>
        <p>{date.getTime()}</p>
      </Span>
      {data.map((item, key) => {
        return <Album key={key} data={item} />;
      })}
    </Album_Container>
  );
}

export default Album_List;
