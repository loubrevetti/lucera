import React, { Component } from "react";
import "./lp.css";
import TableView from "../table";
class LpView extends Component {
  state = {
    lp: "LP0"
  };
  selectLp = e => {
    this.setState({ lp: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-12 filterRow">
            <div className="row">
              <div className="col-sm-4 filterLabel">
                Please filter by limited Partnership:
              </div>
              <div className="col-sm-8">
                <select className="filterBox" onChange={this.selectLp}>
                  <option value="LP0">LP0</option>
                  <option value="LP1">LP1</option>
                  <option value="LP2">LP2</option>
                  <option value="LP3">LP3</option>
                  <option value="LP4">LP4</option>
                  <option value="LP5">LP5</option>
                  <option value="LP6">LP6</option>
                  <option value="LP7">LP7</option>
                  <option value="LP8">LP8</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <TableView
            columns={this.props.columns}
            action={this.props.action}
            filter={this.state.lp}
            scrollDebounce={100}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default LpView;
