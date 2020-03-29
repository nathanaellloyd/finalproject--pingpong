import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from "./Home";
import { Setup } from "./Setup";
import { Layout } from "./Layout";
import { NavigationBar } from "./NavigationBar";


function App() {
  return (
    <React.Fragment>
    <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Layout>
            <Route exact path="/setup" component={Setup}>
            </Route>
            </Layout>
          </Switch>
        </Router>
    </React.Fragment>

  );
}

export default App;
