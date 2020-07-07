import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Achievements } from "./pages/Achievements";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Achievements />
      </Route>
      {/* <Route exact path="/new-achievement">
            <NewAchievement />
          </Route> */}
    </Switch>
  </BrowserRouter>
);
