import React, { useState } from "react";
import initial from "../../initial";

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
  }

  const Players = ({ name }) => <li>{name}</li>

  // const handleTeams = () => {
  //   let halfwayThrough = Math.floor(names.length / 2);
  //   setNames({ 
  //      name: "",
  //      names: [],
  //      groupOne: [...names.slice(0, halfwayThrough)],
  //      groupTwo: [...names.slice(halfwayThrough, names.length)]
  //      })
  //   };

  // const shuffle = (players) => {
  //     players.sort(() => Math.random() - 0.5);
  //   }

  // // create a function that shuffles the entered names
  // const handlePairs = () => {

  //   const { names } = setNames;
  //   setNames({
  //       namesShuffled: shuffle(names),
  //     });
  // }

    // // All pairs
    // console.log('All pairs', pairs);

  return (
    <>
      <div className="formBackground">
        <h3 className="setupTitle">Enter 4 Player Names</h3>
        <form className="App" onSubmit={submitHandler}>
          <div className="container" align="center">
            <div className="row">
              <div className="col">
                <label className="label" for="name">Player Name</label>
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
                      {/* <button className="createButton" onClick={handleTeams}>Create Fixtures</button>
                      <button className="shuffleButton" onClick={handlePairs}>Shuffle Tournament</button> */}
                      <ul className="namesList">
                        {/* // new arrays go here
                    {pairs.map((name) => (
                      <Players
                        name={name}
                        // Prevent duplicate keys by appending index:
                        key={name}
                      />
                    ))} */}
                    </ul>
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
