import React, { useState } from "react";
import initial from "../initial";

function NamesForm() {

  const [names, setNames] = useState(initial.names);
  const [name, setName] = useState(initial.name);

  const handleChange = () => {
    setNames(players => players.concat(name))
  }

  const updateList = ({ target }) => {
    // Update name onKeyPress of input box
    setName(target.value)
  }

  const submitHandler = e => {
    // Prevent form submission on Enter key
    e.preventDefault();
    setName("");
  }

  const handleReset = () => {
    setNames([]);
    setName("");
    setPairs([]);
  }

  const Players = ({ name }) => <li>{name}</li>

  const ListTeams = ({ pair }) => <li>{pair[0]} v {pair[1]}</li>

  const [pairs, setPairs] = useState([]);

  const createTeam = () => {
    const newPairs = [];
    
    // as we need at least players to form a pair
    while (names.length >= 2) {

      names.sort(() => 0.5 - Math.random());

      const pair = [names.pop(), names.pop()];

      // Save current pair
      newPairs.push(pair);

      // Current pair
      console.log('One pair', pair);
    }
    setPairs(newPairs);
  }

  return (
    <>
      <div className="formBackground">
        <h3 className="setupTitle">Enter Player Names</h3>
        <form className="App" onSubmit={submitHandler}>
          <div className="container" align="center">
            <div className="row">
              <div className="col">
               <label className="label" htmlFor="name">Player Name</label>
                <input
                  onChange={updateList}
                  type="text" className="form-control"
                  value={name} />
                <button className="addButton" onClick={handleChange}>Add</button>
                <button className="resetButton"
                  onClick={handleReset}
                >Reset</button>
                <ul className="namesList">
                  {names.map((name) => (
                    <Players
                      name={name}
                      // Prevent duplicate keys by appending index:
                      key={name}
                    />
                  ))}
                </ul>
                <div className="formBackground">
                  <div className="shuffleWrap">
                    <button className="createButton"
                      onClick={createTeam}
                    >Create Fixtures</button>
                    <ul className="namesList">
                      {pairs.map((pair) => (
                        <ListTeams
                          pair={pair}
                          key={pair}
                        />
                      ))}
                    </ul>
                    <button className="homeButton">Back To Start</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NamesForm;
