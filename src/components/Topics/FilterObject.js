import React, { Component } from 'react';

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          "name": "Bob",
          "job": "farmer",
          "age": 29
        },
        {
          "name": "Billy",
          "age": 25,
          "likes": "sleep"
        },
        {
          "name": "Jo",
          "job": "teacher",
          "likes": "teach"
        }],
      userInput: "",
      filteredArray: []
    }
  }

  updateChange(val) {
    this.setState({ userInput: val });
  }


  filterObj(prop) {
    let people = this.state.unFilteredArray;
    let filteredArray = [];
    for (let i = 0; i < people.length; i++) {
      if (people[i].hasOwnProperty(prop)) {
        filteredArray.push(people[i]);
      }
    }
    this.setState({ filteredArray: filteredArray })
  }


  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">unFilteredArray:{JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine" onChange={(e) => this.updateChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterObj(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">filteredArray:{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}
export default FilterObject;