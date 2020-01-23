import React, { Component } from "react";
import { formatPrice } from "../helpers";

class Order extends Component {
  renderOrder = key => {
    const roll = this.props.rolls[key];
    const count = this.props.order[key];
    const isAvailable = roll && roll.status === "available";
    // make sure the rolls are loaded before continuing
    if (!roll) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {roll ? roll.name : "roll"} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {roll.name}
        {formatPrice(count * roll.price)}
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const roll = this.props.rolls[key];
      const count = this.props.order[key];
      const isAvailable = roll && roll.status === "available";
      if (isAvailable) {
        return prevTotal + count * roll.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>

        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
