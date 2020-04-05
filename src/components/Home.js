import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div className="bodyHome">
    <h1 className="homepageTitle">Ping Pong Tournament</h1>
    <h3 className="homepageSubTitle">The table tennis tournament generator</h3>
    <div className="beginButton">
      <Link to="/namesform">
        <button className="buttonMain">Begin</button>
      </Link>
    </div>
  </div>
)

export default Home; 
