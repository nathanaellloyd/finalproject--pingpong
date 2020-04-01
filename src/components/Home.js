import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="bodyHome">
    <div className="homepageTitle"> 
    <h1 >Ping Pong Tournament</h1>
    <h3 >The table tennis tournament generator</h3>
  </div>
      <div className="beginButton">
      <Link to="/namesform">
      <button className="buttonMain">Begin</button>
      </Link>
      </div>
  </div>
)

export default Home; 
