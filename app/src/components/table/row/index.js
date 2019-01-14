import React, { Component } from "react";
import "./row.css";
import Cell from "../cell";
class Row extends Component {
  render() {
    return (
      <div className="col-sm-12">
        <div
          className={
            "row luceraRow row-" +
            this.props.rowIdx +
            " " +
            (parseInt(this.props.rowIdx) % 2 ? "odd-row" : "even-row")
          }
        >
          {this.createCells()}
        </div>
      </div>
    );
  }

  createCells() {
    return this.props.fields.map((field, idx) => {
      return (
        <Cell
          key={"cell-" + field + "-" + idx}
          field={field}
          value={this.props.data[field]}
          width={this.props.colWidth[idx]}
        >
          {this.props.data[field]}
        </Cell>
      );
    });
  }
}
export default Row;
