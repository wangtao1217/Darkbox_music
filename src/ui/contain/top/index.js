import React, { useContext, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";

import Search from "./search";
import { Top } from "./styled.js";
import Log from "../../log/index";
import { Span } from "../../layout/styles";

import { LogContext, LogDispatch } from "../../../reducer/log";
import useHover from "../../../hooks/useHover";
import { logout } from "../../../api/log";

export default (props) => {
  const history = useHistory()
  const user_ref = useRef();
  const log_state = useContext(LogContext);
  const log_dispatch = useContext(LogDispatch);

  const drop = useHover(user_ref);
  const { show, islogged, user } = log_state;
  
  const log_out = useCallback(() => {
    logout();
    log_dispatch({ type: "LOG_OUT" });
  }, []);

  const handle_back = () => history.goBack();
  const handle_forward = () => history.goForward();

  return (
    <Top url={islogged ? user.profile.avatarUrl : null} drop={drop}>
      <Span>
        <button onClick={handle_back}>{"<"}</button>
        <button onClick={handle_forward}>{">"}</button>
      </Span>
      <Span flex={6}>
        <Search />
      </Span>
      {islogged ? (
        <>
          <Span ref={user_ref}>
            <div className="user">
              <span className="avatar" />
              <p>{islogged?user.profile.nickname:null}</p>
              <div className="drop_menu">
                <span onClick={log_out}>退出登录</span>
              </div>
            </div>
          </Span>
        </>
      ) : (
        <p className="log_in" onClick={() => log_dispatch({ type: "SHOW" })}>
          {"登录"}
        </p>
      )}
      <Log />
    </Top>
  );
};
