import React, { useState } from "react";

import Time from "./range/index";
// import Sound from "./sound/index";
import { Main, Text, TextDiv } from "./styled";
import  Imag  from "../image/main";
import  {Div}  from "../styled";

export default (props) => {
  const [music, setMusic] = useState(12);
  return (
    <Main>
      <Div h="60px" w="60px" display="flex" margin="0 10px 0 0">
        <Imag src="https://images.unsplash.com/photo-1602881917760-7379db593981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" h="40px" />
      </Div>
        <TextDiv>
          <Text size="22px">{"稻香"}</Text>
          <Text size="12px ">{"周杰伦"}</Text>
        </TextDiv>
      <Time music={music} />
      {/* <Sound /> */}
    </Main>
  );
};
