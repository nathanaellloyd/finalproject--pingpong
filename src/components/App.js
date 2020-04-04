import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import NamesForm from "./NamesForm.js"; 

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
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>

  );
}

export default App;
