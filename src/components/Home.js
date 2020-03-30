import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div class="bodyHome">
    <div class="homepageTitle"> 
    <h1 >Ping Pong Tournament</h1>
    <h3 >The table tennis tournament generator</h3>
  </div>
      <div class="beginButton">
      <Link to="/namesform">
      <button class="buttonMain">Begin</button>
      </Link>
      </div>
  </div>
)
