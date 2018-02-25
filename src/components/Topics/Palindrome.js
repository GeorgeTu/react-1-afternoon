import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    }
  }

  updateChange(val) {
    this.setState({ userInput: val });
  }

  checkPal(userInput) {
    let pal = userInput;
    let revPal = userInput;
    revPal = revPal.split("");
    revPal = revPal.reverse();
    revPal = revPal.join("")
    if (pal === revPal) {
      this.setState({ palindrome: "true" })
    } else {
      this.setState({ palindrome: "false" })
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => this.updateChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.checkPal(this.state.userInput)}>Check</button>
        <span className="resultsBox">palindrome:{JSON.stringify(this.state.palindrome)}</span>
      </div>
    )
  }
}

export default Palindrome;