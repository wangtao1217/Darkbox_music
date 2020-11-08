import React, { useContext } from "react";
import routes from "../../../assets/routes";

import { LogContext } from "../../../reducer/log";

const useData = () => {
  const logState = useContext(LogContext);

  const data = [{ name: "Discover", type: "item", route: routes.discover }];

  if(logState.islogged){
    const user_data = data;
    // user_data.push()
    return user_data
  }

  return data;
};
export default useData;
