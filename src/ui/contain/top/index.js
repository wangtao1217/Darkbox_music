import React, { useContext } from "react";

import Search from "./search";
import { Top } from "./styled.js";
import Log from "../../log/index";
import { Span } from '../../layout/styles'

import { LogContext, LogDispatch } from "../../../reducer/log";

export default (props) => {
  const log_state = useContext(LogContext);
  const log_dispatch = useContext(LogDispatch);

  const { show, islogged, user } = log_state;
  const {
    avatarUrl,
    city,
    nickname,
    playlistCount,
    vipType,
    userId,
  } = user.profile;

  return (
    <Top url={avatarUrl}>
      <Span>
        <button>{"<"}</button>
        <button>{">"}</button>
      </Span>
      <Span flex={6}>
        <Search />
      </Span>
      {islogged ? (
        <Span>
          <div className="user">
            <p>{nickname}</p>
            <span className="avatar" />
          </div>
        </Span>
      ) : (
        <p className="log_in" onClick={() => log_dispatch({ type: "SHOW" })}>
          {"登录"}
        </p>
      )}
      <Log />
    </Top>
  );
};
