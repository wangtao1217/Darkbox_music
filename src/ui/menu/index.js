import React, { useState, useEffect, useContext, useRef } from "react";

import Subitem from "./subitem";
import Item from "./item";
import Menu from "./menu";
import { Div } from "./asset/styles";
import { get_user_album } from "../../api/user";
import { LogContext } from "../../reducer/log";
import { ToggleState, ToggleDispatch } from "../../reducer/toggleState";
import routes from "../../assets/routes";

import useAsyncFn from "../../hooks/useAsyncFn";
import useHover from "../../hooks/useHover";

const Creator = (props) => {
  if (!props) return null;
  return props.map((item, key) => {
    if (item.type === "item") {
      return (
        <Item
          key={key}
          val={item.name}
          index={item.name}
          route={item.route}
          id={item.id}
        />
      );
    } else if (item.type === "sub") {
      return (
        <Subitem key={item.name} val={item.name}>
          {Creator(item.child)}
        </Subitem>
      );
    } else {
      return null;
    }
  });
};

const App = (props) => {
  const hover_ref = useRef();
  const [fit, setFit] = useState(true);
  const [songlistState, getUserSonglistFn] = useAsyncFn(get_user_album);
  const log_state = useContext(LogContext);
  const toggle_state = useContext(ToggleState);
  const toggle_dispatch = useContext(ToggleDispatch);
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
    // console.log(songlistState.value);
    data.push(
      {
        name: "我的歌单",
        type: "sub",
        child: songlistState.value.create.map((item) => {
          return {
            name: item.name,
            type: "item",
            route: routes.album,
            ...item,
          };
        }),
      },
      {
        name: "收藏",
        type: "sub",
        child: songlistState.value.collect.map((item) => {
          return {
            name: item.name,
            type: "item",
            route: routes.album,
            ...item,
          };
        }),
      }
    );
  }

  const show = useHover(hover_ref);
  const handle_fix = () => toggle_dispatch({ type: "FIT" });
  return (
    <Div ref={hover_ref} show={show} fit={toggle_state.fit}>
      <button onClick={handle_fix}>
        {toggle_state.fit ? "float" : "fixed"}
      </button>
      <Menu>{Creator(data)}</Menu>
      {toggle_state.fit ? null : <span></span>}
    </Div>
  );
};

export default App;
