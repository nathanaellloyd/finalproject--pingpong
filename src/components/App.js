import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from "./Home";
import { Setup } from "./Setup";
import Footer from "./Footer";
import Header from "./Header";
import Fixtures from "./Fixtures";
import NamesForm from "./NamesForm"; 

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route exact path="/setup" component={Setup}>
          </Route>
          <Route exact path="/namesform" component={NamesForm}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>

  );
}

export default App;
