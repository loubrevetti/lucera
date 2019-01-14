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
    const { menuItems, resetMenu, onLoadView } = this.props;
    return Object.keys(menuItems).map((menuItem, idx) => {
      return (
        <li className="NavigationItem nav-item" key={"menu-itm-" + idx}>
          <span
            className={
              "nav-link " +
              (this.state.activeItem === menuItems[menuItem].label && !resetMenu
                ? "itm-active"
                : "")
            }
            onClick={() => {
              this.setNavState({
                activeItem: menuItems[menuItem].label
              });
              return onLoadView(menuItems[menuItem]);
            }}
          >
            {menuItems[menuItem].label}
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
