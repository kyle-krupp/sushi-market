import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    rolls: {},
    order: {}
  };

  addRolls = roll => {
    // 1. Take a copy of the existing state
    const rolls = { ...this.state.rolls };
    // 2. Add our new rolls to that rolls variable
    rolls[`fish${Date.now()}`] = roll;
    // 3. Set the new rolls object to state
    this.setState({ rolls });
  };
  render() {
    return (
      <div className="sushi-of-the-day">
        <div className="menu">
          <Header tagline="Sushi Sunday" age={100} />
        </div>
        <Order />
        <Inventory addRolls={this.addRolls} />
      </div>
    );
  }
}

export default App;
