import React, { Component } from "react";
import "./column.css";
class Column extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={"column col-sm-" + this.props.colWidth}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
export default Column;
