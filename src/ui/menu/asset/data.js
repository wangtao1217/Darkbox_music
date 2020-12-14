import React, { useContext } from "react";
import routes from "../../../assets/routes";

import { LogContext } from "../../../reducer/log";
import { get_user_album } from "../../../api/user";


const getData = (user) => {
  return get_user_album(user.account.id)

} 
const useData = () => {
  const log_state = useContext(LogContext);
  const { show, islogged, user } = log_state;
  const [ res, setRes ] = React.useState()
  const data = [{ name: "Discover", type: "item", route: routes.discover }];
  if (islogged) {
    console.log(res);
  }

  return data;
};
export default useData;
