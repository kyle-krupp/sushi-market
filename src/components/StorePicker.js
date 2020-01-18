import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  formInput = React.createRef();

  goToStore = e => {
    // 1. stop form from submitting
    e.preventDefault();
    // 2. get data from the form
    const storeName = this.formInput.current.value;
    // 3. change the page with push state
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          ref={this.formInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
