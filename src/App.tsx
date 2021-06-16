import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // @ts-ignore
} from "react-router-dom";
import { Dashboard } from "./Screens";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
