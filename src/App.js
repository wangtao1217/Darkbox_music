import React from 'react';
import styled from 'styled-components';

import Bottom from "./ui/bottom/index";


const Container = styled.div`
  height: 100px;
  width: 100vw;
  background-color: red;
`;

const App = props => {
  return (
    <>
      <Bottom/>
    </>
  )
};

export default App;

