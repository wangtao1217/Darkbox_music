import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {ThemeProvider} from "styled-components";

import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
