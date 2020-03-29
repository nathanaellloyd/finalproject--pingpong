import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from "./Home";
import { Setup } from "./Setup";

function App() {
  return (
    <React.Fragment> 
        <Router>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/setup" component={Setup}>
            </Route>
          </Switch>
        </Router>
    </React.Fragment>

  );
}

export default App;
