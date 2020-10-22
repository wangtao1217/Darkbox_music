import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main, Div } from "./ui/styled";
import Bottom from "./ui/footer/index";
import Menu from "./ui/menu/index";
import { Like, Discover } from "./ui/contain/index";
import Top from "./ui/contain/top/index";
import { Play_list } from "./ui/footer/range/styled";
import Search_reasult from "./ui/contain/search_result";

import { Mycontext, Global } from "../src/assets/global_state.js";

const App = (props) => {
  const source = React.useContext(Mycontext);
  let move = false;
  React.useEffect(() => {
    move = source.move;
    console.log(move);
  }, []);
  console.log(source.move);
  return (
    <Global>
      <Router>
        <Main>
          <Menu />
          <Div w="100%">
          <Top />
          <section>
            <Switch>
              <Route path={"/discover"}>
                <Discover />
              </Route>
              <Route path={"/like"}>
                <Like />
              </Route>
              <Route path={`/search`}>
                <Search_reasult />
              </Route>
            </Switch>
          </section>
          </Div>
        </Main>
        <Bottom />
      </Router>
    </Global>
  );
};

export default App;
