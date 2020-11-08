import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useRouteMatch, useParams } from "react-router-dom";
import Routes from "../../../assets/routes";

import Album from "./album";
import { Album_Container } from "./style";

function Album_List({ data }) {
  return (
    <Album_Container>
      {data.map((item, key) => {
        return <Album key={key} data={item} />;
      })}
    </Album_Container>
  );
}

export default Album_List;
