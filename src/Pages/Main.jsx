import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Train from "./Train";
import Manage from "./Manage";

class Main extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Route path="/" component={Header} />
            <Route path="/" exact component={Home} />
            <Route path="/train">
              <Train />
            </Route>
            <Route path="/manage">
              <Manage />
            </Route>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default Main;
