import React from "react";
import "./navigation.css";
class AppNavigation extends React.Component {
  state = {
    activeItem: "none"
  };
  render() {
    return (
      <ul className="AppNavigation nav justify-content-end">
        {this.renderMenu()}
      </ul>
    );
  }
  renderMenu() {
    return Object.keys(this.props.menuItems).map((menuItem, idx) => {
      return (
        <li className="NavigationItem nav-item" key={"menu-itm-" + idx}>
          <span
            className={
              "nav-link " +
              (this.state.activeItem === this.props.menuItems[menuItem].label &&
              !this.props.resetMenu
                ? "itm-active"
                : "")
            }
            onClick={() => {
              this.setNavState({
                activeItem: this.props.menuItems[menuItem].label
              });
              return this.props.onLoadView(this.props.menuItems[menuItem]);
            }}
          >
            {this.props.menuItems[menuItem].label}
          </span>
        </li>
      );
    });
  }
  setNavState(newState) {
    this.setState(newState);
  }
}
export default AppNavigation;
