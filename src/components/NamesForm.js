import React, { useState } from "react";
import { Link } from 'react-router-dom';
import initial from "../initial";

function NamesForm() {

  // here I'm setting the state for the names array and the pairs array
  const [names, setNames] = useState(initial.names);
  const [name, setName] = useState(initial.name);
  const [pairs, setPairs] = useState([]);

  // here the names are being added to the array once the add button is clicked
  const handleChange = () => {
    setNames(players => players.concat(name))
  }

  // the value in the input field is being used to add to the names array
  const updateList = ({ target }) => {
    // update name onKeyPress of input box
    setName(target.value)
  }

  // sets the input field back to empty
  const submitHandler = e => {
    // prevent form submission on Enter key
    e.preventDefault();
    setName("");
  }

  // clears the state if the user wants to reset 
  const handleReset = () => {
    setNames([]);
    setName("");
    setPairs([]);
  }

  const createTeam = () => {
    // creates a new array for new pairs 
    const newPairs = [];

    // needs atleast 2 players to form a pair
    while (names.length >= 2) {

      // randomises the pairs 
      names.sort(() => 0.5 - Math.random());

      // takes each name and puts them into a pair
      const pair = [names.pop(), names.pop()];

      // saves the current pair
      newPairs.push(pair);

      // logging current pair to check it's worked
      console.log(pair);
    }
    //takes the new pairs and asigns them to the state
    setPairs(newPairs);
  }

  // React components should start with a capital, and html elements start with lowercase  
  // listing new name once added 
  const Players = ({ name }) => <li>{name}</li>

  // listing new pairs once teams are created 
  const ListTeams = ({ pair }) => <table className="fixtureTableWrap"><tbody><tr><td>{pair[0]}</td><td>V</td><td>{pair[1]}</td></tr></tbody></table>

  return (
    <>
      <div className="formBackground">
        <h3 className="setupTitle">Enter Player Names</h3>
        <form className="App" onSubmit={submitHandler}>
          <div className="container" align="center">
            <div className="row">
              <div className="col">
                {/* // needs to be htmlFor otherwise throws an error in the console  */}
                <label className="label" htmlFor="name">Player Name</label>
                <input
                  onChange={updateList}
                  type="text" className="form-control"
                  value={name} />
                {names.length % 2 ? <p className="errorMessage">Please enter an even number of players to continue</p> : null}
                <button className="addButton" onClick={handleChange}>Add</button>
                <button className="resetButton"
                  onClick={handleReset}
                >Reset</button>
                <ul className="namesList">
                  {names.map((name) => (
                    <Players
                      name={name}
                      // prevent duplicate keys by appending index:
                      key={name} />
                  ))}
                </ul>
                <div className="formBackground">
                  <button className="createButton"
                    onClick={createTeam}
                    // disabling button if an uneven number of pairs, or 0 is entered by the user 
                    disabled={!names.length || names.length % 2}>
                    Create Fixtures</button>
                  {/* displays error message if an uneven number of players are added */}
                  <div className="fixtureList">
                    {pairs.map((pair) => (
                      <ListTeams
                        pair={pair}
                        key={pair} />
                    ))}
                  </div>
                  <Link to="/">
                    <button className="homeButton">Back To Start</button>
                  </Link>
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
