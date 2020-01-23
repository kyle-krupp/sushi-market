import React, { Component } from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addRolls={this.props.addRolls} />
        <button onClick={this.props.loadSampleRolls}>Load Sample Rolls</button>
      </div>
    );
  }
}

export default Inventory;
