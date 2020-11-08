import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { getDiscover } from "../../../api/discover";
import List from "../../table/index";
import Container from "../styles";
import Album_List from "./albumList";
import New_Container from "./new_ongs/index";

const Discover = () => {
  const [data, setData] = useState([{ name: "---", picUrl: null }]);

  useEffect(() => {
    getDiscover().then((res) => setData(res));
  }, []);

  console.log(data);
  return (
    <>
      <Container>
        <New_Container data={data}> {"hello"} </New_Container>
        <section>
          <h1>{"推荐歌单"}</h1>
          <Album_List data={data} />
          <button>{"Get more"}</button>
        </section>
      </Container>
    </>
  );
};

export default Discover;
