import React, { useState } from "react"
import initial from "../../initial"

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
    e.preventDefault()
    setName("");
  }

  const handleReset = () => {
    setNames([]);
    setName("");
  }

  const Players = ({ name }) => <li>{name}</li>

  // function shuffleArray(array) {
  //   let i = array.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }

  return (
    <>
      <div className="formBackground">
        <h3 className="setupTitle">Enter Player Names (4 minimum)</h3>
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
                <div className="App">
                  <ul className="namesList">
                    {names.map((name) => (
                      <Players
                        name={name}
                        // Prevent duplicate keys by appending index:
                        key={name}
                      />
                    ))}
                  </ul>
                  <div className="shuffleWrap">
                    <button className="shuffleButton">Shuffle</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <List items={this.state.items} /> */}
      </div>
    </>
  );
};

export default NamesForm;
