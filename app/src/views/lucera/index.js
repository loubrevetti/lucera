import React, { Component } from "react";
class LuceraView extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={this.props.isActive ? "d-show" : "d-none"}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
export default LuceraView;
