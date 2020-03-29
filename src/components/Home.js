import React from 'react';
import { Link } from 'react-router-dom'; 

export const Home = () => (
          <header className="jumbotron" class="jumbotron col-xs-1" align="center">
            <h1 className="justify-content-md-center">Ping Pong Tournament</h1>
            <h1>Welcome to the table tennis tournament generator</h1>
            <Link to="/setup">
            <button className="btn-primary">Begin</button>
            </Link>
          </header>
)
