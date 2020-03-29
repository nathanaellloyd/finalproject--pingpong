import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div class="pagewrapper">
  <div class="homepageBackground">
  <div class="homepageTitleBackground">
    <h1 class="homepageTitle">Ping Pong Tournament</h1>
    <h3 class="homepageTitle">Welcome to the ultimate table tennis tournament generator</h3>
  </div> 
    <Link to="/setup">
      <div class="beginButton">
      <button class="buttonMain">Begin</button>
      </div>
    </Link>
  </div>
  </div>
  )
