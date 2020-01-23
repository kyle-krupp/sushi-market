import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
import EditRollForm from "./EditRollForm";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.rolls).map(key => (
          <EditRollForm
            key={key}
            index={key}
            roll={this.props.rolls[key]}
            updateRoll={this.props.updateRoll}
          />
        ))}
        <AddFishForm addRolls={this.props.addRolls} />
        <button onClick={this.props.loadSampleRolls}>Load Sample Rolls</button>
      </div>
    );
  }
}

export default Inventory;
