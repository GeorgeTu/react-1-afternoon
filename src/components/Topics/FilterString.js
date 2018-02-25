import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "Bob", "Bo", "Curly", "Mike", "Michael", "Chuck", "Peter"
      ],
      userInput: "",
      filteredArray: []
    }
  }

  updateChange(val) {
    this.setState({ userInput: val });
  }

  filterStr(userInput) {
    let people = this.state.unFilteredArray;
    let filteredArray = [];
    for (let i = 0; i < people.length; i++) {
      if (people[i].includes(userInput)) {
        filteredArray.push(people[i]);
      }
    }
    this.setState({ filteredArray: filteredArray })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">unFilteredArray:{JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine" onChange={(e) => this.updateChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterStr(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">filteredArray:{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString;