import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleRolls from "../sample-rolls";
import Roll from "./Roll";
import base from "../base";

class App extends React.Component {
  state = {
    rolls: {},
    order: {}
  };

  // ===== Lifecycle methods =========//

  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/rolls`, {
      context: this,
      state: "rolls"
    });
  }

  // to prevent memory leaks
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  // === end lifecycle methods === ///

  addRolls = roll => {
    // 1. Take a copy of the existing state
    const rolls = { ...this.state.rolls };
    // 2. Add our new rolls to that rolls variable
    rolls[`fish${Date.now()}`] = roll;
    // 3. Set the new rolls object to state
    this.setState({ rolls });
  };

  updateRoll = (key, updatedRoll) => {
    this.setState({ rolls: sampleRolls });
    // 1. Take a copy of the current state
    const rolls = { ...this.state.rolls };
    // 2. update that state
    rolls[key] = updatedRoll;
    // 3. set that to state
    this.setState({ rolls });
  };

  loadSampleRolls = () => {
    this.setState({ rolls: sampleRolls });
  };

  addToOrder = key => {
    // 1. take a copy of the state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="sushi-of-the-day">
        <div className="menu">
          <Header tagline="Sushi Sunday" age={100} />
          <ul className="rolls">
            {Object.keys(this.state.rolls).map(key => (
              <Roll
                key={key}
                index={key}
                details={this.state.rolls[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order rolls={this.state.rolls} order={this.state.order} />
        <Inventory
          addRolls={this.addRolls}
          updateRoll={this.updateRoll}
          loadSampleRolls={this.loadSampleRolls}
          rolls={this.state.rolls}
        />
      </div>
    );
  }
}

export default App;
