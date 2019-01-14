import logo from "../../logo.svg";
import "./dashboard.css";
import React, { Component } from "react";
class DashboardView extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="dashboard">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to luceras Trade React App.</p>
        </div>
      </React.Fragment>
    );
  }
}
export default DashboardView;
