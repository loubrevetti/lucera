import React, { Component } from "react";
import "./App.css";
import LuceraView from "./views/lucera";
import AppNavigation from "./components/navigation";
import DashboardView from "./components/dashboard";
import TableView from "./components/table";

class App extends Component {
  state = {
    appNavigationItems: {
      tableView: { cmp: "Table", label: "view trades in table" },
      chartView: { cmp: "Chart", label: "view trades in chart" }
    },
    activeView: "Dashboard"
  };
  handleView = view => {
    this.setAppState({ activeView: view.cmp });
  };
  setAppState(newState) {
    this.setState(newState);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="col-sm-10 offset-sm-1">
            <div className="row">
              <div className="logo col-sm-3">
                <span
                  onClick={() =>
                    this.handleView({ cmp: "Dashboard", label: "" })
                  }
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/lucera.png"}
                    alt="Welcome to lucera"
                  />
                </span>
              </div>
              <div className="col-sm-9">
                <AppNavigation
                  menuItems={this.state.appNavigationItems}
                  onLoadView={this.handleView}
                  resetMenu={this.state.activeView === "Dashboard"}
                />
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="col-sm-10 offset-sm-1">
            <LuceraView isActive={this.state.activeView === "Dashboard"}>
              <DashboardView />
            </LuceraView>
            <LuceraView isActive={this.state.activeView === "Table"}>
              <TableView />
            </LuceraView>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
