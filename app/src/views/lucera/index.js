import React, { Component } from "react";
class LuceraView extends Component {
  render() {
    const { isActive, children } = this.props;
    return (
      <React.Fragment>
        <div className={isActive ? "d-show" : "d-none"}>{children}</div>
      </React.Fragment>
    );
  }
}
export default LuceraView;
