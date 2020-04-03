import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import NamesForm from "./Form/NamesForm.js"; 
import FixtureList from "./Form/FixtureList"; 

function App() {
 
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/namesform">
             <NamesForm />
          </Route>
          <Route exact path="/fixtures">
            <FixtureList />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>

  );
}

export default App;
