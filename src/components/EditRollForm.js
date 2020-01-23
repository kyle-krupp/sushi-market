import React from "react";

class EditRollForm extends React.Component {
  handleChange = e => {
    console.log(e.currentTarget.value);
    // update that roll
    // 1. take a copy of the current roll
    const updatedRoll = {
      ...this.props.roll,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateRoll(this.props.index, updatedRoll);
  };
  render() {
    return (
      <div className="sushi-edit">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.props.roll.name}
          name="name"
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.props.roll.price}
          name="price"
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.roll.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.roll.desc}
        />
        <input
          type="image"
          onChange={this.handleChange}
          value={this.props.roll.image}
          name="Image"
        />
      </div>
    );
  }
}

export default EditRollForm;
