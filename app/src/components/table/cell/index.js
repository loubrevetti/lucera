import React, { Component } from "react";
import "./cell.css";
class Cell extends Component {
  render() {
    return (
      <div className={"cell col-sm-" + this.props.width}>
        {this.props.children}
      </div>
    );
  }
}
export default Cell;
