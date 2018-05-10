import React from "react";
import { Switch, Route } from "react-router-dom";
import Discussion from "./discussion";
import Rules from "./rules";

export default function() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Discussion} />
        <Route exact path="/rules" component={Rules} />
      </Switch>
    </div>
  );
}
