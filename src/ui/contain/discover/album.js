import React, { useCallback } from "react";

import { Span } from "./style";
import {
  useHistory,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import Routes from "../../../assets/routes";

const Album = ({ data }) => {
  const { id, name, picUrl } = data;
  const history = useHistory();
  const location = useLocation();

  const handleClick = useCallback(() => {
    history.push(`${Routes.album}/${id}`);
  }, []);

  return (
    <Span  url={picUrl} onClick={handleClick} alt='sss'>
      <span className='card'  />
      <p className='text'>{name}</p>
    </Span>
  );
};

export default Album;
