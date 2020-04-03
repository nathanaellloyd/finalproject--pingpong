import React from 'react';

const FixturesList = () => {

    const players = ['John ', 'Jack ', 'Anne ', 'Marry ', 'Mike ', 'Jessica '];

    players.sort(() => 0.5 - Math.random());

    const pairs = [];

    // as we need at least players to form a pair
    while (players.length >= 2) { 

    const pair = [players.pop(), players.pop()];  
    
    // Current pair
    console.log('Single pair', pair);
  
    // Save current pair
    pairs.push(pair);
  }

  console.log('All pairs', pairs);
    return (
        <p>{ pairs }</p>
    );
};

export default FixturesList;