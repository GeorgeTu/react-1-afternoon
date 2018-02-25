import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    updateChange(val) {
        this.setState({ userInput: val });
    }

    numEvenOdds(userInput) {
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            } else {
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds });
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={(e) => this.updateChange(e.target.value)} ></input>
            <button className="confirmationButton" onClick={()=>this.numEvenOdds(this.state.userInput)}>Split</button>
            <span className="resultBox">Evens:{JSON.stringify(this.state.evenArray)}</span>
            <span className="resultBox">Odds:{JSON.stringify(this.state.oddArray)}</span>
            </div>
        )     
    }
}

export default EvenAndOdd;