import React from 'react';
import { Link } from 'react-router-dom'; 

const Setup = () => (
    <>
        <div className="formBackground">
        <h3 className="setupTitle">Enter Player Names</h3>
            <div class="container" align="center">
                <div class="row">
                    <div class="col">
                        <label for="name">Player 1</label>
                        <input type="text" class="form-control" placeholder="e.g Nathanael Lloyd"></input>
                    </div>
                    <div class="col">
                        <label for="name">Player 2</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    </div>
                </div>
                <div class="container" align="center">
                <div class="row">
                    <div class="col">
                        <label for="name">Player 3</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="col">
                        <label for="name">Player 4</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    </div>
                </div>
                <div class="container" align="center">
                <div class="row">
                    <div class="col">
                        <label for="name">Player 5</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="col">
                        <label for="name">Player 6</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    </div>
                </div>
                <div class="container" align="center">
                <div class="row">
                    <div class="col">
                        <label for="name">Player 7</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="col">
                        <label for="name">Player 8</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    </div>
                </div>
                <div class="container" align="center">
                <div class="row">
                    <div class="col">
                        <label for="name">Player 9</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="col">
                        <label for="name">Player 10</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    </div>
                </div>
                    <div align="center">
                        <Link to="/fixtures">
                        <button className="shuffleButton" path="/fixtures">Shuffle</button>
                        </Link>
                    </div>
            </div>
    </>
); 

export default Setup; 