import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory, useRouteMatch, useParams } from "react-router-dom";
import Routes from "../../../assets/routes";

import Album from "./album";
import { Album_Container, Span } from "./style";
import { ToggleState } from "../../../reducer/toggleState"

function Album_List({ data }) {
  console.log(data);
  const [columns, setColumns] = useState(5);
  const [res, setRes] = useState(null);
  const container_ref = useRef();
  const { fit } = useContext(ToggleState);
  return (
    <Album_Container ref={container_ref} columns={columns} fit={fit}>
      {data.map((item, key) => {
        return <Album key={key} data={item} />;
      })}
    </Album_Container>
  );
}

export default Album_List;
