import React, { useState, useEffect, useContext } from "react";

import Subitem from "./subitem";
import Item from "./item";
import Menu from "./menu";
import useData from "./asset/data";
import Icon from "../icon/index";
import { Div } from "./asset/styles";
import { get_user_album } from "../../api/user";
import { LogContext } from "../../reducer/log";
import routes from "../../assets/routes";

import useAsyncFn from "../../hooks/useAsyncFn";

const Creator = (props) => {
  if (!props) return null;
  return props.map((item, key) => {
    if (item.type === "item") {
      return (
        <Item key={key} val={item.name} index={item.name} route={item.route} id={item.id}/>
      );
    } else if (item.type === "sub") {
      return (
        <Subitem val={item.name} icon={() => <Icon />}>
          {Creator(item.child)}
        </Subitem>
      );
    } else {
      return null;
    }
  });
};

const App = (props) => {
  const [show, setShow] = useState(false);
  const [songlistState, getUserSonglistFn] = useAsyncFn(get_user_album);
  const log_state = useContext(LogContext);
  const { islogged, user } = log_state;

  let data = [
    {
      name: "Home",
      type: "item",
      route: routes.discover,
    },
  ];

  useEffect(() => {
    if (islogged) {
      getUserSonglistFn(user.account.id);
    }
  }, [islogged]);

  if (songlistState.value) {
    console.log(songlistState.value)
    data.push({
      name: "我的歌单",
      type: "sub",
      child: songlistState.value.create.map((item) => {
        return {
          name: item.name,
          type: "item",
          route: routes.album,
          ...item
        };
      }),
    },{
      name: "收藏",
      type: "sub",
      child: songlistState.value.collect.map((item) => {
        return {
          name: item.name,
          type: "item",
          route: routes.album,
          ...item
        };
      }),
    });
  }
  return (
    <Div show={show} onMouseLeave={() => setShow(false)}>
      <Menu>{Creator(data)}</Menu>
      <span  onMouseEnter={() => setShow(true)}></span>
    </Div>
  );
};

export default App;
