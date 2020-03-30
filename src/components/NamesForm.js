import React, { Component } from 'react';

class NamesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  render() {
    return (
      
      <div className="formBackground">
        <h3 className="setupTitle">Enter Player Names</h3>
        <form className="App" onSubmit={this.onSubmit}>
          <div class="container" align="center">
            <div class="row">
              <div class="col">
                <label class="label" for="name">Player 1</label>
                <input type="text" class="form-control" value={this.state.term} onChange={this.onChange} placeholder="e.g Nathanael Lloyd"/>
                <button class="shuffleButton">Shuffle</button>
              </div>
            </div>
          </div>
        </form>
        {/* <List items={this.state.items} /> */}
      </div>
    );
  }
}
export default NamesForm;
