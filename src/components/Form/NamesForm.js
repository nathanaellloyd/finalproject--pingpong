import React, { useState } from "react"

function NamesForm() {

  const [names, setNames] = useState([])
  const [query, setName] = useState("")

  const handleChange = () => {
    setNames(searches => searches.concat(query))
  }

  const updateList = ({ target }) => {
    // Update query onKeyPress of input box
    setName(target.value)
  }

  const submitHandler = e => {
    // Prevent form submission on Enter key
    e.preventDefault()
  }

  const Players = ({ query }) => <li>{query}</li>

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
                  type="text" className="form-control" />
                <button className="addButton" onClick={handleChange} >Add</button>
                <button className="resetButton">Reset</button>
                <div className="App">
                  <ul className="namesList">
                    {names.map((query, i) => (
                      <Players
                        query={query}
                        // Prevent duplicate keys by appending index:
                        key={query + i}
                      />
                    ))}
                  </ul>
                  <div className="shuffleWrap">
                    <button className="shuffleButton" >Shuffle</button>
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
