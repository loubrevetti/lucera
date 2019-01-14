import logo from "../../logo.svg";
import React, { Component } from "react";
class DashboardView extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to luceras Trade React App.</p>
      </React.Fragment>
    );
  }
}
export default DashboardView;
