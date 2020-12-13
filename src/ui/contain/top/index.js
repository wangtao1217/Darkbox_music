import React, { useContext } from "react";

import Search from "./search";
import { Top } from "./styled.js";
import Log from "../../log/index";

import { LogContext, LogDispatch } from "../../../reducer/log";

export default (props) => {
  const log_state = useContext(LogContext);
  const log_dispatch = useContext(LogDispatch);

  const { show, islogged, user } = log_state;
  const { avatarUrl, city, nickname, playlistCount, vipType, userId } = user.profile;

  console.log(user)
  return (
    <Top url={avatarUrl}>
      <Search />
      {islogged ? (
        <div className="user">
          <span className="avatar"/>
          <p>{nickname}</p>
        </div>
      ) : (
        <p  className="log_in"
            onClick={() => log_dispatch({ type: "SHOW" })}>
          {"登录"}
        </p>
      )}
      <Log />
    </Top>
  );
};
