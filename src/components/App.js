import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  render() {
    return (
      <div className="sushi-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Inventory />
        <Order />
      </div>
    );
  }
}

export default App;
