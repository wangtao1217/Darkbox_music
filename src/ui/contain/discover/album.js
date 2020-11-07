import React from "react";

import { useHistory } from "react-router-dom";

import { Span } from "./style";

const Album = ({ data }) => {
  const history = useHistory();
  const { picUrl, name } = data;
    console.log(data)
  const handleClick = () => {
      alert('Hello...');
      history.push()
  };

  return (
    <Span onClick={handleClick} url={picUrl}>
      <span className="clip">
        <p>{name}</p>
      </span>
    </Span>
  );
};

export default Album;
