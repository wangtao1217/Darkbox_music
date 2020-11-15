import React, { useState, useRef, useContext, useCallback } from "react";

import { login } from "../../api/log";
import Log_Container from "./styles";
import { LogDispatch, LogContext } from "../../reducer/log";

const Log = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const log_state = useContext(LogContext);
  const log_dispatch = useContext(LogDispatch);

  const { show } = log_state;
  console.log(phone);

  const handleLog = async () => {
    const result = await login({ phone, password });
    console.log(result);
    if (result) {
      log_dispatch({
        type: "LOG_IN",
        load: {
          user: { ...result, userId: result.profile.userId },
        },
      });
    }
    log_dispatch({
      type: "SHOW",
    });
  };
  return (
    <Log_Container closed={show}>
      <input
        type="text"
        placeholder="account..."
        value={phone}
        onChange={(el) => setPhone(el.target.value)}
      />
      <input
        type="text"
        className="pass"
        placeholder="passwords..."
        value={password}
        onChange={(el) => setPassword(el.target.value)}
      />
      <span className="hide" />
      <button onClick={handleLog}>{"登录"}</button>
      <span className="close" onClick={() => log_dispatch({ type: "SHOW" })}>
        <i class="fas fa-times"></i>
      </span>
    </Log_Container>
  );
};

export default Log;
